// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Faucet{ 
    function withdraw(uint amount) public {
        require(amount <= 1000000000000);
        payable(msg.sender).transfer(amount);
    }

    fallback() external payable {}
}