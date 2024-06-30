//https://javascript.info/custom-errors

// class Error {
//     constructor(message) {
//       this.message = message;
//       this.name = "Error"; // (different names for different built-in error classes)
//       this.stack = <call stack>; // non-standard, but most environments support it
//     }
//   }

// class ValidationError extends Error{
//     constructor(message){
//         super(message);
//         this.name = 'ValidationError';
//     }	
// }


// function test(){
//     throw new ValidationError('Erro de validação');
// }

// try {
//     test();
//   } catch(err) {
//     console.error(err.message); // Whoops!
//     console.error(err.name); // ValidationError
//     console.error(err.stack); // a list of nested calls with line numbers for each
//   }


class MyError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
  }

class ValidationError extends MyError { }

class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("No property: " + property);
      this.property = property;
    }
  }

  console.log(new PropertyRequiredError("field").name );


  function readUser(json) {
    let user = JSON.parse(json);
  
    if (!user.age) {
        throw new PropertyRequiredError("age");
      }
      if (!user.name) {
        throw new PropertyRequiredError("name");
      }
  
    return user;
  }
  
  try {
    let user = readUser('{ "idade": 25 }');
  } catch (err) {
    if (err instanceof ValidationError) {
      console.log("Dados inválidos: " + err.message); // Dados inválidos: Campo faltante: nome
      console.log(err.name)
      console.log(err.property)
    } else if (err instanceof SyntaxError) { // (*)
      console.log("JSON Syntax Error: " + err.message);
    } else {
      throw err; // unknown error, rethrow it (**)
    }
  }