# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
Too many "If else" conditions created clustered and unreadable code. Hence
I used 'DRY' and 'SOLID' principles in refactored code. I created functions to perform only single operation and reused functions as much as possible. The main 
function clearly explains user what's going on inside the function line by line.
Renamed the functions so that it clearly explain what it does like stringify, assignEvent, assingKeyToCandidate, hashData. I also believe adding comments makes code
readable to any new person joining the team and easy to understand hence, added a few lines of comments what the function does.