require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant install lonely flock this'; 
let testAccounts = [
"0x53fc2314418399bba12e64eb815fbc57e17d8aa5631c2ab67a0db5ccc18b9b32",
"0x9038819ef1dc80ae3ab3b82eaf6bbe5ab01b756cec56ed4895605cce8e26e4d9",
"0xb7f05a25ee8e320652476f007a53be714c3e78677571ac018f81bf68caa6c662",
"0x774cf7138fb38fcf9000b4d0b468fc0dc7c0e1acd9e9b49d9ac2855a5a83c201",
"0xe9bafac4be2f6bd09b281e5d7e93c76540b991785bf95eec921aae01880c1083",
"0xf998085b5cedfa6c629ab2707cb1687f5eb0afc89a3b7633fc5c57c3c7d64abb",
"0x6c88fe77473be46edb062bf3461b991d9be011df4abb53119f539a93646efad9",
"0x1c7b13a3474190a9782615469c026340cb8b28e8dc71e79e9800df713132772b",
"0xa05f77904a67841e4c70a63ee674e3f1c0ad40c945db06cd0d4e9a3ecd2bb07c",
"0xc688a332d173cc3380104e9f67f2974eb099398d7c36a4f977aa057ea6b006b2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


