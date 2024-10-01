import app from "./app.js"
import {connectionToDatabase} from "./db/connection.js"


const port = 4500;

connectionToDatabase().then(() =>{
    app.listen(port, () => {
        console.log(`server running at port: ${port}`)
    })
}).catch((err) =>{
    console.log(err)
} )
