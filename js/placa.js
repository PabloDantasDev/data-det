
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
    document.getElementById('anoo').value = data.Dados.specs.ano_modelo
    document.getElementById('cili').value = data.Dados.specs.caixa_cambio
    document.getElementById('combustivell').value = data.Dados.specs.capacidade_carga
    document.getElementById('corr').value = data.Dados.specs.cor
    document.getElementById('motorr').value = data.Dados.specs.motor
    document.getElementById('nacionalidade').value = data.Dados.specs.nacionalidade
    document.getElementById('municipio').value = data.Dados.specs.municipio
    document.getElementById('ufPlaca').value = data.Dados.specs.uf_placa
    
    puxaParente(data)
    
}



document.querySelector('#ceps').addEventListener('click', puxaModelo())
