import React, {useState, useEffect, createContext,} from "react";

export const CartContext = createContext()

function CartProvider({children}) {
	const [cart, setCart] = useState([])
	return (
		<CartContext.Provider value={"this is cart context"}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;