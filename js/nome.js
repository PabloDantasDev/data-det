



async function puxaNome() {

    const nome = document.getElementById('numeroCep').value;


    const url = `https://api-nome.herokuapp.com/cpf/${nome}`;
    const dados = await fetch(url);
    const data = await dados.json();
    console.log(data);



    document.getElementById('pessoa0').value = data.Dados[0].Nome;
    document.getElementById('cpf0').value = data.Dados[0].Cpf;
    document.getElementById('data0').value = data.Dados[0].Nascimento;

    document.getElementById('pessoa01').value = data.Dados[1].Nome;
    document.getElementById('cpf01').value = data.Dados[1].Cpf;
    document.getElementById('data01').value = data.Dados[1].Nascimento;

    document.getElementById('pessoa02').value = data.Dados[2].Nome;
    document.getElementById('cpf02').value = data.Dados[2].Cpf;
    document.getElementById('data02').value = data.Dados[2].Nascimento;

    document.getElementById('pessoa03').value = data.Dados[3].Nome;
    document.getElementById('cpf03').value = data.Dados[3].Cpf;
    document.getElementById('data03').value = data.Dados[3].Nascimento;

    document.getElementById('pessoa04').value = data.Dados[4].Nome;
    document.getElementById('cpf04').value = data.Dados[4].Cpf;
    document.getElementById('data04').value = data.Dados[4].Nascimento;

    document.getElementById('pessoa05').value = data.Dados[5].Nome;
    document.getElementById('cpf05').value = data.Dados[5].Cpf;
    document.getElementById('data05').value = data.Dados[5].Nascimento;

    document.getElementById('pessoa06').value = data.Dados[6].Nome;
    document.getElementById('cpf06').value = data.Dados[6].Cpf;
    document.getElementById('data06').value = data.Dados[6].Nascimento;

    document.getElementById('pessoa07').value = data.Dados[7].Nome;
    document.getElementById('cpf07').value = data.Dados[7].Cpf;
    document.getElementById('data07').value = data.Dados[7].Nascimento;

    document.getElementById('pessoa08').value = data.Dados[8].Nome;
    document.getElementById('cpf08').value = data.Dados[8].Cpf;
    document.getElementById('data08').value = data.Dados[8].Nascimento;

    document.getElementById('pessoa09').value = data.Dados[9].Nome;
    document.getElementById('cpf09').value = data.Dados[9].Cpf;
    document.getElementById('data09').value = data.Dados[9].Nascimento;


    puxaParente(data);

}



document.querySelector('#ceps').addEventListener('click', puxaNome())

