<html>
  <head>
    <title>СВОЯ ИГРА</title>
    <link href="./node_modules/nes.css/css/nes.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.css">
    <script type="text/javascript" src="node_modules/jquery/dist/jquery.js"></script>
  </head>
  <body>
    <header>
      <table class="header">
        <tr>
          <td style="width: 15%;" class="title">СВОЯ</td>
          <td style="width: 5%;"><a target="_blank" href="https://vk.com/kologermit"><i class="nes-icon vk is-medium"></i></a></td>
          <td style="width: 5%;"><a target="_blank" href="https://github.com/kologermit"><i class="nes-icon github is-medium"></i></a></td>
          <td style="font-size: 180%; width: 20%" align="center" rowspan="2"><button type="button" class="nes-btn is-primary" id="manual">Инструкция</button></td>
          <td style="width: 60%;"></td>
        </tr>
        <tr class="lower_shadow">
          <td style="width: 15%;" class="title">ИГРА</td>
          <!-- <td class="spacer"></td> -->
          <td style="width: 5%;"><a target="_blank" href="https://t.me/kologermit"><i class="nes-icon telegram is-medium"></i></a></td>
          <td style="width: 5%"><a href="mailto:kologermit@gmail.com"><i class="nes-icon google is-medium"></i></a></td>
        </tr>
      </table>
      <dialog id="manual" class="nes-dialog is-rounded">
        <ul>
          <li></li>
        </ul>
        <button class="nes-btn" id="close">Закрыть</button>
      </dialog>
    </header>
    <table align="center" style="width: 60%; height: 50%;" id="main">
      <tr><td style="font-size: 110%; text-align: center;">Две команды, игровое поле и немного эрудиции. Вот, что нужно для СВОЕЙ ИГРЫ!</td></tr>
      <tr><td><button align="center" class="nes-btn is-success" id="start" style="width: 40%; height: 40%; font-size: 180%;">Начнём</button></td></tr>
    </table>
    <table align="center" style="display: none; width: 60%; height: 70%;" id="commands_name">
      <tr>
        <td style="text-align: center; font-size: 110%;" colspan="2">Выберите название своей крутой команде!</td>
      </tr>
      <tr style="height: 60%;">
        <td class="right_shadow">
          <input class="nes-input is-warning" placeholder="Жёлтые" id="first" oninput="div_none_first_name.hide();">
          <div style="display: none;" id="none_first_name">Здесь не заполнено!</div>
        </td>
        <td style="margin: 1em auto; padding: 1em;">
          <input class="nes-input is-error" placeholder="Красные" id="second" oninput="div_none_second_name.hide();">
          <div style="display: none;" id="none_second_name">Здесь не заполнено!</div>
        </td>
      </tr>
      <tr>
        <td colspan="2"><button class="nes-btn is-success" style="font-size: 140%; width: 50%; height: 50%;" id="next">Далее</button></td>
      </tr>
    </table>
    <table align="center" style="display: none; width: 60%; height: 70%;" id="choose_theme">
      <tr><td></td></tr>
    </table>
  </body>
  <script type="text/javascript" src="script.js"></script>
</html>