import express,{Application,Response,Request} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app:Application = express();

app.use(cors());
app.use(bodyParser.json());

const practices = [
    { id: 1, name: 'Dentist', description: 'Dental practice management' },
    { id: 2, name: 'Clinic', description: 'General medical clinic' },
    { id: 3, name: 'Chiropractor', description: 'Chiropractic practice' },
];

app.get('/api/practices', (req: Request, res: Response) => {
    res.json(practices);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("server is running on port: ", port)
})