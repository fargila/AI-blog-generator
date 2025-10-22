import Link from "next/link"

type NavbarProps = {
    handleChangeAuth: 'login' | 'signup' | 'loggedin'
}

const Navbar = ({ handleChangeAuth }: NavbarProps) => {

    const onChangeAuth = ()=> {
        if (handleChangeAuth === 'login') {
            return <Link href="/signUp" className="text-white hover:underline">Sign up</Link>
        }
        else if (handleChangeAuth === 'signup') {
            return <Link href="/login" className="text-white hover:underline">Login</Link>
        }
        else if(handleChangeAuth === 'loggedin') {
            return <Link href="/login" className="text-white hover:underline">Log out</Link>
        }
    }

    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
            <h1 className="text-3xl font-bold">AI Blog Generator</h1>
            <div>
                { onChangeAuth() }
            </div>
        </nav>
    )
}

export default Navbar