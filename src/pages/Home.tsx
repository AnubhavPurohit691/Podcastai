import Firstpage from "../components/Firstpage"
import { BackgroundBeamsWithCollision } from "../components/ui/backgroundbeam"
import Neonimage from "../assets/Neonpodcast.png"

function App() {

  return (
    <div className="">
      <BackgroundBeamsWithCollision>
      <div className="flex justify-center flex-col md:flex-row items-center">
      <img src={Neonimage}alt="image"/>
      <Firstpage/>
      </div>
      </BackgroundBeamsWithCollision>
      </div>
  )
}

export default App
