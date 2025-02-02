import axios from "axios";
import toast from "react-hot-toast";

const createAPI = "/api/v1/create";
const checkEmail = "/api/v1/checkMail";
const loginAPI = "/api/v1/login";
const createCardAPI ="/api/v1/addCard";
const getAllCardsAPI = "/api/v1/cards";
const deleteCardAPI = "/api/v1/deleteCard";
const updateCardAPI = "/api/v1/updateCard";
const getAllUsersAPI = "/api/v1";
const deleteUsersAPI = "/api/v1/deleteAdmin";
const updateUserAPI = "/api/v1/updateUser";

const productsAPI = "https://dummyjson.com/products";

async function create(formData) {
  try {
    const response = await axios.post(createAPI, formData);
    const result = response.data;
    return result;
  } catch (e) {
    console.log(e);
  }
};

export async function checkMail(formData) {
  try {
    const response = await axios.post(checkEmail,
      {
        email: formData.get("email"),
      }
    );
    if (response.status === 200) {
      return await create(formData);
    } 
    else {
      alert("error");
    }
  } catch (e) {
    if(e.response && e.response.data.message === "email registered"){
      throw new Error(toast.error("user already exists"));
    }
  }
};

//login api

export async function login(data) {
  try {
    const response = await axios.post(loginAPI,data);
    if(response.data){
      // alert("logged in successfully")
      toast.success("logged in successfully")
      // console.log(response.data);
      localStorage.setItem("token",response.data.token);
      return response.data;
    }
  } catch (e) {
    if(e.response.data.message === "Email not found")
      throw new Error(toast.error("Email not found"));
    if(e.response.data.message === "Invalid password")
      throw new Error(toast.error("Invalid password"));
  }
};


//card post

export async function cardPost(formData) {
  try {
    const response = await axios.post(createCardAPI, formData);
    if(response.data)
      toast.success("courses added successfully");
    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
};


// get all cards

export async function getAllCards() {
  try {
    const response = await axios.get(getAllCardsAPI);
    return response.data.cards;
  } catch (e) {
    throw new Error(e.message);
  }
};

// delete cards
export async function deleteCard(id) {
  try {
    const response = await axios.delete(`${deleteCardAPI}/${id}`);
    if(response){
      toast.success("card deleted successfully");
      return response.data;
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

// update card
export async function updateCard({id, formData}){
try {
  const response = await axios.put(`${updateCardAPI}/${id}`, formData);
  if(response){
    toast.success("card updated successfully");
    return response.data;
  }
} catch (e) {
  throw new Error(e.message);
}
};

//get all users
export async function getAllUsers() {
  try {
    const response = await axios.get(getAllUsersAPI);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

//delete user
export async function deleteUser(id) {
  try {
    const response = await axios.delete(`${deleteUsersAPI}/${id}`);
    if(response){
      toast.success("User deleted Successfully!");
      return response.data;
    }
  } catch (e){
    throw new Error("api error", e.message);
  }
};

//update user
export async function updateUser({id, formData}){
  try {
    const response = await axios.put(`${updateUserAPI}/${id}`, formData);
    if(response){
      toast.success("user updated successfully");
      return response.data;
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

//get products
export async function productApiCall() {
  try {
    const response = await axios.get(productsAPI);
    return response.data.products;
  } catch (e) {
    console.log(e);
  }
};