import React, {Component} from 'react';

import {fundingFactoryInstance} from "../../eth/instance";

class CreatorFundingTab extends Component {

    state = {
        creatorFundings: [],
    }


    async componentWillMount() {
        //funding地址的数组
        let creatorFundings = await fundingFactoryInstance.methods.getCreatorFundings().call()
        console.table(creatorFundings)


        this.setState({
            creatorFundings,
        })

    }

    render() {
        return (
            <p>{this.state.creatorFundings}</p>
        )
    }
}

export default CreatorFundingTab
