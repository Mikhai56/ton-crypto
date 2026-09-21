/**
 * MTT launcher design note.
 *
 * The actual blockchain transaction must be approved by a TON wallet.
 * This script intentionally contains no private key or seed phrase.
 *
 * Recommended production/testnet flow:
 * browser wallet -> TON Connect -> standard Jetton deploy/mint transaction
 * -> recipient transfer -> explorer verification.
 *
 * The existing @ton/crypto package in this repository remains the crypto
 * primitive layer; this launcher is kept isolated under jetton/.
 */

import { Address } from '@ton/core';

const recipient = Address.parse('UQDGZdGhHxLyqpnjiH2E2I-egZGzbLnNKQQWglqvKOdzHs-_');

console.log('MTT testnet recipient:', recipient.toString());
console.log('Token: Mikhail Test Token (MTT)');
console.log('Supply: 1,000,000 MTT');
console.log('Network: TON testnet');
console.log('Signing must be performed by the connected wallet; no private key is stored here.');
