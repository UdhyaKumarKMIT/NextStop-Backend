// routes/routeRoutes.js
const express = require("express");
const router = express.Router();
const {
  addRoute,
  getAllRoutes,
  getRouteById,
  updateRoute,
  deleteRoute
} = require("../controllers/routeController");

const { authBooking } = require("../middleware/authMiddleware"); // Temporary auth
const { adminCheck } = require("../middleware/authMiddleware"); // Admin only

// Public routes
router.get("/", getAllRoutes);
router.get("/:id", getRouteById);

// Admin protected routes
router.post("/add", authBooking, adminCheck, addRoute);
router.put("/:id", authBooking, adminCheck, updateRoute);
router.delete("/:id", authBooking, adminCheck, deleteRoute);

module.exports = router;
