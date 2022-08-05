const app = require("./app")
const connectDatabase = require("./database/db.js");


connectDatabase();
app.listen(4000, ()=>{
    console.log(`Server is working on http://localhost:4000`)
})
