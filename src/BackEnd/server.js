import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
const port = 4000;

dotenv.config();

mongoose.connect(process.env.VITE_MONGO_CONNECTION);

console.log(mongoose.connection.readyState); 