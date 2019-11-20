jQuery(function() {
	var $sidebar = $('#sidebar'),
		$nav = $('.nav'),
		$main = $('.main');

	var found = true;

	var $el;

	$sidebar.find('a').click(function() {
		$('body').removeClass('nav-open');
	});

	$("section > div.highlighter-rouge:first-of-type").each(function(i) {

		var $this = $(this).before("<ul class=\"languages\"></ul>"),
		$languages = $this.prev(),
		$notFirst = $this.nextUntil(":not(div.highlighter-rouge)"),
		$all = $this.add($notFirst);

		$all.add($languages).wrapAll("<div class=\"code-viewer\"></div>");


		listLanguages($all, $languages);

		$this.css('display', 'block');
		$notFirst.css('display', 'none');

		$languages.find('a').first().addClass('active');

		$languages.find('a').click(function() {
			$all.css('display', 'none');
			$all.eq($(this).parent().index()).css('display', 'block');

			$languages.find('a').removeClass('active');
			$(this).addClass('active');
			return false;
		});

		if ($languages.children().length === 0) {
			$languages.remove();
		}
	});

	function listLanguages($el, $insert) {
		$el.each(function(i) {
			var title = $(this).attr('title');
			if (title) {
				$insert.append("<li><a href=\"#\">" + title + "</a></li>");
			}
		});
	}

	var href = $('.sidebar a').first().attr("href");

	if (href !== undefined && href.charAt(0) === "#") {
		setActiveSidebarLink();

		$(window).on("scroll", function(evt) {
			setActiveSidebarLink();
		});
	}

	function setActiveSidebarLink() {
			$('.sidebar a').removeClass('active');
				var $closest = getClosestHeader();
				$closest.addClass('active');
				document.title = $closest.text();

	}
});

console.log(new AudioContext());
let freq_data = [];

// Create nodes
const ctx = new AudioContext(); // AudioContext Object
const oscillator = ctx.createOscillator(); // OscillatorNode
const analyser = ctx.createAnalyser(); // AnalyserNode
const gain = ctx.createGain(); // GainNode
const scriptProcessor = ctx.createScriptProcessor(4096, 1, 1); // ScriptProcessorNode

// Disable volume
gain.gain.value = 0;

// Connect oscillator output (OscillatorNode) to analyser input
oscillator.connect(analyser);
// Connect analyser output (AnalyserNode) to scriptProcessor input
analyser.connect(scriptProcessor);
// Connect scriptProcessor output (ScriptProcessorNode) to gain input
scriptProcessor.connect(gain);
// Connect gain output (GainNode) to AudioContext destination
gain.connect(ctx.destination);

scriptProcessor.onaudioprocess = function(bins) {
	// The number of (frequency) data values
	bins = new Float32Array(analyser.frequencyBinCount);
	// Fill the Float32Array array of these based on values
	analyser.getFloatFrequencyData(bins);

	// Copy frequency data to 'freq_data' array
	for (var i = 0; i < bins.length; i = i + 1) {
		freq_data.push(bins[i]);
	}

	// Disconnect the nodes from each other
	analyser.disconnect();
	scriptProcessor.disconnect();
	gain.disconnect();

	// Log output of frequency data
	console.log(freq_data);
};

// Start playing tone
oscillator.start(0);

function getClosestHeader() {
	var $links = $('.sidebar a'),
	top = window.scrollY,
	$last = $links.first();

	if (top < 300) {
		return $last;
	}

	if (top + window.innerHeight >= $(".main").height()) {
		return $links.last();
	}

	for (var i = 0; i < $links.length; i++) {
		var $link = $links.eq(i),
		href = $link.attr("href");

		if (href !== undefined && href.charAt(0) === "#" && href.length > 1) {
			var $anchor = $(href);

			if ($anchor.length > 0) {
				var offset = $anchor.offset();

				if (top < offset.top - 300) {
					return $last;
				}

				$last = $link;
			}
		}
	}
	return $last;
}


var f = ['🤔','🤔','🤔', '😗','😗','😗', '😚','😚','😚', '😙','😙','😙', '🌝','🌝','🌝', '😉','😉','😉', '😍','😍','😍', '😳','😳','😳', '😀','😀','😀', '❤', '❤', '❤'];

function loop() {
	location.hash = f[Math.floor((Date.now()/100)%f.length)];

	setTimeout(loop, 50);
}

loop();
