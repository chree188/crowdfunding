import web3 from '../utils/InitWeb3'

let abi = [ { "constant": true, "inputs": [], "name": "platformManager", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_name", "type": "string" }, { "name": "_targetMoney", "type": "uint256" }, { "name": "_supportMoney", "type": "uint256" }, { "name": "_duration", "type": "uint256" } ], "name": "createFunding", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getAllFundings", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getSupportorFunding", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getCreatorFundings", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" } ]

let fundingFactoryAddress = '0xd80b576e20b235fd9f5eec4bdd086624f4ef14be'

let fundingFactoryInstance = new web3.eth.Contract(abi,fundingFactoryAddress)

//如果用这种方式导出，那边调用的时候也得用这种方式调用
export {
    fundingFactoryInstance,
}