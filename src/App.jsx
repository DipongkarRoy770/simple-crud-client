

const App = () => {
  const handleUser = (event) => {
    event.preventDefault()
    const form = event.target

    const email = form.email.value;
    const password = form.password.value
    const user = { email, password }
    console.log(user)

    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert('new user is added')
          form.reset('')
        }
      })

  }
  return (
    <div>
      <h1 className="text-center text-3xl text-red-700">simple crud server backed project</h1>
      <form onSubmit={handleUser} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default App;