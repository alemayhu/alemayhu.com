<template>
	<div class="layout">
		<header class="header">
			<meta name="Description" content="Building macOS apps for fun and profit.">
			<strong>
				<g-link class="site-link" to="/">{{ $static.metaData.siteName }}</g-link>
			</strong>
			<nav class="nav">
				<g-link v-bind:class="[isAbout ? 'active-link' : 'nav-link']" to="/about">About</g-link>
				<g-link v-bind:class="[isApps ? 'active-link' : 'nav-link']" class="nav__link" to="/apps">Apps</g-link>
				<g-link
					v-bind:class="[isContact ? 'active-link' : 'nav-link']"
					class="nav__link"
					to="/contact"
				>Contact</g-link>
				<select v-on:change="visitPage" v-model="selectedLink">
					<option v-for="item in pages" v-bind:value="item.path" v-bind:key="item.path">{{item.name}}</option>
				</select>
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

.active-link {
	border-bottom: 0.4px solid black;
	margin-left: 20px;
	font-weight: bold;
	color: black;
	text-decoration: none;
}

.nav-link {
	margin-left: 20px;
	font-weight: bold;
	color: black;
	text-decoration: none;
}

a.site-link {
	color: black;
	text-decoration: none;
	white-space: nowrap;
}

a.site-link {
	font-size: 2em;
}

.nav select {
	display: none;
}

@media (max-width: 600px) {
	a.site-link {
		font-size: 1.5rem;
	}

	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
	}

	.nav a {
		display: none;
	}

	.nav select {
		display: inline;
	}
}

@media (min-width: 1000px) {
	a.site-link {
		font-size: 2em;
	}
}
</style>

<script>
export default {
	data: function() {
		const pages = [
			{ name: "About", path: "/about" },
			{ name: "Apps", path: "/apps" },
			{ name: "Contact", path: "/contact" }
		];
		return {
			isAbout: true,
			isApps: false,
			isContact: false,
			pages: pages,
			selectedLink: {}
		};
	},
	mounted: function() {
		const path = this.$route.path;

		this.isAbout = path.includes("/about");
		this.isApps = path.includes("/apps");
		this.isContact = path.includes("/contact");
	},
	methods: {
		visitPage: function() {
			window.location = this.selectedLink;
		}
	}
};
</script>