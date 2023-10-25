import { Link, useNavigate } from "react-router-dom"
import collection from "../images/collection.png"
import { UserAuth } from "../components/context/AuthContext"
import { useState } from "react"

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const {signUp} = UserAuth()
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password.length < 6) {
            setPasswordError("Password must be 6 characters or more")
            setTimeout(() => {
                setPasswordError("")
            }, 2000)
        }
        try {
            await signUp(email, password)
            navigate('/')
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <section className="w-full h-screen">
        <img className="absolute w-full h-full object-cover  " src={collection} alt="/" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" />
        <div className="fixed w-full px-4 py-20 z-50">       
            <div className=" max-w-[380px] sm:max-w-[450px] h-[500px] m-auto bg-black/75 text-white">
                <div className="max-w-[320px] mx-auto py-16">
                    <h1 className="font-bold text-3xl">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col py-4 space-y-3">
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
                        {passwordError && (
                            <p className="text-red-500">{passwordError}</p>
                        )}
                        <button className="bg-gradient-to-r from-red-500 to-blue-500 hover:text-black rounded-lg py-2">Sign Up</button>
                        <div className="w-full pt-2 flex justify-between text-gray-500">
                            <p><input className="mr-2" type="checkbox" />Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <div className="text-gray-500 text-lg pt-4">
                            <p>Already have an account? {" "}
                            <span className="text-white">
                                <Link to="signin">
                                    Sign In
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

export default SignUp