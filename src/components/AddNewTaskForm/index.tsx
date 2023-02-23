import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

import { AddNewTaskFormProps } from '../../interfaces';
import './index.css';

const AddNewTaskForm = ({ tasksList, setTaskList }: AddNewTaskFormProps) => {

    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);

    const clearValues = () => {
        setDescription("");
        setPriority("");
        setStatus(false);
    }

    const setItemTask = (description: string, priority: string | number, done: boolean, id: string) => {
        return {
            description,
            priority,
            done,
            id
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setHasErrors(false);

        if ((description.length < 5) || (Number(priority) < 1) || (Number(priority) > 10)) {
            setHasErrors(true);
        } else {
            const item = setItemTask(description, priority, status, Date.now().toString());
            setTaskList([...tasksList, item]);
            clearValues();
        }
    };



    return (
        <div>
            <Typography component="h1" variant="h5">
                Add new task
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate >
                <div className='wrapper'>
                    <TextField
                        error={hasErrors && description.length < 5}
                        margin="normal"
                        required
                        className="text-field description"
                        id="description"
                        label="Task Description"
                        name="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        helperText={(hasErrors && description.length < 5) ? "Min 5 letters" : null}
                    />
                    <TextField
                        error={hasErrors && (Number(priority) < 1 || Number(priority) > 10)}
                        margin="normal"
                        required
                        name="priority"
                        className="text-field priority"
                        label="Priority"
                        type="number"
                        id="priority"
                        helperText={(hasErrors && Boolean((Number(priority) < 1) || (Number(priority) > 10))) ? "From 1 to 10" : null}
                        value={priority}
                        onChange={e => setPriority(e.target.value)}
                        inputProps={{ min: 1, max: 10, step: 1 }}
                    />
                    <FormControlLabel
                        className='status'
                        control={<Checkbox
                            id="status"
                            name="status"
                            checked={status}

                            value={status}
                            onChange={(e) => setStatus(e.target.checked)}
                        />
                        }
                        label="Status"
                    />
                </div>
                <Button
                    type="submit"
                    variant="contained"
                >
                    Add task
                </Button>
            </Box>

        </div>
    );
}

export default AddNewTaskForm;

            // const data = new FormData(event.currentTarget);


        // if(  data.get('description')  && data.get('description')?.toString()  ) {

        // }

        // console.log({
        //     email: data.get('description'),
        //     password: data.get('priority'),
        //     status: data.get('status'),
        // });