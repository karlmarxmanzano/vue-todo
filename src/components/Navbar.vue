<template>
    <v-card>
        <v-navigation-drawer
            v-model="drawer"
            class="primary"
            dark
            app
        >
            <v-list flat>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Karl Marx Manzano</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item-group>
                    <v-list-item 
                        v-for="(link, index) in links" 
                        :key="index" 
                        router 
                        :to="link.route"
                    >
                       <v-list-item-icon>
                           <v-icon>{{ link.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ link.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app
            flat
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">Vue</span>
                <span>Todo</span>
            </v-toolbar-title>
            
            <v-spacer></v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn
                        text
                        v-on="on"
                    >
                        Dropdown
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title>Menu 1</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>

            <v-btn icon>
                <v-icon>exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                drawer: true,
                links: [
                    {
                        'icon': 'dashboard',
                        'text': 'Dashboard',
                        'route': '/'
                    },
                    {
                        'icon': 'folder',
                        'text': 'My Projects',
                        'route': '/projects'
                    },
                    {
                        'icon': 'person',
                        'text': 'Team',
                        'route': '/team'
                    },
                ]
            }
        },
        components: {
            
        }
    }
</script>