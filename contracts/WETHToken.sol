// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract WETHToken is ERC20Burnable {

  event Received(address, uint);

  constructor() ERC20("WrappedETH", "WETH") {}

  function mint() public payable {
    super._mint(msg.sender, msg.value);
    emit Received(msg.sender, msg.value);
    //send ethers to cold wallet ?
  }

  function withdraw(address payable _address, uint256 _amount) payable public { //reenter ?
    require(balanceOf(msg.sender) >= _amount);
    burn(_amount);
    _address.transfer(msg.value);
  }
}
