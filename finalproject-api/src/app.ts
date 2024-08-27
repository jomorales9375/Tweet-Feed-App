import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import userRoutes from './routes/userRoutes';
import messageRoutes from './routes/messageRoutes'
import { db } from './models';



const app = express();

app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));



// // routes
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

// Syncing our database
db.sync({ alter: true }).then(() => {
    console.info("connected to the database!")
});

app.listen(3000);