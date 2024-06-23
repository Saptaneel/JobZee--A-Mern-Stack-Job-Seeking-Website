import express from "express"
import { dbConnection } from "./database/dbConnection.js";

import cors from "cors";
import cookieParser from "cookie-parser";
import jobRouter from "./routes/jobRouter.js";
import userRouter from "./routes/userRouter.js";
import applicationRouter from "./routes/applicationRouter.js";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();

app.use(
    cors({
      origin: 'http://localhost:5173',
      method: ["GET", "POST", "DELETE", "PUT"],
      credentials: true,
    })
  );
  app.use(cookieParser());

  app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );

  app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);

dbConnection();
app.use(errorMiddleware);


export default app;
