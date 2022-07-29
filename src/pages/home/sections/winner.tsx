import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react"

type WSprops = {
    totalWinners: string;
    setTotalWinners: StateReact<string>;
}

export const WinnerSection: React.FC<WSprops> = ({
    totalWinners,
    setTotalWinners
})  => {
    const handleChange = (e: SelectChangeEvent) =>{
        setTotalWinners(e.target.value as string);
    }
    return (
        <Box sx={{minWidth: 120}}>
            <FormControl variant='filled' fullWidth>
                <InputLabel id='demo-simple-select-filled-label'>Selecciona los Ganadores</InputLabel>
                <Select value={totalWinners} label='Select' onChange={handleChange}>
                    <MenuItem value={1}>Un ganador</MenuItem>
                    <MenuItem value={2}>Dos ganadores</MenuItem>
                    <MenuItem value={3}>Tres ganadores</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}