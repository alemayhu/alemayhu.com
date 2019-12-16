<template>
  <Layout>
    <h2>
      <p class="placeholder-apps">Stay tuned!</p>
    </h2>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Products | alemayhu.com"
  },
	mounted() {
		let emailSignup = document.createElement('script')
		emailSignup.setAttribute('src', 'https://alemayhu.ck.page/8357068a71/index.js')
		emailSignup.setAttribute('data-uid', '8357068a71')
		document.body.appendChild(emailSignup)
	}
};
</script>

<style>
.placeholder-apps {
  color: gray;
}
.contact-link {
  color: black;
}

form {
	margin: 10rem;
}
</style>
