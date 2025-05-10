import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    // Connect to Mongo connection string from .env
    await mongoose.connect(process.env.MONGODB_CONNECT, {
      useNewUrlParser: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(' MongoDB connection failed:', error.message);
  }
};

export default dbConnect;
