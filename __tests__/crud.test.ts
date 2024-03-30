import datastore from "../app/services/datastore"; // Import the datastore module
import helpers from "../app/services/helpers";
import { InventoryType } from "../app/services/helpers";

// Mock the datastore module
jest.mock("../app/services/datastore", () => ({
  getData: jest.fn(),
  storeData: jest.fn(),
}));

describe("Inventory CRUD operations", () => {
  const mockInventory: InventoryType = {
    id: "1",
    name: "Test Item",
    stock: 10,
    price: 20,
    description: "Test description",
    image: "test.jpg",
  };

  beforeEach(() => {
    // Reset mock calls before each test
    jest.clearAllMocks();
  });

  test("Add inventory item", async () => {
    // Mock the getData function to return null (no existing data)
    (datastore.getData as jest.Mock).mockResolvedValueOnce(null);

    await helpers.addInventoryItem(mockInventory);

    // Verify that storeData was called with correct arguments
    expect(datastore.storeData).toHaveBeenCalledWith("inventory", [
      mockInventory,
    ]);
  });

  test("Update inventory item", async () => {
    // Mock the getData function to return existing inventory
    (datastore.getData as jest.Mock).mockResolvedValueOnce([mockInventory]);

    const updatedItemData = { name: "Updated Test Item" };
    const itemId = "1";

    await helpers.updateInventoryItem(itemId, updatedItemData);

    // Verify that storeData was called with correct arguments
    expect(datastore.storeData).toHaveBeenCalledWith("inventory", [
      {
        ...mockInventory,
        ...updatedItemData,
      },
    ]);
  });

  test("Delete inventory item", async () => {
    // Mock the getData function to return existing inventory
    (datastore.getData as jest.Mock).mockResolvedValueOnce([mockInventory]);

    const itemId = "1";

    await helpers.deleteInventoryItem(itemId);

    // Verify that storeData was called with correct arguments
    expect(datastore.storeData).toHaveBeenCalledWith("inventory", []);
  });

  test("Fetch all inventory items", async () => {
    const mockInventoryData: InventoryType[] = [mockInventory];

    // Mock the getData function to return existing inventory
    (datastore.getData as jest.Mock).mockResolvedValueOnce(mockInventoryData);

    const result = await helpers.fetchAllInventoryItems();

    // Verify that the function returns the correct data
    expect(result).toEqual(mockInventoryData);
  });
});
