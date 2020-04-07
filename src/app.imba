### css
body {
	background: linear-gradient(rgb(85, 151, 245),white);
	height: 100vh;
}
@media (max-width: 800px) { 
	.image-column, .picture-ref {
		display: none;
	}
 }
###
tag alemayhu-app

	def render
		<self>
			<header .header .container>
			<section .section>
				<div .container>
					<h1 .title .is-1> "Hei, I'm Alexander"
					<div .columns>
						<div .column .image-column>
							<img .image src="assets/portrait.jpeg">
						<div .column>
							<p .subtitle> 
								"I'm a developer living in Norway and work at "
								<a href="https://scrimba.com"> "Scrimba"
								"."
							<p .subtitle>
								"I love learning new things especially spoken and programming languages. "
							<p .subtitle .picture-ref>
								"More recently I have discovered the joy of running 🏃‍♀️ "
								"The picture is from a fun workout with "
								<a href="https://www.instagram.com/trappefolket/?hl=nb"> "Trappefolket"
								"😁"
							<p .subtitle>
								"I enjoy live streaming coding projects on my YouTube Channel "							
								<a href="https://www.youtube.com/channel/UCumJa0eRO9_xtEsoAt3UCkQ"> "WeCode"
								". You should check it out 😉"							
								"You can also find me on "
								<a href="https://dev.to/scanf"> "DEV"
								", "						
								<a href="https://github.com/scanf"> "GitHub"						
								" and "
								<a href="https://instagram.com/alexanderalemayhu"> "Instagram"
								". "
							<p .subtitle>
								"Feel free to email me at "
								<a href="mailto:alexander@alemayhu.com"> "alexander@alemayhu.com"
								"."
			### css scoped
			h1, p, a {
				color: white;
			}
			a {
				border-bottom: 1px solid lightgray;
				padding: 0 0.1rem;
			}
			a:hover {
				background: lightgray;
				padding: 0 0.1rem;
			}
			.footer {
				position: absolute;
				bottom: 0;
				width: 100%;
				padding-top: 0.5rem;
				padding-bottom: 0.5rem;            
				color: gray;
			}			
			.footer * {
				color: gray;
			}
            ###
			<footer .footer>			
				<div .level> 
					<div .level-left> "© 2020 Alexander Alemayhu"
					<div .level-right>
						<p .tools>
							"Made with "
							<a .imba-link href="https://imba.io"> "Imba "
							"and "
							<a .bulma-link href="https://bulma.io"> "Bulma"
