import AG from 'public/AG.jpg'
import Image from 'next/image'
export default function Hero(){
    return(
        <article className=' md:grid md:grid-cols-2 max-w-5xl my-8 '>
            <h2 className=' text-center p-3 text-4xl md:text-5xl font-bold'>
                Featured Project: Advice Generator
            </h2>
            <Image src={AG} height={300} alt='Project image' className='md:rounded-2xl' />
        </article>
    )
}