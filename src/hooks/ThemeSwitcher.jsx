import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function ThemeSwitchProvider({ children }) {
    const [theme, setTheme] = useState(true);

    async function handleThemeSwitch () {
        
        setTheme(prevState => {
            const newTheme = !prevState;
            localStorage.setItem("@pokedex:theme" , JSON.stringify(newTheme))
            return newTheme;
        });
    };

    useEffect(() => {
        const localtheme = localStorage.getItem("@pokedex:theme");
        if (localtheme) {
            setTheme(JSON.parse(localtheme))
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, handleThemeSwitch }}>
            {children}
        </ThemeContext.Provider>
    );
}

function useTheme() {
    const context = useContext(ThemeContext);

    return context;
}

export { ThemeSwitchProvider, useTheme };
