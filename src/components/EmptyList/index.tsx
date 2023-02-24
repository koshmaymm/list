import { ListItem, List, ListItemText } from '@mui/material';

const EmptyList = () => {
    return (
        <List sx={{ bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary="Empty Task List"
                />
            </ListItem>
        </List>
    )
}

export default EmptyList;