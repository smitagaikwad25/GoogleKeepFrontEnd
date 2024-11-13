import React, { useState } from 'react';
import '../NoteTwo/NoteTwo.css'
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
import { createNote } from '../../Services/service';

const NoteTwo = (props) => {

    let [noteDetails,setNoteDetails] = useState({Title:'', Descreption:''})

    let hanleClick=()=>{
        props.switchNotePropNoteNotetwo(false)
    }

    let handleNoteDetails = (e)=>{
        let key = e.target.name;
        let value = e.target.value

        setNoteDetails({...noteDetails,[key]:value})
        // console.log("noteDetails------>",noteDetails)
    }

    let submit = async () => {
    let result = await createNote(noteDetails);
     console.log("result----------->", result)
     if(result.data != null){
            // alert(`${result.data.data.Title}`)
            props.getAllNoteData()
            setNoteDetails({ Title: '', Descreption: '' }); // Clear input fields
            hanleClick();
    }
  }

    return (
        <div className='NoteTwoContainer'>

            <Paper elevation={3} className='NoteTwoPaper' >
                <div className='NoteTwoContained'>

                    <div className='NoteTwoInput'>
                        <InputBase
                            placeholder="Title"
                            sx={{
                                border: 'none',
                                padding: '3px',
                                // backgroundColor: '#f0f0f0',
                                borderRadius: '4px',
                            }}
                            name='Title'
                            fullWidth="true"
                            onChange ={(e)=>handleNoteDetails(e)}
                        />

                        <InputBase
                            placeholder="Take a note"
                            sx={{
                                border: 'none',
                                padding: '2px',
                                // backgroundColor: '#f0f0f0',
                                borderRadius: '4px',
                                fullWidth: true
                            }}
                            name= 'Descreption'
                            fullWidth="true"
                            onChange ={(e)=>handleNoteDetails(e)}
                        />
                    </div>

                    <div className='iconContainer'>
                        <div className='iconContainer_icon'>
                            <AddAlertOutlinedIcon />
                            <PersonAddAltOutlinedIcon />
                            <ColorLensOutlinedIcon />
                            <InsertPhotoOutlinedIcon />
                            <ArchiveOutlinedIcon />
                            <MoreVertOutlinedIcon />
                            <UndoOutlinedIcon />
                            <RedoOutlinedIcon />
                        </div>
                        <div className='iconContainer_btn'>
                            <Button
                                onClick={submit}
                            >
                                Close
                            </Button>
                        </div>
                    </div>

                </div>
             </Paper>

        </div>
    )
}
export default NoteTwo;