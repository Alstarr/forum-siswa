import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';

const db = drizzle({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
})