/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Windo Binding is the highest level of binding. If the this key word appears outside of any object, it will bind to the windo element of the HTML file. 
* 2. Implicit Binding requires the this key word, followed by the '.' access modifyer and then the property of an object. This points to the object that it is contained in.
* 3. New binding will bind a new, blank and separate object of a class/Function and returns it into a variable
* 4. Explicit Binding occurs when the .call() or .apply() methods are invoked. They bind the arguments passed into the function and invoke it. .apply() works exactly the same as .call() but the second argument is a collection of some kind rather than a list of individual variables
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

//console.log(`Hello, I am the windo/console and my name is ${toString(this)}.`)
function WindowBindingExample() {
    console.log("Here is the window");
    console.log(this);
    return name;
  }
  WindowBindingExample();

// Principle 2

// code example for Implicit Binding
function ImplicitBindingExample(arg1, arg2, arg3){
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.arg3 = arg3;

    console.log(`Our first argument is ${this.arg1}, our second is ${this.arg2} and finaly, our third is ${arg3}`)
}

ImplicitBindingExample(7, 'my left foot', this)
// Principle 3

// code example for New Binding

function NewBindingExample(firstArg, secondArg)
{
    this.firstArg = firstArg;
    this.secondArg = secondArg;

    this.getArgs = function() {
        console.log(`First Argument: ${firstArg}`);
        console.log(`Second Argument: ${secondArg}`);
    };
}

const NewerBindingExample = new NewBindingExample('blue', 37);

NewerBindingExample.getArgs();

// Principle 4

// code example for Explicit Binding

const ExplicitBindingExample = {
     listArgs: function(arg1, arg3){
        console.log(`${this}'s arguments are: ${this.arg1}, ${this.arg2} and, ${this.arg3}`);
    }
}

const exp1 = {
    arg1: 1,
    arg2: 2,
    arg3: 3
}
const exp2 = {
    arg1: 'a',
    arg2: 'b',
    arg3: 'c'
}

ExplicitBindingExample.listArgs.call(exp1);
ExplicitBindingExample.listArgs.call(exp2);


