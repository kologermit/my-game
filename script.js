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

button_manual.click(function() {
  dialog_manual.show();
});

button_manual_close.click(function() {
  dialog_manual.hide();
});

button_start.click(function() {
  table_main.hide();
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
  table_commands_name.hide();
  $.ajax({
    "url": "themes.php",
    "success": function(answer) {
      table_select_theme.show();
      themes = JSON.parse(answer);
      let select_html = "";
      for (i = 0; i < themes.length; i++) {
        select_html += "<option value=\"" + themes[i]["id"] + "\">" + themes[i]["name"] + "</option>";
      };
      select_theme.html(select_html);
    }
  });
});

button_next_select_theme.click(function() {
  theme_id = Number(select_theme.val());
  table_select_theme.hide();
  $.ajax({
    "url": "themes.php",
    "method": "GET",
    "data": {
      "id": theme_id
    },
    "success": function(answer) {
      answer = JSON.parse(answer);
      console.log(answer);
    }
  });
});