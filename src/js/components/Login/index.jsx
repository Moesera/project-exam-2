import React, { useState, useEffect, useCallback } from "react";
import useLogin from "./../../hooks/service/login";
import { useDispatch } from "react-redux";
import { closeLoginModal } from "../../hooks/loginModal";

import RegisterImage from "../../../assets/interface/icons8-add-user-male-100.png";
import { login } from "../../helpers/constant";

const url = login;

function LoginForm({ setShow }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isSuccess, isLoading, isError } = useLogin(url);

  const resetForm = useCallback(() => {
    setTimeout(() => {
      dispatch(closeLoginModal());
    }, 3500);
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      resetForm();

    }
  }, [isSuccess, resetForm]);

  function handleSubmit(event) {
    event.preventDefault();
    login(email, password);
  }

  function ShowRegister() {
    setShow(false);
  }

  if (isLoading) {
    return (
      <div>
        <p>...Loading</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center min-h-full my-5">
      <div className="mx-auto w-4/7 md:w-[60rem]">
      <p onClick={() => dispatch(closeLoginModal())} className="mb-4 cursor-pointer">Back</p>
      </div>
      <h2 className="w-11/12 mx-auto mb-12 text-4xl font-medium text-center">Log in to your account</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mx-auto bg-white w-4/7 md:w-[60rem]">
        <label className="flex flex-col font-inder">
          Email
          <input className="p-2 border rounded-lg" type="text" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" required />
        </label>
        <label className="flex flex-col font-inder">
          Password
          <input
            className="p-2 border rounded-lg"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />
        </label>
        <button className="p-2 border rounded-lg bg-success" type="submit" disabled={isLoading}>
          Log in
        </button>
        {isError && <p className="error">Error: {isError}</p>}
        {isSuccess && <div className="success">Login successful, you will be redirected shortly</div>}
      </form>

      <section className="mx-auto mt-20 w-4/7 md:w-[60rem]">
        <p className="text-center">If you do not have an account yet create one by clicking the box below</p>
        <button type="button" onClick={ShowRegister} className="flex items-center justify-between w-full px-4 py-2 border border-white mt-14 rounded-xl shadow-3xl hover:border hover:border-gray">
          <div className="text-left basis-[90%]">
            <h3 className="text-lg font-semibold sm:text-xl">Register an account with us</h3>
            <p className="text-base sm:text-xl sm:w-[35rem]">You want to rent your venue or rent a venue, register yourself today</p>
          </div>
          <div className="w-32">
            <img className="object-cover w-full h-full" src={RegisterImage} alt="user plus" />
          </div>
        </button>
      </section>
    </div>
  );
}

export default LoginForm;
