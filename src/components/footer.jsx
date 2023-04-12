import Link from "next/link"
import { useState } from "react"
export default function Footer() {
    const [popUp, setPopup] = useState(false)
    return (
    <footer className=" p-8 mx-auto max-w-xl relative md:grid md:grid-cols-2 items-center">

        {popUp ? <div className=" absolute left-[33%] p-4 text-center bg-green-100 text-green-700 rounded-2xl z-10">Copied</div> :null}

        <h2 className=" text-3xl font-bold p-4">
            Contact Me :
        </h2>
        <div>
            <p className=" text-lg w-fit mx-auto text-center p-1 rounded-lg hover:bg-slate-100 hover:text-zinc-800 transition-colors duration-300" onClick={() => {navigator.clipboard.writeText("dennes2002@gmail.com");setPopup(true) ; setTimeout(() => {setPopup(false)},1500)}}>
                Email
            </p>
            <p className=" text-lg text-center p-1">
                <Link  className=" p-1 rounded-lg hover:bg-slate-100 hover:text-zinc-800 transition-colors duration-300" href="https://www.linkedin.com/in/dennes-lopez-99907618a/" target="_blank" rel="noopener noreferrer">
                    Linkedin
                </Link>
            </p>
            <p className="text-lg text-center p-1">
                <Link className=" p-1 rounded-lg hover:bg-slate-100 hover:text-zinc-800 transition-colors duration-300" href="https://github.com/Denito37" target="_blank" rel="noopener noreferrer">
                    Github
                </Link>
            </p>  
        </div>
    </footer>
    )
}