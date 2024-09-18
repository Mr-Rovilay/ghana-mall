import express from 'express';
import multer from 'multer';
import authMiddleware from '../middlewares/auth.js';
import { addShop, deleteShop, getAllShops } from '../controllers/shopControllers.js';

const router = express.Router();
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
})
const upload = multer({ storage });

router.post("/add",upload.single("image"), addShop )
router.get("/:id?", getAllShops )
router.delete("/:id", deleteShop )


export default router