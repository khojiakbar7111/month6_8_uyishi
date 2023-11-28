

export default function Login({name,setName, psw,setPsw, login}) {
  return (
    <div>

        <form  className="login_box" onSubmit={login}>
            <input className="login_type" type="text" placeholder="name type" value={name} onChange={(e) => setName(e.target.value)}/>
            <br />
            <input className="login_type" type="text" placeholder="passwordd type" value={psw} onChange={(e) => setPsw(e.target.value)} />
            <br />
            <button className="login_btn">login</button>
        </form>
    </div>
  )
}
