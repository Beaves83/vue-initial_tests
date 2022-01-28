const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola Mundo con Vue',
        frutas: [
            {nombre: 'Manzana', cantidad: 0},
            {nombre: 'Pera', cantidad: 5},
            {nombre: 'Platano', cantidad: 6},
        ],
        nuevaFruta: "",
        total: 0
    },
    methods: {
        agregarFruta () {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            this.nuevaFruta = '';
        }
    },  
    computed: {
        sumarFrutas() {
            this.total = 0;
            for(fruta of this.frutas){
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }
})