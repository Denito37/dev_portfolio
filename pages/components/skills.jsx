
export default function Skills({ entry }){
    return(
        <section className=" p-4 my-4 text-center flex flex-col max-w-md">
            <h2 className=" text-3xl p-4 my-4">
                {entry.title}
            </h2>
            <div className=" flex flex-col">
                <p className=" my-4">
                    {entry.skillOne}
                </p>
                <p className=" my-4">
                    {entry.skillTwo}
                </p>
                <p className=" my-4">
                    {entry.skillThree}
                </p>
            </div>
        </section>
    )
}