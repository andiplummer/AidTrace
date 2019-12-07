const AidTrace= artifacts.require("./AidTrace.sol");

contract("AidTrace, accounts => {
  it("...should store the value 89.", async () => {
    const aidTracenstance = await Aidtrace.deployed();

    // Set value of 89
    await aidTraceInstance.set(89, { from: accounts[0] });

    // Get stored value
    const storedData = await aidTraceInstance.get.call();

    assert.equal(storedData, 89, "The value 89 was not stored.");
  });
});
