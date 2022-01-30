Vue.component('padre', {
    template: //html 
    `
    <div class="p-5 bg-dark text-white">            
        <h1> Componente padre: {{numeroPadre}} </h1>
        <button class="btn btn-danger" @click="numeroPadre++"> + </button>
        {{nombrePadre}}
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"> Componente padre </hijo>
        
    </div>
    `,
    data() {
        return {
            numeroPadre: 0,   
            nombrePadre:'', 
        }
    }

} )