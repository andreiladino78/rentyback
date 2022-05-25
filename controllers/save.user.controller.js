const { db } = require("../config/config");
const { SaveUserRq } = require("../models/dto/save.user.rq.dto");
const { create } = require("../services/user.service");

exports.SaveUser = async (req,res) => {

    try {

        SaveUserRq.validate(req.body);

        let message = await create(req.body);

        res.status(200).json({
            statusCode: 200,
            message: message
        });
    } catch (e) {
        res.status(400).json({
            statusCode: 400,
            message: e.message
        })
    }
}