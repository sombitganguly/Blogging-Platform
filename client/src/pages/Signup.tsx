import { useState } from "react"

export default function Signup() {

    interface FormData{
        username: string,
        email: string,
        password: string
    }

    const [formData, setFormData] = useState<FormData>({username:'', email:'', password:''})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        const res = await fetch('http://localhost:9000/api/auth/signup', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        const data = await res.json()
        console.log(data)

    }

  return (
    <div className="h-screen max-w-screen bg-slate-500 flex flex-col justify-center items-center">
        <div className="h-4/5 w-4/5 lg:w-2/5 bg-slate-100 flex flex-col gap-7 items-center justify-center">
        <h1 className="text-3xl">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-h-full max-w-full">
            <input id="username" className="h-12 w-80 rounded-md" placeholder="username" onChange={handleChange} />
            <input id="email" className="h-12 w-80 rounded-md"  placeholder="email" onChange={handleChange} />
            <input id="password" className="h-12 w-80 rounded-md"  placeholder="password" onChange={handleChange} />
            <button className="bg-red-400 h-12 w-80 rounded-md text-white" type="submit">Sign Up</button>
        </form>
        </div>
    </div>
  )
}
