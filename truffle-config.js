require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign strong cruise noble method include kiwi slot gasp'; 
let testAccounts = [
"0x8e771fa770ca64afef4c06e22aa2aed91a51a0542e13a4bdb785bc5673cb92d4",
"0x62de905429326f8278fad9e73de83add65d543ce847688e7dbd807868e8a6a49",
"0xd750f5bccef4fa3824da63869a54b05fde5868f019523bdf058d29f0896c02ec",
"0xa4b558d98b7a79957e2cf66070204b8f4fddf06ea6b1163ade2cfd197317edce",
"0x339dbc7f5cb6200a5c401324be5ea4976085b3b61dd7b6f1dcec8e58a94eea21",
"0x6577893f2fd220ef5b8b0df4c8271616101ffaee5e1213fd94ad72b78def6c2c",
"0x6cccc82568ef4f28aadb248664ff0759d0b630d3af26b9d40ee6d0a141fccdfd",
"0xdecdaa76788e4aa1a1271b77d812c81bc14aa01b97a6959ca9fa141d73ba01d4",
"0x1b9ca07deb8985d54e28d0b10e0d526ee32305ebd38643aef2e613de44b884ee",
"0x5e495e076e52ee7eeef285b1ec9d38c0423b13e8e2e323a5461a7b7cee027713"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
