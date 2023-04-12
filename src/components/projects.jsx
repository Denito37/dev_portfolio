import Link from "next/link"
export default function Projects({ entry }){
    return(
        <section className=" text-center md:text-left p-4 m-4 max-w-6xl border rounded-2xl md:grid md:grid-cols-6 gap-4 justify-items-center items-center">
            <div>
                <h3 className=" p-2 md:p-0 text-3xl font-extralight">
                    {entry.title}
                </h3>
                <p className=" text-sm p-2 md:p-0">
                    {entry.stack}
                </p>
            </div>
            <p className=" p-2 md:p-0 text-xl col-span-4 max-w-[60ch] md:max-w-[50ch]">
                {entry.description}
            </p>
            <ul className=" flex w-full justify-center md:flex-col">
                <Link href={entry.site} target="_blank" rel="noopener noreferrer" className=" p-2 rounded-lg text-center transition-colors hover:bg-slate-100 hover:text-zinc-900">
                    Live Site
                </Link>
                <Link href={entry.repo} target="_blank" rel="noopener noreferrer" className=" p-2 rounded-lg text-center transition-colors hover:bg-slate-100 hover:text-zinc-900">
                    Github Repo
                </Link>
            </ul>
        </section>
    )
}