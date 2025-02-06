import React from 'react'
import notFound from './../assets/404.gif'
function Not_Found() {
    return (
        <div className='h-[100vh] bg-[#fce7e7] flex items-center flex-col justify-center gap-2'>
            <h1 className='text-[30px] font-semibold'>Page Not Found</h1>
            <img src={notFound} alt='404'></img>
        </div>
    )
}

export default Not_Found