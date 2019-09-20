pragma solidity ^0.5.0;

contract HippaRecord {
  string public myString = "Hello World";
  function set(string memory x) public {
    myString = x;
  }
}