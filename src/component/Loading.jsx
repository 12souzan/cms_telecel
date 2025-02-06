import { CircularProgress } from '@mui/material'
import React from 'react'

function Loading() {
    return (
        <div className='flex items-center justify-center gap-2 h-[100vh] bg-[#fce7e7]'>
            <CircularProgress color="secondary" size='40px' />
            <p className="text-center text-[40px] font-medium text-[var(--primaryColor)]">Loading...</p>
        </div>
    )
}

export default Loading