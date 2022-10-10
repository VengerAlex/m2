import * as React from 'react';
import Slider, {SliderProps} from '@mui/material/Slider';
import {alpha, styled} from '@mui/material/styles';
import {TextField, TextFieldProps} from "@mui/material";

const InputField = styled(TextField)<TextFieldProps>(({theme}) => ({
    "& .MuiInputLabel-root": {
        color: "#ffffff",
        fontSize: "14px",
        lineHeight: "21.7px",
    },
}));

export const MyInput = () => {
    return <InputField  label="Input Name" variant="standard"/>;
}

