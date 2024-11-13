// import React, { useState } from 'react';

// const UseSateArray = () => {

//     let [friend, setFrind] = useState([{ name: "", age: 0 }])

//    let addFriend = ()=>{
//     setFrind((previous)=>[
//     ...previous,{
//         name:"smita",
//         age:31
//     }
// ])

//    }
//     return (
//         <>
//             <ul>
//                 {friend.map((friend, index) => (
//                     <li>
//                         <span>Name:{friend.name}</span><br></br>
                        
//                         <span>Age: {friend.age}</span>
//                     </li>
//                 ))}

//                 <button onClick={addFriend}></button>
//             </ul>

//         </>
//     )
// }
// export default UseSateArray;

import React, { useState } from 'react';

const UseStateArray = () => {
  const [friend, setFriend] = useState([]);
  const [newFriend, setNewFriend] = useState({ name: "", age: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log("name--->", name)
//     console.log("value--->", value )

//     setNewFriend((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const addFriend = () => {
//     if (newFriend.name && newFriend.age) {
//       setFriend((previous) => [
//         ...previous,
//         {
//           name: newFriend.name,
//           age: parseInt(newFriend.age),
//         },
//       ]);
//       setNewFriend({ name: "", age: "" }); // Reset input fields
//     }
//   };

let handleChange = (event)=>{
    let{dataset, value}= event.target;
    let {key}= dataset
    setNewFriend((prev)=>({
        ...prev,
        [key]:value
    }))
}

let addFriend =()=>{
    if(newFriend.name || newFriend.age){
        setFriend((prev)=>[
            ...prev,
            {
                name: newFriend.name,
                age: newFriend.age
            }
            
        ])

   setNewFriend({ name: "", age: "" });
    }
}

  return (
    <>
      <ul>
        {friend.map((friend, index) => (
          <li key={index}>
            <span>Name: {friend.name}</span><br />
            <span>Age: {friend.age}</span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        data-key="name"
        value={newFriend.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="number"
        data-key="age"
        value={newFriend.age}
        onChange={handleChange}
        placeholder="Age"
        
      />
      <button onClick={addFriend}>Add Friend</button>
    </>
  );
};

export default UseStateArray;
