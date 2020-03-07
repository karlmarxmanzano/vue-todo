<template>
	<div class="dashboard">
		<v-container>
			<v-card
				flat
				class="pa-3"
			>
				<v-row>
					<v-btn text @click="sortBy('title')">
						<v-icon left>folder</v-icon>
						<span caption>Sort by Project Title</span>
					</v-btn>
					<v-btn text @click="sortBy('person')">
						<v-icon left>person</v-icon>
						<span caption>Sort by Person</span>
					</v-btn>

				</v-row>
			</v-card>

			<v-card
				flat
				outlined
				class="pa-3 my-2"
				v-for="(project, index) in projects"
				:key="index"
			>
				<v-row>
					<v-col sm="12" md="6">
						<div class="caption">Project Title</div>
						<div>{{ project.title }}</div>
					</v-col>
					<v-col sm="4" md="2">
						<div class="caption">Person</div>
						<div>{{ project.person }}</div>
					</v-col>
					<v-col sm="4" md="2">
						<div class="caption">Due Date</div>
						<div>{{ project.dueDate }}</div>
					</v-col>
					<v-col sm="4" md="2">
						<!-- <div class="caption">Status</div> -->
						<div class="float-right">
							<v-chip
								class="ma-2 text-uppercase"
								dark
								small
								:class="project.status"
							>
								{{ project.status }}
							</v-chip>
						</div>
					</v-col>
				</v-row>
			</v-card>
			<!-- <v-row>
				<v-col sm="12" md="3" lg="6">
					<v-card
						outlined
					>
						<v-list-item 
							three-line
						>
							<v-list-item-content>
								<div class="overline mb-4">OVERLINE</div>
								<v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
								<v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
							</v-list-item-content>
							<v-list-item-avatar
									tile
									size="80"
									color="grey"
								></v-list-item-avatar>
						</v-list-item>
					</v-card>
				</v-col>
				<v-col sm="12" md="3" lg="6">
					<v-card
						outlined
					>
						<v-list-item 
							three-line
						>
							<v-list-item-content>
								<div class="overline mb-4">OVERLINE</div>
								<v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
								<v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
							</v-list-item-content>
							<v-list-item-avatar
									tile
									size="80"
									color="grey"
								></v-list-item-avatar>
						</v-list-item>
					</v-card>
				</v-col>
				<v-col sm="12" md="3" lg="6">
					<v-card
						outlined
					>
						<v-list-item 
							three-line
						>
							<v-list-item-content>
								<div class="overline mb-4">OVERLINE</div>
								<v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
								<v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
							</v-list-item-content>
							<v-list-item-avatar
									tile
									size="80"
									color="grey"
								></v-list-item-avatar>
						</v-list-item>
					</v-card>
				</v-col>
			</v-row> -->
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
		methods: {
			sortBy (prop) {
				this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
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

<style scoped>
	.done {
		background: green !important;
	}
	.ongoing {
		background: blue !important;
	}
	.pending {
		background: orange !important;
	}
</style>

