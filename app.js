import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import notesRouter from "./src/routes/notes.js"

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.use('/notes', notesRouter);

app.listen(3030, (err) => {
  console.log(
    `Xogito Backend running on port 3030`
  );
});

export default app;
