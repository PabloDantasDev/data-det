let menu = document.querySelector('#menu-btn');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}






//CONSULTA DADOS BASICO


const preencheFormulario=(data)=>{

    document.getElementById('nome').value =data.Dados.name
    document.getElementById('mae').value =data.Dados.mother
    document.getElementById('pai').value =data.Dados.father
    document.getElementById('niver').value =data.Dados.birth
    document.getElementById('niss').value =data.Dados.otherIds.nis[0]
 
    //CONSULTAR ENDEREÇOS
    document.getElementById('rua').value =data.Dados.addresses[0].street
    document.getElementById('bairro').value =data.Dados.addresses[0].district
    document.getElementById('cidade').value =data.Dados.addresses[0].city
    document.getElementById('estado').value =data.Dados.addresses[0].state
    document.getElementById('cep').value =data.Dados.addresses[0].zipCode
    

    //ENDEREÇO 2
     document.getElementById('rua2').value =data.Dados.addresses[1].street
     document.getElementById('bairro2').value =data.Dados.addresses[1].district
     document.getElementById('cidade2').value =data.Dados.addresses[1].city
     document.getElementById('estado2').value =data.Dados.addresses[1].state
     document.getElementById('cep2').value =data.Dados.addresses[1].zipCode
   

     //ENDEREÇO 3
         document.getElementById('rua3').value =data.Dados.addresses[2].street
         document.getElementById('bairro3').value =data.Dados.addresses[2].district
         document.getElementById('cidade3').value =data.Dados.addresses[2].city
         document.getElementById('estado3').value =data.Dados.addresses[2].state
         document.getElementById('cep3').value =data.Dados.addresses[2].zipCode
        

         //ENDEREÇO 4
         
          document.getElementById('rua4').value =data.Dados.addresses[3].street
          document.getElementById('bairro4').value =data.Dados.addresses[3].district
          document.getElementById('cidade4').value =data.Dados.addresses[3].city
          document.getElementById('estado4').value =data.Dados.addresses[3].state
          document.getElementById('cep4').value =data.Dados.addresses[3].zipCode
       
        
          //EMAILS            
          document.getElementById('email1').value =data.Dados.emails[0].email
          document.getElementById('email2').value =data.Dados.emails[1].email
          document.getElementById('email3').value =data.Dados.emails[2].email
          document.getElementById('email4').value =data.Dados.emails[3].email
          document.getElementById('email5').value =data.Dados.emails[4].email

          //TELEFONES           
          document.getElementById('num1').value =data.Dados.phones[0].phone
          document.getElementById('num2').value =data.Dados.phones[1].phone
          document.getElementById('num3').value =data.Dados.phones[2].phone
          document.getElementById('num4').value =data.Dados.phones[3].phone
          document.getElementById('num5').value =data.Dados.phones[4].phone
        
          //ENDEREÇO 5
         document.getElementById('rua5').value =data.Dados.addresses[4].street
         document.getElementById('bairro5').value =data.Dados.addresses[4].district
         document.getElementById('cidade5').value =data.Dados.addresses[4].city
         document.getElementById('estado5').value =data.Dados.addresses[4].state
         document.getElementById('cep5').value =data.Dados.addresses[4].zipCode
     
        
          
              

    let aviso = "Sem Complemento"
    if(endereco.complemento === ''){
    document.getElementById('complemento').value = aviso;
}


}

const puxaCEP = async() => {

    const cep = document.getElementById('numeroCep').value;
   
   
    const url = `https://data-inte.herokuapp.com/cpf/${cep}`;
        const dados= await fetch(url);
        const data =await dados.json();
        console.log(data)
        preencheFormulario(data)
        
    }
    

document.querySelector('#ceps').addEventListener('click',puxaCEP())