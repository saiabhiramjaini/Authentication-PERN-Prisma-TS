import express from 'express';
import authRoutes from './routes/auth';
import cookieParser from "cookie-parser";
import cors from 'cors';
import compression from 'compression';

const app = express();
require("dotenv").config();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use('/api/v1/auth', authRoutes);


app.listen(process.env.PORT, ()=>{
    console.log("Server running")
})