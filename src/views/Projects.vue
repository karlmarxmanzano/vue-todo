<template>
  <div class="projects">
    <v-container>
		<v-row>
			<v-expansion-panels
				flat
				hover
			>
				<v-expansion-panel
					v-for="(project, index) in projects"
					:key="index"
				>
					<v-expansion-panel-header>{{ project.name }}</v-expansion-panel-header>
					<v-expansion-panel-content>
						{{ project.dueDate }}
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-row>
	</v-container>
  </div>
</template>

<script>
	export default {
		data () {
			return {
				projects: [
				{
					name: 'First Project',
					person: 'Karl Marx Manzano',
					dueDate: '1st Jan, 2021',
					status: 'done'
				},
				{
					name: 'Second Project',
					person: 'Karl Marx Manzano',
					dueDate: '1st Feb, 2021',
					status: 'ongoing'
				}
			]
			}
		}
	}
</script>
