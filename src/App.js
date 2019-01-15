import React, {Component} from 'react';
import web3 from './utils/InitWeb3'
import {fundingFactoryInstance} from './eth/instance'
import TabCenter from "./display/TabCenter";
import {Header} from 'semantic-ui-react'

class App extends Component {
    constructor() {
        super();

        this.state = {
            currentAccount: '',
        }
    }

    async componentWillMount() {
        let accounts = await web3.eth.getAccounts()
        // console.log(accounts)

        let platformManager = await fundingFactoryInstance.methods.platformManager().call()
        // console.log('manager :', platformManager)

        this.setState({
            currentAccount: accounts[0],
        })
    }


    render() {
        return (
            <div>
                <Header as='h1' color='Black'>BlockChain Crowdfunding</Header>
                <img src="https://api.gushi.ci/all.svg" alt="poem"/>
                <br/><br/>
                <p>Current account : {this.state.currentAccount}</p>
                <TabCenter/>
            </div>
        );
    }
}

export default App;
