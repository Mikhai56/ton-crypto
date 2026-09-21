# TON Jetton launch

This directory is the launch layer for a standard TON Jetton. The underlying repository remains the `@ton/crypto` library.

## Safety

- Testnet first.
- Never put a mnemonic, private key, or wallet password in GitHub.
- The recipient is a public TON address only.
- The deployer must sign transactions locally through a wallet; this repository does not store signing secrets.

## Initial token configuration

The first test token is intentionally a clearly identifiable test asset:

- Name: Mikhail Test Token
- Symbol: MTT
- Decimals: 9
- Initial supply: 1,000,000 MTT
- Network: TON testnet
- Recipient: supplied at launch time

A TON Jetton follows the TEP-74 interface: a master contract controls supply and separate Jetton-wallet contracts hold balances.

## Launch checklist

1. Validate the recipient TON address.
2. Compile and review the standard Jetton contracts.
3. Deploy the Jetton master on testnet.
4. Mint the initial supply to the recipient.
5. Verify the master and Jetton-wallet addresses in a TON explorer.
6. Confirm the recipient balance.
7. Only after successful testnet verification consider a mainnet deployment.

Do not treat MTT as USDT or as having monetary value. A custom Jetton is a separate asset.
