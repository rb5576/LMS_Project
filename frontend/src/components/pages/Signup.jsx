import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { createThunk } from "../redux/admin.slice";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [file, setFile] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [cpass, setCpass] = useState("");

  async function handleForm(e) {
    e.preventDefault();

    const emailReg =
      /^[a-zA-Z0-9._%+-]+@(gmail|googlemail|yahoo|yahoomail)\.com$/;
    const mobileReg = /^(?!0{10})\d{10}$/;

    if (
      fname &&
      lname &&
      email &&
      mobile &&
      address &&
      city &&
      zip &&
      file &&
      dob &&
      password &&
      cpass
    ) {
      if (emailReg.test(email)) {
        if (mobileReg.test(mobile)) {
          if (password !== cpass) {
            alert("password doesn't match");
          } else {
            const formData = new FormData();
            formData.append("fname",fname);
            formData.append("lname",lname);
            formData.append("email",email);
            formData.append("mobile",mobile);
            formData.append("address",address);
            formData.append("city",city);
            formData.append("zipcode",zip);
            formData.append("password",password);
            formData.append("dob",dob);
            formData.append("file",file);

            try {
              await dispatch(createThunk(formData)).unwrap();
              navigate("/login")
            } catch (e) {
              console.log("Error creating", e);
            }
          }
        } else {
          alert("enter only 10 digits");
        }
      } else {
        alert("wrong email format");
      }
    } else {
      alert("all fields are required");
    }

  }

  return (
    <>
      <Navbar />
      <br />
      <br /> <br />
      <section className="p-6  dark:text-gray-900 ">
        <h1 className="md:text-5xl text-white capitalize text-center pb-8 underline shadow-md shadow-white">
          registration form
        </h1>
        <form
          onSubmit={handleForm}
          noValidate=""
          action=""
          method=""
          className="container flex flex-col mx-auto space-y-12 shadow-md shadow-white"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-4 col-span-full lg:col-span-1">
              <p className="font-medium">Personal Inormation</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Amet, dolor earum pariatur fugit, dolore eaque
                veritatis inventore sint sapiente nobis maxime vitae, nisi
                mollitia voluptatibus labore tempora aperiam! Quia, nam.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">First name</label>
                <input
                  onChange={(e) => setFname(e.target.value)}
                  name="fname"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Last name</label>
                <input
                  onChange={(e) => setLname(e.target.value)}
                  name="lname"
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Mobile</label>
                <input
                  onChange={(e) => setMobile(e.target.value)}
                  type="number"
                  placeholder="Mobile"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm">Address</label>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">City</label>
                <input
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">State / Province</label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">ZIP / Postal</label>
                <input
                  onChange={(e) => setZip(e.target.value)}
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm capitalize font-bold">
                  upload profile
                </label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  placeholder=""
                  accept=".jpeg, .jpg, .png"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-900 focus:dark:ring-violet-600 border border-red-600"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm capitalize font-bold">DOB</label>
                <input
                  onChange={(e) => setDob(e.target.value)}
                  type="date"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm capitalize font-bold">
                  Enter Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm capitalize font-bold">
                  Enter Confirm Password
                </label>
                <input
                  onChange={(e) => setCpass(e.target.value)}
                  type="password"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>

              <div className="col-span-6">
                <Link to="/login" className=" capitalize">
                  do you have an account?{" "}
                  <span className="link">login now</span>
                </Link>
              </div>
              <div className="col-span-full sm:col-span-6 ">
                <button className="btn btn-info w-full md:text-xl capitalize tracking-widest font-serif">
                  submit
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default Signup;
