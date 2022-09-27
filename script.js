function soma(){
    var a=parseInt(document.getElementById('a').value);
    if( a <= 280 ){
        var perc = 20;
        var aumento = (a/100)*perc;
        var salarioF = aumento +a;
    }
    if( a > 280 && a <=700){
        var perc = 15;
        var aumento = (a/100)*perc;
        var salarioF = aumento +a;

    }
    if( a <= 1500 && a> 700){
        var perc  = 10;
        var aumento = (a/100)*perc;
        var salarioF = aumento +a;

    }
    if( a>1500){
        var perc = 5;
        var aumento = (a/100)*perc;
        var salarioF = aumento +a;
    }
    document.getElementById('resultado').innerHTML = 'Salário antes do reajuste: ' + a;
    document.getElementById('resultado1').innerHTML = 'Percentual de aumento aplicado: ' + perc;
    document.getElementById('resultado2').innerHTML = 'Valor do aumento: ' + aumento;
    document.getElementById('resultado3').innerHTML = 'Salário depois do reajuste: ' + salarioF;


}