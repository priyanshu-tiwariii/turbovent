import { Router } from "express";
import testingRoutes from "./testing.routes";

const router: Router = Router();

router.get('/', testingRoutes);

export default router;