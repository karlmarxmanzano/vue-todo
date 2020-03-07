<template>
  <div class="projects">
    <v-container>
		<v-row>
			<v-expansion-panels
				flat
				hover
			>
				<v-expansion-panel
					v-for="(project, index) in myProjects"
					:key="index"
				>
					<v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
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
	import db from '@/firebase'

	export default {
		data () {
			return {
				projects: []
			}
		},
		computed: {
			myProjects () {
				return this.projects.filter(project => {
					return project.person == "Karl Marx Manzano"
				})
			}
		},
		created () {
			db.collection('projects')
				.onSnapshot(res => {
					const changes = res.docChanges()

					changes.forEach(change => {
						if (change.type === 'added') {
							this.projects.push({
								...change.doc.data(),
								id: change.doc.id
							})
						}
					});
				})
		}
	}
</script>
