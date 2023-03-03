const express = require("express");
const router = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

router.route("/dwellings").get(async function (req, res) {
    try {
        const data = await dbo.getDb().collection("dwellings").find({}).toArray();
        res.status(200).send(data);
    } catch {
        res.status(400).type('json').send(err);
    }
});

router.route("/reviews/:id").get(async function (req, res) {
    try {
        const data = await dbo.getDb().collection("reviews").find({id: req.params.id}).toArray();
        res.status(200).send(data);
    } catch {
        res.status(400).type('json').send(err);
    }
});

module.exports = router;