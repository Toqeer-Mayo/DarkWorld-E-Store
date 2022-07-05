const mongoose = require('mongoose');

const OderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [{
    pid: { type: String, required: true, unique: true },
    quanitity: { type: Number, default: 1 }
  }],
  adress: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true, default: "pending" }
}, { timestamps: true });

mongoose.models={}
export default mongoose.model("Oder",OderSchema)
