<template>
	<v-app>
		<Navbar :showSnackbar="showSnackbar" />
		<v-content>
			<v-container>
				<router-view></router-view>
				<Popup @projectAdded="showSnackbar = $event" />
			</v-container>
		</v-content>
		<!-- <v-footer
		color="indigo"
		app
		>
		<span class="white--text">&copy; 2019</span>
		</v-footer> -->
		<!-- <v-footer
			padless
		>
			<v-row
				justify="center"
				no-gutters
			>
				<v-btn
					v-for="link in links"
					:key="link"
					text
					rounded
					class="my-2"
				>
					{{ link }}
				</v-btn>
				<v-col
					class="py-4 text-uppercase text-center"
					cols="12"
				>
					{{ new Date().getFullYear() }} — <span class="font-weight-light">Vue</span>Todo
				</v-col>
			</v-row>
		</v-footer> -->
	</v-app>
</template>

<script>
	import Navbar from '@/components/Navbar'
	import Popup from '@/components/Popup'

	export default {
		name: 'App',
		data: () => ({
			links: ['home', 'about us', 'team', 'services', 'blog', 'contact us'],
			projectEvent: false,
			showSnackbar: false
		}),
		components: {
			Navbar,
			Popup
		}
	};
</script>
