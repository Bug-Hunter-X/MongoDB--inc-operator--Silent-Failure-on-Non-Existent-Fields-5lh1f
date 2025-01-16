```javascript
// Incorrect usage of $inc operator
db.collection.updateOne({"_id":1},{$inc:{a:1,b:2}});
```