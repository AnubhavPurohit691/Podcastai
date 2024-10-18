import Firstpage from "../components/Firstpage"
import { BackgroundBeamsWithCollision } from "../components/ui/backgroundbeam"
import Neonimage from "../assets/Neonpodcast.png"
import { MarqueeDemo } from "../components/Reviewcomponent"
import PdfUpload from "../components/Fileupload"
import { StickyScrollRevealDemo } from "../components/Stickyscroll"

function App() {

  return (
    <>
    
      <div className="bg-black">
      <BackgroundBeamsWithCollision>
      <div className="flex justify-center flex-col md:flex-row items-center">
      <img src={Neonimage}alt="image"/>
      <Firstpage/>
      </div>
      </BackgroundBeamsWithCollision>
      </div>
      <PdfUpload/>
      {/* <StickyScrollRevealDemo/> */}
      {/* <MarqueeDemo/> */}
      {/* this is review component */}
      </>

  )
}

export default App
