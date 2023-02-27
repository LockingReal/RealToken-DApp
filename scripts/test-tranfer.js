const RealToken = artifacts.require("RealToken.sol")

const fromWei = (bn)=>{
    return web3.utils.fromWei(bn,"ether");
}

const toWei = (number)=>{
    return web3.utils.toWei(number.toString(),"ether");
}

module.exports = async function (callback){
    const realtoken =await RealToken.deployed()
    let res1 = await realtoken.balanceOf("0x2c2C8F5B4041907c7BFBD3Af2ffF6a832FA019ec");

    console.log("第一个账号",fromWei(res1))

    await realtoken.transfer("0xFe6023eEF9bb6dA8e5F33A073eddE35b02F1C0F0",toWei(10000),{
        from:"0x2c2C8F5B4041907c7BFBD3Af2ffF6a832FA019ec"
    })

    let res2 = await realtoken.balanceOf("0x2c2C8F5B4041907c7BFBD3Af2ffF6a832FA019ec");

    console.log("第一个账号",fromWei(res2))

    let res3 = await realtoken.balanceOf("0xFe6023eEF9bb6dA8e5F33A073eddE35b02F1C0F0");

    console.log("第二个账号",fromWei(res3))
    callback()
}