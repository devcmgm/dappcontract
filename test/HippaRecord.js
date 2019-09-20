const HippaRecord = artifacts.require("./HippaRecord.sol");

contract("HippaRecord", accounts => {
    it("should store the string 'Hey there!'", async() => {
        const myHippaRecord = await HippaRecord.deployed();

        // Set myString to "Hey there!"
        await myHippaRecord.set("Hey there!", { from: accounts[0] });

        // Get myString from public variable getter
        const storedString = await myHippaRecord.myString.call();

        assert.equal(storedString, "Hey there!", "The string was not stored");
    });
});