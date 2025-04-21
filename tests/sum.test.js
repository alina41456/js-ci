const { sum } = require("../app/index");

function testSum() {
  if (sum(2, 3) !== 5) {
    throw new Error("❌ sum(2, 3) должно быть 5");
  }
  console.log("✅ Test passed");
}

testSum();
