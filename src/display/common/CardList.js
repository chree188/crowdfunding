import React from 'react'
import {Card, Image, List, Progress} from 'semantic-ui-react'


const CardList = (props) => {

    let details = props.details
    // console.log(details.)

    let cards = details.map(detail => {
        return <CardFunding key={detail.fundingAddress}
                            detail={detail}

        />
    })

    return (
        <Card.Group itemsPerRow={4}>
            {
                cards
            }
        </Card.Group>
    )
}

const CardFunding = (props) => {
    let detail = props.detail

    let {
        fundingAddress,
        manager,
        projectName,
        targetMoney,
        supportMoney,
        leftTime,
        balance,
        investorCount
    } = detail

    let percent = parseFloat(balance) / parseFloat(targetMoney) * 100
    let src = '/images/misty.jpg'

    return (

        <Card>
            <Image src={src}/>
            <Card.Content>
                <Card.Header>{projectName}</Card.Header>
                <Card.Meta>
                    <span className='date'>剩余时间:{leftTime}</span>
                    <Progress percent={percent} progress/>
                </Card.Meta>
                <Card.Description>Happy!</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <List horizontal style={{display: 'flex', justifyContent: 'space-around'}}>
                    <List.Item>
                        <List.Content>
                            <List.Header>已筹</List.Header>
                            {balance} wei
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>已达</List.Header>
                            {percent}%
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>参与人数</List.Header>
                            {investorCount}
                        </List.Content>
                    </List.Item>
                </List>
            </Card.Content>
        </Card>
    )

}

export default CardList