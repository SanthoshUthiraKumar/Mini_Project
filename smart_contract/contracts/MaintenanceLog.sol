// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MaintenanceLog {
    struct Maintenance {
        uint timestamp;
        string machineId;
        string description;
    }

    Maintenance[] public maintenanceLogs;

    event LogMaintenance(uint timestamp, string machineId, string description);

    function logMaintenance(string memory machineId, string memory description) public {
        maintenanceLogs.push(Maintenance(block.timestamp, machineId, description));
        emit LogMaintenance(block.timestamp, machineId, description);
    }

    function getMaintenanceLogs() public view returns (Maintenance[] memory) {
        return maintenanceLogs;
    }
}
