import { App } from "./app";
import "reflect-metadata";

const app: App = new App();

const port = process.env.PORT || 4444;
app.listen();
