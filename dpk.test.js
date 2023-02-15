const { deterministicPartitionKey } = require("./dpk");
const longString =
  "longstringxyz7b361f07dlongstringxyzb3555ffd2longstringxyzdbe74156longstringxyzc36longstringxyzlongstringxyzlongstringxyzlongstringxyzlongstringxyzlongstringxyzlongstringxyzlongstringxyzlongstringxyzlongstringxyzlongstringxyzlongstringxyzlongstringxyzlongstringxyzlongstringxyz";

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input or null input", () => {
    var trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");

    const trivialKey = deterministicPartitionKey(null);
    expect(trivialKey).toBe("0");
  });

  it("Returns a 128 character hash when given a falsy partition key", () => {
    var trivialKey = deterministicPartitionKey({
      partitionKey: 0,
    });
    expect(trivialKey.length).toBe(128);

    trivialKey = deterministicPartitionKey({
      partitionKey: undefined,
    });
    expect(trivialKey.length).toBe(128);

    trivialKey = deterministicPartitionKey({
      partitionKey: null,
    });
    expect(trivialKey.length).toBe(128);
  });
  
  it("Returns the partition key itself when gived a valid parition key", () => {
    const input = {
      partitionKey: "ClipboardHealth",
    };
    const trivialKey = deterministicPartitionKey(input);
    expect(trivialKey).toBe(input.partitionKey);
  });

  it("Returns a 128 character hash when given a partion key string that's longer that the max length", () => {
    const input = {
      partitionKey: longString,
    };
    const trivialKey = deterministicPartitionKey(input);
    expect(trivialKey.length).toBe(128);
  });

  it("Returns the stringified trivialKey value when passed a truthy trivialKey value who's length when strified is less than the max key length", () => {
    var trivialKey = deterministicPartitionKey({
      partitionKey: [],
    });
    expect(trivialKey.length).toBe(2);

    const testKey = {
      key: "value",
    };
    trivialKey = deterministicPartitionKey({
      partitionKey: testKey,
    });
    expect(trivialKey.length).toBe(JSON.stringify(testKey).length);
  });
});

