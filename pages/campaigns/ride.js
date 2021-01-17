import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
 
class CampaignRide extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' })

        try{
            const accounts = await web3.eth.getAccounts();
            await factory.methods
            .createCampaign(this.state.minimumContribution)
            .send({
                from: accounts[0]
            });
            Router.pushRoute('/');
        } catch(err) {
            this.setState({ errorMessage: err.message })
        }

        this.setState({ loading: false })
    };

    render() {
        return (
            <Layout>
                <h3>Create a Campaign</h3>
                <Item.Group divided>
                <Item>
                <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

                <Item.Content>
                    <Item.Header as='a'>12 Years a Slave</Item.Header>
                    <Item.Meta>
                    <span className='cinema'>Union Square 14</span>
                    </Item.Meta>
                    <Item.Description>{paragraph}</Item.Description>
                    <Item.Extra>
                    <Label>IMAX</Label>
                    <Label icon='globe' content='Additional Languages' />
                    </Item.Extra>
                </Item.Content>
                </Item>
                </Item.Group>
            </Layout>
        );
    }
};

export default CampaignRide;