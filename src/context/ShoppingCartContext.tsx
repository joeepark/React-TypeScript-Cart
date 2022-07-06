import { createContext, ReactNode, useContext } from "react";

// Typescript
type ShoppingCartProviderProps = {
  children: ReactNode
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number,
  increaseCartQuantity: (id: number) => void,
  decreaseCartQuantity: (id: number) => void,
  removeFromCart: (id: number) => void
}

type CartItem = {
  id: number
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);


// Functions
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}


export function ShoppingCartProvider( { children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  return(
    <ShoppingCartContext.Provider value = {{}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}