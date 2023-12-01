function check_form(){
    var nome= document.getElementById('nome') .value;
    var tel= document.getElementById('telefone').value;
    var dtn= document.getElementById('dataNascimento').value;
    var opgenero1= document.getElementById('rGenero1').Checked;
    var opgenero2= document.getElementById('rGenero2').checked;
    var opgenero3= document.getElementById('rGenero3').checked;
    var endereco= document.getElementById('address').value;
    var vaga= document.getElementById('vaga')  .value;

    if(nome==''){
        alert("preencha o nome");
        return false;
    }
    if(tel==''){
        alert("preencha o telefone");
        return false;
    }
    if(dtn==''){
        alert("preencha a data de nascimento");
        return false;
    }
    if((opgenero1==false)&&(opgenero2==false)&&(opgenero3==false)){
        alert("selecione uma opçao de genero");
        return false;
    }else{
        if(opgenero1==true
            document.getElementById('rGenero1').value);      
        if(opgenero2==true
                document.getElementById('rGenero1').value);
        if(opgenero3==true
                    document.getElementById('rGenero1').value);
    }
    if(endereco==''){
        alert("preencha o endereço");
        return false;
    }
    if(vaga==0){
        alert("escolha uma vaga");
        return false
    }
    return true;
}
