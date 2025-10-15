// controllers/busController.js
const Bus = require("../models/Bus");

// Add new bus (Admin)
const addBus = async (req, res) => {
  try {
    const bus = await Bus.create(req.body);
    res.status(201).json({ message: "Bus added successfully", bus });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get all buses
const getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find().populate("route");
    res.json({ buses });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get single bus by ID
const getBusById = async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id).populate("route");
    if (!bus) return res.status(404).json({ message: "Bus not found" });
    res.json({ bus });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Update bus info
const updateBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bus) return res.status(404).json({ message: "Bus not found" });
    res.json({ message: "Bus updated successfully", bus });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Delete bus
const deleteBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndDelete(req.params.id);
    if (!bus) return res.status(404).json({ message: "Bus not found" });
    res.json({ message: "Bus deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { addBus, getAllBuses, getBusById, updateBus, deleteBus };
