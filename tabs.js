window.onload = function() {
	for(var tablist of document.querySelectorAll('[role="tablist"]')) {
		var tabs = tablist.querySelectorAll('[role="tab"]');

		Array.from(tabs).forEach((tab, index, tabs) => {
			function selectTab(selected, tabs) {
				for (t of tabs) {
					var panel = document.getElementById(t.getAttribute('aria-controls'));

					if(t === selected) {
						t.setAttribute('aria-selected', 'true');
						panel.setAttribute('aria-hidden', 'false');
					}
					else {
						t.setAttribute('aria-selected', 'false');
						panel.setAttribute('aria-hidden', 'true');
					}
				}
			}

			tab.addEventListener('click', event => {
				selectTab(event.target, tabs);
			});

			tab.addEventListener('keydown', event => {
				if (event.key === 'Enter')
					selectTab(event.target, tabs);
			});

			if (index > 0) {
				tab.addEventListener('keydown', event => {
					if(event.key === 'ArrowLeft') {
						let t = tabs[tabs.indexOf(tab) - 1];
						selectTab(t, tabs);
						t.focus();
					}
				});
			}

			if (index < tabs.length - 1) {
				tab.addEventListener('keydown', event => {
					if(event.key === 'ArrowRight') {
						let t = tabs[tabs.indexOf(tab) + 1];
						selectTab(t, tabs);
						t.focus();
					}
				});
			}
		});
	}
}
