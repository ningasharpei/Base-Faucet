// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BaseFaucet {
    address public owner;
    uint256 public tokenAmount;
    mapping(address => uint256) public lastRequest;

    uint256 public cooldown = 1 days;

    constructor(uint256 _tokenAmount) {
        owner = msg.sender;
        tokenAmount = _tokenAmount;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    function requestTokens() public {
        require(block.timestamp - lastRequest[msg.sender] >= cooldown, "Please wait 24 hours before requesting again.");
        require(address(this).balance >= tokenAmount, "Insufficient balance in faucet.");

        lastRequest[msg.sender] = block.timestamp;
        payable(msg.sender).transfer(tokenAmount);
    }

    function deposit() public payable onlyOwner {}

    function setTokenAmount(uint256 _newAmount) public onlyOwner {
        tokenAmount = _newAmount;
    }

    function setCooldown(uint256 _newCooldown) public onlyOwner {
        cooldown = _newCooldown;
    }

    function withdraw(uint256 _amount) public onlyOwner {
        payable(owner).transfer(_amount);
    }

    receive() external payable {}
}
