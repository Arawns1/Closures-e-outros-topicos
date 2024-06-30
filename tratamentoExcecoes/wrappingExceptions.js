
// The rule of thumb: Never add a custom exception class until you know what exact benefit you'll gain from it.
// In the example above, the PropertyRequiredError class is redundant. It doesn't add any new methods or properties to the Error class. It just sets the name and the message. So, it's better to use the built-in Error class.

class ReadError extends Error {
    constructor(message, cause) {
      super(message);
      this.cause = cause;
      this.name = this.constructor.name;
    }
  }
  
  class ValidationError extends Error { /*...*/ }
  class PropertyRequiredError extends ValidationError { /* ... */ }
  
  function validateUser(user) {
    if (!user.age) {
      throw new PropertyRequiredError("age");
    }
  
    if (!user.name) {
      throw new PropertyRequiredError("name");
    }
  }

  function readUser(json) {
    let user;
  
    try {
      user = JSON.parse(json);
    } catch (err) {
      if (err instanceof SyntaxError) {
        throw new ReadError("Syntax Error", err);
      } else {
        throw err;
      }
    }
  
    try {
      validateUser(user);
    } catch (err) {
      if (err instanceof ValidationError) {
        throw new ReadError("Validation Error", err);
      } else {
        throw err;
      }
    }
  
  }

try {
    readUser("{'name': 'John', 'age': '10'}");
  } catch (error) {
    if (error instanceof ReadError) {
      console.log(error);
      // Original error: SyntaxError: Unexpected token b in JSON at position 1
      console.log("Original error: " + error.cause);
    } else {
      throw error;
    }
  }