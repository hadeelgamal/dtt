<template>
  <div>
    <h3>Home Page</h3>

    <div>
        <button type="button" class="btn btn-primary" v-on:click="entries.sort(function(a, b) {return a.name > b.name ? 1 : -1})">Sort asc</button>
        <button type="button" class="btn btn-primary" v-on:click="entries.sort(function(a, b) {return a.name < b.name ? 1 : -1})">Sort desc</button>
    </div>




<b-card-group columns>
      <b-card v-for="entry of entries" col v-bind:key="entry.mal_id" :img-src="entry.image_url">
        <router-link :to="{path: '/entry/' + entry.mal_id}">
            <b-card-text>{{entry.name}}</b-card-text>

        </router-link>
    </b-card>
</b-card-group>

    
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LandingPage',
    data () {
      return {
          entries: [],
          errors: []
      }
    },
    created () {
        axios.get('https://api.jikan.moe/v3/manga/1/characters')
        .then(response => {
            // JSON responses are automatically parsed.
            this.entries = response.data.characters.slice(0, 10)
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
