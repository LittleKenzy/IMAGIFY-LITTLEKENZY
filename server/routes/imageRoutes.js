    import express from "express";
    import { generateImages } from "../controllers/imageController.js";
    import userAuth from "../middlewares/auth.js";

    const imageRouter = express.Router();

    imageRouter.post('/generate-image', userAuth, generateImages)

    export default imageRouter