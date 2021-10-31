const express =  require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 1200;

let User = {
    username: "Bill",
    password: "badPassword",
    email: "fakeaddress@test.org",
    courses: {
        course: {
            classID: "CMSC2204",
            courseName: "Mobile Device Programming/Connectivity",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        },
        
        course1: {
            classID: "CMSC2201",
            courseName: "Database Modeling II",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        },

        course2: {
            classID: "CMSC1255",
            courseName: "Server-Side Programming",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        }
    }
}

app.get('/getUser', (req, res) => {
    try{
        return res.status(200).json(User);
    }
    catch{
        return res.status(500);
    }
});

app.post('/addUser', (req,res) => {
    try{
        let userVar = req.body;

        console.log(userVar);
        return res.status(200).json("Added user " + req.body.user.username + " successfully");
    }
    catch{
        return res.status(500);
    }
})

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
})