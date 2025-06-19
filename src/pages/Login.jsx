import {useState} from "react";
import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
import { Link } from "react-router-dom";

export default function Login() {
    const [mobileNavBarVisible, setMobileNavBarVisible] = useState(false);

  return (
    <>
        <NavBar activeLink="Login" onToggleMobileNavBar={() => setMobileNavBarVisible(!mobileNavBarVisible)}/>

        <MobileNavBar isVisible={mobileNavBarVisible} activeLink="Login" onClose={() => setMobileNavBarVisible(false)} className="md:col-span-1 pt-7"/>
        <div>
            <main>
                <section className="relative bg-[url(./assets/background6.jpg)] h-screen bg-center bg-cover">
                    <div className="absolute inset-0 h-screen opacity-70 bg-black" />
                    <div className="relative flex items-center justify-center h-full">
                        <div className="p-10 text-left text-white rounded-2xl w-full max-w-3xl">
                            <h2 className="text-2xl font-bold pb-7 pt-5">Login</h2>
                            <fieldset className="border-2 border-own-2 rounded-lg px-4 py-2">
                                <legend className="text-white text-sm px-2">Username</legend>
                                <input type="text" id="username" className="w-full focus:outline-none py-1 "/>
                            </fieldset>
                            <fieldset className="border-2 border-own-2 rounded-lg px-4 py-2 mt-7 mb-10">
                                <legend className="text-white text-sm px-2">Password</legend>
                                <input type="password" id="password" className="w-full focus:outline-none py-1" />
                            </fieldset>
                            <div>
                                <div>
                                    <label className="mb-4 flex items-center text-sm"><input type="checkbox" checked className="bg-transparent accent-own-2 h-5 w-5 md:mr-4 mr-2" value="signed" />Keep me signed in.</label>
                                </div>
                            </div>
                            <div>
                                <button className="bg-own-2 px-5 py-2.5 rounded ">Login</button>
                            </div>
                            <p className="text-sm pt-7 items-center justify-center">Dont have an account, <Link to="/Signup" className="font-semibold text-own-2 underline">Sign Up</Link>, it's easy</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </>
  );
}