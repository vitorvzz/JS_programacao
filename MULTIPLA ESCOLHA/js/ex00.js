var numero, dia

dia =parseInt(prompt("digite o numero do dia correspondente: "))

switch(dia){
    case 1:{
        alert("domingo")
        break
    }
    case 2:{
        alert("Segunda feira")
        break
    }
    case 3:{
        alert("Terça feira")
        break
    }
    case 4:{
        alert("Quarta Feira")
        break
    }
    case 5:{
        alert("Quinta Feira")
        break
    }
    case 6:{
        alert("Sexta feira")
        break
    }
    case 7:{
        alert("Sabado")
        break
    }
    default:{
        alert("opção invalida")
        break
    }
}