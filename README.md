# MongoDB $inc Operator: Silent Failure on Non-Existent Fields

This example demonstrates a common error when using the `$inc` operator in MongoDB.  If the field you're incrementing doesn't exist, the operation fails silently, leading to unexpected behavior. 

The `bug.js` file contains the problematic code. The `bugSolution.js` file demonstrates the correct approach, using the `$setOnInsert` operator to handle cases where the field doesn't exist.

This issue can be especially difficult to debug because it doesn't throw an error, leading to unexpected data inconsistencies.  The solution is to explicitly handle cases where fields may be missing using the $setOnInsert operator in conjunction with $inc to ensure the field is created and then incremented. 