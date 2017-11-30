<template>
  <div class="wrapper" v-if="profile">
    <div
      class="sidebar"
      data-active-color="red"
      data-background-color="white"
      data-image="/static/img/sidebar-1.jpg">
      <div class="logo">
        <a class="simple-text logo-mini" href="/">WR</a> <a class="simple-text logo-normal" href="/">Wize Rocks</a>
      </div>
      <div class="sidebar-wrapper">
        <div class="user">
          <div class="photo"><img :src="profile.picture"></div>
          <div class="info">
            <a class="collapsed" data-toggle="collapse" href="#collapseExample"><span>{{ profile.name }} <b class="caret" /></span></a>
            <div class="clearfix" />
            <div class="collapse" id="collapseExample">
              <ul class="nav">
                <li>
                  <a href="#"><span class="sidebar-mini">MP</span> <span class="sidebar-normal">My Profile</span></a>
                </li>
                <li>
                  <a href="#"><span class="sidebar-mini">EP</span> <span class="sidebar-normal">Edit Profile</span></a>
                </li>
                <li>
                  <a href="#"><span class="sidebar-mini">S</span> <span class="sidebar-normal">Settings</span></a>
                </li>
                <li>
                  <a href="#" @click.prevent="logout"><span class="sidebar-mini">E</span> <span class="sidebar-normal">Exit</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul class="nav">
          <li class="active">
            <a href="./dashboard.html"><i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-panel">
      <nav class="navbar navbar-transparent navbar-absolute">
        <div class="container-fluid">
          <div class="navbar-minimize">
            <button class="btn btn-round btn-white btn-fill btn-just-icon" id="minimizeSidebar"><i class="material-icons visible-on-sidebar-regular">more_vert</i> <i class="material-icons visible-on-sidebar-mini">view_list</i></button>
          </div>
          <div class="navbar-header">
            <button class="navbar-toggle" data-toggle="collapse" type="button">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
            <a class="navbar-brand" href="#">Template</a>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a class="dropdown-toggle" data-toggle="dropdown" href="#pablo"><i class="material-icons">dashboard</i>
                  <p class="hidden-lg hidden-md">Dashboard</p>
                </a>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="material-icons">notifications</i> <span class="notification">5</span>
                  <p class="hidden-lg hidden-md">Notifications <b class="caret" /></p>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">Mike John responded to your email</a>
                  </li>
                  <li>
                    <a href="#">You have 5 new tasks</a>
                  </li>
                  <li>
                    <a href="#">You're now friend with Andrew</a>
                  </li>
                  <li>
                    <a href="#">Another Notification</a>
                  </li>
                  <li>
                    <a href="#">Another One</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="dropdown-toggle" data-toggle="dropdown" href="#pablo"><i class="material-icons">person</i>
                  <p class="hidden-lg hidden-md">Profile</p>
                </a>
              </li>
              <li class="separator hidden-lg hidden-md" />
            </ul>
            <form class="navbar-form navbar-right" role="search">
              <div class="form-group form-search is-empty">
                <input class="form-control" placeholder=" Search" type="text"> <span class="material-input" />
              </div>
              <button class="btn btn-white btn-round btn-just-icon" type="submit"><i class="material-icons">search</i><div class="ripple-container" /></button>
            </form>
          </div>
        </div>
      </nav>
      <div class="content">
        <div class="container-fluid">
          <pre>{{ profile }}</pre>
        </div>
      </div>
      <footer-region />
    </div>
  </div>
</template>

<script>
import FooterRegion from './regions/Footer'
import { getProfile, logout } from '../services/auth'
export default {
  components: {
    FooterRegion
  },
  data () {
    return {
      activeColor: ['purple', 'blue', 'green', 'orange', 'red', 'rose'],
      background: ['white', 'black']
    }
  },
  computed: {
    profile: getProfile
  },
  methods: {
    logout
  }
}
</script>
