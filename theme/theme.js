import React from 'react';

export const themes = {
    light: {
        name: "Light",
        bg: "#FAFAFA",
        color: "#162329"
    },
    dark: {
        name: "Dark",
        bg: "#040310",
        color: "white"
    }
}

export const ThemeContext = React.createContext({
    theme: themes[typeof localStorage !== 'undefined' && localStorage.getItem("theme") || "light"],
    changeTheme: () => {}
});