import $ from 'jquery';


//<div class="fullscreen" id="fullscreen">
//<button class="exit-button exit-js">Exit fullscreen</button>
//</div>

// Exit plugin - Scroll into fullscreen

(function () {
	console.log('Fullscreen running fam');

	const selectors = {
		exit: '.exit-js',
		footer: 'footer',
		fullscreen: '.fullscreen'
	}

	const removeExtra = () => {
		$(selectors.footer).remove();
	}

	const addHandlers = () => {

		$(selectors.exit).on('click', () => { 
			$('html').removeClass('fixed');
			$("html, body").animate({ scrollTop: 0 }, "fast");
		});

		var waypoint = new Waypoint({
			element: document.getElementById('fullscreen'),
			handler: function(direction) {

				if(direction === 'down') {
					$('html').addClass('fixed');
				}
			}
		});
	}

	const init = () => {
		if($(selectors.fullscreen).length > 0) {
			removeExtra();
			addHandlers();
		}
	}

	$(function() {
		init();
	})
}());