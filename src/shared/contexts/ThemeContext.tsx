import { Children, createContext, useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { DarkTheme, LightTheme } from "./../themes";
import { Box } from "@mui/system";


interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC = ({ Children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {
    }, []);

    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme;

        return DarkTheme;
    }, [themeName])

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                {Children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}