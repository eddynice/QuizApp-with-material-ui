import { PaginationItem ,Pagination} from '@material-ui/lab'
import React from 'react'
import {Link} from 'react-router-dom'

import useStyle from './style'

export default function Page() {
    const classes = useStyle();
    return (
       <Pagination classes={{ul : classes.ul}}
       count={5}
       page={1} color="primary" renderItem={(item)=>(
           <PaginationItem {...item} component={Link}
           to={'/post?page=${1}'}/>
       )}
       />
    )
}
