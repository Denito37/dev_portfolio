import Link from "next/link"
import Image from "next/image"
import AG from 'public/AG.jpg'
import CC from 'public/CC.png'
import DD from 'public/DD.jpg'
export default function Projects({ entry }){
    return(
        <section className=" text-center bg-zinc-950 md:text-left p-4 m-4 max-w-6xl border rounded-2xl md:grid md:grid-cols-7 gap-4 justify-items-center items-center">
            <div className=" col-span-2">
                <h3 className=" p-2 lg:p-0 text-3xl md:text-2xl lg:text-3xl font-medium">
                    {entry.title}
                </h3>
                <p className=" text-sm text-center font-extralight p-2 lg:p-0">
                    {entry.stack}
                </p>
                <div className=" flex w-full justify-center">
                    <Link href={entry.site} target="_blank" rel="noopener noreferrer" className=" p-2 rounded-lg text-center transition-colors hover:bg-slate-100 hover:text-zinc-900">
                        Live Site
                    </Link>
                    <Link href={entry.repo} target="_blank" rel="noopener noreferrer" className=" p-2 rounded-lg text-center transition-colors hover:bg-slate-100 hover:text-zinc-900">
                        Github Repo
                    </Link>
                </div>
            </div>
            <p className=" font-light p-2 lg:p-0 text-xl col-span-3 max-w-[70ch] lg:max-w-[50ch]">
                {entry.description}
            </p>
            
            {entry.title === 'Advice Generator' && <Image src={AG} alt="Advice Generator" width={250} height={250} className=" my-2  mx-auto col-span-2  rounded-lg transition-transform hover:scale-125 lg:hover:scale-[1.38]" />}
            {entry.title === 'CSS Collection' && <Image src={CC} alt="CSS Collection" width={250} height={250} className=" my-2 mx-auto col-span-2  rounded-lg transition-transform hover:scale-125 lg:hover:scale-[1.38]" />}
            {entry.title === 'Dictionary Dynamo' && <Image src={DD} alt="Dictionary Dynamo" width={250} height={250} className=" my-2 mx-auto col-span-2  rounded-lg transition-transform hover:scale-125 lg:hover:scale-[1.38]" />}
        </section>
    )
}