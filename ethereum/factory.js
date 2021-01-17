import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xb2F3c5B32921C73588bc2040CFd4D07315591E77'
);


export default instance;


