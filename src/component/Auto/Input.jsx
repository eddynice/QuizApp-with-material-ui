import React from 'react';
import { TextField, Grid, InputAdornment, IconButton }  from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import { VisibilityOff } from '@material-ui/icons';



export default function Input({name, half, handleChange,label, type, outlined,handleShowPassword,autoFocus,}) {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField name={name} onChange={handleChange}
        variant={outlined} required fullWidth
        autoFocus={autoFocus} type={type} 
         label={label} InputProps={name === 'password' ? {
             endAdornment:(
                 <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                       {type === 'password' ? <Visibility/> : <VisibilityOff/> }
                         </IconButton>
                 </InputAdornment>
             ),
         } : null }
        />

    </Grid>
    )
}
