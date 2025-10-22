import Navbar from "../../components/Navbar"

const SignUp = () => {
    return (
       <main className="bg-gray-100 font-sans antialiased">
            <Navbar handleChangeAuth="signup"/>
            
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full">
                    <form className="space-y-4" action="">
                        <h2 className="text-xl font-semibold">Login</h2>
                        <div>
                            <label className="block mb-1 font-medium" htmlFor="username">Username</label>
                            <input className="w-full p-2 border rounded"
                            placeholder="Enter your username" type="text" name="username" id="username" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium" htmlFor="email">E-mail</label>
                            <input className="w-full p-2 border rounded"
                            placeholder="Enter your email" type="email" name="email" id="email" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium" htmlFor="password">Password</label>
                            <input className="w-full p-2 border rounded"
                            placeholder="Enter your password" type="password" name="password" id="password" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium" htmlFor="conf-password">Confirm Password</label>
                            <input className="w-full p-2 border rounded"
                            placeholder="Enter your password" type="password" name="conf-password" id="conf-password" />
                        </div>
                        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700" type="submit">Sign up</button>
                    </form>
                </div>
            </div>
       </main>
    )
}

export default SignUp