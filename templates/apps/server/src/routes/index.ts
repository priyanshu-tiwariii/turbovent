import { Router } from "express";
import testingRoutes from "./testing.routes";


const routes:Router = Router();

routes.use("/testing", testingRoutes);
export default routes;
