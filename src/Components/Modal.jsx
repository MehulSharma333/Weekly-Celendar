import React from 'react'

export default function Modal(props) {
  return (
    <div id={props.modalId} className="fixed flex -z-50 opacity-0 justify-center duration-500 bg-black ease-in-out scale-50 items-center inset-0 backdrop-blur-sm bg-opacity-30 ">
    <div className="bg-[#F2F2F2] mx-5 p-3 rounded-lg input type=text ">
        <div className="flex flex-col w-full  sm:w-[600px] text-white bg-white rounded-lg gap-4 p-6">
          <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Period</label>
        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Period Name" required></input>
      </div>
      <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Time</label>
        <input type="time" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Period Name" required></input>

      </div>
      <div>
        <label for="first_name" class="grid mb-2 text-sm font-medium text-gray-900 dark:text-white">End Time</label>
        <input type="time" id="first_name" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Period Name" required></input>
      </div>
      </div>
      <div className='text-sm font-medium text-gray-800 mb-5'>Repeat On Days
      <div className='Alphabet grid gap-1 mt-2'>
      <div className='Alphabet1'>S</div> 
      <div className='Alphabet2'>M</div> 
      <div className='Alphabet3'>T</div> 
      <div className='Alphabet4'>W</div> 
      <div className='Alphabet5'>T</div> 
      <div className='Alphabet6'>F</div> 
      <div className='Alphabet7'>S</div> 
      </div>
      </div>
       <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From</label>
        <input type="date" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required></input>
      </div>
      <div className= 'button type="button" class=text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 grid w-full'>Add Period</div>
            <div className="flex relative gap-5">
                    <div onClick={props.func} className="absolute right-0 group cursor-pointer border-white rounded-sm top-0">
                    <svg className="group-hover:rotate-90 group-hover:scale-125 duration-200 ease-linear" xmlns="http://www.w3.org/2000/svg" fill="#333333" height="24" viewBox="0 96 960 960" width="24"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
                    </div>
            </div>
                  
        <div>
        white something in this div              
        </div>



        </div>
    </div>
    </div>
  )
}
