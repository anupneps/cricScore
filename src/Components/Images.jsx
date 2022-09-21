import React from 'react'

const images = [
  {
    id: 1,
    src: "https://assets.bcci.tv/bcci/photo/2021/11/09/a64aa1a0-dd43-4dac-bcc3-563799b33ef8/1352074063.jpg",
    alt:"kohli"
  },

  {
    id: 2,
    src: "https://assets.bcci.tv/bcci/photos/431/8c0863dd-3f70-488c-8162-65331c399cec.jpg",
    alt:"kohli"
  },

  {
    id: 3,
    src: "https://assets.bcci.tv/bcci/photos/422/2461ac99-48f3-48bf-aa4a-716f75c52890.jpg",
    alt:"kohli"
  },

  {
    id: 4,
    src: "https://assets.bcci.tv/bcci/photo/2020/01/19/4cd5ba66-cdf7-4007-b9b0-c5be81f0de68/HYDAR8831.jpg",
    alt:"kohli"
  },

  
]


const Images = () => {
  return (
  
    <div className='flex flex-row justify-center m-2 flex-wrap grow p-2' >
      
      {images.map(({id, src, alt})=>(
        <div key={id}>
          <img className='w-[350px] h-[250px] shadow-sm shadow-[orange] m-2 rounded'  src={src} alt={alt}  />
        </div>
        
      ))}
      

    </div>
  )
}

export default Images