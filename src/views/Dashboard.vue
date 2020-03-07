<template>
	<div class="dashboard">
		<v-container>
			<v-card
				flat
				class="pa-3"
			>
				<v-row>
					<v-btn text @click="sortBy('name')">
						<v-icon left>folder</v-icon>
						<span caption>Sort by Project Name</span>
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
						<div>{{ project.name }}</div>
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
				},
				{
					name: 'Third Project',
					person: 'Jemimah Manzano',
					dueDate: '1st Mar, 2021',
					status: 'pending'
				},
				{
					name: 'Fourth Project',
					person: 'Caleb Manzano',
					dueDate: '1st Apr, 2021',
					status: 'pending'
				},
			]
		}
	},
	methods: {
		sortBy (prop) {
			this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
		}
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