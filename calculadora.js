$("#porcentagem").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "%";
    document.getElementById("inputTexto").value = texto;
});

$("#btnLimpaImput").click(function () 
{
    document.getElementById("inputTexto").value = "";
});

$("#btnLimpaTudo").click(function () 
{
    document.getElementById("lista-historico").value = "";
    document.getElementById("inputTexto").value = "";
});

$("#btnVirgula").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    texto = texto + ".";
    document.getElementById("inputTexto").value = texto;
});

$("#btn0").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "0";
    document.getElementById("inputTexto").value = texto;
});

$("#btn1").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "1";
    document.getElementById("inputTexto").value = texto;
});

$("#btn2").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "2";
    document.getElementById("inputTexto").value = texto;
});

$("#btn3").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "3";
    document.getElementById("inputTexto").value = texto;
});

$("#btn4").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "4";
    document.getElementById("inputTexto").value = texto;
});

$("#btn5").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "5";
    document.getElementById("inputTexto").value = texto;
});

$("#btn6").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "6";
    document.getElementById("inputTexto").value = texto;
});

$("#btn7").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "7";
    document.getElementById("inputTexto").value = texto;
});

$("#btn8").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "8";
    document.getElementById("inputTexto").value = texto;
});

$("#btn9").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "9";
    document.getElementById("inputTexto").value = texto;
});

$("#btnSoma").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    var posicao = texto.indexOf("+");
    if (posicao == -1) 
    {
        texto = texto + "+";
        document.getElementById("inputTexto").value = texto;
    } else 
    {
        alert("+ já foi inserido! Selecione o botão de =");
    }
});

$("#btnSubtracao").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "-";
    document.getElementById("inputTexto").value = texto;
});

$("#btnMultiplicacao").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "*";
    document.getElementById("inputTexto").value = texto;
});

$("#btnDivisao").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "/";
    document.getElementById("inputTexto").value = texto;
});

$("#btnPotenciaQuadrado").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "²";
    document.getElementById("inputTexto").value = texto;
});

$("#btnIgual").click(function () 
{
    var texto = document.getElementById("inputTexto").value;
    var historico = document.getElementById("lista-historico").value;

    var posicao_mais = texto.indexOf("+");
    var posicao_menos = texto.indexOf("-");
    var posicao_multi = texto.indexOf("*");
    var posicao_divisao = texto.indexOf("/");
    var posicao_quadrado = texto.indexOf("²");

    var resultado;
    if (posicao_mais > -1) 
    {
        var p1 = parseFloat(texto.substring(0, posicao_mais));
        var p2 = parseFloat(texto.substring(posicao_mais + 1));
        resultado = p1 + p2;
    }

    else if (posicao_menos > -1) 
    {
        var p1 = parseFloat(texto.substring(0, posicao_menos));
        var p2 = parseFloat(texto.substring(posicao_menos + 1));
        resultado = p1 - p2;
    } 

    else if (posicao_multi > -1) 
    {
        var p1 = parseFloat(texto.substring(0, posicao_multi));
        var p2 = parseFloat(texto.substring(posicao_multi + 1));
        resultado = p1 * p2;
    } 

    else if (posicao_divisao > -1) 
    {
        var p1 = parseFloat(texto.substring(0, posicao_divisao));
        var p2 = parseFloat(texto.substring(posicao_divisao + 1));
        resultado = p1 / p2;
    }

    else if (posicao_quadrado > -1) 
    {
        var p1 = parseFloat(texto.substring(0, posicao_quadrado));
        resultado = p1 * p1;
    }

    else 
    {
        alert("Operação inválida!");
        return;
    }

    // Atualiza o input com o resultado
    document.getElementById("inputTexto").value = resultado;

    // Adiciona ao histórico
    historico += texto + " = " + resultado + "\n";
    document.getElementById("lista-historico").value = historico;
    
});

