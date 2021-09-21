import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Listitem = ({ name, icon }) => {
    return (
        <Link to={`/${name.toLowerCase()}`} className="text-decoration-none text-dark">
            <ListItem button key={name}>
                <ListItemIcon style={{marginLeft:"20px"}}>{icon}</ListItemIcon>
                <ListItemText primary={name} />
            </ListItem>
        </Link>
    )
}

export default Listitem
