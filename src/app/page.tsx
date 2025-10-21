"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Homepage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100 font-sans antialiased">
      <Navbar handleChangeAuth="loggedin"/>

      <div className="grow container mx-auto mt-10 px-4 sm:px-0">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Welcome to AI Blog Generator</h2>
            <p className="text-gray-700 my-6">
              Generate high-quality blog articles from Youtube videos using AI.
              Simply enter the link from the Youtube video and get you blog content
              automatically generated.
            </p>
          </div>

          <div>
            <div className="flex space-x-4">
              <input className="grow p-2 border border-blue-400 rounded-l-m"
              id="youtube-link" type="url" placeholder="www.youtube.com/desired-video"/>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors" 
              id="generate-blog-btn">Generate</button>
            </div>

            <div id="loading-circle" className="load"></div>

            <section className="mt-10 grow">
              <h2 className="text-xl mb-4 font-semibold">Generated Blog Article</h2>
              <div id="blog-content" className="mt-2 text-gray-700 space-y-4">
                
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
