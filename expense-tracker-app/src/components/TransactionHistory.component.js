import React from 'react'

const TransactionHistory = () => {
  return (
    <div className='my-8'>
        <h1 className='border-b-2 pb-1 font-semibold text-2xl'>Transaction History</h1>
        <ul className='list-none mt-6'>
            <li className='p-2 flex justify-between items-center text-green-500 font-medium text-lg  border-r-4 border-green-700 hover:bg-green-700 hover:text-white mb-4'>
                Project 1 income <span>$1.00</span>
                <button className='delete-btn'>X</button>
            </li>
            <li className='p-2 flex justify-between items-center font-medium text-lg text-red-500 border-r-4 border-red-700 hover:bg-red-700 hover:text-white mb-4'>
                Project 1 income <span >$1.00</span>
                <button className='delete-btn'>X</button>
            </li>
        </ul>
    </div>
  )
}

export default TransactionHistory