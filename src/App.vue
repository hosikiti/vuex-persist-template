<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <div v-if="nameSaved" class="name-plate">
      Hello! {{ name }}!
      <div>
        <button @click="handleReset">Reset your name</button>
      </div>
    </div>
    <div v-else>
      <div>Your name?</div>
      <input type="text" v-model="name"/>
      <button @click="handleSave">Save</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { appModule } from '@/store'

@Component({
  components: {
  }
})
export default class App extends Vue {
  name = ''
  nameSaved = false

  mounted () {
    this.name = appModule.name
    this.nameSaved = !!this.name
  }

  handleSave () {
    appModule.SET_NAME(this.name)
    alert('Your name is saved! Please try to reload this page!')
  }

  handleReset () {
    appModule.SET_NAME('')
    this.name = ''
    this.nameSaved = false
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.name-plate {
  font-size: 2rem;
}
</style>
