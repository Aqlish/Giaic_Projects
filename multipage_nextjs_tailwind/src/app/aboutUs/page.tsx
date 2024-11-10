"use client"
import React from "react"
export default function AboutUs(){
    return(
      <div>

        <div  className="bg-[#f5f5f5] h-[70%] w-[80%] ml-[10%] mt-[5%] pb-[7%] border-solid rounded-[20px]">
            
        <h1 className="pl-[42%] pt-[2%] text-[30px] font-">About Us</h1>
        {/* paddingLeft:"42%",paddingTop:"2%",fontSize:"30px",fontStyle:"italic" */}
        <p className="pl-[21%] pt[1%]">Meet the team behind nysquiz – bringing AI-powered interactive quizzes to life.</p>
            <div className="flex pl-[0%] pt-[30px]" >
            <div className="bg-[white] h-[50%],border-solid rounded-[20px] w-[40%] border-[2px] border-black">
                <strong  className="pl-[25%]">Aqsa Khan</strong> 
                <p className="p-[2%] text-[100%]">Aqsa Khan is a GenAI engineer and Python developer responsible for the technical brilliance behind nysquiz, ensuring a seamless and engaging quiz experience for users.

</p>
                 </div>
            <div className="bg-[white] h-[50%],border-solid rounded-[20px] w-[40%] border-[2px] border-black"> 
                 <strong  className="pl-[25%]">Yamman Butt</strong> 
                 <p className="p-[2%] text-[100%]">The visionary founder of nysquiz, Yamman is the creative mind behind the platform, making interactive learning accessible through AI-generated quizzes.</p>
                 </div>
            <div className="bg-[white] h-[50%],border-solid rounded-[20px] w-[40%] border-[2px] border-black"> 
               <strong className="pl-[25%]">Sadia Asif</strong>
               <p className="p-[2%] text-[100%]">Sadia, investor and marketing manager, drives nysquiz mission to make education accessible globally, guiding its growth and reach with strategic vision and unwavering support.</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
  // background:"#f5f5f5",height:"70%",width:"80%",marginLeft:"10%",marginTop:"50px", paddingBottom:"7%",borderStyle:"solid",borderRadius:"20px",paddingLeft:"0%
  
