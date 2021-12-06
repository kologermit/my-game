var dialog_manual = $("dialog#manual");
var button_manual = $("button#manual");
var button_manual_close = $("dialog#manual button#close");
var button_start = $("button#start");
var table_main = $("table#main");
var table_commands_name = $("table#commands_name");
var input_name_first_command = $("table#commands_name input#first");
var input_name_second_command = $("table#commands_name input#second");
var status = "menu";
var button_next_name_command = $("table#commands_name button#next");
var first_name = "Жёлтые";
var second_name  = "Красные";
var div_none_first_name = $("div#none_first_name");
var div_none_second_name = $("div#none_second_name");
var table_choose_theme = $("table#choose_theme");

button_manual.click(function() {
  dialog_manual.show();
});

button_manual_close.click(function() {
  dialog_manual.hide();
});

button_start.click(function() {
  if (status != "menu") {
    return 0;
  }
  table_main.hide();
  status = "create_teams";
  table_commands_name.show();
});

button_next_name_command.click(function(a) {
  if (status != "create_teams") {
    return 0;
  }
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
  status = "choose_theme";
  table_choose_theme.show();
});

