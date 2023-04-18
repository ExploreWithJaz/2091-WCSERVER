<template>
  <div id="app">
    <img class="id" src="./assets/resume-photo.jpg">
    <h1>{{ name }}</h1>
    <h3>Full time Web Developer</h3>
    <profile></profile>
    <career></career>
    <education></education>
    <skill></skill>
  </div>
</template>

<script>
import profile from './profile.vue'
import career from './career.vue'
import education from './education.vue'
import skill from './skill.vue'
export default {
  name: 'app',
  components: {
    profile,
    career,
    education,
    skill
  },
  data () {
    return {
      name: 'Jazper Garcia'
    }
  }
}
</script>
<!-- General -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: left;
  margin: auto;
  width: 60%;
  padding: 30px;  
}
.id {
  max-height: 200px;
  max-width: 200px;
  width: 170px;
  height: 170px;
  float: right;
}
p {
  font-weight: normal;
  line-height: 1.6;
}

/* First Part CSS Start Here */
.first-part {
  border-bottom: solid;
}
ul li {
  padding: 5px 0px 5px 0px;
  list-style-type: none;
}

img.address {
  padding-right: 10px;
}
img.phone {
  padding-right: 10px;
}
img.email {
  padding-right: 10px;
}
/* First Part CSS End Here */

/* Second Part CSS Start Here */
.second-part {
  border-bottom: solid;
}
/* Second Part CSS End Here */

/* Third Part CSS Start Here */
.third-part table {
  border-spacing: 0px;
  border-collapse: collapse;
  table-layout: fixed;
  width:100%;
  padding: 0px 10px 0px 10px;
  border-bottom: solid;
}
h4.title {
  text-decoration: underline;
}
/* Third Part CSS End Here */
</style>
