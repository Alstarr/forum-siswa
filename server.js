import express from 'express';
import { GetHarapan, InsertHarapan, deleteHarapan } from './server/controllers/harapanController.js';
import cors from 'cors';
import { Getkritik, InsertKritik, deleteKritik } from './server/controllers/kritikController.js';
import { GetPerundungan, InsertPerundungan, deletePerundungan } from './server/controllers/perundunganController.js';
import { loginAdmin, totalHarapan, totalKritik, totalPerundungan } from './server/controllers/adminController.js';

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
app.get('/admin/harapan', GetHarapan);
app.get('/admin/kritik', Getkritik);
app.get('/admin/perundungan', GetPerundungan);
app.get('/admin/total-harapan', totalHarapan);
app.get('/admin/total-kritik', totalKritik);
app.get('/admin/total-perundungan', totalPerundungan);
app.delete('/admin/delete/harapan/:id', deleteHarapan);
app.delete('/admin/delete/kritik/:id', deleteKritik);
app.delete('/admin/delete/perundungan/:id', deletePerundungan);

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
})