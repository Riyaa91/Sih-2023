import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />
      <section class="h-100 bg-dark">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card card-registration my-4">
                <div class="row g-0">
                  <div class="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample photo"
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-xl-6">
                    <div class="card-body p-md-5 text-black">
                      <h3 class="mb-5">Login Form</h3>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example97"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example97">
                          Email ID
                        </label>
                      </div>
                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example97"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example97">
                          Password
                        </label>
                      </div>

                      <div class="d-flex justify-content-center pt-3">
                        <button
                          type="button"
                          class="btn btn-warning btn-lg ms-2"
                        >
                          Login
                        </button>
                      </div>
                      <div className="text-center py-3">OR</div>
                         <div class="d-flex justify-content-center align-items-center pt-3">
                         Create a new account?&nbsp;
                        <NavLink to='/signup'>
                            Click Here
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
