const chain_id = 1;
const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"addTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"},{"internalType":"uint256[]","name":"_expiries","type":"uint256[]"}],"name":"airdropToMembers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"authenticateUser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"checkTokenExpiry","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"expiryTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"ownerBatchMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"ownerBatchRenewTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_receiver","type":"address"}],"name":"ownerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerRenewToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint8","name":"_days","type":"uint8"}],"name":"ownerSetTokenExpiry","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"removeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"renewToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renewalPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_renewalPrice","type":"uint256"}],"name":"updateRenewalPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenPrice","type":"uint256"}],"name":"updateTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawBalance","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const contract_address = '0x8910f83dE861479DCaE09F91a8C12D9C20A7c75b';

(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let contract = new ethers.Contract(contract_address, abi, provider.getSigner());
    const network = await provider.getNetwork();
    console.log(network)
    if (network["chainId"] === chain_id) {
        const tokenPrice = await contract.tokenPrice();
        const purchase_button = document.getElementById('purchase');
        if (purchase_button !== null) {
            const purchase_price_in_eth = ethers.utils.formatEther(tokenPrice);
            const isSaleActive = await contract.saleIsActive();
            if (isSaleActive) {
                purchase_button.innerText = `Purchase (${purchase_price_in_eth} ETH)`;
                purchase_button.disabled = false;
            }
             else {
                purchase_button.disabled = true;
                purchase_button.innerText = `SOLD OUT (${purchase_price_in_eth} ETH)`;
            }
        }

        const renewal_price = await contract.renewalPrice();
        const renewal_button = document.getElementById('renew');
        if (renewal_button !== null) {
            const renewal_price_in_eth = ethers.utils.formatEther(renewal_price);
            renewal_button.innerText = `Renew (${renewal_price_in_eth} ETH)`;
        }
    } else {
        alert("network chain id doesn't match mainnet");
    }
})();

async function renewLicense(token_id) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const network = await provider.getNetwork();
    console.log(network)
    if (network["chainId"] === chain_id) {
        let contract = new ethers.Contract(contract_address, abi, provider.getSigner());
        const renewal_price = await contract.renewalPrice();
        let estimatedGas = await contract.estimateGas.renewToken(token_id, {
            value: renewal_price,
        }).catch(
            function (error) {
                console.log(error);
                alert("Error Renewing. Check console for more info");
                location.reload();
            }
        );
        console.log("renewal_price", renewal_price)
        //console.log("estimatedGas", estimatedGas)
        estimatedGas = parseInt(parseInt(estimatedGas._hex, 16) * 1.2) // 20% extra gas
        estimatedGas = ethers.utils.hexlify(estimatedGas);
        console.log("estimatedGas", estimatedGas)
        await contract.renewToken(token_id, {
            value: renewal_price,
            gasLimit: estimatedGas,
        }).then(function (tx) {
            console.log("tx", tx);
            alert("Successfully Renewing. Please wait for the transaction to be confirmed.");
            //const etherscan_url = "https://rinkeby.etherscan.io/tx/" + tx.hash;
            //console.log("etherscan_url", etherscan_url);
            //window.open(etherscan_url, '_blank').focus();
            location.reload();
        }).catch(
            function (error) {
                console.log(error);
                alert("Error Renewing. Check console for more info");
                location.reload();
            }
        );
    } else {
        alert("network chain id doesn't match mainnet");
        location.reload();
    }
}


async function purchaseLicense() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const network = await provider.getNetwork();
    await provider.send("eth_requestAccounts", []).catch(
        function (error) {
            console.log(error);
            alert("Error Requesting Account. Check console for more info");
            location.window = "/login";
        }
    );
    console.log(network)
    if (network["chainId"] === chain_id) {
        let contract = new ethers.Contract(contract_address, abi, provider.getSigner());
        const tokenPrice = await contract.tokenPrice();
        const isSaleActive = await contract.saleIsActive();
        console.log("isSaleActive", isSaleActive)
        if (isSaleActive === false) {
            alert("Sale is not active");
            location.reload();
        }
        let gasPrice = await provider.getGasPrice();
        console.log("gasPrice", gasPrice);
        let estimatedGas = await contract.estimateGas.mint({
            value: tokenPrice,
        }).catch(
            function (error) {
                console.log(error);
                alert("Error Purchasing. Sale not Active. Check console for more info");
                location.reload();
            }
        );
        estimatedGas = parseInt(parseInt(estimatedGas._hex, 16) * 1.2) // 20% extra gas
        estimatedGas = ethers.utils.hexlify(estimatedGas);
        console.log("estimatedGas", estimatedGas)
        contract.mint({
            value: tokenPrice,
            gasLimit: estimatedGas
        }).then(function (tx) {
            console.log("tx", tx);
            alert("Successfully Purchasing. Please wait for the transaction to be confirmed.");
            //const ether_scan_url = "https://rinkeby.etherscan.io/tx/" + tx.hash;
            //window.open(ether_scan_url, '_blank').focus();
            location.reload();
        }).catch(
            function (error) {
                console.log(error);
                alert("Error Purchasing. Check console for more info");
                location.reload();
            }
        );
    } else {
        alert("network chain id doesn't match mainnet");
        //location.reload();
    }
}