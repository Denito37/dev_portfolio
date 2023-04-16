import Link from "next/link"
import Image from "next/image"
import copy from 'public/copy.svg'
import mailTo from 'public/mail.svg'
import { useState } from "react"
export default function Footer() {
    const [popUp, setPopup] = useState(false)
    return (
    <footer className=" p-8 mx-auto relative items-center">

        {popUp ? <div className=" absolute top-0 left-[40%] p-4 text-center bg-green-100 text-green-700 rounded-2xl z-10">Copied</div> :null}

        <h2 className=" text-3xl text-center font-medium p-4">
            Contact Me
        </h2>
        <div>
            <div className=" bg-zinc-950 rounded-xl flex p-3 items-center">
                <p className=" text-lg mx-auto text-center p-1">
                    dennes2002@gmail.com
                </p>
                <button title="Copy" className=" bg-zinc-950 mx-2 p-2 border rounded-xl hover:brightness-200" onClick={() => {navigator.clipboard.writeText("dennes2002@gmail.com");setPopup(true) ; setTimeout(() => {setPopup(false)},1500)}}>
                    <Image src={copy} alt="copy email" width={20} height={20} />
                </button>
                <button title="Mail to" className=" bg-zinc-950 p-2 mx-2 border rounded-xl hover:brightness-200" onClick={() => window.location = 'mailto:dennes2002@gmail.com'}>
                <Image src={mailTo} alt="mail to email" width={20} height={20} />
                </button>
            </div>
            <p className="  text-2xl text-center p-3">
                <Link  className=" bg-zinc-950  p-1 rounded-lg hover:bg-slate-100 hover:text-zinc-800 transition-colors duration-300" href="https://www.linkedin.com/in/dennes-lopez-99907618a/" target="_blank" rel="noopener noreferrer">
                    Linkedin
                </Link>
            </p>
            <p className="text-2xl text-center p-3">
                <Link className=" bg-zinc-950  p-1 rounded-lg hover:bg-slate-100 hover:text-zinc-800 transition-colors duration-300" href="https://github.com/Denito37" target="_blank" rel="noopener noreferrer">
                    Github
                </Link>
            </p>  
        </div>
    </footer>
    )
}