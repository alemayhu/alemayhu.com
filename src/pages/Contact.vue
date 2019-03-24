<template>
	<Layout>
		<h2>
			<p v-for="link in fields" v-bind:key="link.title">
				<span class="contact-link-label">{{link.title}}&nbsp</span>
				<a class="contact-link" href="{link.href}">{{link.value}}</a>
			</p>
		</h2>
	</Layout>
</template>

<script>
export default {
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
	metaInfo: {
		title: "About us"
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
