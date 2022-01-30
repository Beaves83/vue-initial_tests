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
        <button> + </button>
    </div>
    `,
    data() {
        return {
            saludo: 'Hola desde Vue',
        }
    }

} )