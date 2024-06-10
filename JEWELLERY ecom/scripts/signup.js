const closeButton = document.querySelector(".close_form");
const outerDiv = document.querySelector(".outerDiv");
const loginBtn = document.querySelector(".login_btn");
const signupBtn = document.querySelector(".signup_btn");

const formContent = document.querySelector(".formContent");

const buttons = document.querySelectorAll(".formHeader button");

if (closeButton) {
  closeButton.addEventListener("click", () => {
    outerDiv.style.transform = "scale(0)";
  });

  setTimeout(() => {
    outerDiv.style.transform = "scale(1)";
  }, 7000);


loginBtn.addEventListener("click",()=>{
buttons.forEach(i=>i.classList.remove("active_form"))
formContent.innerHTML = `<div class="input_box flex_center">
<input type="email" placeholder="Email ID/Phone Number">
</div>

<div class="input_box flex_center">
<input type="password" placeholder="Password">
</div>
<button class="form_btn">Log in</button>
<p>Forget Password ?</p>
<button class="form_btn">Login With Google</button>
<p>New User ? <a href="#" class="pink">SignUp Now </a></p>`;
loginBtn.classList.add("active_form")
})

signupBtn.addEventListener("click",()=>{
buttons.forEach(i=>i.classList.remove("active_form"))

    formContent.innerHTML = ` <div class="input_box flex_center">
    <input type="text" placeholder="Name" />
  </div>
  <div class="input_box flex_center">
    <input type="email" placeholder="Email" />
    <button class="form_btn">Verify</button>
  </div>
  <div class="input_box flex_center">
    <input type="number" placeholder="Number" />
    <button class="form_btn">Verify</button>
  </div>
  <div class="input_box flex_center">
    <input type="password" placeholder="Password" />
  </div>
  <div class="input_box flex_center">
    <input type="password" placeholder="Confirm Password" />
  </div>
  <div>
    <input type="checkbox" id="terms" />
    <label for="terms"
      >I agree to the Terms of use and Privacy Statement</label
    >
  </div>
  <button class="form_btn">Sign Up</button>
  <p>
    Already have an account ? <a href="#" class="pink">Login Now</a>
  </p>`;
signupBtn.classList.add("active_form")

})



}


{/* <div class="input_box flex_center">
<input type="email" placeholder="Email ID/Phone Number">
</div>

<div class="input_box flex_center">
<input type="password" placeholder="Password">
</div>
<button class="form_btn">Log in</button>
<p>Forget Password ?</p>
<button class="form_btn">Login With Google</button>
<p>New User ? <a href="#" class="pink">SignUp Now </a></p> */}