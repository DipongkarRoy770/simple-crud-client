import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const User = () => {
    const loadedUser = useLoaderData();
    const [user,setUser] =useState(loadedUser)
    console.log(user)

    const handleDelete=_id=>{
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'delete'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                alert('user data delete');
                const remaining = user.filter(users=>users._id!== _id)
                setUser(remaining)
            }
        })
    }
    return (
        <div>
            <p>user serial no : {user.length}</p>
            {
                user.map(users =><p key={users._id}> 
                {users.email} 
                <button onClick={()=>handleDelete(users._id)} className="bg-rose-400 p-2 m-2">X</button>
                <Link to={`/update/${users._id}`}>Update user</Link>
                </p>)
            }
        </div>
    );
};

export default User;