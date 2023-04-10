import AG from 'public/AG.jpg'
import Image from 'next/image'
export default function Hero(){
    return(
        <article className=' md:grid md:grid-cols-2 max-w-6xl my-8 '>
            <section>
                <h2 className=' text-center p-3 text-4xl md:text-5xl font-bold'>
                    Featured Project:
                </h2>
                <h3 className='text-center p-3 text-3xl'>
                    Advice Generator
                </h3>
                <p className='text-center p-3 mx-auto text-xl max-w-[40ch]'>
                    A fun pastime that gets quotes of great advice from an external API
                </p>
            </section>

            <Image 
                src={AG} 
                height={350} 
                alt='Project image' 
                className='md:rounded-2xl' />
        </article>
    )
}