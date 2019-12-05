var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        aula: 'Front end com js',
        states: [{"id":2,"nome":"Paraná"},
            {"id":3,"nome":"Rio de Janeiro"},{"id":4,"nome":"Bahia"}]
    },
    methods: {
        changeInputValue(event){
        this.message=event.target.value;
        },
        getStates(){
            //this.states=['Paraná','São Paulo']
        }
    },
    created(){
        console.log('criou o componente')
        this.getStates()
    }  
})