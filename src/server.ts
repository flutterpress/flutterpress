import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'app', 'dist')));

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'This is your backend response 2' });
});

app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'app', 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});