var app = new Vue({
    el: '#app',
    data: {
        title: 'Meus estados favoritos',
        message: 'Hello Vue!',
        aula: 'Front end com js',
        states: [
            {"id":1,"nome":"Paraná"},
            {"id":2,"nome":"Rio de Janeiro"},
            {"id":3,"nome":"Bahia"},
            {"id":4,"nome":"Santa Catarina"}
        ],
        newState: ' '
    },
    methods: {
        changeInputValue(event){
        this.newState=event.target.value;
        },
        setNewState(event){
            this.newState=event.target.value;
        },
        addStateList(){
            const id=this.states.length;
            this.states.push({
                id: id,
                nome: this.newState
            })
        }
    },
    created(){
        console.log('criou o componente')
        this.getStates()
    }  
})