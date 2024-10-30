const MaintenanceLog = artifacts.require("MaintenanceLog");

module.exports = function (deployer) {
  deployer.deploy(MaintenanceLog);
};

