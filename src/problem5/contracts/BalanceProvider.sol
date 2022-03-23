// SPDX-License-Identifier: BUSL-1.1
pragma solidity >=0.8.6;
pragma experimental ABIEncoderV2;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract BalanceProvider {
  struct Balance {
    address token;
    uint256 balance;
  }

  constructor() {

  }

  function getBalances(address user, address[] memory tokens) 
    public
    view
    returns (Balance[] memory balances)
  {
    balances = new Balance[](tokens.length);
    for (uint i = 0; i < tokens.length; i++) {
      uint256 balance = IERC20(tokens[i]).balanceOf(user);
      balances[i] = Balance(tokens[i], balance);
    }
  }
}
