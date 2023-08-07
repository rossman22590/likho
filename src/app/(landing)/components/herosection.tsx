import Link from "next/link";
import {Github} from "lucide-react";
import LottiePlayer from "@/app/(landing)/components/LottiePlayer";
import GetStartedButton from "@/app/(landing)/components/getStartedButton";

const Herosection = () => {
    return (
        <div className="container flex">
            <div className="flex justify-center items-center">
                <div>
                    <h1 className="animate-gradient-xy bg-clip-text bg-gradient-to-br font-extrabold from-[#FFD89B] jsx-bbe7df302f14d4d5   leading-[1.2em]  text-3xl text-left text-transparent to-[#19547B] tracking-[0.em] uppercase  z-10">
                        AI Powered. Notion Styled. Multi-tenant. <br/> No-code Website Builder with  <span className={"animate-gradient-x bg-gradient-to-r from-red-500 to-orange-500 text-white px-3"}>Grafbase</span></h1>

                    <p className="text-lg text-gray-600 mt-5 leading-0.5">
                        Are you tired of spending countless hours creating and maintaining your website? Say goodbye to overwork and welcome the future of website building with LIKHO! Our revolutionary platform harnesses the power of AI and Grafbase, allowing you to effortlessly create captivating, powerful, and customizable websites without writing a single line of code.
                    </p>
                    <div className="flex gap-3">
                        <GetStartedButton/>
                        <Link href="https://github.com/desyed/likho" target="_blank" className="bg-black text-white rounded-full px-5 py-1 text-sm flex gap-2 items-center mt-5" ><Github width={15}/>Star on Github</Link>
                    </div>
                </div>

            </div>
            <div><LottiePlayer src="https://lottie.host/98ebbc55-2349-44e7-b629-fbb666983266/QvBTU9xcKX.json" height={400} width={400} /></div>
        </div>
    )
}

export default Herosection;