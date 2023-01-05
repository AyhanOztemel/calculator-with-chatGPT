const buttons = document.querySelectorAll('#btnId');
const display = document.querySelector('#inputId');
// let operator = '';
// let firstValue = '';
// let secondValue = '';
let text='';
buttons.forEach(button => {
  button.addEventListener('click', e => {
    const value = e.target.innerHTML;
    console.log(e.target.innerHTML)
    //******************Dört işlem****************************
    if (['+', '-', '*', '/'].includes(value)) {
      console.log("dört işlem")
      text+=value ;
      document.getElementById("inputId").innerHTML=text 
     } 
     //******************Eşittir****************************
    else if (value === '=') {  
      console.log("eşittir")
      document.getElementById("inputId").innerHTML= eval(text);
      text=eval(text)
      console.log(typeof(text))
      text=String(text);
      console.log(typeof(text))
     } 
    //******************rakam yaz****************************
    else if((['1', '2', '3', '4','5', '6', '7', '8','9','.'].includes(value))){
      console.log("sayılar")
      text+=value
      document.getElementById("inputId").innerHTML=text
      // if(text.slice(-1).includes("0")){
      //   text=text.slice(0,-1)+value
      //   document.getElementById("inputId").innerHTML=text
      // }
      //  else{
      //   text+=value
      //   document.getElementById("inputId").innerHTML=text
      // } 
    }
     //******************son sayı sil**************************
    else if((['&lt;--'].includes(value))){
      console.log("<--")
      text=text.slice(0,-1) ;
      document.getElementById("inputId").innerHTML=text
     }
     //******************kare al**************************
     else if((['√¯'].includes(value))){
      console.log("x2")

      for (var i=text.length;0<i;--i){
        if (text[i]=="+") {
          let newtext=text.slice(i+1,text.length)
         text= text.slice(0,i+1)+(Math.sqrt(Number(newtext))).toString()
         document.getElementById("inputId").innerHTML=text
        } 
      }
     }
      //******************karekök Al**************************
      else if((['x2'].includes(value))){
        console.log("x2")
  
        for (var i=text.length;0<i;--i){
          if (text[i]=="+") {
            let newtext=text.slice(i+1,text.length)
           text= text.slice(0,i+1)+(Number(newtext)**2).toString()
           document.getElementById("inputId").innerHTML=text
          } 
        }
       }
     //******************ekran temizleme***********************
     else if((['ON/C'].includes(value))){
      console.log("ON/C")
      text="";
      document.getElementById("inputId").innerHTML=text
     }
     //*******************çift sıfır yaz*************************
     else if((['00'].includes(value))){
      console.log("00")
      console.log(!text.slice(-1).includes('+')&& !text.slice(-1).includes("-") && !text.slice(-1).includes("*" ) && !text.slice(-1).includes("/"))
      if (text!="" &&text!="0"&& !text.slice(-1).includes("+") && !text.slice(-1).includes("-") && !text.slice(-1).includes("*" ) && !text.slice(-1).includes("/")){
        text+=value ;
      document.getElementById("inputId").innerHTML=text}
     }
      //*******************sıfır yaz*************************
      else if((['0'].includes(value))){
        console.log("0")
        //console.log(!text.slice(-1).includes('+')&& !text.slice(-1).includes("-") && !text.slice(-1).includes("*" ) && !text.slice(-1).includes("/"))
        if(!text.slice(-1).includes("+") && !text.slice(-1).includes("-") && !text.slice(-1).includes("*" ) && !text.slice(-1).includes("/")){
          
        }
        if (text!="0"){
          //&& !text.slice(-1).includes("+") && !text.slice(-1).includes("-") && !text.slice(-1).includes("*" ) && !text.slice(-1).includes("/"))
          text+=value ;
        document.getElementById("inputId").innerHTML=text}
       }
     //*********************Geçersiz işlem***********************
    else {
      document.getElementById("inputId").innerHTML="geçersiz işlem" 
      console.log("geçersiz  işlem")     
    }

  });
});


