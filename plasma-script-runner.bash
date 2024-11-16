#!/bin/bash

if [ $# -gt 0 ] ; then
	exec qdbus6 org.kde.plasmashell /PlasmaShell org.kde.PlasmaShell.evaluateScript "$(<$1)"
fi