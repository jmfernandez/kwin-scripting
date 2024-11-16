# kwin-scripting
Both a couple of bash scripts to run both KWin and Plasma scripts, and a KWin script example which moves all the windows from one screen to the next one


## Prerequisites

These bash scripts use qdbus6, which could be named qdbus in your system.

## Limitations

These scripts were designed running against KDE 6.2.2 , so it is not expected they are backward compatible to KDE 5.x.

## Example

```bash
./kwin-script-runner.bash ./screenwindows_movement.js
```
