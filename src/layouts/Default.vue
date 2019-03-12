<template>
	<div class="layout">
		<header class="header">
			<meta name="Description" content="Building macOS apps for fun and profit.">
			<strong>
				<g-link class="site-link" to="/">{{ $static.metaData.siteName }}</g-link>
			</strong>
			<nav class="nav">
				<g-link class="nav__link" to="/about">About</g-link>
				<g-link class="nav__link" to="/apps">Apps</g-link>
				<g-link class="nav__link" to="/contact">Contact</g-link>
			</nav>
		</header>
		<slot/>
	</div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
	font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
		"Helvetica Neue", Arial, sans-serif;
	margin: 0;
	padding: 0;
	line-height: 1.5;
}

.layout {
	max-width: 760px;
	margin: 0 auto;
	padding-left: 20px;
	padding-right: 20px;
}

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	height: 80px;
}

a.nav__link {
	margin-left: 20px;
	font-weight: bold;
	color: black;
	text-decoration: none;
}

a.site-link {
	font-size: 2em;
	color: black;
	text-decoration: none;
}

a.nav__link:active {
	border-bottom: 0.4px solid black;
}
</style>
