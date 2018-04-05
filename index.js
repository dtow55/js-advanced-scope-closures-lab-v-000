function produceDrivingRange(blockRange) {
  return function(beg, end) {
    beg = beg.slice(0, -2);
    end = end.slice(0, -2);
    tripBlocks = end-beg;
    console.log(tripBlocks)
    if (tripBlocks <= blockRange) {
      return `within range by ${blockRange - tripBlocks}`;
    } else {
      return `${tripBlocks - blockRange} blocks out of range`;
    }
  };
}

function produceTipCalculator(percentTip) {
  return function(fare) {
    return percentTip * fare;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}