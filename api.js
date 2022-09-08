const express = require("express");
const cors = require("cors");
const { diaryData, foodData } = require("./dummy.js");

const app = express();
app.use(express.json());

app.use(cors());

app.get("/api/:type", async (req, res) => {
    let { type } = req.params;

    if (type == "diaries") {
        res.send(diaryData);
    } else if (type == "foods") {
        res.send(foodData);
    } else {
        res.send("type is not correct.");
    }
});

app.post("/api/diaries", async (req, res) => {
    const newPost = {
        id: req.body.id,
        image: req.body.image,
        title: req.body.title,
        comment: req.body.comment,
        weather: req.body.weather,
        campingDate: req.body.campingDate,
    };

    diaryData.push(newPost);
    res.send(diaryData);
});

app.post("/api/foods");

app.listen(8000, () => console.log("Start Server : localhost:8000"));
