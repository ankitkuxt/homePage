import { Orbitron, Gruppo} from "next/font/google";

const orbitron = Orbitron({
    subsets:['latin'],
    variable: '--font-Orbitron',
    weight: '400',
}) 

const gruppo = Gruppo({
    weight:'400',
    subsets:['latin'],
    variable: '--font-Gruppo',
})


export default function Hero() {
    
  return (
      <div className="flex justify-center items-center">
            <div className="flex flex-col h-[550px] w-[1400px] text-black font-serif backdrop-blur-md rounded-3xl">
                    <p className= {`${orbitron.variable} font-sans text-white text-[60px] px-4 py-4`}>Welcome to Bill Buddies !!</p>
                    <p className={` ${gruppo.variable} font-serif px-6 text-white text-[20px] py-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Ex, placeat praesentium odio itaque ipsam, dolorum sed
                        repellendus tenetur recusandae iste asperiores soluta 
                        sequi tempora non sunt, hic modi consequuntur reprehenderit.
                        Our platform provides seamless crypto transactions that can
                        be used to pay bills, expenditure etc betweeen the group of friends 
                        Ex, placeat praesentium odio itaque ipsam, dolorum sed
                        repellendus tenetur recusandae iste asperiores soluta 
                        sequi tempora non sunt, hic modi consequuntur reprehenderit.
                        Our platform provides seamless crypto transactions that can
                        be used to pay bills, expenditure etc betweeen the group of friends 
                        Ex, placeat praesentium odio itaque ipsam, dolorum sed
                        repellendus tenetur recusandae iste asperiores soluta 
                        sequi tempora non sunt, hic modi consequuntur reprehenderit.
                        Our platform provides seamless crypto transactions that can
                        be used to pay bills, expenditure etc betweeen the group of friends  

                    </p>
                    <div className="flex justify-center mt-[10px] items-center">
                        <button className="flex justify-center h-[90px] w-[350px] border-white items-center flex-col space-x-2 rounded-md px-4 py-3 text-white mt-5 text-2xl">
                            <h5 className={`${orbitron.variable} font-sans rounded-lg border translate hover:translate-y-1 bg-blue-700 px-3 py-2 text-[20px] mt-2  text-white`}>Sign Up</h5>
                            {/* <h5 className="text-[20px] mb-2 text-black font-mono">Explore BILL BUDDIES to know more</h5> */}
                        </button>
                    </div>
            </div>
      </div>
  );
}