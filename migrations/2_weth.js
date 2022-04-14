const WETHToken = artifacts.require("WETHToken");

module.exports = function (deployer) {
    deployer.deploy(WETHToken);
}
