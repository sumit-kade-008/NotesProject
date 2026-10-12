import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('')
  const [detail, setdetail] = useState('')
  const [task, settask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
    // Prevent adding empty notes
    if (!title.trim() || !detail.trim()) return;

    // Cleaner way to update array state
    settask([...task, { title, detail }])
    
    settitle('')
    setdetail('')
  }
  const deltenode =(idx)=>
  {
    const copytask=[...task];
    copytask.splice(idx,1)
    settask(copytask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'> 
      {/* Left Side: Form */}
      <form onSubmit={submitHandler} className='flex gap-10 p-10 lg:w-1/2'>
        <div className='flex gap-4 w-full items-start flex-col'>
          <input
            type="text" 
            
            placeholder='Enter Notes Heading' 
            className='p-4 w-full font-medium py-2 border-2 text-white rounded-2xl' 
            value={title} 
            onChange={(e) => settitle(e.target.value)} 
          /> 
          <textarea 
            placeholder='Enter Your daily Notes' 
            className='p-4 w-full font-medium py-2 h-40 border-2 text-white rounded-2xl' 
            value={detail} 
            onChange={(e) => setdetail(e.target.value)} 
          /> 
          <button className='p-4 w-full active:bg-gray-500 font-medium py-2 text-black border-2 rounded-2xl bg-white'>
            Submit
          </button> 
        </div> 
      </form> 

      {/* Right Side: Notes Display */}
      <div className='flex flex-col lg:w-1/2 bg-gray-900 gap-5 h-full p-10'> 
        <h1 className='text-xl font-bold'>Your Notes</h1> 
        {/* FIXED: Removed space from overflow-auto */}
        <div className='flex flex-wrap gap-5 mt-5 overflow-auto'> 
          {task.map(function (elem, idx) { 
            return (
              <div key={idx} className="h-56 w-56 p-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] 
              rounded-2xl flex flex-col justify-between"> 
                <div>
                  <h3 className='leading-tight text-xl py-5 font-bold text-black'>{elem.title}</h3> 
                  <p className='mt-0 leading-tight font-medium text-gray-600 break-words'>{elem.detail}</p> 
                  <button onClick={()=>
                    {
                      deltenode(idx)
                    }
                  }className='p-2 w-full active:bg-gray-500 font-medium py-2 text-white border-2 rounded-2xl bg-red-500 mt-7'>Delete</button>
                </div>
              </div> 
            )
          })} 
        </div> 
      </div> 
    </div> 
  ) 
} 

export default App