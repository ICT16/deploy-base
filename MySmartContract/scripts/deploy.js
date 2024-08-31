async function main() {
    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy(1000000); // 1,000,000 tokens
    await myToken.deployed();
    console.log("MyToken deployed to:", myToken.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  