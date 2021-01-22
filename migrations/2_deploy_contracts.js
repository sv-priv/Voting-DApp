var Election = artifacts.require("./Election.sol");


//election artifact that repsresents our smart contract so we can interact with it


module.exports = function(deployer) {
  deployer.deploy(Election);
};
