const express = require("express");
const router = express.Router();

personnelModel = require("../../models/Personnel");

router.get("/", async (req, res, next) => {
  try {
    const personnel = await personnelModel.find({});
    res.json(personnel);
  } catch (error) {
      console.log(error);
      next(error);
  }
});

router.post("/" ,async (req,res,next)=>{
    try {
        const personnel = new personnelModel(req.body);
        await personnel.save();
        res.json(req.body);
      } catch (e) {
        console.log(e);
        next(e);
      }
})
module.exports = router;
