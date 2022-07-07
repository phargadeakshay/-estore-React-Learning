import React from "react";
import logincss from "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="Grandparent">
      <div className="maindiv">
        <div className="headingdiv">
          <h2>Sign In</h2>
        </div>
        <div className="emailAndPassowrDiv">
          <div className="emaildiv">
            <label htmlFor="">Email</label>
            <input
              className="emailinputefield"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="passworddiv">
            <label htmlFor="">Password</label>
            <input
              className="passwordinputefield"
              type="text"
              placeholder="Password"
            />
          </div>
          <button className="SignInBtn">Sign In</button>
          <p id="login">
            <span>or</span>
          </p>
          <button className="SignUpBtn">Sign In</button>
          <div className="adiv">
            <a href="">Forget Password</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// import React from 'react'

// const LoginPage = () => {
//   return (
//     <div class="flex justify-center bg-gray-300">
//   <div class="flex w-8/12 bg-white mt-5 mb-5 justify-end">
//     <div class="grid grid-cols-6">
//       <div class="col-start-1 col-span-3 p-5">
//         <form
//           #loginForm="ngForm"
//           (ngSubmit)="loginForm.valid && loginData(loginForm.value)"
//         >
//           <div class="flex flex-col">
//             <div class="flex flex-col mb-2 gap-y-1">
//               <label for="">email</label>
//               <input
//                 appHighlight
//                 class="border border-blue-400 p-2"
//                 type="text"
//                 placeholder="email"
//                 id="email"
//                 type="text"
//                 required
//                 name="email"
//                 ngModel
//                 #email="ngModel"
//                 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
//               />
//               <span
//                 class="text-red-500"
//                 *ngIf="loginForm.submitted && email.errors && email.touched"
//               >
//                 <span *ngIf="email.errors['pattern']"> email is Invalid</span>
//               </span>
//             </div>

//             <div class="flex flex-col mb-2 gap-y-1">
//               <label for="">password</label>
//               <input
//                 class="border border-blue-400 p-2"
//                 type="text"
//                 placeholder="password"
//                 id="password"
//                 type="text"
//                 required
//                 name="password"
//                 #password="ngModel"
//                 ngModel
//                 minlength="3"
//               />
//               <span
//                 class="text-red-500"
//                 *ngIf="
//                   loginForm.submitted && password.errors && password.touched
//                 "
//               >
//                 <span *ngIf="password.errors['minlength']"
//                   >password should be 4 digit</span
//                 >
//               </span>
//             </div>
//           </div>
//           <button
//             class="py-2 px-4 rounded-md mb-3 mt-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 ..."
//           >
//             Login
//           </button>
//         </form>
//         <span class="flex gap-x-2 items-center">
//           <p>Don't have an account?</p>
//           <a
//             class="py-2 px-4 border-2 border-pink-500 text-pink-400 rounded-lg"
//             routerLink="/registration"
//           >
//             Create New</a
//           ></span
//         >
//       </div>
//       <div
//         class="col-start-4 col-span-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-5 text-white"
//       >
//         <h1 class="mb-5">We are more than just a company</h1>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat.
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
// <!-- 111 -->

//   )
// }

// export default LoginPage
