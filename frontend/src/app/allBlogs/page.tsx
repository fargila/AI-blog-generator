import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

const AllBlogs = () => {
    return (
       <main className="bg-gray-100 font-sans antialiased">
            <Navbar handleChangeAuth="loggedin"/>

            <div className="container mx-auto mt-10 px-4 sm:px-0">
                <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <section>
                        <h2 className="text-xl mb-4 font-semibold">All Blog Posts</h2>
                        <div className="space-y-4">
                            <div className="border border-gray-300 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold">Blog Post Title 1</h3>
                                <p>This is the content of the blog post. blablablabla...</p>
                            </div>

                            <div className="border border-gray-300 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold">Blog Post Title 2</h3>
                                <p>This is the content of the blog post. blablablabla...</p>
                            </div>
                        </div>

                        {/* Repeat */}
                    </section>
                </div>
            </div>

            <Footer/>
       </main>
    )
}

export default AllBlogs