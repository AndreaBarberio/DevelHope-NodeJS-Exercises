/* 
Use the Node.js REPL to list the methods provided by the Node.js core crypto module.
Use one of these methods to generate a random ID.

1) print node into the terminal 
2) print crypto.
3) double click on tab
4) search for the methods which can contain functionalities about IDs
5) Search for how does randomUUID works  
6) include the crypto module in the script by delcaring it in require method
7) use RandomUUID() and log it to the console


*/
const crypto = require("crypto")

const randomID = crypto.randomUUID();

console.log("Random ID:", randomID);