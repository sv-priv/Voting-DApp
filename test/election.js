//truffle comes standard with mocha testing framework and chai assertion library

// once the contract is depoyed it stays on the network, thats why it is best to have tests to check if the contract has bugs

var Election = artifacts.require("./Election.sol");
// conttract and it are from mocha
// assert is from chai
//declare a contract and connect all of the accounts in our dev environment


contract("Election", function(accounts){
    var electionInstance;
    it("initializes with two candidates", function(){
        return Election.deployed().then(function(instance){
            return instance.candidatesCount();
        }).then(function(count){
            assert.equal(count,2);
        });
    });
    it("it initializes the candidates with the correct values", function(){
        return Election.deployed().then(function(instance){
            electionInstance  = instance;
            return electionInstance.candidates(1);
        }).then(function(candidate) {
            assert.equal(candidate[0],1,"contains the correct id");
            assert.equal(candidate[1],"Zaev","contains the correct name");
            assert.equal(candidate[2],0,"contains the correct votes count");
            return electionInstance.candidates(2);
        }).then(function(candidate) {
            assert.equal(candidate[0],2,"contains the correct id");
            assert.equal(candidate[1],"Mickovski","contains the correct name");
            assert.equal(candidate[2],0,"contains the correct votes count");

        });
    });
});

