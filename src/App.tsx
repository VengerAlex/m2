import React from 'react';
import {Box, Button, ButtonProps, makeStyles, TextField, Typography} from "@mui/material";
import "./index.css"
import {AuthPageWrapper} from "./components/AuthPageWrapper";
import {styled} from "@mui/material/styles";


type DivProps = {
    bgColor: string;
};

const MyButton = styled(Button)<DivProps>(({ theme, bgColor }) => ({
    color: "#fff",
    backgroundColor: bgColor,
    "&:hover": {
        backgroundColor: "red",
    },
}));

const App = () => {
    return (
        <Box sx={{width: "100%", height: "1000px", padding: "20px", backgroundColor: "#1D283A"}}>
            <Typography variant="h1">Sign In</Typography>
            <Typography variant="h2">Hello World</Typography>
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <MyButton
                disabled={true}
                onClick={() => console.log("+")}
                sx={{padding: "10px 141px"}}
                bgColor="#539713">
                hello
            </MyButton>
            <MyButton sx={{padding: "4px 48px"}} bgColor="#1D283A">hello</MyButton>
            <div className="ss">
                hello world
            </div>
        </Box>
    );
};

export default App;