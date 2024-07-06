import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import { useRef } from "react"

const PopupModal = ({open,setOpen}) =>{

    const PhNum = useRef();
    const Email = useRef();
    const Name = useRef();
    const RefEmail = useRef();
    
    const handleClose = () => {
        setOpen(false);
    }

    const handleSubmit =  async () =>{
        await fetch("https://accredian-backend-task-zuh6.onrender.com/refer",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:Email.current.value,
                name:Name.current.value,
                RefEmail:RefEmail.current.value,
                PhoneNo:PhNum.current.value
            })
        }).then(async (res)=>{
            return [res.status,await res.json()]
        }).then(msg=>{
            if(msg[0]!==200)window.alert(msg[1].error);
            else window.alert(msg[1].Msg)
        }).catch(err=>{
            console.log(err)
        })
        handleClose();
    }

    return(
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>Refer Details</DialogTitle>
            <DialogContent>
                <DialogContentText>Enter the following Details</DialogContentText>
                <TextField required autoFocus margin="dense" id="name" name="name" label="Full Name" type="text" fullWidth variant="standard" inputRef={Name}></TextField>
                <TextField required autoFocus margin="dense" id="email" name="email" label="Refree Email Address" type="email" fullWidth variant="standard" inputRef={Email}></TextField>
                <TextField required autoFocus margin="dense" id="Phone" name="Phone" label="Phone Number" type="tel" fullWidth variant="standard" inputRef={PhNum}></TextField>
                
                <TextField required autoFocus margin="dense" id="name" name="name" label="Referrer Email Address" type="email" fullWidth variant="standard" inputRef={RefEmail}></TextField>
                <DialogActions>
                    <button type="button" onClick={handleClose}>Close</button>
                    <button type="button" onClick={handleSubmit}>Submit</button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}

export default PopupModal;