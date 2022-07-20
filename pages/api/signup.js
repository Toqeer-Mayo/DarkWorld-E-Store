import User from "../../models/User"
import connectDb from "../../middleware/db"

const handler = async (req, res) => {
    if (req.method == 'POST') {   
        let user =await User.findOne({"email":req.body.email})   
        if(user){
                res.status(400).json({ "success":false})
        }else{
        let u = new User({"name":req.body.name,"email":req.body.email,"password":req.body.password})
            await u.save()
            res.status(200).json({ "success": true})
        }
    } else
        res.status(400).json({ "error": " internal server error."})
}
export default connectDb(handler);