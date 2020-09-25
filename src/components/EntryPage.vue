<template>
  <div>
    <h3>Entry Page</h3>

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



    <b-card-group deck>
      <b-card v-for="item of entries" v-bind:key="item.mal_id" :img-src="item.image_url">
        <router-link :to="{path: '/entry/' + item.mal_id}">
            <b-card-text>{{item.name}}</b-card-text>

        </router-link>
    </b-card>
</b-card-group>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EntryPage',
  data () {
    return {
        entries: [],
        entry: [],
        errors: []
    }
  },
  watch: {
    $route () {
      this.fetchData();
    }
  },
  methods: {
      fetchData: function () {
          axios.get('https://api.jikan.moe/v3/character/' + this.$route.params.id)
          .then(response => {
              // JSON responses are automatically parsed.
              this.entry = response.data
          })
          .catch(e => {
              this.errors.push(e)
          })

          axios.get('https://api.jikan.moe/v3/manga/1/characters')
          .then(response => {
              // JSON responses are automatically parsed.
              this.entries = response.data.characters.filter(character => character.mal_id != this.$route.params.id).slice(0,3)
          })
          .catch(e => {
              this.errors.push(e)
          })
      }
  },
  created () {
    this.fetchData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
