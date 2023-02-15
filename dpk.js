const crypto = require("crypto");

const stringify = (input) => {
  // convert data to string
  return JSON.stringify(input)
}

const hashData = (data) => {
  // check if data is string, if not stringify data
  const inputData = typeof data !== 'string' ? stringify(data) : data
  // return hash data using inbuilt functions from 'crypto' module
  return crypto.createHash("sha3-512")
               .update(inputData)
               .digest("hex")
}

const assignEvent = (candidate, event) => {
  // if partitionkey is present in event, assign the key candidate
  // else perform hash on event itself
  candidate = event.partitionKey ? event.partitionKey : hashData(stringify(event))
}

const assignKeyToCandidate = (candidate) => {
  // if type of candidate is not string, convert it to string
    candidate = typeof candidate !== 'string' ? stringify(candidate) : candidate
} 
  

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  // check for event presence
  if (event) {
    // if event present, assign event to candidate
    assignEvent(candidate, event)
  }

  // check if candidate has truthy value
  if (candidate) {
    // if present, assign key to candidate
    assignKeyToCandidate(candidate)
  } else {
    // if not present, assign trivial partition key
    candidate = TRIVIAL_PARTITION_KEY;
  }

  // if string length of candidate is more than max partition key length
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    // hash the candidate value
    candidate = hashData(candidate)
  }
  // return candidate
  return candidate;
};