
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
      <div className="flex justify-center items-center">
            <div className="flex justify-center mt-5 h-[550px] w-[750px] bg-black bg-opacity-20 backdrop-blur-sm rounded-3xl border border-gray-300 border-b-2 shadow-2xl ">
                <div className="flex flex-col font-serif text-white font-bold text-3xl py-9" >
                    <p className="text-[40px] px-6">𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚝𝚘 𝙱𝙸𝙻𝙻 𝙱𝚄𝙳𝙳𝙸𝙴𝚂</p>
                
                    <p className="font-thin px-6 text-[30px] py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Ex, placeat praesentium odio itaque ipsam, dolorum sed
                        repellendus tenetur recusandae iste asperiores soluta 
                        sequi tempora non sunt, hic modi consequuntur reprehenderit.
                        Our platform provides seamless crypto transactions that can
                        be used to pay bills, expenditure etc betweeen the group of friends 
                         </p>
                    <div className="flex py-2 justify-center items-center">
                        {/* <div className="border flex justify-center items-center space-x-3 border-black rounded-md px-3 py-2 text-white mt-5 text-2xl font-bold font-serif bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r ">
                            <BsFillHouseCheckFill/> 
                            <p>Add Your Apartment</p> 
                        </div> */}

                        <button className="flex  border border-gray-400 flex-col hover:bg-gradient-to-r from-sky-300 to-blue-600 hover:text-black space-x-2 bg-opacity-5 shadow-inner rounded-md px-4 py-3 text-white mt-5 text-2xl font-semibold font-serif">
                            
                            <p className="flex justify-center items-center font-mono space-x-3 px-2">Start Your Journey <FaArrowRight/></p>
                            <h5 className="text-[20px] font-mono">Explore BILL BUDDIES to know more</h5>
                        </button>

                        {/* <div className="border border-black rounded-md px-3 py-2 text-white mt-5 text-2xl font-bold font-serif bg-gradient-to-r from-sky-400 to-blue-500">
                            <p> Go To Dashboard</p>
                        </div> */}
                    </div>
                </div>
            </div>
      </div>
  );
}