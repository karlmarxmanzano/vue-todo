<template>
  <div class="team">
	<v-container>
		<v-row>
			<v-col 
				sm="6" 
				md="4"
				lg="3"
				v-for="(person, index) in team"
				:key="index"
			>
				<v-card
					outlined
				>
					<v-list-item 
						three-line
					>
						<v-list-item-content>
							<v-list-item-title>{{ person.name }}</v-list-item-title>
							<v-list-item-subtitle>{{ person.role }}</v-list-item-subtitle>
						</v-list-item-content>
						<v-list-item-avatar
							tile
							size="80"
							color="grey"
						></v-list-item-avatar>
					</v-list-item>
					<v-card-actions>
						<v-btn text>
							<v-icon>message</v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
  </div>
</template>

<script>
	export default {
		data () {
			return {
				team: [
					{ 
						name: 'The Net Ninja', 
						role: 'Web developer' 
					},
					{ 
						name: 'Ryu', 
						role: 'Graphic designer' 
					},
					{ 
						name: 'Chun Li', 
						role: 'Web developer' 
					},
					{ 
						name: 'Gouken', 
						role: 'Social media maverick' 
					},
					{ 
						name: 'Yoshi', 
						role: 'Sales guru'
					}
				]
			}
		}
	}
</script>