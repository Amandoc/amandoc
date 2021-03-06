const mongoose = require("mongoose");
const Counter = require("./counter");

//schema
const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;
const qnaSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  reg_id: {
    type: ObjectId,
    ref: "Patient",
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  numId: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: { type: Date },
});


//조회수 증가 및 글넘버 counter 모델에 저장. 
qnaSchema.pre("save", async function (next) {
  let qna = this;
  if (qna.isNew) {
    counter = await Counter.findOne({ name: "qnas" }).exec();
    if (!counter) counter = await Counter.create({ name: "qnas" });
    counter.count++;
    counter.save();
    qna.numId = counter.count;
  }
  return next();
});

module.exports = mongoose.model("Qna", qnaSchema);
