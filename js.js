var mudar = false, bipolar = true, liga = true, ativahyp = false,ativadeg = 1,historico = Array(),memoria = Array();
var aux = ""; 

/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map/has

    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential
*/ 

window.onload = function(){
   
    document.getElementById("resultado").innerHTML = 0;
    document.getElementById("subresultado").innerHTML = "";
    mudahist();

}
function historico3(){
    document.getElementsByClassName("historico")[0].innerHTML = "";
    for(i =0;i<historico.length; i++){
        document.getElementsByClassName("historico")[0].innerHTML += historico[i];
    }
}

function memoria3(){
    memoria.push(document.getElementById("resultado").innerHTML);
    document.getElementsByClassName("memoria")[0].innerHTML = "";
    for(i =0;i<memoria.length; i++){
        document.getElementsByClassName("memoria")[0].innerHTML += memoria[i]+"<br>";
    }

    document.getElementById("MC").disabled = false;

}
function botao(numero){
    var salvo = document.getElementById("resultado").innerHTML;
    if(salvo.length < 28){
    if(mudar && Number.isInteger(parseInt(numero))){
        document.getElementById("resultado").innerHTML = numero;
        mudar = false;
    }
    else if(Number.isInteger(parseInt(numero)) && salvo == 0) {
        document.getElementById("resultado").innerHTML = numero;
    }else if(Number.isInteger(parseInt(numero))){
        document.getElementById("resultado").innerHTML = salvo += numero;
    }else if(!Number.isInteger(parseInt(numero)) && salvo == 0){
        document.getElementById("resultado").innerHTML = numero;
    }else{
        document.getElementById("resultado").innerHTML = salvo += numero;
    }

    bipolar = false;
}
}

function operador(numero){
    if(!bipolar){
        var subresultado = document.getElementById("subresultado").innerHTML;
        var preresul = "";
        preresul = document.getElementById("resultado").innerHTML;
        document.getElementById("subresultado").innerHTML = subresultado+preresul+numero;
        mudar = true;
        bipolar = true;
    }    
}

function calcular(){
    var subresultado = document.getElementById("subresultado").innerHTML;
    aux = subresultado == "" ? aux:subresultado; 
    var conta = aux + document.getElementById("resultado").innerHTML ;
    historico.push(conta+" =");
    if(conta.includes('^')){
        conta = conta.split('^');
        resultado = Math.pow(eval(conta[0]),eval(conta[1]));
        document.getElementById("resultado").innerHTML = resultado;
    }else if(conta.includes('yroot')){
        conta = conta.split('yroot');
        resultado = Math.pow(eval(conta[0]),eval(1/conta[1]));
        document.getElementById("resultado").innerHTML = resultado;
    }else if(conta.includes('Mod')){
        conta = conta.split('Mod');
        resultado = eval(parseInt(conta[0]) % parseInt(conta[1]));
        document.getElementById("resultado").innerHTML = resultado;
    }
    else {
        document.getElementById("resultado").innerHTML = eval(conta);
        subresultado == eval(conta);
    }
    historico.push("<h3>"+document.getElementById("resultado").innerHTML+"</h3>");
    document.getElementById("subresultado").innerHTML = "";
    historico3();
    }



function substitui(operador,conta){

  while(conta.indexOf("×")>=0){
      
          var operanovo = conta.replace("×","*");
      
  }

  return operanovo;
}

function apagar(value){
    if(value == "C"){
        document.getElementById("resultado").innerHTML = "0";
        document.getElementById("subresultado").innerHTML = "";
    }else if(value == "CE"){
        document.getElementById("resultado").innerHTML = "0";
    }else if (value == "apagar"){
        var resul = document.getElementById("resultado").innerHTML;
        var a = resul.substr(0,(resul.length - 1));
        return document.getElementById("resultado").innerHTML = a;
    
    }

}

function maismenos(){
    var resultado =  document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = eval(resultado *-1)
}

function exp2(value) {
    document.getElementById("resultado").innerHTML =  document.getElementById("resultado").innerHTML+"e+";
}

function elevado(value){
    if(value == "x2"){
       var conta = Math.pow(document.getElementById("resultado").innerHTML, 2);
      document.getElementById("resultado").innerHTML = conta;
    }else if(value == "x3"){
        var conta = Math.pow(document.getElementById("resultado").innerHTML, 3);
      document.getElementById("resultado").innerHTML = conta;
    }else if(value == "xy"){
        var subresultado = document.getElementById("subresultado").innerHTML;
        var preresul = "";
        preresul = document.getElementById("resultado").innerHTML;
        document.getElementById("subresultado").innerHTML = subresultado+preresul+"^";

    }else if(value == "10x"){
        var conta =  Math.pow(10, document.getElementById("resultado").innerHTML);
        document.getElementById("resultado").innerHTML = conta;
    }
    mudar = true;

    
}

