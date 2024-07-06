import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import { useRef } from "react"

const PopupModal = ({open,setOpen}) =>{

    const PhNum = useRef();
    
    const handleClose = () => {
        console.log(PhNum.current.value);
        setOpen(false);
    }

    return(
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: async (event) => {
                    await fetch("")
                    handleClose();
                },
              }}
        >
            <DialogTitle>Refer Details</DialogTitle>
            <DialogContent>
                <DialogContentText>Enter the following Details</DialogContentText>
                <TextField required autoFocus margin="dense" id="name" name="name" label="Full Name" type="text" fullWidth variant="standard"></TextField>
                <TextField required autoFocus margin="dense" id="email" name="email" label="Refree Email Address" type="email" fullWidth variant="standard"></TextField>
                <TextField required autoFocus margin="dense" id="Phone" name="Phone" label="Phone Number" type="tel" fullWidth variant="standard" inputRef={PhNum}></TextField>
                
                <TextField required autoFocus margin="dense" id="name" name="name" label="Referrer Email Address" type="email" fullWidth variant="standard"></TextField>
                <DialogActions>
                    <button type="button" onClick={handleClose}>Close</button>
                    <button type="submit">Submit</button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}

export default PopupModal;