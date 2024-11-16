if(workspace.screens.length > 1) {
	let screen2windows = {};

	for(const s of workspace.screens) {
		screen2windows[s] = [];
	}

	const current_desktop = workspace.currentDesktop;
	for(const w of workspace.windowList()) {
		for(const d of w.desktops) {
			if(d===current_desktop) {
				screen2windows[w.output].push(w);
				/*
				if(w.desktopWindow || w.dock || w.toolbar || w.menu) {
					print("Irrefutable");
				}
				*/
				break;
			}
		}
	}

	let screen_number = 0;
	for(const s of workspace.screens) {
		screen_number++;
		if(screen_number === workspace.screens.length) {
			screen_number = 0;
		}
		const next_screen = workspace.screens[screen_number];
		for(const w of screen2windows[s]) {
			// console.log("resourceName: ", w.resourceName, "\t\t resourceClass: ", w.resourceClass, "from:", w.output, "to:", next_screen);
			workspace.sendClientToScreen(w, next_screen);
		}
	}
}
