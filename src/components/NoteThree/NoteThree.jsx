import React, { useState } from 'react';
import '../NoteThree/NoteThree.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { createNote, updateNoteData } from '../../Services/service';

const NoteThree = (props) => {
    const { noteDetails} = props

    let [noteData, setNotedata] = useState({ Title: noteDetails.Title, Descreption: noteDetails.Descreption })

    let setUpdatedNoteDetails = (e) => {
        let { name, value } = e.target
        setNotedata((prev) => ({
            ...prev, [name]: value
        }))
     }
    

     const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


     let UpdateNoteDetails = async(id) =>{
          let result = await updateNoteData(noteData,id)
          console.log("result---------->", result)
          if (result && result.data) {
            
            props.getAllNoteData(); // Refresh notes
            // Close the modal
            handleClose()
        }
    }
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        height: 'auto',
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        border: '2px solid red',
        boxShadow: 24,
        p: 4,
        padding: "1px",
        border: 'none',  // Ensure no border is applied
        outline: 'none',
        overflow: 'hidden',
        overflowY: 'auto',  // Ensure content scrolls if it's too long for the modal
        maxHeight: '80vh',  // Prevent the modal from growing too tall for the screen
        height: 'auto',

    };
    
    return (
        <div className='NoteThreeContainer'>

            <Paper elevation={3} className='NoteThreePaper'  >
                <div className='NoteThreeContained' onClick={handleOpen}>
                    <div className='NoteThreeInput'>
                        <p>{noteData.Title}</p>
                        <p>{noteData.Descreption}</p>
                    </div>

                    <div className='notethree_iconContainer'>
                        <div className='notethree_iconContainer_icon'>
                            <AddAlertOutlinedIcon />
                            <PersonAddAltOutlinedIcon />
                            <ColorLensOutlinedIcon />
                            <InsertPhotoOutlinedIcon />
                            <ArchiveOutlinedIcon />
                            <MoreVertOutlinedIcon />
                            <UndoOutlinedIcon />
                            <RedoOutlinedIcon />
                        </div>
                        <div className='notethree_iconContainer_btn'>
                            <Button >
                                Close
                            </Button>
                        </div>
                    </div>

                </div>
            </Paper>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Paper elevation={3} className='NoteThreePaper'  >
                        <div className='NoteThreeContained' onClick={handleOpen}>
                            <div className='NoteThreeInput'>
                                {/* <p style={{border:"1px solid red"}}> */}
                                    <InputBase
                                        placeholder="Title"
                                        sx={{
                                            border: 'none',
                                            width: '100%',  // Ensure full width usage
                                            margin: 0,
                                            padding: '5px 0',
                                        }}
                                        name='Title'
                                        // fullWidth="true"
                                        value={noteData.Title}
                                        onChange={setUpdatedNoteDetails}
                                    />
                                {/* </p> */}

                                {/* <p> */}
                                    <InputBase
                                        placeholder="Take a note"
                                        sx={{
                                            border: '1px solide black',
                                            width: '100%',  // Ensure full width usage
                                            margin: 0,
                                            padding: '5px 0',
                                            overflow: "hidden",
                                            multiline:true,  // Allow multiple lines
                                            minRows:3,  // Minimum number of rows for description
                                            maxRows:10, //
                                            
                                        }}
                                        name='Descreption'
                                        onChange={setUpdatedNoteDetails}
                                        value={noteData.Descreption}
                                    />
                                {/* </p> */}

                            </div>

                            <div className='notethree_iconContainer'>
                                <div className='notethree_iconContainer_icon'>
                                    <AddAlertOutlinedIcon />
                                    <PersonAddAltOutlinedIcon />
                                    <ColorLensOutlinedIcon />
                                    <InsertPhotoOutlinedIcon />
                                    <ArchiveOutlinedIcon />
                                    <MoreVertOutlinedIcon />
                                    <UndoOutlinedIcon />
                                    <RedoOutlinedIcon />
                                </div>
                                <div className='notethree_iconContainer_btn'>
                                    <Button onClick={()=>UpdateNoteDetails(noteDetails._id)}>
                                        Close
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </Paper>

                </Box>
            </Modal>
        </div>
    )
}
export default NoteThree;