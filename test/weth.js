const WETHToken = artifacts.require("WETHToken");
const truffleAssert = require("truffle-assertions")

contract("WETHToken", function (accounts) {
  const deployerAddress = accounts[0];
  const addressOne = accounts[1];
  const addressTwo = accounts[1];
  it("should assert true", async function () {
    await WETHToken.deployed();
    return assert.isTrue(true);
  });

  it("should mint the same value of tokens as sent eth", async () => {
    let token = await WETHToken.deployed();

    await token.mint({ from: addressOne, value: 2})
    await truffleAssert.passes(
        (await token.balanceOf(addressOne)).toNumber() == 2 //token balance
    )
  })

  it("should not be able to withdraw more than the balance tokens", async () => {
    let token = await WETHToken.deployed();

    await truffleAssert.fails(
        token.withdraw(addressTwo, 3, { from: addressOne })
    )
  })

  it("")
});
