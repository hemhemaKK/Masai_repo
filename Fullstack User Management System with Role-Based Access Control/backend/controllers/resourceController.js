const Resource = require('../models/Resource');

// Get all resources
exports.getResources = async (req, res) => {
  try {
    let resources;
    if (req.user.role === 'admin') {
      resources = await Resource.find().populate('owner', 'name email role').sort({ createdAt: -1 });
    } else {
      resources = await Resource.find({ owner: req.user._id }).populate('owner', 'name email role').sort({ createdAt: -1 });
    }
    res.json(resources);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while getting resources', error: error.message });
  }
};

// Get a single resource by ID
exports.getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id).populate('owner', 'name email role');
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    res.json(resource);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while getting resource', error: error.message });
  }
};

// Create a new resource
exports.createResource = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title) return res.status(400).json({ message: 'Title is required' });

    const resource = new Resource({
      title,
      content: content || '',
      owner: req.user._id
    });

    await resource.save();
    await resource.populate('owner', 'name email role'); // Mongoose 6+ syntax
    res.status(201).json(resource);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while creating resource', error: error.message });
  }
};

// Update a resource
exports.updateResource = async (req, res) => {
  try {
    const { title, content } = req.body;
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ message: 'Resource not found' });

    // Only admin or moderator can update
    if (req.user.role !== 'admin' && req.user.role !== 'moderator') {
      return res.status(403).json({ message: `Role (${req.user.role}) not authorized` });
    }

    if (title !== undefined) resource.title = title;
    if (content !== undefined) resource.content = content;

    await resource.save();
    await resource.populate('owner', 'name email role');
    res.json(resource);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while updating resource', error: error.message });
  }
};

// Delete a resource
exports.deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ message: 'Resource not found' });

    // Only admin can delete
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: `Role (${req.user.role}) not authorized` });
    }

    await Resource.deleteOne({ _id: resource._id });
    res.json({ message: 'Resource deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while deleting resource', error: error.message });
  }
};
