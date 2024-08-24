$(document).ready(function() {
  function calcular(operacao) {
    var valor1 = parseFloat($("#valor1").val());
    var valor2 = parseFloat($("#valor2").val());
    var resultado;

    if (isNaN(valor1) || isNaN(valor2)) {
      alert("inserir números válidos.");
      return;
    }

    switch (operacao) {
      case 'somar':
        resultado = valor1 + valor2;
        break;
      case 'subtrair':
        resultado = valor1 - valor2;
        break;
      case 'multiplicar':
        resultado = valor1 * valor2;
        break;
      case 'dividir':
        if (valor2 === 0) {
          alert("Não é possível dividir por zero.");
          return;
        }
        resultado = valor1 / valor2;
        break;
      default:
        alert("Operação inválida.");
        return;
    }

    $("#resultado").val(resultado);
  }

  $("#somar").click(function() {
    calcular('somar');
  });

  $("#subtrair").click(function() {
    calcular('subtrair');
  });

  $("#multiplicar").click(function() {
    calcular('multiplicar');
  });

  $("#dividir").click(function() {
    calcular('dividir');
  });
});
