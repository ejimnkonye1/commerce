import { createContext, useState, useEffect, ReactNode, useContext } from "react";

type Product = {
  image: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  id: number;
  thumbnails: string[];
};

type CartContextType = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, change: number) => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCart(parsedCart); // Set cart from localStorage
        console.log("Loaded cart from localStorage:", parsedCart);
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
      }
    }
  }, []); // Empty dependency array to run only on mount

  // Function to add product to cart
  const addToCart = (product: Product) => {
    console.log("Adding to cart:", product);
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingItemIndex = updatedCart.findIndex((item) => item.id === product.id);

      if (existingItemIndex !== -1) {
        updatedCart[existingItemIndex].quantity += 1;
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }

      // Save cart to localStorage after updating the state
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      console.log("Saving cart to localStorage:", updatedCart);

      return updatedCart;
    });
  };

  // Function to remove a product from cart
  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);

      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      console.log("Updated cart after removal:", updatedCart);

      return updatedCart;
    });
  };

  // Function to update product quantity
  const updateQuantity = (id: number, change: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook for using CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
