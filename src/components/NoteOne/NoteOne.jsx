import React from 'react';
import Paper from '@mui/material/Paper';
import "../NoteOne/NoteOne.css"
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushTwoToneIcon from "@mui/icons-material/BrushTwoTone";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";

const NoteOne = (prop) => {

    let handleNoteStaus =()=>{
        prop.switchNoteProp(true)
    }

    return (

        <div className='NoteOneContainer' onClick={handleNoteStaus}>


            <Paper elevation={3} className='NoteOnePaper'>
                <div className='NoteOneTxt'>
                    Take Note...
                </div>
                <div className='NoteOneIcons'>
                    <CheckBoxOutlinedIcon/>
                    <BrushTwoToneIcon/>
                    <InsertPhotoOutlinedIcon/>
                </div>

            </Paper>

         </div>

    )
}
export default NoteOne;