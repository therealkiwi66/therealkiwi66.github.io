ethereum.on('accountsChanged', (accounts) => {
    console.log("account changed", accounts);
    window.location.href = "/logout";
});

ethereum.on('chainChanged', (chainId) => {
    console.log("chainId changed", chainId)
    window.location.reload();
});

function convert_ts(unix_timestamp) {
    const date = new Date(unix_timestamp * 1000);
    return date.toLocaleString();
}

(async () => {
    const {ethereum} = window;
    let provider = new ethers.providers.Web3Provider(ethereum);
    if (ethereum) {
        console.log("provider", provider);
    } else {
        alert('Please connect to Metamask');
        location.reload();
    }
    const block = await provider.getBlockNumber();
    console.log("current block:", block);

    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Account:", await signer.getAddress());

    const balance = await provider.getBalance(signer.getAddress());
    console.log("balance:", ethers.utils.formatEther(balance));
})();

