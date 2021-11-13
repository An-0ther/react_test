import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import classes from './mySelect.module.css';

function MySelect({options, defaultValue, value, onChange}) {
    return (
        <FormControl sx={{ mt: 1 }}>
            <InputLabel id="demo-simple-select-label">{defaultValue}</InputLabel>
            <Select 
                sx={{ minWidth: '200px' }}
                value={value}
                label={defaultValue}
                onChange={event => onChange(event.target.value)}
            >
                {options.map(option => 
                    <MenuItem key={option.value} value= {option.value}>
                        {option.name}
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    )
}

export default MySelect