function raiz(value){
    if(value == "raiz"){
        var conta = Math.sqrt(document.getElementById("resultado").innerHTML);
        document.getElementById("resultado").innerHTML = conta;
    }else if(value == "raizxy"){
        var subresultado = document.getElementById("subresultado").innerHTML;
        var preresul = "";
        preresul = document.getElementById("resultado").innerHTML;
        document.getElementById("subresultado").innerHTML = subresultado+preresul+"yroot";
    }

    mudar = true;
}

function logaritmo(value){
var resultado = document.getElementById("resultado").innerHTML;
//document.getElementById("subresultado").innerHTML = "log("+document.getElementById("resultado").innerHTML+")";
if(value == "log"){
var conta = Math.log10(document.getElementById("resultado").innerHTML);
document.getElementById("resultado").innerHTML = conta;
}else if (value == "in"){
    var conta = Math.log(document.getElementById("resultado").innerHTML);
document.getElementById("resultado").innerHTML = conta;
}
}

function umx(){
    var conta = "1/"+document.getElementById("resultado").innerHTML;
    document.getElementById("subresultado").innerHTML = conta;
    document.getElementById("resultado").innerHTML = eval(conta);
}

function exp(){
    var conta = Math.exp(document.getElementById("resultado").innerHTML);
    document.getElementById("resultado").innerHTML = conta;
}

function sin(value){
    if( value == "sin"){
       var conta = Math.sin(document.getElementById("resultado").innerHTML);
       document.getElementById("resultado").innerHTML = conta;
    }else if(value == "cos"){
        var conta = Math.cos(document.getElementById("resultado").innerHTML);
        document.getElementById("resultado").innerHTML = conta;
    }else if(value == "tan"){
        var conta = Math.tan(document.getElementById("resultado").innerHTML);
        document.getElementById("resultado").innerHTML = conta;
    }else if(value == "sin1"){
        var conta = Math.asin(document.getElementById("resultado").innerHTML);
       document.getElementById("resultado").innerHTML = conta;
    }else if(value == "cos1"){
        var conta = Math.acos(document.getElementById("resultado").innerHTML);
       document.getElementById("resultado").innerHTML = conta;
    }else if (value == "tan1"){
        var conta = Math.atan(document.getElementById("resultado").innerHTML);
       document.getElementById("resultado").innerHTML = conta;
    }else if (value == "sinh"){
        var conta = Math.sinh(document.getElementById("resultado").innerHTML);
       document.getElementById("resultado").innerHTML = conta;
    }else if (value == "cosh"){
        var conta = Math.cosh(document.getElementById("resultado").innerHTML);
       document.getElementById("resultado").innerHTML = conta;
    }else if (value == "tanh"){
        var conta = Math.tanh(document.getElementById("resultado").innerHTML);
       document.getElementById("resultado").innerHTML = conta;
    }else if (value == "tanh1"){
        var conta = Math.atanh(document.getElementById("resultado").innerHTML);
       document.getElementById("resultado").innerHTML = conta;
    }else if (value == "cosh1"){
        var conta = Math.acosh(document.getElementById("resultado").innerHTML);
       document.getElementById("resultado").innerHTML = conta;
    }else if (value == "sinh1"){
        var conta = Math.asinh(document.getElementById("resultado").innerHTML);
       document.getElementById("resultado").innerHTML = conta;
    }
}

function mod(){
    var subresultado = document.getElementById("subresultado").innerHTML;
    var preresul = "";
    preresul = document.getElementById("resultado").innerHTML;
    document.getElementById("subresultado").innerHTML = subresultado+preresul+"Mod";

    mudar = true;
}

function toexp(){
    
}

function fatorial(){
    var i = 1,
    fat = 1,
    n = document.getElementById("resultado").innerHTML;
    
    while( i <= n ){
        var fat = fat * i;
            i += 1;
    }

    document.getElementById("resultado").innerHTML = fat;
    mudar = true;
}

