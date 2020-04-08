import {THE_MESSAGE} from './message'

import './pages/homepage'

import './components/footer'

### css
html, body {
	background: rgb(85, 151, 245);
}
body {
	height: 100vh;
}
@media (max-width: 800px) { 
	.image-column, .picture-ref {
		display: none;
	}
 }


a.the-link {
	border-bottom: 1px solid lightgray;
	padding: 0 0.1rem;
}
a.the-link:hover {
	background: lightgray;
	padding: 0 0.1rem;
}
###
tag alemayhu-app

	def mount
		console.log(THE_MESSAGE)

	def render
		<self>
			<header .header>
				<nav .navbar>
					<div .navbar-brand .container>
						<a .navbar-item href="https://alemayhu.com/"> "Alemayhu"
					<div .navbar-item>
						<a .navbar-item href="/about"> "About"
					<div .navbar-item>
						<a .navbar-item href="/contact"> "Contact"
			<home-page>
			<the-footer>		