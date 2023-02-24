import { List } from '@mui/material';
import EmptyList from '../EmptyList';
import SelectedListItem from '../SelectedListItem';
import { listDefaultStyle } from '../../helpers';
import { TaskItem, SelectedListProps } from '../../interfaces';
import './index.css';

const SelectedList = ({ favoriteList, selectedList, setSelectedList }: SelectedListProps) => {

    if (!favoriteList.length) {
        return (<div>
            <h2>Selected task list</h2>
            <EmptyList />
        </div>
        )
    }

    return (
        <div>
            <h2>Selected task list</h2>
            <List sx={listDefaultStyle}>
                {
                    favoriteList.map((item: TaskItem) => {
                        return (
                            <SelectedListItem
                                key={item.id}
                                item={item}
                                selectedList={selectedList}
                                setSelectedList={setSelectedList}
                            />
                        )
                    })
                }
            </List>
        </div>
    )
}

export default SelectedList;