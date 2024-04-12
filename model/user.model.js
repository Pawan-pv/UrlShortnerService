
import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  
},
                                       { timstamps: true}
                                      );

// Create the user model
const User = mongoose.model('user', userSchema);

export { User}
