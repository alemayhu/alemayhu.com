<template>
	<div class="layout">
		<header class="header">
			<meta name="Description" content="Products | alemayhu.com">
			<strong>
				<g-link class="site-link" to="/">{{ $static.metaData.siteName }}</g-link>
			</strong>
			<nav class="nav">
				<g-link v-bind:class="[isAbout ? 'active-link' : 'nav-link']" to="/about">About</g-link>
				<g-link v-bind:class="[isProducts ? 'active-link' : 'nav-link']" class="nav__link" to="/products">Products</g-link>
				<select v-on:change="visitPage" v-model="selectedLink">
					<option v-for="item in pages" v-bind:value="item.path" v-bind:key="item.path">{{item.name}}</option>
				</select>
			</nav>
		</header>
		<slot/>
		<footer>
			© Alexander Alemayhu<br> 
		</footer>
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

footer  {
    position: absolute;
    bottom: 0;
    width: 100vw;
    left: 0;
    color: black;
    padding: 1rem;
    margin: 0 1rem 0 0;
	    text-align: center;
}

footer a {
	color: white;
        text-decoration: none;
}

.active-link {
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

.nav-link:hover {
	color: gray;
}

a.site-link {
	color: black;
	text-decoration: none;
	white-space: nowrap;
}

a.site-link {
	font-size: 2em;
}

.nav {
	text-transform: uppercase;
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

	footer {
		display: hidden;
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
			{ name: "Home", path: "/" },
			{ name: "About", path: "/about" },
			{ name: "Products", path: "/products" },
		];
		return {
			isAbout: true,
			isProducts: false,
			isHome: false,
			pages: pages,
			selectedLink: {}
		};
	},
	mounted: function() {
		const path = this.$route.path;
		this.isAbout = path.includes("/about");
		this.isProducts = path.includes("/products");
		this.isHome = path.includes("/");
		this.selectedLink = path;
	},
	methods: {
		visitPage: function() {
		console.log(this.selectedLink)
			this.$router.push({path: this.selectedLink})
		}
	}
};
</script>

<style>
.contact-link-label {
       color: gray;
}
.contact-link {
       color: black;
}
</style>
