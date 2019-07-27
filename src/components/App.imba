export tag App

	prop links default: [
		{title: "YouTube",  url: "https://www.youtube.com/channel/UCumJa0eRO9_xtEsoAt3UCkQ"}
		{title: "Email",  url: "mailto:alexander@alemayhu.com"}
		{title: "GitHub",  url: "https://github.com/scanf"} 
		{title: "Twitch",  url: "https://twitch.tv/ccscanf"}
		{title: "Twitter",  url: "https://twitter.com/aalemayhu"}
	]

	def render
		<self>
			<div.header>
				<img src="./logo.png" width=200>
			<div.content>
				<p> "This website is under construction, come back later!"
				<hr>
				<h2> "Useful links"
				<ul> for link in links
					<li>
						<a href="{link:url}"> "{link:title}"