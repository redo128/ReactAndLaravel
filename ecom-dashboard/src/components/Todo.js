import { ListItem, ListItemText } from "@mui/material"
import moment from "moment"

const Todo=({id,timestamp,title,detail})=>{
    return (
        <ListItem 
        sx={{mt:3,boxShadow: 3}}
        style={{backgroundColor:'#FAFAFA'}} >
            <ListItemText primary={title}
            secondary={moment(timestamp).format("MMMM dd,yyyy")}
             />
        </ListItem>

    )
}
export default Todo