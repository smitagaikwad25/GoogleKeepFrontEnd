import React , {useState} from 'react';

const Use_StateExample = () => {
    const [name, setName] = useState('');

    const [user, setUserDetails]= useState({Fname:"", email:""});

    

// set single value on button click
//  let handleclick =()=>{
//     setName('smita')

//  }
 
 // set input value
//  let handlechange =(event)=>{
//     setName(event.target.value)

//  }

 let hangelUserDetails =(event)=>{
   setUserDetails(previous=>({...previous, Fname: event.target.value}))
 }

 let hangelUserEmail = (event)=>{
    setUserDetails(previous=>({...previous, email: event.target.value}))
 }

    return(
        <div>
            {/* <button onClick={handleclick}>Click Here</button>
            <input onChange={handlechange}></input>
            <p>hello {name}</p> */}

            <input type='text' value={user.Fname} onChange={hangelUserDetails} placeholder='Enter Name'/>
            <input type='text' value={user.email} onChange={hangelUserEmail} placeholder='Enter email'/>
        
                <p>{`Name: ${user.Fname}`}</p>
                <p>{`Email: ${user.email}`}</p>
        </div>
    )
}
export default Use_StateExample;