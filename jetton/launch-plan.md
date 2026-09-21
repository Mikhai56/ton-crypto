# MTT Testnet launch plan

Recipient: UQDGZdGhHxLyqpnjiH2E2I-egZGzbLnNKQQWglqvKOdzHs-_

Token:
- Name: Mikhail Test Token
- Symbol: MTT
- Decimals: 9
- Initial supply: 1,000,000 MTT
- Network: TON testnet

## Execution model

This project deliberately does not contain or request a seed phrase, private key, or wallet password.

The deployer wallet signs the deployment transaction locally through a wallet connection. The recipient address above is public and is only used as the destination for the initial token balance.

## Launch sequence

1. Connect a TON testnet wallet.
2. Verify that the connected wallet is funded with testnet TON.
3. Deploy a standard TEP-74 Jetton master/minter.
4. Mint the initial supply to the connected deployer wallet.
5. Transfer the initial supply to the recipient address above.
6. Verify the Jetton master, Jetton wallet, recipient balance, and transaction in a TON testnet explorer.
7. Keep the admin key under the deployer's control until QA is complete. Revoke admin only after all metadata and behavior have been verified.

## Important

MTT is a custom test token. It is not USDT and has no automatic monetary value.

Do not run this configuration on mainnet without a separate explicit decision.
