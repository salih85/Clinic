const Patient = require('../models/Patient');
const doctor = require('../models/Doctor');

exports.Addpatient = (req, res) => {
    res.render('dask/add-patient');
};

exports.createPatient = async (req, res) => {
    try {
        const { id,name, phone,age,gender,bloodGroup,address,lastVisit, }=req.body
         await Patients.create({
            id: `P${Date.now()}`,
            name,
            phone,
            age,
            gender,
            bloodGroup,
            address,
            lastVisit,
            createdAt: new Date()
        });
       res.redirect('/');
    } catch (err) {
         console.log(e);
          res.redirect("/");
    }
};

exports.listpatients =async (req,res)=>{
    try{
        const patients =await parent.find()
        return res.render('dask/patients',{patients})
    }catch(e){
        console.log(e)
    }
};
