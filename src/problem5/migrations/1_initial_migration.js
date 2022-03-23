const BalanceProvider = artifacts.require("BalanceProvider");

module.exports = function (deployer) {
  deployer.deploy(BalanceProvider);
};
