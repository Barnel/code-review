import { Schema } from 'mongoose';

export const DogSchema = new Schema({
  name: String,
  age: Number,
  breed: String,
  weight: Number,
  wagsTail: Boolean,
});
