const contractABI = [/* Paste ABI here */];
const contractAddress = '0xYourContractAddress';

async function requestTokens() {
    if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const faucetContract = new web3.eth.Contract(contractABI, contractAddress);

        try {
            await faucetContract.methods.requestTokens().send({ from: accounts[0] });
            document.getElementById('status').innerText = 'Tokens successfully requested!';
        } catch (error) {
            document.getElementById('status').innerText = `Error: ${error.message}`;
        }
    } else {
        document.getElementById('status').innerText = 'MetaMask is not installed.';
    }
}

document.getElementById('requestTokens').addEventListener('click', requestTokens);
