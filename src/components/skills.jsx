import Image from "next/image"
import HTML from 'public/html5.svg'
import JS from 'public/javascript.svg'
import react from 'public/reactjs.svg'
import next from 'public/next.svg'
import git from 'public/git.svg'
import devTools from 'public/chrome-devtools.svg'
import CSS from 'public/css.svg'
import tailwind from 'public/tailwindcss.svg'
import figma from 'public/figma.svg'
import UIUX from 'public/ui-ux.svg'
export default function Skills({ entry }){
    return(
        <article className="my-4 text-center flex flex-col max-w-lg">
            <h3 className=" text-3xl font-extralight p-4 my-2">
                {entry.title}
            </h3>
            <div className=" grid grid-cols-2 gap-4 justify-items-center items-center">
                { entry.title === 'Technical' ? 
                    <Image title="JavaScript" src={JS} alt="JavaScript" width={100} height={'auto'} className=" my-4" /> : 
                    <Image title="CSS" src={CSS} alt="CSS" width={100} height={'auto'} className=" my-4" />
                }
                { entry.title === 'Technical' ? 
                    <Image title="ReactJS" src={react} alt="ReactJS" width={100} height={'auto'} className=" my-4" /> :
                    <Image title="TailwindCSS" src={tailwind} alt="TailwindCSS" width={100} height={'auto'} className=" my-4" />
                }
                { entry.title === 'Technical' ? 
                    <Image title="NextJS" src={next} alt="ReactJS" width={100} height={'auto'} className=" my-4" /> :
                    null
                }
                { entry.title === 'Technical' ? 
                    <Image title="HTML5" src={HTML} alt="HTML5" width={100} height={'auto'} className=" my-4" /> : 
                    <Image title="Figma" src={figma} alt="Figma" width={100} height={'auto'} className=" my-4" />
                }
                { entry.title === 'Technical' ? 
                    <Image title="Git" src={git} alt="ReactJS" width={100} height={'auto'} className=" my-4" /> : 
                    null
                }
                { entry.title === 'Technical' ? 
                    <Image title="Chrome Dev Tools" src={devTools} alt="Chrome Dev Tools" width={75} height={75} className=" my-4" /> : 
                    <Image title="User Interface & Experience" src={UIUX} alt="UI & UX" width={100} height={'auto'} className=" my-4" />
                } 
            </div>
        </article>
    )
}