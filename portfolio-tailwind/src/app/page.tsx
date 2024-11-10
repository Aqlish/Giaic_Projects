"use client"
import Image from "next/image"
import aqsa from "../../image/aqsa.jpg"
export default function home(){
  return(
    <div>
    {/* heading div */}
      <div className="font-bold text-5xl pl-[32%] pt-[2%] pb-[1%]"><h1 ><i>SIMPLE PORTFOLIO</i></h1></div>
      {/* // fontStyle:"italic",fontSize:"300%",paddingLeft:"32%",paddingTop:"2%",paddingBottom:"1%" */}
      {/* closing heading div */}
      {/* start main section div */}
      <div>
      <div className="pl-[70px] h[40px] bg-[#2a2b2b] ml-[15%] mr-[15%] flex gap-[10%] text-[white] h-[50px] pt-[13px]  ">
      {/* paddingLeft:"70px",height:"40px",background:"#2a2b2b",marginLeft:"15%",marginRight:"15%",display:"flex",gap:"10%",color:"white", paddingTop:"8px" */}
         <div><strong  ><b className="text-[red]">Aqsa</b>Khan</strong></div>
         <div><a href="https://mutlipagenextjs-css.vercel.app/">MPNcSS</a></div>
         <div><a href="https://multipagenextjstailwind-one.vercel.app/">MPNtailwind</a></div>
         <div><a href="https://portfoliocss-tau.vercel.app/">PortFcss</a></div>
         <div><a href="https://portfoliotailwind-pied.vercel.app/">Ptailwind</a></div>

         </div>
      <div className=" h-[20%] ml-[15%] mr-[15%] flex g-[30%] bg-[rgb(255,255,255)]" >
        {/* style={{background:"white",marginLeft:"15%",marginRight:"15%",height:"20%",display:"flex",gap:"30%" */}
        <div className="pl-[100px] pt-[50px] pb-[50px] text-[100%] w-[80%]" >
        {/* paddingLeft:"100px",paddingTop:"50px",paddingBottom:"50px",fontSize:"100%" */}
          <strong style={{animation: "fadeZoom 2s infinite alternate"}} >Hi < br></br>I am<strong style={{color:"orange"}}> Aqsa</strong> <br></br> a Frontend Developer</strong>  <br></br>
          <p>I am Aqsa khan, a UI/UX designer & front-end web developer. Focused on creating unique,
             results-driven digital experiences through clean and functional design.The visionary founder of nysquiz, Aqsa is the creative mind
             behind the platform, making interactive learning accessible through AI-generated quizzes tailored to user preferences.
             </p>
             <br></br> <br></br>
             <strong className="bg-[black] text-white mr-[5%] border-solid border-r-4 p-[6px]">Hire Me</strong>
            {/* //  background:"black",color:"white",marginRight:"5%",borderStyle:"solid",borderRadius:"5px",padding:"6px" */}
             <strong className="bg-[#f1b038] text-[white] border-solid border-r[5px] p-[6px]">Experience</strong>
              {/* // background:"green",color:"white",borderStyle:"solid",borderRadius:"5px",padding:"6px"}} */}

          </div>
        <div>
          <Image src={aqsa} alt="" width="500" height="500" style={{paddingRight:"30px",paddingTop:"30px"}} />
        </div>

      </div>
      </div>
  
    </div>
  )
}
