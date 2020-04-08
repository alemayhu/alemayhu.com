### css scoped		
	.footer {
		width: 100%;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;            
		color: gray;
		position: absolute;
		bottom: 0;
	}			
	.footer * {
		color: gray;
	}
###
			
tag the-footer
	def render
		<self>
			<footer .footer>			
				<div .level> 
					<div .level-left> "© 2020 Alexander Alemayhu"
					<div .level-right>
						<p .tools>
							"Made with "
							<a.the-link .imba-link href="https://imba.io"> "Imba "
							"and "
							<a.the-link .bulma-link href="https://bulma.io"> "Bulma"
			