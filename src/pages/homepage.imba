let fields = [
		{ title: "📧 Email", value: "alexander@alemayhu.com", href: "mailto:alexander@alemayhu.com"},
		{ title: "📱 Phone", value: "＋４７４０１０４３８７", href: "tel:+4740104387"},
		{ title: "🐦 Twitter", value: "@aalemayhu", href: "https://twitter.com/AAlemayhu"},
		{ title: "👨🏾‍💻 GitHub", value: "aalemayhu", href: "https://github.com/aalemayhu" }
]

let portraits = [
	{ author: "Lasse Rypdal", src: "/assets/portrait_1.jpeg", width: "256px", height: "341.33px" }
	{ author: "Christopher Gulbrandsen", src: "/assets/portrait_2.jpeg", width: "256px", height: "341.33px"}
	{ author: "Per Christian Lind", src: "/assets/portrait_3.jpg", width: "320px", height: 'none'}
	{ author: "Per Christian Lind", src: "/assets/portrait_4.jpg", width: "320px", height: 'none'}
]

tag home-page

	css h2 w: bold  fs: l @sm: 4xl
	css h1 c: #363636 fs: 2rem fw: 600 lh: 1.125 fs: xl @sm: 5xl
	css div max-width: 960px @sm: 960px m: 0 auto
	css p c: #4a4a4a fs: 1.25rem fwe: 400 lh: 1.25 mb: 1.5rem max-width: 640px @md: 768px @lg: 960px

	css body fld: column d: flex h: 100vh ff: Baloo 2, BlinkMacSystemFont, Helvetica Neue, Helvetica

	css a c: blue4 bdm: 1px solid lightgray @hover:lightgray p: 0 0.1rem td: underline

	css .blue-background b: rgb(85, 151, 245)
	css .image br: 0.3rem
	css .box fs: xl fw: bold ls: -0.025rem m: 0.0 p: 0.2rem 1rem c: #1E1D1C bg: #FCF4A7 @hover: green400 td: none
	css .round border-radius: 3px
	css li py: 0.2rem

	prop github_sponsor = 'https://github.com/sponsors/alemayhu/card'

	get portrait
		portraits[Math.floor(Math.random() * portraits.length)]

	<self>
		<section>
			<div>
				<a[td: none m: 0 p: 0] href="/"> <h1> "Alexander Alemayhu's Website"
				<hr>
				<p[mb: 0]> "Hei there 👋🏾 I was born in 🇰🇪Kenya (Nairobi) but now I live in 🇳🇴Norway (Oslo) 🤩"
				<ul[list-style: none d: flex jc: space-between max-width: 480px fld: column ai: center]>
					<li> <span[fs: xl]> "I'm a"
					<li> <a.box.round[bg:#333 c:white] href="https://github.com/aalemayhu"> "Open Source Developer"
					<li> <a.box.round[bg:#6441a5 c:white] href="https://twitch.tv/alemayhu"> "Twitch streamer"
					<li> <a.box.round[bg:#FF0000 c:white] href="https://yt.alemayhu.com"> "Youtuber"
				<p[mt: 0 pt: 0]> "I love learning new things especially about spoken and programming languages. "

				<p> "I have been writing code since 2010 and started working professionally as a developer in 2011."
				<p>					
					"I am learning about web design, teaching, {<a[c:blue4] href="https://imba.io"> "Imba"} and running."
				<div[d: flex m: -.75rem fld: column @sm: row @md: 768px @lg: 960px jc: center]>
					if let portrait = portrait
						<figure[m: 0 auto]>
							<img[w: {portrait.width} h: {portrait.height} m: 1rem 3rem max-width@sm: 258px] .image src=portrait.src alt="x" loading="lazy">									
							<figcaption[ta: center]> "📸 {portrait.author}"
										
					<div[d: block flb: 0 flg: 1 fls: 1 p: .75rem jc: center]>
						<p>
							"You read right, running❣️ More recently I have discovered the joy of running 🏃‍♀️ "
							"The picture is from a fun workout with "
							<a href="https://www.instagram.com/trappefolket/?hl=nb"> "Trappefolket"
							"😁"
						<p>
							"I enjoy live streaming open sources projects on my Twitch Channel. You should check it out 😉"
						<a[bg: purple c: white br: 0.3rem p: 1 3 td: none] href="https://www.twitch.tv/alemayhu"> "alemayhu"
				<p> 
					"I started out learning HTML / Python before moving on to C++ in order to make video games but left that to make a living with iOS applications. "
					"I've also dabbled in Android, Linux Networking, sysadmin stuff and security. "
				<p[fs: xl @sm: 2xl fw: bold ta: center p: 4rem]> "My dream is to build amazing things that provide insane value to many people"

			<section>
				<div>
					<h2> "🕺🏾Passion Projects"
					<p>
						"My coach is training me to run a 10K under 40 minutes. So dreaming about doing a sub40 10k before Christmas hopefully 😅"
					<p>
						"For my coding projects, I am spending a lot of time helping out medicine students to create flashcards better and easier with Anki. "
						"It's really important for me that these tools are affordable to students, so I make them 100% free. No cost to usage for anyone anywhere in the world 🌎! "
						"My most popular project used by medicine students worldwide is:"
					<div[d: flex j: center]>
						<a.box href="https://notion.2anki.net"> "notion2Anki"
			<section[mt: 2rem @md: 1rem]>
				<div>
					<h2[mt: 0]> "🎗Support Me"
					<p> "If you like any of my projects you can support me financially on Patreon and / or GitHub."
					<.has-text-centered>
						<a href="https://patreon.com/alemayhu"> <img src="become_a_patron_button.png">
					<div[my: 2]>
						<iframe[d: none @sm: block] src=github_sponsor title="Sponsor alemayhu" height="225" width="600" style="border: 0;">                            
						<div[mb: 2rem d: inline-block @sm: none]>
							<a[td: none p: 2 bg: #fafbfc border-color: rgba(27,31,35,.15) br: 6px bd: rgba(27, 31, 35, 0.15)] href=github_sponsor> "❤️ Become a GitHub Sponsor"
			<section>
				<div>
					<h2[mt: 0]> "📧 Contact Me"
					<hr>
					<p[pt: 0]> "The preferred way to reach me is over e-mail but for convenience I have added several methods below:"
					for field in fields
						<p>
							field.title + " "
							<a href=field.href> field.value
					<p[bg: yellow400 p: 4 br: 0.3rem d: inline-block]> "Please note that I am not interested in consulting gigs or job offers."	