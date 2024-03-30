import datastore from "./datastore";

export interface InventoryType {
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
  } catch (error) {
    console.error("Error adding inventory item: ", error);
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
  } catch (error) {
    console.error("Error updating inventory item: ", error);
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
  } catch (error) {
    console.error("Error deleting inventory item: ", error);
  }
};

const fetchAllInventoryItems = async (): Promise<InventoryType[] | null> => {
  try {
    const allItems = await datastore.getData("inventory");
    return allItems;
  } catch (error) {
    console.error("Error fetching all items: ", error);
    return null;
  }
};

const generateRandomId = (length: number): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export default {
  addInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
  generateRandomId,
  fetchAllInventoryItems,
};
