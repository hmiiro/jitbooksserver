import * as express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => res.json({ son: 'Hakim' }));
export const startServer = async () =>
  app.listen(PORT, () =>
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
  );
