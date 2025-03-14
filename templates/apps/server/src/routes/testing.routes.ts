import { Router } from "express";
import { testingControllers } from "../controllers/testing.controller";

const testingRoutes: Router = Router();

testingRoutes.get('/', testingControllers);

export default testingRoutes;