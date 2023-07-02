import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
<>
   <div className='p-10 '>
         <button className='h-16 w-40 border-2 text-orange-600 border-orange-600 rounded-full hover:bg-orange-600 text-xl hover:text-white transition duration-2000 '> <Link href="/">go back</Link>  </button>
</div>
    <div className='flex  h-screen align-middle justify-center' style={{background:'rgb(33,33,33)'}}>
     
<div  className='h-3/4 lg:w-3/4 md:w-full sm:w-full xs:w-full xl:w-2/5  mt-20 ' style={{backgroundImage:'url(https://cdn.discordapp.com/attachments/796024617835036693/1124850235638816868/abdessamads_Resume_5_230702_005255.jpg)',backgroundSize:"100% 100%"}}>  </div>
      
    </div></>
  )
}
