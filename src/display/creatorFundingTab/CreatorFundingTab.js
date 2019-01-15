import React, {Component} from 'react';
import {getFundingDetails} from "../../eth/interaction";
import CardList from "../common/CardList";
import CreateFundingForm from "./CreateFundingForm";

class CreatorFundingTab extends Component {

    state = {
        creatorFundingDetails: [],
        seletedFundingDetail: '',
    }


    async componentWillMount() {

        let creatorFundingDetails = await getFundingDetails(2)
        // console.table(creatorFundingDetails)

        this.setState({
            creatorFundingDetails,
        })

    }

    onCardClick = (seletedFundingDetail) => {
        this.setState({
            seletedFundingDetail
        })
    }

    render() {
        return (
            <div>
                <CardList details={this.state.creatorFundingDetails}
                          onCardClick={this.onCardClick}/>
                <br></br>
                <CreateFundingForm/>
            </div>
        )
    }
}

export default CreatorFundingTab
