<template>
  <div id="app">
<b-container>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#dtt-navbar" aria-controls="dtt-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="dtt-navbar">
        <router-link class="navbar-brand" to="/">Go to home</router-link>
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/random">Go to random</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
</b-container>
  </div>
</template>


<style>
    #app {
        margin-top: 50px;
    }
</style>
