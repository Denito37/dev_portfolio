import Link from "next/link"
export default function Footer() {
    return (
    <footer className=" p-4 mx-auto md:grid md:grid-cols-2 max-w-lg">
                <h2 className="text-lg text-center p-1">
                    <Link className=" p-1 rounded-lg hover:bg-slate-100 hover:text-zinc-800 transition-all duration-300" href="https://github.com/Denito37" target="_blank" rel="noopener noreferrer">
                        Github
                    </Link>
                </h2>
                <h2 className=" text-lg text-center p-1">
                    <Link  className=" p-1 rounded-lg hover:bg-slate-100 hover:text-zinc-800 transition-all duration-300" href="https://www.linkedin.com/in/dennes-lopez-99907618a/" target="_blank" rel="noopener noreferrer">
                        Linkedin
                    </Link>
                </h2>
        </footer>
    )
}