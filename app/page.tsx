
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Home() {
  return (
      <div>
        <div className="h-screen bg-[url('https://images.unsplash.com/photo-1569470451072-68314f596aec?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div>
            <Navbar/>
            <Hero/>
          </div>

        </div>
      </div>
  );
}
