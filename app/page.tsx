
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Home() {
  return (
      <div>
        <div className="h-screen bg-[url('https://img.freepik.com/premium-vector/dark-square-grid-background_1138645-265.jpg?w=1060')]">
          <div>
            <Navbar/>
            <Hero/>
          </div>

        </div>
      </div>
  );
}