function hyp(){

    if(!ativahyp){
        document.getElementById('spansin').innerHTML = 'sinh';
        document.getElementById("sin").value = "sinh";

        document.getElementById('spancos').innerHTML = 'cosh';
        document.getElementById("cos").value = "cosh";

        document.getElementById('spantan').innerHTML = 'tanh';
        document.getElementById("tan").value = "tanh";

        document.getElementById('spansin1').innerHTML = 'sinh<sup>-1</sup>';
        document.getElementById("sin1").value = "sinh1";

        document.getElementById('spancos1').innerHTML = 'cosh<sup>-1</sup>';
        document.getElementById("cos1").value = "cosh1";

        document.getElementById('spantan1').innerHTML = 'tanh<sup>-1</sup>';
        document.getElementById("tan1").value = "tanh1";


        ativahyp = true;

    }else{
        document.getElementById('spansin').innerHTML = 'sin';
        document.getElementById("sin").value = "sin";

        document.getElementById('spancos').innerHTML = 'cos';
        document.getElementById("cos").value = "cos";

        document.getElementById('spantan').innerHTML = 'tan';
        document.getElementById("tan").value = "tan";
        
        document.getElementById('spansin1').innerHTML = 'sin<sup>-1</sup>';
        document.getElementById("sin1").value = "sin1";

        document.getElementById('spancos1').innerHTML = 'cos<sup>-1</sup>';
        document.getElementById("cos").value = "cos1";

        document.getElementById('spantan1').innerHTML = 'tan<sup>-1</sup>';
        document.getElementById("tan1").value = "tan1";

        ativahyp = false;
    }
}

function grad(){
    if(ativadeg == 0){
        document.getElementById("grad").value = "DEG";
        ativadeg = 1;
    }else if(ativadeg == 1){
        document.getElementById("grad").value = "RAD";
        ativadeg = 2;
    }else if(ativadeg == 2){
        document.getElementById("grad").value = "GRAD";
        ativadeg = 0;
    }
}

function mudahist(){
    document.getElementsByClassName("historico-memoria")[0].innerHTML = "<div class='historico'></div>";
    historico3();

    document.getElementById("mem-btn").style.borderBottom = "none";
    document.getElementById("hist-btn").style.borderBottom = "3px solid blue";
}

function mudamemoria(){
        
    document.getElementsByClassName("historico-memoria")[0].innerHTML = "<div class='memoria'></div>";
    document.getElementsByClassName("memoria")[0].innerHTML = "";
    for(i =0;i<memoria.length; i++){
        document.getElementsByClassName("memoria")[0].innerHTML += memoria[i]+"<br>";
    }

    document.getElementById("hist-btn").style.borderBottom = "none";
    document.getElementById("mem-btn").style.borderBottom = "3px solid blue";

}

function marioclaudio(){
    memoria = Array();
    document.getElementsByClassName("memoria")[0].innerHTML = "";
        

}

function marcosrenato(){
    document.getElementById("resultado").innerHTML = memoria[memoria.length-1];

}

function marcao(){
    aux = parseFloat(memoria[memoria.length-1])+parseFloat(document.getElementById("resultado").innerHTML);
    document.getElementsByClassName("memoria")[0].innerHTML = "";
    memoria.pop();
    memoria.push(aux);
    for(i =0;i<memoria.length; i++){
        document.getElementsByClassName("memoria")[0].innerHTML += memoria[i]+"<br>";
    }

}

function marquinho(){
    aux = parseFloat(memoria[memoria.length-1])-parseFloat(document.getElementById("resultado").innerHTML);
    document.getElementsByClassName("memoria")[0].innerHTML = "";
    memoria.pop();
    memoria.push(aux);
    for(i =0;i<memoria.length; i++){
        document.getElementsByClassName("memoria")[0].innerHTML += memoria[i]+"<br>";
    }

}

function fe(){
    document.getElementById("resultado").innerHTML = parseFloat(document.getElementById("resultado").innerHTML).toExponential();

}

/*function dms(){

    document.getElementById("subresultado").innerHTML = " dms(" + document.getElementById("resultado").innerHTML + ") ";

    var quadrado =  document.getElementById("resultado").innerHTML.split('.');
    var graus = quadrado[0];
    var min = 0.0;
    var sec = 0.0;
    var dec = "";
    if (quadrado.length == 2)
    {
        if (quadrado[1].length > 2)
        {
            min = quadrado[1];
            min = eval(60 * min);
            l = min.substr(0, 2);
            min = min.substr(2, l.length);
            sec = eval(l * 60);
        }
        else
        {   
            if (quadrado[1].length == 2)
                min = quadrado[1];
            else
                min = quadrado[1].padEnd(1,'0');
        }
        dec = graus + "." + min + sec;
    }

    alert(min);
    alert(graus)
    alert(sec);
    alert(quadrado[1]);
    alert(dec);
    document.getElementById("resultado").innerHTML = dec;
}*/