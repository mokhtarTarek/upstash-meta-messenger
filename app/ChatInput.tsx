import React, { useState } from 'react'

const ChatInput = () => {
    const [input, setInput] = useState("")
    return (
        < form
            className='flex bottom-0 z-50 fixed px-10 py-5 space-x-2 w-full '
        >
            <input type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2
                focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed'
                placeholder='Enter your message here...' />
            <button
                type='submit'
                className=' rounded disabled:opacity-50 disabled:cursor-not-allowed 
                bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 '
                disabled={!input}
            >
                Send</button>
        </form >
    )
}

export default ChatInput