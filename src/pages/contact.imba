let fields = [
		{ title: "📧Email", value: "alexander@alemayhu.com", href: "mailto:alexander@alemayhu.com"},
		{ title: "📱Phone", value: "＋４７４０１０４３８７", href: "tel:+4740104387"},
		{ title: "🐦Twitter", value: "@aalemayhu", href: "https://twitter.com/AAlemayhu"},
		{ title: "👨🏾‍💻GitHub", value: "scanf", href: "https://github.com/scanf" }
]

tag contact-page
	

	def render
		<self>
			<section .section>
				<div .container>
					<h2 .title .is-2 .has-text-white> "Contact Me"
					<hr>
					<p .subtitle .has-text-white> "The preferred way to reach me is over e-mail but for convenience I have added several methods below:"
					for field in fields
						<p .has-text-white .subtitle>
							field.title + " "
							<a .the-link href=field.href>  field.value							