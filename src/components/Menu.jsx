import React, { Fragment} from 'react';
import {Link} from "react-router-dom"
import MenuItem from '@material-ui/core/MenuItem';

export default function Menu() {
    return (
        <Fragment>
<MenuItem component={Link} to="/">
Home
</MenuItem>
<MenuItem component={Link} to="/page2">
Page 2
</MenuItem>
<MenuItem component={Link} to="/page3">
Page 3
</MenuItem>
</Fragment>
    )
}
