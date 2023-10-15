import express from 'express';
import cors from 'cors';
import path from 'path'; 
import db from './database/index.js';
import { routes } from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(new URL('../client/build', import.meta.url).pathname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(new URL('../client/build/index.html', import.meta.url).pathname));
  });

routes.forEach((route) => {
    app.use('/', route);
});

db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
