<template>
  <div>
    <h3>Home Page</h3>

    <div>
        <button type="button" class="btn btn-primary" v-on:click="entries.sort(function(a, b) {return a.name > b.name ? 1 : -1})">Sort asc</button>
        <button type="button" class="btn btn-primary" v-on:click="entries.sort(function(a, b) {return a.name < b.name ? 1 : -1})">Sort desc</button>
    </div>

    <ul>
        <li v-for="entry of entries" v-bind:key="entry.mal_id">
            <router-link :to="{path: '/entry/' + entry.mal_id}">
                <img :src="entry.image_url">
                <strong>{{entry.name}}</strong>
            </router-link>
        </li>
    </ul>
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
