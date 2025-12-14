import express from 'express';
import { InsertHarapan } from './server/controllers/harapanController.js';
import cors from 'cors';
import { InsertKritik } from './server/controllers/kritikController.js';
import { InsertPerundungan } from './server/controllers/perundunganController.js';
import { loginAdmin } from './server/controllers/adminController.js';

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', loginAdmin);
app.post('/harapan', InsertHarapan);
app.post('/kritik', InsertKritik);
app.post('/perundungan', InsertPerundungan);

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
})