'use client'

import React from 'react'

const LogoutButton = () => {
    return (
        <div>
            <button
                onClick={() => console.log('client component')}
                className='rounded bg-blue-400 hover:bg-blue-700 px-4 py-2 text-white '
            >
                Sign Out
            </button>
        </div>
    )
}

export default LogoutButton