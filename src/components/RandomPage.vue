/* Displaying API response using a mix of bootstrap classes, bcards, columns bcardimg */
<template>
    <div>
        <div class="mb-3">
            <b-card no-body class="overflow-hidden">
                <b-row no-gutters>
                    <b-col md="3">
                        <b-card-img :src="entry.image_url" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="9">
                        <b-card-body :title="entry.name">
                            <b-card-text>
                                {{ entry.about }}
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </div>
        <div>
            <button type="button" class="btn btn-primary" v-on:click="randomize">I am feeling lucky</button>
        </div>
    </div>
</template>
/* API request using axios */
<script>
import axios from 'axios';

export default {
    name: 'RandomPage',
    data() {
        return {
            entries: [],
            entry: [],
            errors: []
        }
    },
    /* Creating a method to randomize the api response  using js math.random */

    methods: {
        randomize: function() {
            this.entry = this.entries[Math.floor(Math.random() * this.entries.length)];
            axios.get('https://api.jikan.moe/v3/character/' + this.entry.mal_id)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.entry = response.data
                })
        }
    },
    created() {
        axios.get('https://api.jikan.moe/v3/manga/1/characters')
            .then(response => {
                // JSON responses are automatically parsed.
                this.entries = response.data.characters;
                this.randomize();
            })
            .catch(e => {
                this.errors.push(e)
            })


    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>