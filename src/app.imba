### css
body {
	background: linear-gradient(rgb(85, 151, 245),white);
	height: 100vh;
}
###
tag alemayhu-app

	def render
		<self>
			<section .section>
				<div .container>
					<div .columns>
					<div .column>
						<h1 .title> "Hei, I'm Alexander"
					<div .column>
						<p .subtitle> 
							"I'm a developer living in Norway and work at "
							<a href="https://scrimba.com"> "Scrimba"
							"."
							"You can follow me on "
							<a href="https://dev.to/scanf"> "DEV"
							", "						
							<a href="https://github.com/scanf"> "GitHub"						
							" and "
							<a href="https://alemayhu.com/subscribe"> "YouTube"
							". "
							"This site is still under construction more changes are coming 😉"							
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
