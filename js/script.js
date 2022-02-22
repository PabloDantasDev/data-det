
const limpaCampos=(endereco)=>{
    document.getElementById('cep').value=''
    document.getElementById('logradouro').value =endereco=''
    document.getElementById('complemento').value =endereco=''
    document.getElementById('bairro').value =endereco=''
    document.getElementById('cidade').value =endereco=''
    document.getElementById('estado').value =endereco=''

}

const preencheFormulario=(endereco)=>{

    document.getElementById('logradouro').value =endereco.Dados.name
    document.getElementById('complemento').value =endereco.Dados.mother
    document.getElementById('bairro').value =endereco.Dados.father
    document.getElementById('cidade').value =endereco.Dados.birth


    let aviso = "Sem Complemento"
    if(endereco.complemento === ''){
    document.getElementById('complemento').value = aviso;
}


}

const puxaCEP = async() => {

    const cep = document.getElementById('numeroCep').value;
   
   
    const url = `https://data-inte.herokuapp.com/cpf/${cep}`;
        const dados= await fetch(url);
        const endereco =await dados.json();
        console.log(endereco)
        preencheFormulario(endereco)
        
    }
    

document.querySelector('#ceps').addEventListener('click',puxaCEP())