



const puxaTelefone = async () => {

    const numero = document.getElementById('numeroTelefone').value;


    const url = `https://api-telefone.herokuapp.com/cpf/${numero}`;
    const dados = await fetch(url);
    const data = await dados.json();
    console.log(data)

    document.getElementById('pessoa').value = data.Dados.association[0].name
    document.getElementById('cpff').value = data.Dados.association[0].cpf_cnpj
    document.getElementById('data').value = data.Dados.association[0].birth

    document.getElementById('pessoa1').value = data.Dados.association[1].name
    document.getElementById('cpff1').value = data.Dados.association[1].cpf_cnpj
    document.getElementById('data1').value = data.Dados.association[1].birth

    document.getElementById('pessoa2').value = data.Dados.association[2].name
    document.getElementById('cpff2').value = data.Dados.association[2].cpf_cnpj
    document.getElementById('data2').value = data.Dados.association[2].birth
   
    

}



document.querySelector('#ceps').addEventListener('click', puxaTelefone())