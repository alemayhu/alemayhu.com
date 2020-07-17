let fields = [
		{ title: "📧 Email", value: "alexander@alemayhu.com", href: "mailto:alexander@alemayhu.com"},
		{ title: "📱 Phone", value: "＋４７４０１０４３８７", href: "tel:+4740104387"},
		{ title: "🐦 Twitter", value: "@aalemayhu", href: "https://twitter.com/AAlemayhu"},
		{ title: "👨🏾‍💻 GitHub", value: "scanf", href: "https://github.com/scanf" }
]

tag home-page

	css h2 w: bold  fs: l @sm: 4xl
	css h1 c: #363636 fs: 2rem fw: 600 lh: 1.125 fs: xl @sm: 5xl
	css section p: 3rem 1.5rem flex: 1
	css div max-width: 960px w: 320px @sm: 960px m: 0 auto
	css p c: #4a4a4a fs: 1.25rem fwe: 400 lh: 1.25 mb: 1.5rem max-width: 640px @md: 768px @lg: 960px

	css body fld: column d: flex h: 100vh ff: Baloo 2, BlinkMacSystemFont, Helvetica Neue, Helvetica

	css a bdm: 1px solid lightgray @hover:lightgray p: 0 0.1rem td: underline

	css .blue-background b: rgb(85, 151, 245)
	css .image br: 0.3rem

	<self>
		<section>
			<div>
				<a[td: none m: 0 p: 0] href="/"> <h1> "Alexander Alemayhu's Website"
				<hr>
				<p[mb: 0]> "Hei there 👋🏾 I was born in Kenya (Nairobi) but now I'm a developer living in Norway and work at {<a href="https://scrimba.com"> "Scrimba"}."
				<p[mt: 0 pt: 0]> "I love learning new things especially about spoken and programming languages. "

				<p> "I have been writing code since 2010 and started working professionally as a developer in 2011."
				<p[fs: xl @sm: 2xl fw: bold ta: center p: 4rem]> "My dream is to build amazing things that provide value to many people"
				<p> 
					"I started out learning HTML / Python before moving on to C++ in order to make video games but left that to make a living with iOS applications. "
					"I've also dabbled in Android, Linux Networking, sysadmin stuff and security. "
				<p>					
					"Now a days I work as Web Developer but on my own time I am learning about web design, teaching, Imba and running. "
				<div[d: flex m: -.75rem fld: column @sm: row  max-width: 640px @md: 768px @lg: 960px]>
					<img[w: 256px h: auto m: 1rem 3rem] .image src="/assets/portrait.jpeg">
					<div[d: block flb: 0 flg: 1 fls: 1 p: .75rem]>
						<p>
							"More recently I have discovered the joy of running 🏃‍♀️ "
							"The picture is from a fun workout with "
							<a href="https://www.instagram.com/trappefolket/?hl=nb"> "Trappefolket"
							"😁"
						<p>
							"I enjoy live streaming coding projects on my Twitch Channel {<a href="https://www.twitch.tv/ccscanf"> "ccscanf"}."							
							"You should check it out 😉"							
						<p[mb: 0]> "You can also find me on "
						<ul[mt: 0 list-style: square]>
							<li> <a href="https://dev.to/scanf"> "DEV"
							<li> <a href="https://github.com/scanf"> "GitHub"						
							<li> <a href="https://instagram.com/alexanderalemayhu"> "Instagram"
			<section>
				<div>
					<h2[mt: 0]> "Contact Me"
					<hr>
					<p> "The preferred way to reach me is over e-mail but for convenience I have added several methods below:"
					for field in fields
						<p>
							field.title + " "
							<a href=field.href> field.value
					<p[bg: yellow400 p: 4 br: 0.3rem d: inline-block]> "Please note that I am not interested in consulting gigs or job offers."	