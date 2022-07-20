import User from "../../models/User"
import connectDb from "../../middleware/db"

const handler = async (req, res) => {
    if (req.method == 'POST') {   
        let user=await User.findOne({"email":req.body.email})
        if(req.body.email==user.email && req.body.password==user.password){
            res.status(200).json({ "success": true })
        }else
        res.status(400).json({ "success": false })
        
    } else
        res.status(400).json({ "error": "internal server error." })
}
export default connectDb(handler);