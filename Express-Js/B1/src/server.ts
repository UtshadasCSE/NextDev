import express, {
  type Application,
  type Request,
  type Response,
} from "express";
const app: Application = express();
const port = 3000;

app.get("/", (req: Request, res: Response): void => {
  res.status(200).json({
    message: "Hello World",
    author: "Express",
  });
});

app.use(express.json());
app.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
