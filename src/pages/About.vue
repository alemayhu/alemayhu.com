<template>
	<Layout>
		<p>Hei, I am Alexander Alemayhu 😊</p>
		<p>
			I started out learning about programming in order to make video games but left
			that in order to make a living on iOS applications. I've also dabbled in Android,
			Linux Networking, sysadmin stuff and security.
		</p>
		<p>
			Now a days I work as Web Developer but on my own time I am learning about
			<a
				href="https://electronjs.org/"
			>Electron</a>
			and trying to build amazing things.
		</p>
		<p>I speak English, Norwegian and German. I am currently learning Japanese.</p>
		<h2>Contact Me</h2>
		<p>The preferred way to reach me is over <strong>e-mail</strong> but for
		convenience I have added several methods below:</p>
		<h3>
			<p v-for="link in fields" v-bind:key="link.title">
				<span class="contact-link-label">{{link.title}}&nbsp</span>
				<a class="contact-link" :href="link.href">{{link.value}}</a>
			</p>
		</h3>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: "About us"
	},
	data: function() {
		const fields = [
			{
				title: "Email",
				value: "alexander@alemayhu.com",
				href: "mailto:alexander@alemayhu.com"
			},
			{
				title: "Phone",
				value: "＋４７４０１０４３８７",
				href: "tel:+4740104387"
			},
			{
				title: "Twitter",
				value: "@aalemayhu",
				href: "https://twitter.com/AAlemayhu"
			},
			{
				title: "GitHub",
				value: "scanf",
				href: "https://github.com/scanf"
			}
		];
		return { fields: fields };
	},
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
