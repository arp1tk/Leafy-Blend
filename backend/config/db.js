import mongoose from 'mongoose';

const connectDB = async () => {
  try {
  
    const con = await mongoose.connect(process.env.MONGO_URL, {
      
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,        
    });

    console.log(`✅ MongoDB connected: ${con.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
