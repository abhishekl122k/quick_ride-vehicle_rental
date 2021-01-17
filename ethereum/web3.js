import Web3 from 'web3';

let web3; 

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    // we are in the client browser server and metamask is running.
    
    web3 = new Web3(window.web3.currentProvider);
}else {
    // we are on the next js local server *OR* metamask is not running.

    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/c92640a6fb404d95946203bbe4d032de'
    );
    web3 = new Web3(provider);
}

export default web3;