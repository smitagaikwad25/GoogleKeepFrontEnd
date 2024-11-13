import React, { useState, useEffect } from 'react';
import MiniDrawer from '../drawer/Drawer';
import NoteOne from '../../components/NoteOne/NoteOne';
import NoteTwo from '../../components/NoteTwo/NoteTwo';
import '../DashBord/DashBord.css'
import NoteThree from '../../components/NoteThree/NoteThree';
import { getAllData } from '../../Services/service';

const DashBord = () => {

    let [switchNote, setSwitchNOte] = useState(false)

    let [NoteData, setNoteData] = useState([])

    let [NoteStatus, setNoteStatus] = useState("AllNote")

    let handleToggleNote = (openStatus) => {
        setSwitchNOte(openStatus)
    }

    let handleDrawerAction = (status)=>{
        setNoteStatus(status)
    }

    let getAllNoteData = async () => {
        let res = await getAllData();
        let result = res.data.data

    let noteData = res.data.data.filter((data)=>{
       if(NoteStatus === "AllNote"){
            if(data.isArchived === false && data.isDeleted === false ){
               console.log("data------->", data)
                return data ;
            }
        }
        if(NoteStatus === "isArchive"){
            if(data.isArchived === true && data.isDeleted === false ){
            return data ;
            }
        }

         if(NoteStatus === "isTrash"){
            if(data.isDeleted === true) {
            return data ;
            }
        }
     })
     setNoteData(noteData)
    }

    useEffect(() => {
        getAllNoteData()
    }, [NoteStatus]) // calling on initial run and on state change(status change).
    
    return (
        <div className='dashbordContainer'>
            <MiniDrawer className='dashbordDrawer' drawerAction={handleDrawerAction} />
            {!switchNote ? (<NoteOne switchNoteProp={handleToggleNote} />) : (<NoteTwo getAllNoteData = {getAllNoteData} switchNotePropNoteNotetwo={handleToggleNote}/>)}
            <div className='dashbord_noteData'>
            {NoteData.length && NoteData.map((data) => {
            return (<NoteThree getAllNoteData = {getAllNoteData} noteDetails={data}  />)
            })}
        </div>
        
     </div>
    )
}
export default DashBord;