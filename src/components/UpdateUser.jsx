import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
    const updateUser = useLoaderData()

    const updateUserLoaded = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const users = { email, password }
        console.log(users)

        fetch(`http://localhost:5000/users/${updateUser._id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('user update sucessfull')
                    form.reset(' ')
                }
                
            })
    }

    return (
        <div>

            <h2>update user serial :{updateUser?.email}</h2>

            <form onSubmit={updateUserLoaded} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" defaultValue={updateUser?.email} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" defaultValue={updateUser?.password} className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary" value="Login" />
                </div>
            </form>
        </div>
    );
};

export default UpdateUser;