  "use client";

  import React, { useState } from "react";
  import { Coffee, EyeIcon, EyeOffIcon } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import AuthCarousel from "@/components/AuthCarousel";
  import CarouselCoffeeImg from "@/assets/images/coffee.png";
  import CarouselImage2 from "@/assets/images/coffee2.webp";
  import CarouselImage3 from "@/assets/images/coffee3.png";
  import { useRouter } from "next/navigation";
  import { axiosInstance } from "@/lib/addedAxiosInstance";
  import axios from "axios";

  const Login = () => {
    const { push } = useRouter();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);

    const handleLogin = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        setShowEmailError(true);
        setError("Email is required");
        return;
      } else if (!emailRegex.test(email)) {
        setShowEmailError(true);
        setError("Invalid email format");
        return;
      } else {
        setShowEmailError(false);
      }

      if (!password) {
        setShowPasswordError(true);
        setError("Password is required");
        return;
      } else {
        setShowPasswordError(false);
      }

      setError("");
    };

    const getUser = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);

      try {
        const address = await axiosInstance.post("/users/login", {
          email,
          password,
        });

        if (address.status === 200) {
          const { token, profileExists  } = address.data;
          localStorage.setItem("authorization", JSON.stringify(token));
          if(!profileExists){
            push("/profile")
          }
          else{ 
            push("/")
          }
        }
      } catch (err) {
        console.log("error", err);
        if (axios.isAxiosError(err)) {
          setError(err.response?.data.message);
        }
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="flex w-full h-screen">
        <div className="bg-amber-400 w-1/2 h-full flex justify-center items-center relative">
          <div className="flex text-[16px] font-bold gap-2 absolute top-8 left-20">
            <Coffee className="w-6 h-6" />
            Buy Me Coffee
          </div>

          <div className="flex flex-col items-center justify-center gap-4 w-[455px]">
            <AuthCarousel
              images={[
                { src: CarouselCoffeeImg.src, alt: "Image 1" },
                { src: CarouselImage2.src, alt: "Image 2 " },
                { src: CarouselImage3.src, alt: "Image 3" },
              ]}
            />
            <div className="font-bold text-2xl">Fund your creative work</div>
            <div className="text-center text-[16px] font-normal">
              Accept support. Start a membership. Setup a shop. It’s easier than
              you think.
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-4 relative">
          <Button
            className="w-[73px] h-10 absolute top-8 right-20"
            variant={"secondary"}
            onClick={() => (window.location.href = "/signup")}
          >
            Sign up
          </Button>

          <div className="w-[407px] min-h-[256px] flex flex-col justify-evenly gap-4">
            <div>
              <div className="font-bold text-2xl">Welcome back</div>
              <div className="text-[#71717A]">Enter your email and password</div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-[359px]">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className={`w-full p-3 border rounded ${
                    showEmailError ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {showEmailError && (
                  <div className="text-red-500 text-sm mt-1">
                    {error === "Invalid email format" ? (
                      "Please enter a valid email"
                    ) : (
                      <>
                        Please enter a valid email address
                        <br />
                        (e.g., example@domain.com).
                      </>
                    )}
                  </div>
                )}
              </div>

              <div className="w-[359px] relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full p-3 border rounded pr-10 ${
                    showPasswordError ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <div
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon size={20} />
                  ) : (
                    <EyeIcon size={20} />
                  )}
                </div>
                {showPasswordError && (
                  <div className="text-red-500 text-sm mt-1">
                    Password is required
                  </div>
                )}
              </div>

              <form onSubmit={getUser}>
                <Button
                  type="submit"
                  className={`w-[359px] h-10 transition-colors flex items-center justify-center ${
                    email && password && !loading
                      ? "bg-black text-white hover:bg-neutral-800"
                      : "bg-[#d1d1d1] text-[#a3a3a3] cursor-not-allowed"
                  }`}
                  disabled={!email || !password || loading}
                  onClick={handleLogin}
                >
                  {loading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white" />
                  ) : (
                    "Continue"
                  )}
                </Button>
                {error && (
                  <div className="text-red-500 text-sm mt-2 text-center w-[359px]">
                    {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Login;
