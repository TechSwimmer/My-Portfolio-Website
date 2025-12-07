import { createContext,useContext, useState, useEffect } from "react";
import "../components/styles/styles.css"

const ThemeContext = createContext(null)


export const ThemeProvider = ({ children }) => {
    // read from localStorage
    const [theme, setTheme] = useState(() => {
        const stored = localStorage.getItem("theme");
        return stored === "dark" ? "dark" : "light";
    });

    const isLight = theme ==='light';  

    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(isLight ? "light" : "dark");

        localStorage.setItem("theme", isLight ? "light" : "dark");

    },[isLight]);

   const value = {
    theme,
    isLight,
    setTheme,
    toggleTheme: () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }
   }



    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );

};

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if(!ctx){
        throw new Error("useTheme must be used inside ThemeProvider");
    }
    return ctx;
}