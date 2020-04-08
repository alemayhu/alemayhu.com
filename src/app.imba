import {THE_MESSAGE} from './message'

import './pages/homepage'
import './pages/about'
import './pages/contact'

import './components/footer'

### css
.blue-background {
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

	def currentPage
		const pathname = window.location.pathname
		if pathname == '/contact'
			<contact-page>
		elif pathname == '/about'
			<about-page>
		else
			<home-page>

	def clickedMenuItem e
		self.isActive = !self.isActive
		console.log(self.isActive)
		console.log('e', e)
		e.preventDefault()

	def render
		<self>
			<header .header>		

				<nav .navbar .container .is-fixed-top>
					<div .navbar-brand>
						<a .navbar-item href="/"> "Alemayhu"
						<div role="button" .navbar-burger aria-label="menu" aria-expanded="false" :click.clickedMenuItem($)>
							<span aria-hidden="true">
							<span aria-hidden="true">
							<span aria-hidden="true">
					<div .navbar-menu .is-active=isActive>
						<div .navbar-end>
							if window.location.pathname != '/'
								<div .navbar-item>
									<a .navbar-item href="/"> "Home"
							<div .navbar-item>
								<a .navbar-item href="/about"> "About"
							<div .navbar-item>
								<a .navbar-item href="/contact"> "Contact"
			currentPage!
			<the-footer>