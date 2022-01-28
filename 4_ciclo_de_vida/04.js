const app = new Vue({
    el: '#app',
    data: {
      saludo: 'soy ciclo de la vida de vue',
    },
    beforeCreate() {
      /** Antes de crearse vue */
      console.log('beforeCreate');
    },
    created() {
      /** Al crear los métodos, observadores y eventos
       * pero aun no accede al DOM. No se puede acceder al 'el'
       */
      console.log('created');
    },
    beforeMount() {
      /** Se ejecuta antes de insertar el DOM */
      console.log('beforeMount');
    },
    mounted() {
      /** Se ejecuta al insertar el DOM */
      console.log('mounted');
    },
    beforeUpdate() {
      /** Al detectar un cambio  */
      console.log('beforeUpdate');
    },
    updated() {
      /** Al realizar los cambios */
      console.log('updated');
    },
    beforeDestroy() {
      /** Antes de destruir la instancia */
      console.log('beforeDestroy');
    },
    destroyed() {
      /** Se destruye toda la instancia */
      console.log('destroyed');
    },
    methods: {
        destruir() {
          this.$destroy();
        }
    },  
    computed: {
        
    }
})