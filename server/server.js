import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRoutes from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/user', userRoutes);
app.use('/api/image', imageRouter);

const startServer = async () => {
    try {
        await connectDB();

        app.get('/', (req, res) => {
            res.send('Hello from server');
        });

        app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
    } catch (err) {
        console.error('❌ Failed to start server:', err.message);
        process.exit(1);
    }
};

startServer();
