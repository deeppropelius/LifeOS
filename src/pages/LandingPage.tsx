import Clock from "../components/Clock";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (<>


    <div className="
      relative
      bg-[#141414]
      h-screen
      w-screen
      flex
      flex-col
      items-center
      justify-center
      overflow-hidden
    ">

    <div className="
      absolute
      bg-[#969696] 
      aspect-square
      h-[80vh]
      -top-60
      rounded-full
      block
      z-0
      blur-[100px]
      ">
      </div>
      
     
      <Navbar />
      <Clock />
    </div>
    </>
  );
}

export default LandingPage;