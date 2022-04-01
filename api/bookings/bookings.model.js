const mongoose = require('mongoose');

const BookingSchema=new mongoose.Schema({
  parking:{
      type:String,
  },
  user:{
      type:String,
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
      type:Date,
      require:true,
  },
  endTime:{
      type:Date,
      require:true,
  },
  observations:{
      type:String,
      trim:true,
  }
},{
  timestamps: true,
  versionKey: false,
});
module.exports=mongoose.model('Booking',BookingSchema)
