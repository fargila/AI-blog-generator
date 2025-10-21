"use client"

import Navbar from "@/components/Navbar"

const Login = () => {
    return (
       <main className="bg-gray-100 font-sans antialiased">
            <Navbar handleChangeAuth="login"/>
            
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
                            <label className="block mb-1 font-medium" htmlFor="password">Password</label>
                            <input className="w-full p-2 border rounded"
                            placeholder="Enter your password" type="password" name="password" id="password" />
                        </div>
                        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700" type="submit">Login</button>
                    </form>
                </div>
            </div>
       </main>
    )
}

export default Login