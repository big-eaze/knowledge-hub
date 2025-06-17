import { useState} from "react";
import { MenuContext } from "./MenuContext"; // Import MenuContext

export function MenuProvider({ children }) {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ displayMenu, setDisplayMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
