import Image from "next/image"
import HTML from 'public/html5.svg'
import JS from 'public/javascript.svg'
import react from 'public/reactjs.svg'
import devTools from 'public/chrome-devtools.svg'
import CSS from 'public/css.svg'
import tailwind from 'public/tailwindcss.svg'
import figma from 'public/figma.svg'
import UIUX from 'public/ui-ux.svg'
export default function Skills({ entry }){
    return(
        <section className="my-4 text-center flex flex-col max-w-lg">
            <h2 className=" text-3xl font-bold p-4 my-2">
                {entry.title}
            </h2>
            <div className=" flex flex-col items-center">
                { entry.title === 'Technical' ? 
                    <Image src={JS} alt="JavaScript" width={100} height={'auto'} className=" my-4" />
                : <Image src={CSS} alt="CSS" width={100} height={'auto'} className=" my-4" />
                }
                { entry.title === 'Technical' ? 
                    <Image src={react} alt="ReactJS" width={100} height={'auto'} className=" my-4" />
                : <Image src={tailwind} alt="TailwindCSS" width={100} height={'auto'} className=" my-4" />
                }
                { entry.title === 'Technical' ? 
                    <Image src={HTML} alt="HTML5" width={100} height={'auto'} className=" my-4" />
                : <Image src={figma} alt="Figma" width={100} height={'auto'} className=" my-4" />
                }
                { entry.title === 'Technical' ? 
                    <Image src={devTools} alt="Chrome Dev Tools" width={'auto'} height={100} className=" my-4" />
                : <Image src={UIUX} alt="UI & UX" width={100} height={'auto'} className=" my-4" />
                }
                
            </div>
        </section>
    )
}