#!/bin/bash

if [ $# -gt 0 ] ; then
	scriptno="$(qdbus6 org.kde.KWin /Scripting org.kde.kwin.Scripting.loadScript "$(realpath "$1")")"
	if [ -n "$scriptno" ] ; then
		qdbus6 org.kde.KWin /Scripting/Script"${scriptno}" org.kde.kwin.Script.run
		qdbus6 org.kde.KWin /Scripting/Script"${scriptno}" org.kde.kwin.Script.stop
	fi
fi