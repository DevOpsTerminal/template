## SIMILAR solution 
Are existing solution with dependencies for JS

## Concept
It'S neccessary to make The Map of solutions which are similar, but are difderents, and what can be good for the frontend in DevOpsTerminal




### Reveal
https://github.com/hakimel/reveal.js

Has no information about solution, just async

Reveal.initialize({
				controls: true,
				progress: true,
				history: true,
				center: true,
				transition: 'slide', // none/fade/slide/convex/concave/zoom
				// Optional reveal.js plugins
				dependencies: [
					{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
					{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
					{ src: 'plugin/zoom-js/zoom.js', async: true },
					{ src: 'plugin/notes/notes.js', async: true }
				]
			});
