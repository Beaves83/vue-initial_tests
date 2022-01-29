Vue.component('padre', {
    template: //html 
    `
    <div class="p-5 bg-dark text-white">            
        <h1> Componente padre: {{numeroPadre}} </h1>
        <hijo :numero="numeroPadre"> Componente padre </hijo>
        <button class="btn btn-danger" @click="numeroPadre++"> + </button>
    </div>
    `,
    data() {
        return {
            numeroPadre: 0,    
        }
    }

} )