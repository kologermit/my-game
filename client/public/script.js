var dialog_manual = $("dialog#manual");
var button_manual = $("button#manual");
var button_manual_close = $("dialog#manual button#close");
var button_start = $("button#start");
var table_main = $("table#main");
var table_commands_name = $("table#commands_name");
var input_name_first_command = $("table#commands_name input#first");
var input_name_second_command = $("table#commands_name input#second");
var button_next_name_command = $("table#commands_name button#next");
var first_name = "Жёлтые";
var second_name  = "Красные";
var div_none_first_name = $("div#none_first_name");
var div_none_second_name = $("div#none_second_name");
var table_select_theme = $("table#select_theme");
var select_theme = $("table#select_theme select");
var themes = []
var theme_id = -1;
var button_next_select_theme = $("table#select_theme button#next");
var table_game = $("table#game");
var answer = [];
var dialog_question = $("dialog#question");
var first_team_score = 0;
var second_team_score = 0;
var div_team_score = $("div#team_scores");
var team_first = $("div#team_scores div#first team");
var score_first = $("div#team_scores div#first score");
var team_second = $("div#team_scores div#second team");
var score_second = $("div#team_scores div#second score");
var div_winner = $("div#team_scores div#winner");

button_manual.click(function() {
  dialog_manual.show();
});

button_manual_close.click(function() {
  dialog_manual.hide();
});

button_start.click(function() {
  table_main.remove();
  table_commands_name.show();
});

button_next_name_command.click(function(a) {
  first_name = input_name_first_command.val();
  second_name = input_name_second_command.val();
  if (first_name == "") {
    div_none_first_name.show();
  };
  if (second_name == "") {
    div_none_second_name.show();
  };
  if (first_name == "" || second_name == "") {
    return 0;
  };
  table_commands_name.remove();
  $.ajax({
    "url": "themes.php",
    "success": function(answer) {
      table_select_theme.show();
      themes = JSON.parse(answer);
      let select_html = "";
      for (i = 0; i < themes.length; i++) {
        select_html += "<option value=\"" + themes[i]["id"] + "\">" + themes[i]["name"] + "</option>";
      };themes
      select_theme.html(select_html);
    }
  });
});
var a = 0;
button_next_select_theme.click(function() {
  theme_id = Number(select_theme.val());
  table_select_theme.remove();
  table_game.show();
  div_team_score.show();
  team_first.html(first_name);
  team_second.html(second_name);
  $.ajax({
    "url": "themes.php",
    "method": "GET",
    "data": {
      "id": theme_id
    },
    "success": function(ans) {
      answer = JSON.parse(ans)[0]["data"];
      table = "";
      height = 0;
      width = 1;
      for (var i in answer) {
        table += "<tr><td class=\"theme\">" + i + "</td>";
        height++;
        width = 0;
        for (var j in answer[i]) {
          table += "<td><button class=\"nes-btn is-success\" style=\"width: 90%; height: 90%;\" value=\"" + j + "\" theme=\"" + i + "\">" + j + "</td>";
          width++;
        };
        table += "</tr>";
      };
      table_game.html(table);
      $("table#game tr").css("height", String(100 / height) + "%");
      $("table#game td#theme").css("width", String(100 / (width + 1) * 2) + "%");
      $("table#game button").click(button_question);
    }
  });
});

var button_answer = function() {
  let team = $(this).attr("id");
  let value = Number($(this).attr("value"));
  if (team == "first") {
    first_team_score += value;
    score_first.empty();
    score_first.html(String(first_team_score));
  }
  else if (team == "second") {
    second_team_score += value;
    console.log(second_team_score);
    score_second.empty();
    score_second.html(String(second_team_score));
  };
  dialog_question.hide();
  if ($("table#game button").length == 0) {
    table_game.remove();
    if (first_team_score == second_team_score) {
      div_winner.addClass("is-primary");
      div_winner.html("Дружеская ничья!");
    }
    else if (first_team_score > second_team_score) {
      div_winner.addClass("is-warning");
      div_winner.html("Выиграла команда " + first_name + "!");
    }
    else {
      div_winner.addClass("is-error");
      div_winner.html("Выиграла команда " + second_name + "!");
    }
  };
};

var button_question = function() {
  let value = $(this).attr("value");
  let theme = $(this).attr("theme");
  $(this).after(value);
  $(this).remove();
  dialog_question.empty();
  let html = "<div class=\"nes-text\">" + theme + ": " + value + " баллов</div><div>" + answer[theme][value].question + 
  "</div><button id=\"answer\" class=\"nes-btn is-primary\">Ответ</button><div id=\"answer\" style=\"display: none;\">" + answer[theme][value].answer + "</div><button value=\"" + value + "\" id=\"first\" class=\"nes-btn is-warning\" style=\"width: 30%; display: none;\">" + first_name + "</button>" +
  "<button value=\"" + value + "\" id=\"second\" style=\"width: 30%; display: none;\" class=\"nes-btn is-error\">" + second_name + "</button><button id=\"close\" class=\"nes-btn is-primary\" style=\"display: none;\">Закрыть</button>";
  dialog_question.html(html);
  $("dialog#question button#answer").click(function() {
    $("dialog#question div#answer").show();
    $("dialog#question button#close").show();
    $("dialog#question button#first").show();
    $("dialog#question button#second").show();
    $(this).remove();
  });
  $("dialog#question button#close").click(button_answer);
  $("dialog#question button#first").click(button_answer);
  $("dialog#question button#second").click(button_answer);
  dialog_question.show();
};