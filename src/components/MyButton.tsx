import {styled} from "@mui/material/styles";
import {Button, ButtonProps} from "@mui/material";
import React, {FC} from "react";


const CustomButton = styled(Button)<ButtonProps>(({theme}) => ({
    boxSizing: "border-box",
    cursor: "pointer",
    fontWeight: 600,
    lineHeight: "24.8px",
    color: "#fff",
    backgroundColor: "#539713",
    border: "1px solid #539713",
    textTransform: "none",
    padding: "9.5px 161.5px",
    "&:hover": {
        backgroundColor: "#539713",
        border: "1px solid #58F83B"
    },
    "&:active": {
        border: "1px solid #F5F5F5",
        backgroundColor: "#B2D0AD",
    },
    "&:disabled": {
        border: "none",
        color: "#ffffff",
        backgroundColor: "#A19EAA",
    }
}));

interface IMyButton {
    children: React.ReactNode,
    onClick?: () => void,
    disabled?: boolean
}

export const MyButton: FC<IMyButton> = ({children, onClick, disabled}) => {
    return (
        <CustomButton
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </CustomButton>
    )
}