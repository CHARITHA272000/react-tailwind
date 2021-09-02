import React from 'react';

export function SignInPage(props) {
  return (
    <div class="min-h-screen bg-gray-700 py-0 flex flex-col justify-center sm:py-12 ">
    <div class="flex items-center justify-center h-screen w-screen  ">
      <div className= "bg-white  p-2 rounded-md md:w-1/3   ">
      <div>
            <svg
              style={{
                transition: ".3s",
              }}
              viewBox="0 0 1440 490"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(180)"
              {...props}
            >
              <path
                fill="#D4AC0D"
                d="M0 49l40-8.2c40-7.8 120-24.8 200 0 80 24.2 160 90.2 240 98 80 8.2 160-40.8 240-32.6C800 114 880 180 960 196s160-16 240-57.2c80-40.8 160-89.8 240-73.5C1520 82 1600 163 1680 196c80 33 160 16 240-24.5S2080 65 2160 49s160 16 240 81.7c80 65.3 160 163.3 240 147 80-16.7 160-146.7 240-196 80-48.7 160-16.7 240-8.2S3280 65 3360 98s160 114 240 130.7c80 16.3 160-32.7 240-40.9 80-7.8 160 24.2 240 65.4 80 40.8 160 89.8 240 98 80 7.8 160-24.2 240-16.4 80 8.2 160 57.2 240 8.2s160-196 240-228.7c80-32.3 160 48.7 240 73.5 80 24.2 160-7.8 240 0 80 8.2 160 57.2 200 81.7l40 24.5v196H0z"
              />
            </svg>
          </div>

        
        <form className="py-0 flex flex-col justify-center sm:py-12 "  >
            
            <h2 className="text-center text-2xl leading-9 
          font-extrabold text-gray-800" >Welcome Back!</h2>
          <div className="flex justify-center">
            <div className="lg:w-5/6 md:w-2/3 w-full px-10">
              <label 
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
              >
                Email
              </label>
              <input 
                type="email"
                name="email"
                id="email"
             
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                required
              />
            </div>
          </div>
        
          <div className="flex justify-center mt-4">
            <div className="lg:w-5/6 md:w-2/3 w-full px-10">
              <label 
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="password"
              >
                Password
              </label>
              <input 
                type="password"
                name="password"
                id="password"
                
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                required
              />
               <span className="text-teal-400 mx-2 text-center px-19   ">
            Forgot your Password?
          </span>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button 
              type="submit"
              className="group  lg:w-3/4 md:w-5/6 py-2 px-4  border border-transparent text-sm leading-5 font-medium 
                rounded-md text-white bg-yellow-500 hover:bg-yellow-300 focus:outline-none focus:border-yellow-400 
                focus:shadow-outline-teal active:bg-yellow-400 active:outline-none transition duration-150 ease-in-out"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
   
    

  )
}
