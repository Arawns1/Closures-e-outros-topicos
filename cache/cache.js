
//criando a função que recebe um função qualquer;
const myMemoizer = fn => {
    //instanciando nosso cache;
    const cache = new Map();
    
    // criando a função de execução do nosso memoizer
    return (...args) => {
      const key = `key-${args.join('-')}`; // criando nossa key para achar o resultado
      
      if(cache.has(key)){
        return cache.get(key);
      }
     
      const result = fn && fn(...args); // se caso o parametro fn existir, executá-lo 
      cache.set(key, result); // guardando o resultado no cache
      return result;
    }
  }
  
  const somarNumeros = (a,b) => {
    return a + b;
  }

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
  
  
  const memoizer = myMemoizer(somarNumeros); //criando a instancia do memoizer configurado para a função somarNumeros
  const memoizerFibonacci = myMemoizer(fibonacci); //criando a instancia do memoizer configurado para a função fibonacci

  console.log("->> Função 1")
  console.time("Sem cache")
  console.log(memoizerFibonacci(40)); // executando função

  console.log("->> Função 2")
  console.time("Com cache")
  console.log(memoizerFibonacci(40)); // retornando do cache

  console.timeLog("Sem cache");
  console.timeLog("Com cache");

  