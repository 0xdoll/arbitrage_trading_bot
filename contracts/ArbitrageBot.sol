//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Helloer {
    string private greeting;

    event SayWords(address sayer, string content);

    constructor(string memory _greeting) {
        console.log("Deploying a Helloer with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function saySome(string memory _words) public returns (string memory) {
        console.log("%s said '%s'", msg.sender, _words);
        emit SayWords(msg.sender, _words);
        return greeting;
    }
}
