<template>
  <div class="off-canvas-sidebar">
    <nav class="navbar navbar-primary navbar-transparent navbar-absolute">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">Wize Rocks</a>
        </div>
      </div>
    </nav>
    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page" filter-color="black">
        <!--   you can change the color of the filter page using: data-color="blue | purple | green | orange | red | rose " -->
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                <form method="#" action="#">
                  <div class="card card-login">
                    <div class="card-header text-center" data-background-color="red">
                      <h4 class="card-title">Login</h4>
                    </div>
                    <p class="category text-center">
                      With your Wizeline Account
                    </p>
                    <div class="card-content">
                      <div id="hiw-login-container" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <footer-region />

        <div class="full-page-background" style="background-image: url('/static/img/login.jpeg') "/>
      </div>
    </div>
  </div>
</template>

<script>
import FooterRegion from './regions/Footer'
import { renderLogin } from '../services/auth'
export default {
  components: {
    FooterRegion
  },
  mounted () {
    renderLogin()
  }
}
</script>

<style>
.auth0-lock-header {
  display: none;
}
</style>
