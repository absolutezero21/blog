<template>
	<div id="main">
		<!-- <v-main> -->
			<router-view></router-view>
		<!-- </v-main> -->
	</div>
</template>
<script>
export default {
	name: 'homeApp',
	data() {
		return {
			
		}
	},
	mounted() {
		this.$store.dispatch('getProductData');
	}
}
</script>