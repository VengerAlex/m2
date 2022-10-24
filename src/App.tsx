import Box from '@mui/material/Box';
import "./index.css"
import {useState} from "react";

const App = () => {
    const [color, setColor] = useState("#ffffff");

    return (
        <Box sx={{backgroundColor: "#ccc", height: "100vh", padding: "100px"}}>
            <label htmlFor="color">
                <div className="color" style={{backgroundColor: color}}>
                    <input onChange={e => setColor(e.target.value)} type="color" id="color" className="input-color" />
                </div>
            </label>
        </Box>
    );
};

export default App;
