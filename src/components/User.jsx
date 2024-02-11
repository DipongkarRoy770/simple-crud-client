import { useLoaderData } from "react-router-dom";


const User = () => {
    const user = useLoaderData();
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
                alert('user data delete')
            }
        })
    }
    return (
        <div>
            <p>user serial no : {user.length}</p>
            {
                user.map(users =><p key={users._id}> {users.email} 
                <button onClick={()=>handleDelete(users._id)} className="bg-rose-400 p-2 m-2">X</button></p>)
            }
        </div>
    );
};

export default User;