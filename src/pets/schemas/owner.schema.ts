import { Schema } from 'mongoose';

export const OwnerSchema = new Schema({
  name: String,
  age: Number,
  cats: [
    {
      type: Schema.ObjectId,
      ref: 'Cat',
    },
  ],
  dogs: [
    {
      type: Schema.ObjectId,
      ref: 'Cat',
    },
  ],
});
