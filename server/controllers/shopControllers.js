import Shop from "../models/shopModel.js";

export const addShop = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    const { name, contact, description, products } = req.body;

    // Check if all required fields are provided
    if (!name || !contact || !description || !products) {
        return res.status(400).json({ message: "Please provide all required fields" });
    }
    try {
    const newShop = new Shop({
        name,
        contact,
        description,
        image: req.file.filename,
        products
      });
  
      const savedShop = await newShop.save();
      res.status(201).json(savedShop);
    } catch (error) {
      res.status(500).json({ error: 'Error creating shop', details: error.message });
    }
}
export const getAllShops = async (req, res) => {
    try {
        const { id } = req.params;
    
        if (id) {
          const shop = await Shop.findById(id);
          if (!shop) return res.status(404).json({ message: 'Shop not found' });
          return res.status(200).json(shop);
        }
    
        const shops = await Shop.find();
        res.status(200).json(shops);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching shops', details: error.message });
      }
    
}
export const deleteShop = async (req, res) => {
    try {
        const { id } = req.params;
    
        const deletedShop = await Shop.findByIdAndDelete(id);
        if (!deletedShop) return res.status(404).json({ message: 'Shop not found' });
    
        res.status(200).json({ message: 'Shop deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Error deleting shop', details: error.message });
      }
}