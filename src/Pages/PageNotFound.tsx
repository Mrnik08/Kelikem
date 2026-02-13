

const PageNotFound = () => {
  return (

    
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
          <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />
      </div>
        
        <h1 className="text-4xl font-bold text-center mt-20">404 - Page Not Found</h1>
        <p className="text-center text-gray-500 mt-4">Sorry, the page you are looking for does not exist.</p>
        <div className="text-center mt-6">
            <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Go Back Home</a>
        </div>

    </div>
  )
}

export default PageNotFound
