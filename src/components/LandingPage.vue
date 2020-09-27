<template>
  <div>
    <h3>Home Page</h3>

    <div class="h2 mb-0 ic-pos">
        <b-icon-arrow-up  v-on:click="entries.sort(function(a, b) {return a.name > b.name ? 1 : -1})"></b-icon-arrow-up>
        
        <b-icon-arrow-down v-on:click="entries.sort(function(a, b) {return a.name < b.name ? 1 : -1})"></b-icon-arrow-down>
      
    </div>


<b-card-group columns>
      
        <router-link  v-for="entry of entries" col v-bind:key="entry.mal_id" :to="{path: '/entry/' + entry.mal_id}">
        <b-card :img-src="entry.image_url">
          
            <b-card-text>{{entry.name}}</b-card-text>

        </b-card>
        </router-link>
    
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
