import Image from "next/image"
import najaf from "../../image/najaf.png";
export default function home(){
  return(
    <div>
    {/* heading div */}
      <div style={{fontStyle:"italic",fontSize:"300%",paddingLeft:"32%",paddingTop:"2%",paddingBottom:"1%"}}> <h1 >SIMPLE PORTFOLIO</h1></div>
      {/* closing heading div */}
      {/* start main section div */}
      <div>
      <div style={{paddingLeft:"70px",height:"40px",background:"#2a2b2b",marginLeft:"15%",marginRight:"15%",display:"flex",gap:"10%",color:"white", paddingTop:"8px"}}>
         <div><strong  ><b style={{color:"red"}}>Naj</b>af</strong></div>
         <div>Portfolio</div>
         <div>Services</div>
         <div>Experience</div>
         <div>Education</div>

         </div>
      <div style={{background:"white",marginLeft:"15%",marginRight:"15%",height:"20%",display:"flex",gap:"30%"}}>
        <div style={{paddingLeft:"100px",paddingTop:"50px",paddingBottom:"50px",fontSize:"100%"}}>
          <strong >Hi < br></br>I'm<strong style={{color:"orange"}}> Najaf Ali</strong> <br></br> a Frontend Developer</strong>  <br></br>
          <p>I am Najaf Ali, a UI/UX designer & front-end web developer. Focused on creating unique,
             results-driven digital experiences through clean and functional design.r</p>
             <br></br> <br></br>
             <strong style={{background:"black",color:"white",marginRight:"5%",borderStyle:"solid",borderRadius:"5px",padding:"6px"}}>Hire Me</strong>
             <strong style={{background:"green",color:"white",borderStyle:"solid",borderRadius:"5px",padding:"6px"}}>Experience</strong>

          </div>
        <div>
          <Image src={najaf} alt="" width="1500" height="1500" style={{paddingRight:"30px",paddingTop:"30px"}} />
        </div>

      </div>
      </div>
  
    </div>
  )
}
