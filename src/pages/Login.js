import { Link, useNavigate } from "react-router-dom"
import collection from "../images/collection.png"
import { UserAuth } from "../components/context/AuthContext"
import { useState } from "react"


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");
    // const [passwordError, setPasswordError] = useState("");
    const {user, logIn} = UserAuth("")
    const navigate = useNavigate()

    const handleLogin = async(e) => {
        e.preventDefault()

        setError("");
        // setPasswordError("");       

        try {
            await logIn(email, password)
            navigate('/')
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log(error)
            setError("Incorrect Login Details")
            setTimeout(() => {
                setError("")
            }, 3000)
        }
    }

  return (
    <section className="w-full h-screen">
        <img className="absolute w-full h-full object-cover  " src={collection} alt="/" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" />
        <div className="fixed w-full px-4 py-20 z-50">       
            <div className=" max-w-[380px] sm:max-w-[450px] h-[500px] m-auto bg-black/75 text-white">
                <div className="max-w-[320px] mx-auto py-16">
                    <h1 className="font-bold text-3xl pb-2">Sign In</h1>
                    {error && (<p className="bg-red-500 text-white py-1 px-2 rounded-lg w-full">{error}</p>)}
                    <form onSubmit={handleLogin} className="w-full flex flex-col py-4 space-y-3">
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            className="py-2 rounded-lg bg-gray-400 text-white placeholder:text-white px-2"
                            type="email"
                            value={email}
                            placeholder="Email" 
                        />
                        <input 
                            onChange={(e) => setPassword(e.target.value)}
                            className="py-2 rounded-lg bg-gray-400 text-white placeholder:text-white px-2"
                            type="password"
                            value={password}
                            placeholder="Password" 
                        />
                        <button className="bg-gradient-to-r from-red-500 to-blue-500 hover:text-black rounded-lg py-2">Sign In</button>
                        <div className="w-full pt-2 flex justify-between text-gray-500">
                            <p><input className="mr-2" type="checkbox" />Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <div className="text-gray-500 text-lg pt-4">
                            <p>Don't have an account? {" "}
                            <span className="text-white">
                                <Link to="signup">
                                    Sign Up
                                </Link>
                            </span></p>                        
                        </div>
                    </form>                
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login;