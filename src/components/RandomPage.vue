<template>
  <div>
    <h3>Random Page</h3>

    <div>
        <img :src="entry.image_url">
        <strong>{{ entry.name }}</strong>
    </div>

    <div>
        <button type="button" class="btn btn-primary" v-on:click="randomize">Random</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RandomPage',
  data () {
    return {
        entries: [],
        entry: [],
        errors: []
    }
  },
  methods: {
      randomize: function () {
        this.entry = this.entries[Math.floor(Math.random()*this.entries.length)];
      }
  },
  created () {
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
