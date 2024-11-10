"use client"
import React from "react"
export default function AboutUs(){
    return(
      <div>

        <div  style={{background:"#f5f5f5",height:"70%",width:"80%",marginLeft:"10%",marginTop:"50px", paddingBottom:"7%",borderStyle:"solid",borderRadius:"20px",paddingLeft:"0%"}}>
            
        <h1 style={{paddingLeft:"42%",paddingTop:"2%",fontSize:"30px",fontStyle:"italic"}}>About Us</h1>
        <p style={{paddingLeft:"21%",paddingTop:"1%"}}>Meet the team behind nysquiz – bringing AI-powered interactive quizzes to life.</p>
            <div style={{display:"flex",paddingLeft:"0%",paddingTop:"30px"}} >
            <div style={{background:"white" , height:"50%",borderStyle:"solid",borderRadius:"20px",width:"40%",borderWidth:"2px",borderColor:"black"}}>
                <strong style={{paddingLeft:"25%"}}>Aqsa Khan</strong> 
                <p style={{padding:"2%",fontSize:"100%"}}>Aqsa Khan is a GenAI engineer and Python developer responsible for the technical brilliance behind nysquiz, ensuring a seamless and engaging quiz experience for users.

</p>
                 </div>
            <div style={{background:"white", height:"50%",borderStyle:"solid",borderRadius:"20px",width:"40%",borderWidth:"2px",borderColor:"black",}}> 
                 <strong style={{paddingLeft:"25%"}}>Yamman Butt</strong> 
                 <p style={{padding:"2%",fontSize:"100%"}}>The visionary founder of nysquiz, Yamman is the creative mind behind the platform, making interactive learning accessible through AI-generated quizzes.</p>
                 </div>
            <div style={{background:"white", height:"50%",borderStyle:"solid",borderRadius:"20px",width:"40%",borderWidth:"2px",borderColor:"black"}}> 
               <strong style={{paddingLeft:"25%"}}>Sadia Asif</strong>
               <p style={{padding:"2%",fontSize:"100%"}}>Sadia, investor and marketing manager, drives nysquiz mission to make education accessible globally, guiding its growth and reach with strategic vision and unwavering support.</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
