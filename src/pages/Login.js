import React from "react";
import { setconnection, setloginshow, setuserdata } from "../state/slices/data";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleOneTapLogin } from "@react-oauth/google";
// import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";

function Login() {
  // const handlecallback = async (res) => {
  //   console.log("JWT encoded Toekn", res.credential);
  //   var userData = await jwtDecode(res.credential);
  //   console.log(userData);
  //   dispatch(setuserdata(userData));
  //   dispatch(setconnection(true));
  //   dispatch(setloginshow(false));
  // };
  // useEffect(() => {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id: "22944664305-3ofj0bn1smqi7nrn17ejj4d1nc3v3jn2.apps.googleusercontent.com",
  //     callback: handlecallback,
  //   });
  //   google.accounts.id.renderButton(document.getElementById("login"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  // }, []);

  // const login = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     const data = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
  //       headers: {
  //         Authorization: `Bearer ${tokenResponse.access_token}`,
  //       },
  //     });
  //     console.log(data);
  //     dispatch(setuserdata(data));
  //     dispatch(setconnection(true));
  //     dispatch(setloginshow(false));
  //   },
  // });
  const dispatch = useDispatch();

  return (
    <div className=" fixed h-screen -top-24 flex items-center justify-center  w-full  px-2 ">
      <div className="bg-white  shadow    rounded lg:w-1/3 h-60  md:w-1/2 w-full p-10 mt-16 overflow-hidden ">
        <div className="w-full justify-end flex -mt-12 ml-10">
          <button
            onClick={() => {
              dispatch(setloginshow(false));
            }}
            className="bg-red-500 text-white text-lg    p-3  text-center rounded-bl-2xl"
          >
            x
          </button>
        </div>

        <div className="flex gap-y-4 flex-col">
          <p
            role="heading"
            aria-label="Login to your account"
            className="text-2xl select-none max-sm:text-lg font-extrabold leading-6 text-gray-800"
          >
            Login to your account
          </p>
          {/* <div id="login"></div>
          <button onClick={() => login()}>Login</button> */}
          <GoogleLogin
            auto_select={true}
            onSuccess={async (res) => {
              var userData = await jwtDecode(res.credential);
              console.log(userData);
              dispatch(setuserdata(userData));
              dispatch(setconnection(true));
              dispatch(setloginshow(false));
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
