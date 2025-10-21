import Navbar from "@/components/Navbar"

const BlogDetails = () => {
    return (
        <main className="bg-gray-100 font-sans antialiased">
            <Navbar handleChangeAuth="loggedin"/>

            <div className="grow container mx-auto mt-10 px-4 sm:px-0">
                <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <section>
                        <h2 className="text-xl mb-4 font-semibold">Blog Post Details</h2>
                        <div className="border border-gray-300 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold">Blog Post Title</h3>
                            <p className="text-gray-700">This is the content</p>
                            <hr className="my-4 border-gray-300"/>
                            <h4 className="text-lg font-semibold">Youtube Title</h4>
                            <p className="text-gray-700">Title of the associated youtube video</p>
                            <h4 className="text-lg font-semibold mt-4">Youtube link</h4>
                            <a href="#" className="text-blue-400 hover:underline hover:text-blue-500">https://wwww.youtube.com</a>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default BlogDetails