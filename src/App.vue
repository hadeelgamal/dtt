<template>
    <div id="app">
        <b-container>
            <div>
                <b-jumbotron class="header" bg-variant="info" text-variant="white" header="Explore Naruto World">
                </b-jumbotron>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#dtt-navbar" aria-controls="dtt-navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="dtt-navbar">
                    <router-link class="navbar-brand" to="/">Naruto</router-link>
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/random">I am feeling lucky</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            <!-- route outlet -->
            <!-- component matched by the route will render here -->
            <router-view></router-view>
            <b-card-footer style="height: 5rem;">Naruto 2020</b-card-footer>
        </b-container>
    </div>
</template>
<style>
#app {
    margin-top: 50px;
}
</style>