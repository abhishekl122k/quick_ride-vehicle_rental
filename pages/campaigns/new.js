import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import Map from '../../components/Map';
 
class CampaignNew extends Component {
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
                <h3>Rent Vehicle</h3>
                <Item.Group divided>
                <Item>
                <Item.Image src='https://cdn2.droom.in/photos/listing/2015-12-21/c8ae4b0fd6faf534fd40b78bd4d5a121_large.jpg' />

                <Item.Content>
                    <Item.Header as='a'>Sedan for Rent : Chennai</Item.Header>
                    <Item.Meta>
                    <span className='cinema'>Lender Rating: 4.1/5</span>
                    </Item.Meta>
                    <Item.Description>Toyota Etios for rent. Time available 3:10 to 3:20 PM</Item.Description>
                    <Item.Extra>
                    <Label>Sedan</Label>
                    <Label icon='globe' content='Cost: 12000 Wei' />
                    </Item.Extra>
                </Item.Content>
                </Item>
                </Item.Group>
                    <Button floated='right' loading={this.state.loading} primary type='submit'>Rent</Button>
                    <Map/>
            </Layout>
        );
    }
};

export default CampaignNew;
