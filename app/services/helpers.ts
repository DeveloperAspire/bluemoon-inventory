import datastore from "./datastore";

interface InventoryType {
  name: string;
  stock: number;
  price: number;
  description: string;
  image: string;
  id: string;
}

const addInventoryItem = async (item: InventoryType) => {
  try {
    const existingData = await datastore.getData("inventory");

    let newData: InventoryType[] = [];

    if (existingData) {
      newData = [...existingData, item];
    } else {
      newData = [item];
    }

    await datastore.storeData("inventory", newData);
    return true; // Success
  } catch (error) {
    console.error("Error adding inventory item: ", error);
    return false; // Failed
  }
};

const updateInventoryItem = async (
  itemId: string,
  updatedItemData: Partial<InventoryType>
) => {
  try {
    const existingData = await datastore.getData("inventory");

    if (!existingData) {
      console.error("Inventory data not found.");
      return false; // Failed
    }

    const updatedData = existingData.map((item: InventoryType) => {
      if (item.id === itemId) {
        return { ...item, ...updatedItemData };
      } else {
        return item;
      }
    });

    await datastore.storeData("inventory", updatedData);
    return true; // Success
  } catch (error) {
    console.error("Error updating inventory item: ", error);
    return false; // Failed
  }
};

const deleteInventoryItem = async (itemId: string) => {
  try {
    const existingData = await datastore.getData("inventory");

    if (!existingData) {
      return false; // Failed
    }

    if (existingData) {
      const updatedData = existingData.filter(
        (item: InventoryType) => item.id !== itemId
      );
      await datastore.storeData("inventory", updatedData);
    }

    return true; // Success
  } catch (error) {
    console.error("Error deleting inventory item: ", error);
    return false; // Failed
  }
};

export default {
  addInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
};
