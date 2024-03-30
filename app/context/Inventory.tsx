import React, { useEffect, useState } from "react";

interface InventoryType {
  name: string;
  stock: number;
  price: number;
  description: string;
  image: string;
  id: string;
}

export const InventoryContext = React.createContext({
  inventory: [],
  deleteItem: (id: string) => {},
  addNewItem: (item: InventoryType) => {},
  updateItem: (items: InventoryType) => {},
});

interface ProviderProps {
  children: React.ReactNode;
}

const InventoryProvider: React.FC<ProviderProps> = ({ children }) => {
  const [inventory, setInventory] = useState<Array<InventoryType>>([]);

  const addNewItem = async (item: InventoryType) => {
    //  const existingItemIndex = state.items.findIndex(
    //    (item) => item.id === action.value.id
    //  );
    //  const existingItem = state.items[existingItemIndex];
    //  let updatedItems;
    //  if (existingItem) {
    //    let updatedItem;
    //    updatedItem = {
    //      ...existingItem,
    //      amount: existingItem.amount + action.value.amount,
    //    };
    //    updatedItems = [...state.items];
    //    updatedItems[existingItemIndex] = updatedItem;
    //  } else {
    //    updatedItems = state.items.concat(action.value);
    //  }
    //  const totalAmount =
    //    state.totalAmount + action.value.amount * action.value.price;
    //  const newCart = {
    //    items: updatedItems,
    //    totalAmount: totalAmount,
    //  };
  };

  const deleteItem = async (id: string) => {
    //  const existingItemIndex = state.items.findIndex(
    //    (item) => item.id === action.value.id
    //  );
    //  const existingItem = state.items[existingItemIndex];
    //  const updatedItems = state.items.filter(
    //    (item) => item.id !== action.value.id
    //  );
    //  const totalAmount =
    //    state.totalAmount - existingItem.price * existingItem.amount;
    //  const newCart = {
    //    items: updatedItems,
    //    totalAmount: totalAmount,
    //  };
    //  return newCart;
  };

  const updateItem = async (item: InventoryType) => {
    //  const existingItemIndex = state.items.findIndex(
    //    (item) => item.id === action.value.id
    //  );
    //  const existingItem = state.items[existingItemIndex];
    //  const updatedItems = state.items.filter(
    //    (item) => item.id !== action.value.id
    //  );
    //  const totalAmount =
    //    state.totalAmount - existingItem.price * existingItem.amount;
    //  const newCart = {
    //    items: updatedItems,
    //    totalAmount: totalAmount,
    //  };
    //  return newCart;
  };

  const getCurrentInventory = async () => {
    //     const currentUser = await cacheStorage.getData("@authData");
    //     if (!currentUser) {
    //       setAuthData(null);
    //     }
    //     setAuthData(currentUser);
  };

  useEffect(() => {
    getCurrentInventory();
  });

  return (
    <InventoryContext.Provider
      value={{ inventory, updateItem, addNewItem, deleteItem }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
