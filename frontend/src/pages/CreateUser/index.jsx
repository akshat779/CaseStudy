
import { Text, Heading, CheckBox, Input, Button } from "../../components";
import FooterPage from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
import axiosUtil from "../../utils/axiosUtil";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export default function CreateUser() {
  // WIP ADD IMAGE INPUT

  // http://localhost:8000/user/create
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  // const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      // const response = await axios({
      //   method: "post",
      //   url: "http://localhost:8000/user/create",
      //   data: {
      //     username: username,
      //     email: email,
      //     firstname: firstName,
      //     lastname: lastName,
      //     role: "user",
      //     password: password,
      //     image: "",
      //   },
      //   withCredentials: true,
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     // "Content-Type": "application/json"
      //   },
      // });

      const response = await axiosUtil.post("/user/create", {
        username: username,
        email: email,
        firstname: firstName,
        lastname: lastName,
        role: "user",
        password: password,
        image: "",
      });


      if (response) {
        toast.success("Account Created!");
        navigate("/loginemail");
      }
    } catch (error) {
      toast.error("Please Try Again!");
      setUsername("");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      console.log("No", error);
    }
  };

  return (
    <>
      <Header />

      <div className="flex h-[calc(100vh-90px)] w-full justify-center items-center md:w-full border-[1px] border-black">
        <div className="flex  flex-col items-start gap-6 self bg-colors-white px-6 py-[30px] w-[30%] sm:p-5 border-[1px] border-black">
          <Heading
            size="heading_04"
            as="h1"
            className="ml-1 text-[22px] font-semibold tracking-[-0.55px] !text-colors-base-color_6 md:ml-0"
          >
            Welcome Onboard
          </Heading>
          <Heading
            as="h2"
            className="ml-1 text-[16px] font-medium tracking-[-0.20px] !text-colors-grey-grey_2 md:ml-0"
          >
            Create a New Account
          </Heading>
          <div className="mb-[22px] ml-1 flex flex-col gap-4 self-stretch md:ml-0">
            <div className="flex flex-col gap-4">
              <Input
                shape="square"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={`Username`}
                className="!border-[0.5px] px-4 tracking-[-0.30px]"
              />
              <Input
                shape="square"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={`Email`}
                className="!border-[0.5px] px-4 tracking-[-0.30px]"
              />
              <Input
                shape="square"
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={`First Name`}
                className="!border-[0.5px] px-4 tracking-[-0.30px]"
              />
              <Input
                shape="square"
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder={`Last Name`}
                className="!border-[0.5px] px-4 tracking-[-0.30px]"
              />
              <Input
                shape="square"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={`Password`}
                className="!border-[0.5px] px-4 tracking-[-0.30px]"
              />
              {/* <label
                htmlFor="fileName"
                className="flex justify-center items-center !border-[4px] rounded-xl h-[80px] text-center border-gray-400 border-dashed  tracking-[-0.30px]"
              >
                <input
                  id="fileName"
                  type="file"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder={`Quantity`}
                  className="hidden"
                />
                <span className="text-lg font-medium text-gray-600">
                  Click and drag to upload an image
                </span>
              </label> */}
            </div>
            <div className="flex items-center justify-between gap-5 my-4">
              <CheckBox
                size="sm"
                name="rememberme"
                label="Remember me"
                id="rememberme"
                className="gap-2.5 text-[14px] tracking-[-0.30px] text-text_secondary "
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 self-stretch">
            <Button
              shape="square"
              onClick={handleSignUp}
              className="min-w-[30%] p-2 !border-[0.5px] px-[34px] font-semibold tracking-[-0.40px] sm:px-5 hover:bg-[#1D1D1D] hover:text-[#FFFFFF] !text-black-900_7f"
            >
              Create Account
            </Button>
          </div>
        </div>
      </div>

      <FooterPage />
    </>
  );
}
