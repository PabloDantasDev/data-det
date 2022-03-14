
const puxaPLACA = async () => {

    const nome = document.getElementById('numeroCep').value;


    const url = `https://api-telefone-arkadia.herokuapp.com/cpf/${nome}`;
    const dados = await fetch(url);
    const data = await dados.json();
    console.log(data)
    document.getElementById('chassi').value = data.Dados.chassi
    document.getElementById('prorpiedade').value = data.Dados.owner[0].name
    document.getElementById('cpfPropri').value = data.Dados.owner[0].cpf_cnpj
    puxaParente(data)
    
}



document.querySelector('#ceps').addEventListener('click', puxaPLACA())



const puxaModelo = async () => {

    const nome = document.getElementById('numeroCep').value;


    const url = `https://api-telefone-arkadia.herokuapp.com/cpf/${nome}`;
    const dados = await fetch(url);
    const data = await dados.json();
    console.log(data)
    document.getElementById('model').value = data.Dados.specs.marca_modelo.modelo
    document.getElementById('marca').value = data.Dados.specs.marca_modelo.marca
    document.getElementById('segmento').value = data.Dados.specs.marca_modelo.segmento
    document.getElementById('subSegmento').value = data.Dados.specs.marca_modelo.sub_segmento
    document.getElementById('grupo').value = data.Dados.specs.marca_modelo.grupo
    puxaParente(data)
    
}



document.querySelector('#ceps').addEventListener('click', puxaModelo())
