import Link from "next/link"
export default function Projects({ entry }){
    return(
        <section className=" p-4 my-4 mx-2 max-w-5xl border rounded-2xl grid md:grid-cols-6 gap-4 items-center">
            <div>
                <h2 className=" text-3xl">
                    {entry.title}
                </h2>
                <small>
                    {entry.stack}
                </small>
            </div>
            <p className=" text-xl col-span-4 max-w-[40ch] md:max-w-[50ch]">
                {entry.description}
            </p>
            <ul className=" flex flex-col">
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