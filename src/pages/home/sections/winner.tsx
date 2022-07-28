import { Box, FormControl, InputLabel, Select } from "@mui/material";
import React from "react"

type WSprops = {
    totalWinners: string;
    SetTotalWinners: StateReact<string>;
}

export const WinnerSection: React.FC<WSprops> = ({
    totalWinners,
    SetTotalWinners
})  => {
    return (
        <Box sx={{minWidth: 120}}>
            <FormControl variant='filled' fullWidth>
                <InputLabel id='demo-simple-select-filled-label'>Selecciona los Ganadores</InputLabel>
                <Select value={totalWinners} >
                    
                </Select>
            </FormControl>
        </Box>
    )
}