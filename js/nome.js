



const puxaNome = async () => {

    const nome = document.getElementById('numeroCep').value;


    const url = `https://api-nome.herokuapp.com/cpf/${nome}`;
    const dados = await fetch(url);
    const data = await dados.json();
    console.log(data.Dados)
    document.getElementById('pessoa').value = data.Dados
    puxaParente(data)
    

}



document.querySelector('#ceps').addEventListener('click', puxaNome())