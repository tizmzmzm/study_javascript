// 1.Use strict
// added in ES 5
// use this for Vanilla Javascript.
'use strict';

// 2.Varialbe => mutable type
// let (added in ES6)
let globalName = 'global name';
{
    let name = '함창주';
    console.log(name);

    name = 'hello';
    console.log(name);
}
console.log(globalName);
console.log(name);//in block variable can't see

// 2.Variable
// let (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no lock scop

// 3.constant
// constant (immutable type)
// -securiity
// -thread sfety
// -reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types (변경 불가): premitive types. frozen objects (i.e. object.freeze())
// Mutable data types (변경 가능): all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread sfety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 12345678901234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(typeof bigInt)
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(greeting);
console.log(typeof (greeting))
const helloBob = `hi ${brendan}!;` // template literals (strubg)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// tre: any other value
const canRead = true;
const test = 3 < 1;//false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${nothing}`);

// undefined
let x;
console.log(`value: ${x} type: ${x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
const ellie = {
    name: 'ellie',
    age: 20
}
console.log(`Object ellie: ${ellie.name}, ${ellie.age}`)

//5. Dnamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0)); // error <--그래서 type script가 나옴








