GNU GPL v3
!!!USE AT YOUR OWN RISK!!!
Experimental Technology

# xLock/xEth
xLock is an open, 0 fee defi platform for infinite locked liquidity. Forked from uLock, inspired by rootkit.

## About
Lock up to 2**100 xETH, 100% backed 1:1 by ETH.
Helps solve liquidity problems on Uniswap without any protocol upgrades.

dApp:
https://xlock.eth.link

## How it works:
When liquidity is locked on a capped token, no more than the cap minus locked reserves can be sold.
With this difference, a calculatable amount of xEth in Uniswap is permanently locked and can never be redeemed for Eth.
If the contract knows ahead of time that the xEth will be permanently locked, it can issue unbacked xEth.
Other xEth can only be minted through depositing Eth.
Thus all circulating xEth is 1:1 backed by Eth.

Feel free to farm the Eth/xEth pair or run arbitration bots between the xEth wrapper and the Uniswap pair.

## Contract deployments
### Mainnet
xeth: `0x29B109625ac15BC4577d0b70ACB9e4E27F7C07E8`
xlocker proxy: `0xAA13f1Fc73baB751Da08930007D4D847EeEafAA2`
xlocker logic: `0xcf81bb0836b8157611a84be08a453b3abb1ca479`

### Ropsten
xeth: `0xA2F864C1c1a27f257c10FfBCFAeCa252B5610B4b`
xlocker proxy: `0x45a0A95Df3DAE8A9741328a0b7ce04DF55C22124`
xlocker logic: `0xec99e3e28abd1d9a724b8639ec02cdeaae2e90fe`
