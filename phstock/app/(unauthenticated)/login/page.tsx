'use client'
import React from "react"

export default function Login() {

    //practice usestate

    const [number, setNumber] = React.useState(0)

    function numberUp() {
        setNumber(x => x + 1)
    }

    // email usestate

    const [emailInput, setEmailInput] = React.useState("")

    function updateEmailInput(e: React.ChangeEvent<HTMLInputElement>) {
        setEmailInput(e.target.value)
    }

    //password usestate

    const [passwordInput, setPasswordInput] = React.useState("")

    function updatePasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
        setPasswordInput(e.target.value)
    }
    
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <div className="bg-white p-8 shadow rounded flex flex-col justify-center items-center">
                <h1 className="text-2xl mb-4 font-bold">Login</h1>
                <input 
                    id="email" 
                    placeholder="Email" 
                    type="email" 
                    className="my-2 p-2 border border-gray-300" 
                    value={emailInput} 
                    onChange={updateEmailInput}
                />
                <input 
                    id="password" 
                    placeholder="Password" 
                    type="password" 
                    className="my-2 p-2 border border-gray-300" 
                    value={passwordInput} 
                    onChange={updatePasswordInput}
                />
                <button onClick={numberUp} className="bg-blue-500 text-white px-4 py-2 rounded">
                Login
                </button>
            </div>
        </div>
    )
}