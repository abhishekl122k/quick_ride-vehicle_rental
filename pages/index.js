import React, { Component, useState } from 'react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Card, Button } from 'semantic-ui-react';
import { Link } from '../routes';

import Map from '../components/Map';

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns: campaigns };
    }

    state = {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      };

    renderCampaigns (){
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: 
                    <Link route={`/campaigns/${address}`}>
                    <a>View Campaign</a>
                    </Link>,
                fluid: true
            };
        });

        return <Card.Group items={items}/>;
    }

    render(){
        return (
            <div>
            <Layout>
            
            <Link route='/campaigns/new'>
                <a>
                    <Button
                    floated="right"
                    content="Lend"
                    icon="add"
                    primary={true}
                    />
                </a>
            </Link>
            <Map/>   
            {this.renderCampaigns()}
            </Layout>
            </div>
        );
    }
    
}

export default CampaignIndex;