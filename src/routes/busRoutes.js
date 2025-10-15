// routes/busRoutes.js
const express = require("express");
const router = express.Router();
const {
  addBus,
  getAllBuses,
  getBusById,
  updateBus,
  deleteBus
} = require("../controllers/busController");

const { authBooking } = require("../middleware/authMiddleware"); // Only logged-in user or admin
const { adminCheck } = require("../middleware/adminMiddleware"); // Optional middleware to restrict admin actions

// Public route
router.get("/", getAllBuses);
router.get("/:id", getBusById);

// Admin protected routes
router.post("/add", authBooking, adminCheck, addBus);
router.put("/:id", authBooking, adminCheck, updateBus);
router.delete("/:id", authBooking, adminCheck, deleteBus);

module.exports = router;
