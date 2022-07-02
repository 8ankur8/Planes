
import { useState, useRef,useEffect } from "react"
import { Box, Center,Heading, Text,Link,Stack} from "@chakra-ui/react";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers"
import {abi} from "../abi/planes"

const { ethereum } = window


const Mint = () => {
  const [web3, setWeb3] = useState(undefined);
  const [amountMinted, setAmountMinted] = useState(9);
  const [success, setSuccess] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [address, setAddress] = useState(undefined);
  const [txHash, setTxHash] = useState(null);
  const [accounts, setAccounts] = useState([]);
   
  const friendRef = useRef();

const contractAddress = '0xD94E2987F62Ca65c46C6eD9d0094F4244407f463';
const provider = new ethers.providers.Web3Provider(ethereum,"any");

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress,abi, signer);

const isConnected = Boolean(accounts[0]);
 const connectAccount = async () => {
     if (ethereum) {
      const accounts = await ethereum.request({method: 'eth_requestAccounts'});
     setAccounts(accounts);
    }else console.log("make sure MetaMask is connected")
   };

  function handleError(err) {
    console.error(err);
    setSuccess(false);
    setError(err);
  }

  const getMints = async () => {
    if (contract) {
      contract
        .totalSupply()
        .then((res) => setAmountMinted(res.toString(10)),handleError);
    }
  }

  useEffect(() => {
    if (contract) {
      getMints();
    }
  }, [])

  const handleMint = async () => {
    if (contract) {
      // Bump GasLimit by about 20%
      const gasLimit = await contract.estimateGas
        .foldForSelf({ value: ethers.utils.parseEther("0.015") })
        .then((g) => g.div(100).mul(120));
      contract
        .foldForSelf({ value: ethers.utils.parseEther("0.015"), gasLimit })
        .then((tx) => {
          setTxHash(tx.hash);
          setSuccess(true);
        },handleError);
    }
  }
  
  const handleInputChange = (event) => setInput(event.target.value)

  const handleMintForFriend = async () => {
    if (contract) {
      // Bump GasLimit by about 20%
      const gasLimit = await contract.estimateGas
        .foldForFriend(input, { value:ethers.utils.parseEther("0.015") })
        .then((g) => g.div(100).mul(120));
      contract
        .foldForFriend(input, { value:ethers.utils.parseEther("0.015"), gasLimit })
        .then((tx) => {
          setTxHash(tx.hash);
          setSuccess(true);
        },handleError);
    }
  }

  return(
     <>
      <h1 className="head">  
        PLANES
      </h1>
      <Text color={"lightblue"}>Planes are joyful on-chain paper planes that feature a richly diverse and unique pool of non-rare traits. What's more, each Plane unlocks club membership and additional benefits the longer you hold them.
      <br/>So, what are you waiting for? Grab a smart contract, fold it up, and let it fly in the Metaverse
      </Text>  
     <Box p="1" maxW="600px" borderWidth="1px">
    <Center height={"auto"}>
      <div className="no1" fontSize={"10em"}>{amountMinted}
      </div>
    </Center>
    
    </Box>
     <Center height={"auto"}>
      <Stack textAlign={"center"} >
        <div className="no2">
          7777
        </div> 
        <Box p="5" maxW="360px" borderWidth="1px">
        {txHash && (
          <Text textAlign="center" color={"tomato"}>
            <Link isExternal href={`https://rinkeby.etherscan.io/tx/${txHash}`}>
              On Etherscan
            </Link>
          </Text>
        )}
        {isConnected ? (
            <Stack>
            <a href="#" className="neon" onClick={handleMint}>
            <span ></span>
            <span ></span>   
            Mint Plane 
            </a>
            <input ref={friendRef}
            placeholder="A friend's address or ENS name"
            value={input}
            onChange={handleInputChange}
            />
            <a href="#" className="neon" onClick={handleMintForFriend}>
            <span ></span>
            <span ></span>  
            Mint for a friend 
            </a>
            {address && <p textAlign="center">Connected Address {address}</p>}
            </Stack>

          ) : (
          <a className="neon" cursor='pointer' onClick={connectAccount}>
          <span ></span>
          <span ></span>  
          Connect
          </a>
        )}
        </Box>
      </Stack>
      </Center>
      </>  
  ) 
}

export default Mint
