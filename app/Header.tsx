import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoutButton from './LogoutButton'

const Header = () => {
    let session = true
    if (session)
        return (
            <header className='sticky top:0 flex justify-between items-center bg-white p-10 shadow-sm ' >
                <div className="flex space-x-2">
                    <Image
                        className='rounded-full'
                        width={30}
                        height={10}
                        alt='Profile Picture'
                        src='https://links.papareact.com/jne'
                    />
                    <div>
                        <p className="text-blue-400">logged as :</p>
                        <p className="text-lg font-bold">Tarek mkh</p>
                    </div>
                </div>
                < LogoutButton />
            </header>
        )

    return (
        <header className='sticky top:0 justify-center items-center bg-white p-10 shadow-sm ' >
            <div className='flex flex-col items-center space-y-5' >
                <div className='flex items-center space-x-2' >
                    <Image
                        src='https://links.papareact.com/jne'
                        height={10}
                        width={50}
                        alt='Logo'
                    />
                    <h1 className='text-blue-400' >Welcome To Meta Messenger</h1>
                </div>
                <Link
                    href='auth/signin'
                    className='bg-blue-500 hover:bg-blue-700 rounded px-4 py-2 font-bold text-white '

                >Sign In</Link>
            </div>
        </header>
    )
}

export default Header