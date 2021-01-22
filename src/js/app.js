App = {
  web3Provider: null,
  contracts : {},
  account: '0x0',
  init: function(){
    return App.initWeb3();
  },
  // initializing web3 connects out application to a local blockchain
  initWeb3: function(){

    if(typeof web3 !== 'undefined'){
      // if a web3 instance is already provided by metamask

      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    }else{
      //specify default instance if no web3 insatnce is provided

      App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
      web3 = new Web3(App.web3Provider);

    }

      return App.initContract();
  },
  initContract: function(){

  }





}