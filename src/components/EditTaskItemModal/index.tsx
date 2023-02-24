import { useState, useEffect, useCallback } from 'react';
import { Modal, Fade, Checkbox, Backdrop, FormControlLabel, Button, Typography, Box, TextField } from '@mui/material';
import { setItemTask } from '../../utils';
import { EditTaskItemModalProps } from '../../interfaces';
import "./index.css";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    minHeight: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EditTaskItemModal = ({
    open,
    setOpen,
    editableItem,
    setEditableItem,
    editTask,
}: EditTaskItemModalProps) => {

    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setEditableItem(null)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setHasErrors(false);

        if ((Number(priority) < 1) || (Number(priority) > 10)) {
            setHasErrors(true);
        } else {
            const item = setItemTask(editableItem!.description, priority, status, editableItem!.id, !!editableItem?.isSelected);
            editTask(item);
            handleClose();
        }
    }

    const setFormValues = useCallback(() => {
        setPriority(editableItem?.priority.toString() || '');
        setStatus(Boolean(editableItem?.done));
    }, [editableItem?.done, editableItem?.priority]);

    useEffect(() => {
        if (editableItem) {
            setFormValues();
        }
    }, [editableItem, setFormValues])

    if (!editableItem) {
        return null;
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
            className="edit-task-modal"
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h4" component="h4">
                        Edit task
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate >
                        <TextField
                            margin="normal"
                            required
                            className="text-field description"
                            id="description"
                            label="Task Description"
                            name="description"
                            value={editableItem!.description || ""}
                            disabled
                        />
                        <div className='wrapper'>
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
                        <div className='edit-modal-buttons'>
                            <Button
                                type="submit"
                                variant="contained"
                                color="warning"
                            >
                                Edit
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleClose}
                                color='success'
                            >
                                Cancel
                            </Button>
                        </div>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}

export default EditTaskItemModal;