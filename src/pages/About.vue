<template>
	<Layout>
		<p>Hei, I am Alexander Alemayhu. I live in Norway, Oslo.</p>
		<p>
		I have been programming for about 10 years.  I started out
learning Python before moving on to C++ in to make video games but left that in
order to make a living with iOS applications. I've also dabbled in Android,
Linux Networking, sysadmin stuff and security.
		</p>
		<p>
			Now a days I work as Web Developer but on my own time I
am learning about Web Design, teaching, Rust and Imba.  My dream is to build
amazing things that provide people with value.
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
		title: "About Me | Alexander Alemayhu"
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
