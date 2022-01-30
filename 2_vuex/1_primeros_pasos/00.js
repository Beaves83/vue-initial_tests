Vue.component('titulo', {
  template: //html 
  `
  <div>            
      <h1>numero {{ $store.state.numero }} </h1>
      <hijo></hijo>
  </div>
  `,
  data() {
      return {

      }
  }

} )

Vue.component('hijo', {
  template: //html 
  `
  <div>            
      <button @click="$store.commit('aumentar')"> + </button>
      <h1>numero {{ $store.state.numero }} </h1>
  </div>
  `,
  data() {
      return {
          saludo: 'Hola desde Vue',
      }
  }

} )