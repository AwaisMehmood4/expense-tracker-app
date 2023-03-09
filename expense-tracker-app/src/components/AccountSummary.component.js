import React from 'react'

const AccountSummary = () => {
  return (
    <div className='flex justify-around my-4 shadow-md shadow-slate-400 p-6'>
        <div className='text-center font-bold'>
            <h2 className='text-xl'>INCOME</h2>
            <h3 className='text-lg text-green-600'>$0.00</h3>
        </div>
        <div className='h-16 w-px bg-slate-400'></div>
        <div className='text-center font-bold'>
            <h2 className='text-xl'>EXPENSE</h2>
            <h3 className='text-lg text-red-600'>$0.00</h3>
        </div>
    </div>
  )
}

export default AccountSummary