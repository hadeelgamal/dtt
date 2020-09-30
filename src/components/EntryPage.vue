/* Displaying API response for one entry in boostrap b-cards*/
/* Displaying API response for view more entries in boostrap b-card-group deck */
/* Making all cards clickable and linked to the detail page of each entry */
<template>
    <div>
        <div class="mb-3">
            <b-card no-body class="overflow-hidden">
                <b-row no-gutters>
                    <b-col md="3">
                        <b-card-img :src="entry.image_url" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="7">
                        <b-card-body :title="entry.name">
                            <b-card-text>
                                {{ entry.about }}
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </div>
        <b-card-group deck>
            <router-link v-for="item of entries" v-bind:key="item.mal_id" :to="{path: '/entry/' + item.mal_id}">
                <b-card :img-src="item.image_url">
                    <b-card-text>{{item.name}}</b-card-text>
                </b-card>
            </router-link>
        </b-card-group>
    </div>
</template>
/* API request using axios to generate one entry with the name, picture and about text */
<script>
import axios from 'axios';

export default {
    name: 'EntryPage',
    data() {
        return {
            entries: [],
            entry: [],
            errors: []
        }
    },
    watch: {
        $route() {
            this.fetchData();
        }
    },
    methods: {
        fetchData: function() {
            axios.get('https://api.jikan.moe/v3/character/' + this.$route.params.id)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.entry = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })

            /* API request using axios to generate 3 more entries using js slice() method */

            axios.get('https://api.jikan.moe/v3/manga/1/characters')
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.entries = response.data.characters.filter(character => character.mal_id != this.$route.params.id).slice(0, 3)
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    },
    created() {
        this.fetchData();
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>