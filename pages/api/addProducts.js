import Product from "../../models/Product"
import connectDb from "../../middleware/db"

const handler=async (req, res)=>{
    if(req.method == 'POST'){
        for(let i=0;i<req.body.length;i++){
            var p = new Product({
            title:req.body[i].title,
            slug :req.body[i].slug,
            dec :req.body[i].dec,
            img :req.body[i].img,
            category :req.body[i].category,
            price :req.body[i].price,
            availabeQty :req.body[i].availabeQty
        })
        await p.save()
        res.status(200).json({sucess:"Add Sucessfully."})
        }
    }
  }
export default connectDb(handler);