const preencherTabela = () => {

    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(json=> {


      json.forEach(json => {

        json += `<option valule=${estado.sigla}>${estado.nome}</option>`
        
      });


    })
}
preencherTabela()