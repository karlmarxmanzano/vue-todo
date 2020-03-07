<template>
    <v-row 
        justify="center"
    >
        <v-dialog 
            v-model="dialog" 
            persistent 
            max-width="600px"
        >
            <template 
                v-slot:activator="{ on }"
            >
                <v-btn
						fixed
						dark
						fab
						bottom
						float
						right
						color="pink"
                        v-on="on"
					>
						<v-icon>mdi-plus</v-icon>
					</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">New Project</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-form ref="form">
                            <v-row>
                                <v-col 
                                    cols="12"
                                >
                                    <v-text-field 
                                        label="Title*" 
                                        required 
                                        v-model="formData.title"
                                        counter
                                        :rules="[rules.required, rules.counter]"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field 
                                        label="Content*" 
                                        required 
                                        v-model="formData.content"
                                        :rules="[rules.required, rules.counter]"
                                    ></v-text-field>
                                </v-col>
                                <v-col 
                                    cols="12"
                                >
                                    <v-menu
                                        ref="menuDueData"
                                    >
                                        <template 
                                            v-slot:activator="{ on }"
                                        >
                                            <v-text-field
                                                :value="dateFormatted"
                                                clearable
                                                prepend-icon="event"
                                                label="Date"
                                                readonly
                                                v-on="on"
                                                :rules="[rules.required]"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker 
                                            v-model="formData.dueDate" 
                                            no-title 
                                            @input="menuDueData = false"
                                        ></v-date-picker>
                                    </v-menu>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-container>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn
                            :loading="loading"
                            :disabled="loading"
                            color="primary"
                            @click="onSubmit"
                        >Save</v-btn>
                    </v-container>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import db from '@/firebase'
    import moment from 'moment'
    
    export default {
        data () {
            return {
                dialog: false,
                loading: false,
                formData: {
                    title: '',
                    content: '',
                    dueDate: new Date().toISOString().substr(0, 10)
                },
                rules: {
                    counter: value => value.length >= 3 || 'Minimum length is 3 characters.',
                    required: value => !!value || 'This field is required.'
                }
            }
        },
        computed: {
            dateFormatted () {
                return this.formData.dueDate ? moment(this.formData.dueDate).format('dddd, MMMM Do YYYY') : ''
            }
        },
        methods: {
            onSubmit () {
                if (this.$refs.form.validate()) {

                    const projectData = {
                        title: this.formData.title,
                        content: this.formData.content,
                        dueDate: this.dateFormatted,
                        person: 'Karl Marx Manzano',
                        status: 'new'
                    }

                    this.loading = true

                    db.collection('projects')
                        .add(projectData)
                        .then(() => {
                            this.loading = false
                            this.dialog = false
                            this.$emit('projectAdded', true)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            }
        }
    }
</script>