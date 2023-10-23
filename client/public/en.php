<html>
  <head>
    <title>JEOPARDY!</title>
    <link href="./css/nes.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.css">
    <script type="text/javascript" src=./js/jquery.js></script>
  </head>
  <body>
    <header style="z-index: 1;">
      <table class="header">
        <tr>
          <td style="width: 15%;" class="title">JEOP</td>
          <td style="width: 5%;"><a target="_blank" href="https://vk.com/kologermit"><i class="nes-icon vk is-medium"></i></a></td>
          <td style="width: 5%;"><a target="_blank" href="https://github.com/kologermit"><i class="nes-icon github is-medium"></i></a></td>
          <td style="font-size: 180%; width: 20%" align="center"><button type="button" class="nes-btn is-primary" id="manual">Instruction</button></td>
          <td style="width: 60%;"></td>
        </tr>
        <tr class="lower_shadow">
          <td style="width: 15%;" class="title">ARDY</td>
          <!-- <td class="spacer"></td> -->
          <td style="width: 5%;"><a target="_blank" href="https://t.me/kologermit"><i class="nes-icon telegram is-medium"></i></a></td>
          <td style="width: 5%"><a href="mailto:kologermit@gmail.com"><i class="nes-icon google is-medium"></i></a></td>
          <td style="width: 20%; font-size: 140%;"><a href="./" class="nes-text is-primary">Russian version</a></td>
        </tr>
      </table>
      <dialog id="manual" class="nes-dialog is-rounded" style="z-index: 2;">
        <ul>
          <li></li>
        </ul>
        <button class="nes-btn is-primary" id="close">Close</button>
      </dialog>
    </header>
    <table align="center" style="width: 60%; height: 50%;" id="main">
      <tr><td style="font-size: 110%; text-align: center;">Two teams, a playing field and a bit of erudition. That's what you need for JEOPARDY!</td></tr>
      <tr><td><button align="center" class="nes-btn is-success" id="start" style="width: 40%; height: 40%; font-size: 180%;">Begin</button></td></tr>
    </table>
    <table align="center" style="display: none; width: 60%; height: 70%;" id="commands_name">
      <tr>
        <td style="text-align: center; font-size: 110%;" colspan="2">Choose the name of your cool team!</td>
      </tr>
      <tr style="height: 60%;">
        <td class="right_shadow">
          <input class="nes-input is-warning" placeholder="Yellow" id="first" oninput="div_none_first_name.hide();">
          <div style="display: none;" id="none_first_name" class="nes-text is-error">It's not filled in here!</div>
        </td>
        <td style="margin: 1em auto; padding: 1em;">
          <input class="nes-input is-error" placeholder="Red" id="second" oninput="div_none_second_name.hide();">
          <div style="display: none;" class="nes-text is-error" id="none_second_name">It's not filled in here!</div>
        </td>
      </tr>
      <tr>
        <td colspan="2"><button class="nes-btn is-success" style="font-size: 140%; width: 50%; height: 50%;" id="next">Next</button></td>
      </tr>
    </table>
    <dialog id="question" class="nes-dialog is-rounded" style="z-index: 2; width: 60%;"></dialog>
    <table align="center" style="display: none; width: 60%; height: 70%;" id="select_theme">
      <tr>
        <td style="text-align: center; font-size: 110%;">Choose a theme for the game!</td>
      </tr>
      <tr><td id="select" class="nes-select"><select></select></td></tr>
      <tr hidden><td class="nes-text is-error">No theme selected!</td></tr>
      <tr><td><button class="nes-btn is-success" style="font-size: 140%; width: 30%; height: 30%;" id="next">Play!</button></td></tr>
    </table>
    <table border="4" align="center" style="display: none; width: 60%; height: 70%; text-align: center;" id="game">
    </table>
    <div id="team_scores" style="display: none; text-align: center; font-size: 120%;" align="center">
      <div id="first" class="nes-text is-warning">Team <team></team>: <score>0</score> points</div>
      <div id="second" class="nes-text is-error">Team <team></team>: <score>0</score> points</div>
      <div id="winner" class="nes-text" style="font-size: 150%;"></div>
    </div>
  </body>
  <script type="text/javascript" src="en_script.js"></script>
</html>