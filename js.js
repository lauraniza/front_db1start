const button = document.querySelector('#send-button')
button.addEventListener('click', () => {
    const inputName = document.querySelector('#input-nome');
    const cepValue =  inputName.value;
    fetch(`https://viacep.com.br/ws/${cepValue}/json/`).then(content => content.json()).then(data =>{
        console.log(data)
    })
})
//developer.mozila.org