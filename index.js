const botao = document.getElementById('botao')

const alturaDiv = document.getElementById('altura')

const pesoDiv = document.getElementById('peso')

function redborder(div,func){

   if(!func){
    div.style.border = "1px solid red"
   } else{
       div.style.border = "none"
   }

   return
}

botao.addEventListener('click', function(e){
    e.preventDefault();
    
    redborder(alturaDiv, altura())
    redborder(pesoDiv, peso())
    
    imcV(valor())
    
    imcResultado(valor())
    
})

function valor(){

    const m = document.getElementById('n')
    const n = document.getElementById('n')
    const s = document.getElementById('s')
    const o = document.getElementById('o')

    const imc = Number((peso() / (altura() * altura()) * 10000).toFixed(2))

    if(altura() && peso()){
        return imc
        
    } else{
        
        m.style.backgroundColor = "transparent"
        n.style.backgroundColor = "transparent"
        s.style.backgroundColor = "transparent"
        o.style.backgroundColor = "transparent"

    }

}

function imcV(imc){
    const imcvalue = document.getElementById('imcValue')

    if(imc){
        imcvalue.innerHTML = imc
    } else{
        imcvalue.innerHTML = '00.00'
    }

    if(imc === Infinity){
        imcvalue.innerHTML = '00.00'
    }
     return
}

function altura(){
    
    const altura = Number(document.getElementById('altura').value)
 
    return altura
  
}

function peso(){

    const peso = Number(document.getElementById('peso').value)
    return peso
}

function imcResultado(imc){

    const m = document.getElementById('m')
    const n = document.getElementById('n')
    const s = document.getElementById('s')
    const o = document.getElementById('o')

    if(imc < 18.5){
        m.style.backgroundColor = "#eac21e99"
        n.style.backgroundColor = "transparent"
        s.style.backgroundColor = "transparent"
        o.style.backgroundColor = "transparent"
        
    } 
    else if(imc <= 24.9 ){
        m.style.backgroundColor = "transparent"
        n.style.backgroundColor = "#8cbf8c"
        s.style.backgroundColor = "transparent"
        o.style.backgroundColor = "transparent"
    } else if(imc <= 30){
        m.style.backgroundColor = "transparent"
        n.style.backgroundColor = "transparent"
        s.style.backgroundColor = "#eac21e99"
        o.style.backgroundColor = "transparent"
    } else if(imc > 30){
        m.style.backgroundColor = "transparent"
        n.style.backgroundColor = "transparent"
        s.style.backgroundColor = "transparent"
        o.style.backgroundColor = "#eac21e99"
    }

}

