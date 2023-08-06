const Report = require('../../../models/reports');

module.exports.filterReportByStat = async(req, res)=>{
    try{
        let reports = await Report.find({status: req.query.status});
        return res.json(200, {data:reports});
    }catch(err){
        console.log(err);
        return res.json(422, {error: err});
    }
}