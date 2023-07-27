import { Add, FileOpenOutlined } from '@mui/icons-material'
import React from 'react'

const PollChoice = () => {
    return (
        <div className='my-4  w-full py-4'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1>Add choices for your poll here</h1>
                </div>
                <div className='flex  gap-4'>
                    <button type="button" className=' flex items-center justify-center gap-2 rounded-md border-2 border-blacks-950 px-4 py-2 text-base transition duration-150 ease-in hover:bg-blacks-50 hover:text-whites-200'><FileOpenOutlined /> Add from CSV</button>
                    <button type="button" className=' flex items-center justify-center gap-2 rounded-md border-2 border-blacks-950 px-4 py-2 text-base transition duration-150 ease-in hover:bg-blacks-50 hover:text-whites-200'><Add /> Add Manually</button>
                </div>
            </div>
        </div>
    )
}

export default PollChoice