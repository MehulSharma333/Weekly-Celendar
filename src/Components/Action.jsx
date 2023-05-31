import React from 'react'

function Action(props) {
  return (
    <div className='Action'>
      <div className='BigDate'>April 10-17</div>
      <div className='Arrow'>Today</div>
      <div className='RightArrow'>
        <img src="Right Arrow.png" alt="" />
      </div>
      <div className='LeftArrow'>
        <img src="Left Arrow.png" alt="" />
      </div>
      <div className='Execute'>
        <div className='Black'>Period1</div>
      
      <div className='White text-xs font-light font-sans text-slate-400'>10:00-11:00</div>
      </div>
      <div className='Execute1'>
        <div className='Black1'>Period2</div>
        <div className='White1 text-xs font-light font-sans text-slate-400'>13:00-14:00</div>
      </div>
<button className='bg-blue-600 rounded-full text-white  px-6 py-2' onClick={props.function}>Add Period</button>
    </div>
  )
}

export default Action