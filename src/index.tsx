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


export let theme = createTheme({
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
        body1: {
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "31px",
        },
        body2: {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "25px",
        },
        subtitle1: {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "22px",
        },
        subtitle2: {
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "19px",
        },
    }
})

// marginBottom: theme.spacing(1),
//     "&.MuiTextField-root": {
//     marginTop: "0px",
//         borderColor: theme.palette.blue,
// },
//
// "& label": {
//     fontSize: "14px",
//         lineHeight: "21.7px",
//         fontWeight: 400,
//         color: isBlack ? theme.palette.black : theme.palette.white,
//         "&.Mui-focused": {
//         color: isBlack ? theme.palette.black : theme.palette.white,
//     },
//
//     "&.Mui-error": {
//         color: isBlack ? theme.palette.black : theme.palette.white,
//     },
// },
// "& .MuiFormHelperText-root": {
//     marginTop: "12px",
//         marginBottom: "5px",
//         lineHeight: "0px",
//         fontSize: "12px",
//         color: theme.palette.red,
//         "&.Mui-error": {
//         color: theme.palette.red,
//     },
// },
// input: {
//     "&::placeholder": {
//         color: isBlack ? theme.palette.black : theme.palette.white,
//             fontWeight: 600,
//             opacity: 0.7,
//             fontSize: "16px",
//             lineHeight: "24.8px",
//     },
// },
// "& .MuiInputBase-root": {
//     color: isBlack ? theme.palette.black : theme.palette.white,
//         fontSize: "16px",
//         opacity: 0.7,
//         borderColor: isBlack ? theme.palette.black : theme.palette.white,
//         "&:hover": {
//         "&:not(.Mui-disabled)": {
//             "&:before": {
//                 borderColor: theme.palette.green.lighter,
//             },
//         },
//     },
//     "&:before": {
//         borderColor: isBlack ? theme.palette.black : theme.palette.white,
//     },
//
//     "&:after": {
//         borderColor: isBlack ? theme.palette.black : theme.palette.white,
//     },
//
//     "&.Mui-focused": {
//         "&:after": {
//             borderColor: theme.palette.green.main,
//         },
//     },
//     "& .MuiFormLabel-root": {
//         color: isBlack ? theme.palette.black : theme.palette.white,
//             fontWeight: 400,
//             fontSize: "14px",
//             lineHeight: "24.8px",
//     },
//     "&.Mui-error": {
//         color: theme.palette.red,
//             "&:after": {
//             borderColor: theme.palette.red,
//         },
//     },
// },



root.render(<ThemeProvider theme={theme}><App /></ThemeProvider>);
