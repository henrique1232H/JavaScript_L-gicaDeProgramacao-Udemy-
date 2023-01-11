/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor mesmo"

FALSY
* false
0
'' "" ``
null / undefined
NaN
*/


// function falaOi () {
//     return "Oi"
// }

// let vaiExecutar = "Joãozinho";

// console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || "Luiz Otavio" || true)

// const corUsuario = "vermelho";
// const corPadrao = corUsuario || "Preto";

// console.log(corPadrao)


const a = 0
const b = null
const c = "false"
const d = false
const e = NaN

console.log(a || b || c || d || e)