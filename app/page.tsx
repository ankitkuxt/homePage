
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Home() {
  return (
      <div>
        <div className="h-screen bg-[url('https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1410.jpg?t=st=1725014505~exp=1725018105~hmac=cca2a8d9b604996c95e08a5c6fb58134174cfd8e3716135e718cdc1fe4c6a7a3&w=1060')] bg-opacity-20">
          <div>
            <Navbar/>
            <Hero/>
          </div>

        </div>
      </div>
  );
}
