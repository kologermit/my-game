<?
	$flag = False;
	$v = 0;
	foreach ($_GET as $key => $value) {
		if ($key == "id") {
			$flag = True;
			$v = $value;
		};
	};
	$mysql_host = "database";
	$mysql_user = "kologermit";
	$mysql_password = "password";
	$mysql_database = "mygame";
	$mysql = new mysqli($mysql_host, $mysql_user, $mysql_password);
	$answer = [];
	$res = $mysql->query("SELECT `id`, `name`".($flag ? ", `data`" : "")." FROM `".$mysql_database."`.`themes`".($flag ? " where `id`=".$v : ""));
	$res = $res->fetch_all();
	foreach ($res as $key => $value) {
		$v = ["id" => $value[0], "name" => $value[1]];
		if ($flag) {
			$v["data"] = json_decode($value[2]);
		}
		array_push($answer, $v);
	};
	echo json_encode($answer, 0, 10000);
?>