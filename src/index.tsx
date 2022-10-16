import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createTheme, ThemeProvider} from "@mui/material";
import {dark} from "@mui/material/styles/createPalette";
import {green} from "@mui/material/colors";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


let theme = createTheme({
    palette: {
        background: {default: '#D9E7F8'},
        secondary: {main: '#1D283A'},
        text: {primary: '#FFFFFF', secondary: '#F5F5F5'},
        primary: {main: '#539713', light: '#B2D0AD'},
        darkBlue: {main: '#05eeee', light: '#B2D0AD'}
        // colors: {
        //     green: "#539713",
        //     lightGreen: "#B2D0AD",
        //     strokeGreen: "#58F83B",
        //     black: "#000000",
        //     violet: "#D4CCF1",
        //     blue: "#69B0FF",
        //     orange: "#F08E5B",
        //     red: "#EE5E5E",
        //     BGR: "#F1F2F1",
        // }
    },
    typography: {
        allVariants: {
            fontFamily: 'Montserrat',
            fontSize: 16,
            color: '#fff',
        },
        h1: {
            fontSize: '56px',
            fontWeight: 700,
            letterSpacing: '3%',
            lineHeight: '84px',
        },
        h2: {
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: '72px',
        },
        h3: {
            fontSize: '36px',
            fontWeight: 700,
            lineHeight: '54px',
        },
        h4: {
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: '36px',
        },
        h5: {
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '24.8px',
        },
    }
})



root.render(<ThemeProvider theme={theme}><App /></ThemeProvider>);
