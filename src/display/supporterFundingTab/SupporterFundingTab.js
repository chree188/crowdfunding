import React, {Component} from 'react';
import {getFundingDetails} from "../../eth/interaction";
import CardList from "../common/CardList";

class SupporterFundingTab extends Component {

    state = {
        supporterFundingDetails: [],
    }


    async componentWillMount() {

        let supporterFundingDetails = await getFundingDetails(3)

        this.setState({
            supporterFundingDetails,
        })

    }

    onCardClick = (seletedFundingDetail) => {
        this.setState({
            seletedFundingDetail
        })
    }

    render() {
        return (
            <CardList details={this.state.supporterFundingDetails}
                      onCardClick={this.onCardClick}/>
        )
    }
}

export default SupporterFundingTab
