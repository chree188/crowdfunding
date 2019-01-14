let Web3 = require('web3')

let web3 = new Web3(window.web3.currentProvider)

//export导出，es6语法，default 标识默认导出，使用时候，名字可以改
export default web3;