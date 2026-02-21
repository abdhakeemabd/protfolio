import React, { useRef } from 'react'
import Card from '../component/card'
import { Globe } from '../component/globe'
import CopyEmailButton from '../component/copy-email-button'
import {Framework} from '../component/framework'

const About = () => {
  const grid2Container = useRef()
  return (
    <section className='c-space section-spacing'>
      <h2 className='text-heading'>About Me </h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
        {/* grid 1 */}
        <div className='flex items-end grid-default-color grid-1'>
          <img src="assets/coding-pov.png" className='absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]' alt="Coding POV" />
          <div className=' z-10'>
            <p className='head-test'>Hi, I'm Hakeem</p>
            <p className='subtext'>Over the Last 3 year, I developed front-end skills to deliver dynamic and responsive web application</p>
          </div>
          <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2  sm:h-1/3 bg-gradient-to-t from-indigo'></div>
        </div>
        {/* grid 2 */}
        <div className='flex items-end grid-default-color grid-2'>
          <div ref={grid2Container} className="flex items-center jstify-center w-full h-full">
            <p className='flex items-end text-5xl text-gray-500'>CODE IS CRAFT</p>
            <Card style={{ rotate: "75deg", top: "50%", left: "20%" }} containerRef={grid2Container} dragElastic={1} text="GRASP" />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} containerRef={grid2Container} dragElastic={1} text="SOLID" />
            <Card style={{ rotate: "90deg", top: "50%", left: "70%" }} containerRef={grid2Container} dragElastic={1} text="Design Patterns" />
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} containerRef={grid2Container} dragElastic={1} text="Design Principles" />
            <Card style={{ rotate: "20deg", top: "10%", left: "30%" }} containerRef={grid2Container} dragElastic={1} text="SRP" />
            <Card style={{ rotate: "30deg", top: "75%", left: "70%" }} containerRef={grid2Container} dragElastic={1} image="/assets/logos/csharp-pink.png" />
            <Card style={{ rotate: "-45deg", top: "75%", left: "25%" }} containerRef={grid2Container} image="/assets/logos/dotnet-pink.png" />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} containerRef={grid2Container} image="/assets/logos/blazor-pink.png" />
          </div>
        </div>
        {/* grid 3 */}
        <div className='grid grid-black-color grid-3'>
          <div className='z-10 w-[50%]'>
            <p className='headtext'>Time Zone</p>
            <p className='subtext'>I am based in Mars and open to remote work world wide </p>
          </div>
          <figure className='absolute left-[30%] top-[10%]'>
            <Globe />
          </figure>
        </div>
        {/* grid 4 */}
        <div className='grid grid-special-color grid-4'>
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className='text-center headtext'>Do you want to start a prohect to together? </p>
            <p className='subtext'>I am based in Mars and open to remote work world wide </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* grid 5 */}
        <div className='grid grid-default-color grid-5'>
          <div className='z-10 w-[50%]'>
            <p className='headText'>Teck Stack </p>
            <p className='subText'>I specailze in a variety of languages and frameworks, and tools that allow me to build robust and scalable application  .</p>
          </div>
          <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'>
            <Framework />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About