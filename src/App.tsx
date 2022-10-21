import React, {RefObject, useState, useEffect} from 'react';
import "./index.css"
import Box from '@mui/material/Box';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {styled} from "@mui/material/styles";
import {Button, Icon, Typography} from "@mui/material";

type Event = MouseEvent | TouchEvent;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: Event) => void,
) => {
    useEffect(() => {
        const listener = (event: Event) => {
            const el = ref?.current;
            if (!el || el.contains((event?.target as Node) || null)) {
                return;
            }

            console.log("CLICK")
            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
};


export const ActionIcon = styled(Icon)(() => ({
    cursor: "pointer",
    position: "absolute",
    right: "14px",
    top: "7px",
    fontSize: "20px",
}));


const App = () => {
    const clickRef = React.useRef<HTMLDivElement | null>(null);
    const headerRef = React.useRef<HTMLInputElement | null>(null);
    const [isShownActions, setIsShownActions] = useState(false)
    useOnClickOutside(clickRef, () => setIsShownActions(false));

    const editBtn = () => {
        console.log("EDIT")
        headerRef.current?.focus();
    }

    return (
        <>
        <Box sx={{width: "100%", height: "110px", padding: "20px", backgroundColor: "#ccc"}}>
            <Box sx={{backgroundColor: "#fff", position: "relative"}} ref={clickRef}>
                <ActionIcon onClick={() => setIsShownActions(true)}>
                    <MoreHorizIcon />
                </ActionIcon>
                {isShownActions && <Box sx={{display: "flex", flexDirection: "column", width: "130px", position: "absolute", right: 0, top: "30px", backgroundColor: "red"}}>
                    <Button variant="contained" onClick={editBtn}>Edit</Button>
                    <Button variant="contained" onClick={() => console.log("DELETE")}>Delete</Button>
                </Box>}
            </Box>
        </Box>
            <Box sx={{width: "200px"}}>
                <Typography ref={headerRef} contentEditable={true} sx={{color: "black"}}>Hello World</Typography>
            </Box>
        </>
    );
};

export default App;
