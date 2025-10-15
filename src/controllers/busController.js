const Bus = require("../models/Bus");
const Route = require("../models/Route");

// Add new bus (Admin only)
const addBus = async (req, res) => {
  try {
    const { busNumber } = req.body;
    const existingBus = await Bus.findOne({ busNumber });
    if (existingBus) {
      return res.status(400).json({ message: "Bus with this number already exists" });
    }

    const bus = await Bus.create(req.body);
    res.status(201).json({ message: "Bus added successfully", bus });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get all buses (Public)
const getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find().populate("route");
    res.json({ buses });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get bus by ID
const getBusById = async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id).populate("route");
    if (!bus) return res.status(404).json({ message: "Bus not found" });
    res.json({ bus });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Update bus info (Admin)
const updateBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bus) return res.status(404).json({ message: "Bus not found" });
    res.json({ message: "Bus updated successfully", bus });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Delete bus (Admin)
const deleteBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndDelete(req.params.id);
    if (!bus) return res.status(404).json({ message: "Bus not found" });
    res.json({ message: "Bus deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
// 🔍 Search Buses (Public with optional type filter)
const searchBuses = async (req, res) => {
  try {
    const { startPoint, endPoint, date, type } = req.query;

    if (!startPoint || !endPoint || !date) {
      return res.status(400).json({
        message: "Please provide startPoint, endPoint, and date",
      });
    }

    // Convert date string to Date object (ignore time)
    const searchDate = new Date(date);
    searchDate.setHours(0, 0, 0, 0);

    // Build query object
    const query = {
      route: { $regex: new RegExp(`${startPoint}-${endPoint}`, "i") }, // Example route stored as "Chennai-Bangalore"
      date: searchDate,
      availableSeats: { $gt: 0 },
    };

    if (type) query.type = type;

    // Find matching buses
    const buses = await Bus.find(query);

    if (!buses.length) {
      return res.status(404).json({
        message: "No buses found for the selected route/date/type",
      });
    }

    res.status(200).json({ buses });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};


module.exports = {
  addBus,
  getAllBuses,
  getBusById,
  updateBus,
  deleteBus,
  searchBuses,
};
