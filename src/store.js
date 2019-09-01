import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    AddList(){
      console.log(321)
    }
  },
  actions: {
    FetacList(text){

      fetch("/list").then(data=>{
        data.json().then(res=>{
          console.log(text)
        })
      })
    }
  }
})
