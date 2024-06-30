function multiplicar(x){
  
    let resultado = x;
  
    function por(y){
      resultado = resultado * y;
      return this;
    }
  
     function somar(z){
      resultado = resultado + z;
      return this;
    }
  
    function total(){
      return resultado;
    }
    return {por, somar, total}
  }
  
  console.log(multiplicar(2).por(3).somar(3).total())


  // Higher Order Functions

  function multiplicar2(x){
    function finalizarMultiplicacao(y){
      return x * y;
    }
    return finalizarMultiplicacao;
  }

  const dobro = multiplicar2(2);
  const triplo = multiplicar2(3);
  
  
  console.log(dobro(3))
  console.log(triplo(3))