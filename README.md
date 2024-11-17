# kwin-scripting

Both a couple of bash scripts to run both KDE KWin and KDE Plasma scripts, and a KWin script example which moves all the windows from one screen to the next one.

KDE KWin JS scripts follow next https://zeroxoneafour.github.io/kwin-scripting-docs/workspace.html and https://develop.kde.org/docs/plasma/kwin/api/

Meanwhile, KDE Plasma JS scripts follow next https://develop.kde.org/docs/plasma/scripting/

## Prerequisites

These bash scripts use `qdbus6`, which could be named `qdbus` in your system.

## Limitations

These scripts were designed running against KDE 6.2.2 , so it is not expected they are backward compatible to KDE 5.x.

## Example

```bash
./kwin-script-runner.bash ./screenwindows_movement.js
```
