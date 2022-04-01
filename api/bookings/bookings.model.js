const mongoose = require('mongoose');

const BookingSchema=new mongoose.Schema({
  parking:{
      type:Schema.ObjectId,
      ref:"parkings",
  },
  user:{
      type:Schema.ObjectId,
      ref:"users",
  },
  market:{
      type:Number,
      require:true,
  },
  startDate:{
      type:Date,
      require:true,
  },
  endDate:{
      type:Date,
      require:true,
  },
  startTime:{
      type:time,
      require:true,
  },
  endTime:{
      type:time,
      require:true,
  },
  place:{
      type:String,
      require:true,
      trim:true,
  },
  observations:{
      type:String,
      trim:true,
  },
  timestamps: true,
  versionKey: false,
});
module.exports=mongoose.model('Booking',BookingSchema)
