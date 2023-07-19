//export const address = "0xc3F5E8A98B3d97f19938E4673Fd97C7cfd155577"; // mainnet
//export const address = "0x852900dCda9846a28486b641e5520Abf3cABc775"; // rinkeby
//export const address = "0x9E589134D79A25E0e570f4F603bE4Cb7Fd2C73dA"; // goerli

export const abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "MaxMintsReached",
        type: "error",
    },
    {
        inputs: [],
        name: "PriceNotMet",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "approved",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
    },
    {
        inputs: [],
        name: "MaxPlanes",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
          {
            internalType: "address",
            name: "walletAddress",
            type: "address",
          },
        ],
        name: "foldForFriend",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "foldForSelf",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },  
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "withdrawAll",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    }  
      
];
