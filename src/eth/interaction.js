import {fundingFactoryInstance, newFundingInstance} from "./instance";

let getCreatorFundingDetails = async () => {

//funding地址的数组
    let creatorFundings = await
        fundingFactoryInstance.methods.getCreatorFundings().call()
// console.table(creatorFundings)

    let detailsPromises = creatorFundings.map(function (fundingAddress) {
        // console.log(fundingAddress)

        return new Promise(async (resolve, reject) => {

            try {
                let newInstance = newFundingInstance()
                newInstance.options.address = fundingAddress

                let manager = await
                    newInstance.methods.manager().call()
                let projectName = await
                    newInstance.methods.projectName().call()
                let targetMoney = await
                    newInstance.methods.targetMoney().call()
                let supportMoney = await
                    newInstance.methods.supportMoney().call()
                let leftTime = await
                    newInstance.methods.getLeftTime().call()

                let balance = await newInstance.methods.getBalance().call()
                let investorCount = await newInstance.methods.getInvestorsCount().call()

                let detail = {
                    fundingAddress,
                    manager,
                    projectName,
                    targetMoney,
                    supportMoney,
                    leftTime,
                    balance,
                    investorCount
                }

                // console.table(detail)
                resolve(detail)
            } catch (e) {
                reject(e)
            }
        })

    })

//把多个promise处理成一个promise
    let detailInfo = Promise.all(detailsPromises)

    // detailInfo.then(detail => {
    //     console.table(detail)
    // })

    return detailInfo
}

export {
    getCreatorFundingDetails,
}