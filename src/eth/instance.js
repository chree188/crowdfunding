import web3 from '../utils/InitWeb3'

let factoryABI = [ { "constant": true, "inputs": [], "name": "platformManager", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_name", "type": "string" }, { "name": "_targetMoney", "type": "uint256" }, { "name": "_supportMoney", "type": "uint256" }, { "name": "_duration", "type": "uint256" } ], "name": "createFunding", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getAllFundings", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getSupportorFunding", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getCreatorFundings", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" } ]

let factoryAddress = '0xfCe7F63dc51f1588FC5F03C75d55034f80db99Dd'

let fundingFactoryInstance = new web3.eth.Contract(factoryABI,factoryAddress)


let fundingABI = [ { "constant": false, "inputs": [ { "name": "i", "type": "uint256" } ], "name": "finalizeRequest", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getBalance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "endTime", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getRequestsCount", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "manager", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "refund", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "i", "type": "uint256" } ], "name": "getRequestByIndex", "outputs": [ { "name": "", "type": "string" }, { "name": "", "type": "uint256" }, { "name": "", "type": "address" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getLeftTime", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_purpose", "type": "string" }, { "name": "_cost", "type": "uint256" }, { "name": "_seller", "type": "address" } ], "name": "createRequest", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "targetMoney", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "projectName", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "allRequests", "outputs": [ { "name": "purpose", "type": "string" }, { "name": "cost", "type": "uint256" }, { "name": "seller", "type": "address" }, { "name": "approveCount", "type": "uint256" }, { "name": "status", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "supportMoney", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getInvestors", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "i", "type": "uint256" } ], "name": "approveRequest", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "invest", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "getInvestorsCount", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [ { "name": "_projectName", "type": "string" }, { "name": "_targetMoney", "type": "uint256" }, { "name": "_supportMoney", "type": "uint256" }, { "name": "_duration", "type": "uint256" }, { "name": "_creator", "type": "address" }, { "name": "_supportorFundings", "type": "address" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" } ]


let fundingInstance = new web3.eth.Contract(fundingABI)

let newFundingInstance = ()=>{
    return new web3.eth.Contract(fundingABI)
}


//如果用这种方式导出，那边调用的时候也得用这种方式调用
export {
    fundingFactoryInstance,
    fundingInstance,
    newFundingInstance,

}