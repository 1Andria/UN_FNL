let watch_btn = document.getElementById("watch_btn");
let hidden_container = document.getElementById("hidden_container");
let but_l = document.getElementById("but_l");
watch_btn.addEventListener("click", () => {
  hidden_container.classList.remove("hidden_container_plus");
  hidden_container.style.display = "block";
  hidden_container.classList.add("hidden_container_main");
});
but_l.addEventListener("click", () => {
  hidden_container.classList.remove("hidden_container_main");
  hidden_container.classList.add("hidden_container_plus");
  setTimeout(() => {
    hidden_container.style.display = "none";
    hidden_container.classList.remove("hidden_container_plus");
  }, 1000);
});

hidden_video.addEventListener("ended", () => {
  hidden_container.classList.remove("hidden_container_main");
  hidden_container.classList.add("hidden_container_plus");
  setTimeout(() => {
    hidden_container.style.display = "none";
    hidden_container.classList.remove("hidden_container_plus");
  }, 1000);
});
let get_started = document.getElementById("get_started");
get_started.addEventListener(`click`, () => {
  window.scrollTo({
    top: 1000,
    behavior: "smooth",
  });
});
let head_burg = document.getElementById("head_burg");
let head_hidden_info = document.getElementById("head_hidden_info");
let head_ul_hid = document.getElementById("head_ul_hid");
head_burg.addEventListener("click", () => {
  head_burg.classList.toggle("burg_plus");
  head_hidden_info.classList.toggle("head_hidden_info_plus");
  setTimeout(() => {
    head_ul_hid.classList.toggle("head_ul_hid_plus");
  }, 70);
});

let burg_line = document.getElementById("burg_line");
let burg_line_sec = document.getElementById("burg_line_sec");

head_burg.addEventListener("click", () => {
  burg_line.classList.toggle("burg_line_plus");
  burg_line_sec.classList.toggle("burg_line_sec_plus");
});
let log_see_btn = document.getElementById("log_see_btn");
let log_seen = document.getElementById("log_seen");
let log_unseen = document.getElementById("log_unseen");

log_see_btn.addEventListener("click", (e) => {
  e.preventDefault();
  log_unseen.classList.toggle("log_unseen_plus");
  if (log_pass.type === "password") {
    log_pass.type = "text";
  } else {
    log_pass.type = "password";
  }
});
let login_div = document.getElementById("login_div");
let log_container = document.getElementById("log_container");
let rem_btn = document.getElementById("rem_btn");
let login_hidden = document.getElementById("login_hidden");
login_div.addEventListener("click", () => {
  log_container.classList.remove("log_container_plus");
  log_container.style.display = "block";
  log_container.classList.add("log_container_main");
});

rem_btn.addEventListener("click", () => {
  log_container.classList.remove("log_container_main");
  log_container.classList.add("log_container_plus");
  setTimeout(() => {
    log_container.style.display = "none";
    log_container.classList.remove("log_container_plus");
  }, 900);
});

login_hidden.addEventListener("click", () => {
  log_container.classList.remove("log_container_plus");
  log_container.style.display = "block";
  log_container.classList.add("log_container_main");
});
let facebook = document.getElementById("facebook");
facebook.addEventListener("click", () => {
  window.open("https://www.facebook.com/");
});
let google = document.getElementById("google");
google.addEventListener("click", () => {
  window.open(
    "https://accounts.google.com/v3/signin/identifier?checkedDomains=youtube&continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button%26gar%3DWzEzMywiMjM2NzM2Il0%26sl%3Dtrue&ddm=1&dsh=S574083505%3A1734179430686867&flowEntry=AccountChooser&flowName=GlifWebSignIn&ifkv=AeZLP99qHuRWaqF6uiIYxzOoUXZf2v2lizJOzwPmOVlbKd08J6Q_-eiqwmmC9RemdTv6KXWVaz0elg&pstMsg=1&service=accountsettings"
  );
});
let linkedin = document.getElementById("linkedin");
linkedin.addEventListener("click", () => {
  window.open(
    "https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
  );
});
let gmail = document.getElementById("gmail");
gmail.addEventListener("click", () => {
  window.open("https://workspace.google.com/gmail/");
});

let head_sign = document.getElementById("head_sign");
let sign_container = document.getElementById("sign_container");
let sign_rem_btn = document.getElementById("sign_rem_btn");
let sign_hidden = document.getElementById("sign_hidden");
head_sign.addEventListener("click", () => {
  sign_container.classList.remove("log_container_plus");
  sign_container.style.display = "block";
  sign_container.classList.add("log_container_main");
});

sign_rem_btn.addEventListener("click", () => {
  sign_container.classList.remove("log_container_main");
  sign_container.classList.add("log_container_plus");
  setTimeout(() => {
    sign_container.style.display = "none";
    sign_container.classList.remove("log_container_plus");
  }, 900);
});

sign_hidden.addEventListener("click", () => {
  sign_container.classList.remove("log_container_plus");
  sign_container.style.display = "block";
  sign_container.classList.add("log_container_main");
});
let sign_seen = document.getElementById("sign_seen");
let sign_see_btn = document.getElementById("sign_see_btn");
let sign_unseen = document.getElementById("sign_unseen");
let sign_pass = document.getElementById("sign_pass");
sign_see_btn.addEventListener("click", (e) => {
  e.preventDefault();
  sign_unseen.classList.toggle("sign_unseen_plus");
  if (sign_pass.type === "password") {
    sign_pass.type = "text";
  } else {
    sign_pass.type = "password";
  }
});
let repeat_pass = document.getElementById("repeat_pass");
let repeat_see_btn = document.getElementById("repeat_see_btn");
let repeat_seen = document.getElementById("repeat_seen");
let repeat_unseen = document.getElementById("repeat_unseen");
repeat_see_btn.addEventListener("click", (e) => {
  e.preventDefault();
  repeat_unseen.classList.toggle("sign_unseen_plus");
  if (repeat_pass.type === "password") {
    repeat_pass.type = "text";
  } else {
    repeat_pass.type = "password";
  }
});

let facebook_sign = document.getElementById("facebook_sign");
facebook_sign.addEventListener("click", () => {
  window.open("https://www.facebook.com/");
});
let google_sign = document.getElementById("google_sign");
google_sign.addEventListener("click", () => {
  window.open(
    "https://accounts.google.com/v3/signin/identifier?checkedDomains=youtube&continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button%26gar%3DWzEzMywiMjM2NzM2Il0%26sl%3Dtrue&ddm=1&dsh=S574083505%3A1734179430686867&flowEntry=AccountChooser&flowName=GlifWebSignIn&ifkv=AeZLP99qHuRWaqF6uiIYxzOoUXZf2v2lizJOzwPmOVlbKd08J6Q_-eiqwmmC9RemdTv6KXWVaz0elg&pstMsg=1&service=accountsettings"
  );
});
let linkedin_sign = document.getElementById("linkedin_sign");
linkedin_sign.addEventListener("click", () => {
  window.open(
    "https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
  );
});

let gmail_sign = document.getElementById("gmail_sign");
gmail_sign.addEventListener("click", () => {
  window.open("https://workspace.google.com/gmail/");
});
let sign_login = document.getElementById("sign_login");
sign_login.addEventListener("click", () => {
  log_container.classList.remove("log_container_plus");
  log_container.style.display = "block";
  log_container.classList.add("log_container_main");
  sign_container.classList.remove("log_container_main");
  sign_container.classList.add("log_container_plus");
  setTimeout(() => {
    sign_container.style.display = "none";
    sign_container.classList.remove("log_container_plus");
  }, 900);
});
let login_sign = document.getElementById("login_sign");
login_sign.addEventListener("click", () => {
  sign_container.classList.remove("log_container_plus");
  sign_container.style.display = "block";
  sign_container.classList.add("log_container_main");
  log_container.classList.remove("log_container_main");
  log_container.classList.add("log_container_plus");
  setTimeout(() => {
    log_container.style.display = "none";
    log_container.classList.remove("log_container_plus");
  }, 900);
});
let log_form = document.getElementById("log_form");
let log_pass = document.getElementById("log_pass");
let sign_form = document.getElementById("sign_form");
let username = document.getElementById("username");
let email_val = document.getElementById("email_val");
let log_email = document.getElementById("log_email");
sign_form.addEventListener("submit", (e) => {
  e.preventDefault();
  cvladi = true;
  let PasswordValidation =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (!PasswordValidation.test(sign_pass.value)) {
    sign_pass.classList.add("input_err");
    cvladi = false;
  } else {
    sign_pass.classList.remove("input_err");
  }
  let TextValidation = /^[a-zA-Z]+$/;
  if (!TextValidation.test(username.value)) {
    username.classList.add("input_err");
    cvladi = false;
  } else {
    username.classList.remove("input_err");
  }
  let EmailValidation =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (!EmailValidation.test(email_val.value)) {
    email_val.classList.add("input_err");
    cvladi = false;
  } else {
    email_val.classList.remove("input_err");
  }
  if (repeat_pass.value !== sign_pass.value || repeat_pass.value === "") {
    repeat_pass.classList.add("input_err");
    cvladi = false;
  } else {
    repeat_pass.classList.remove("input_err");
  }
  if (cvladi) {
    log_container.classList.remove("log_container_plus");
    log_container.style.display = "block";
    log_container.classList.add("log_container_main");
    sign_container.style.display = "none";
    var information = {
      username: username.value,
      email: email_val.value,
      password: sign_pass.value,
    };
  }
  localStorage.setItem("info", JSON.stringify(information));
  repeat_pass.value = "";
  email_val.value = "";
  username.value = "";
  sign_pass.value = "";
});
log_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let ParsedStorage = JSON.parse(localStorage.getItem("info"));
  if (
    log_email.value === ParsedStorage.email &&
    log_pass.value === ParsedStorage.password
  ) {
    alert("Congratulations, you have succesfully logged in!");
    log_container.style.display = "none";
  } else if (!ParsedStorage) {
    alert("No user information found! Please sign up first.");
  } else {
    alert("Wrong!");
  }
  log_email.value = "";
  log_pass.value = "";
});
async function secondSectionImage() {
  try {
    let data = await fetch("https://fakestoreapi.com/products/10");
    let secondSectImage = await data.json();
    let image = document.getElementById("second_section_pic");
    image.src = secondSectImage.image;
  } catch (error) {}
}
secondSectionImage();

async function SectionHiddenImage() {
  try {
    let data = await fetch("https://fakestoreapi.com/products/10");
    let secondSectImage = await data.json();
    let image = document.getElementById("sec_hid_pic");
    image.src = secondSectImage.image;
  } catch (error) {}
}
SectionHiddenImage();
let thr_first = document.getElementById("thr_first");
let thr_arrow = document.getElementById("thr_arrow");
let thr_first_para = document.getElementById("thr_first_para");
thr_first.addEventListener("click", () => {
  thr_arrow.classList.toggle("thr_arrow_plus");
  thr_first_para.classList.toggle("thr_text_para_plus");
});

let thr_sec = document.getElementById("thr_sec");
let thr_sec_para = document.getElementById("thr_sec_para");
let thr_sec_arrow = document.getElementById("thr_sec_arrow");
thr_sec.addEventListener("click", () => {
  thr_sec_arrow.classList.toggle("thr_arrow_plus");
  thr_sec_para.classList.toggle("thr_text_para_plus");
});
let thr_thr = document.getElementById("thr_thr");
let thr_thr_arrow = document.getElementById("thr_thr_arrow");
let thr_thr_para = document.getElementById("thr_thr_para");
thr_thr.addEventListener("click", () => {
  thr_thr_arrow.classList.toggle("thr_arrow_plus");
  thr_thr_para.classList.toggle("thr_text_para_plus");
});
let sec_thr_img = document.getElementById("sec_thr_img");

async function FetchedImage() {
  let data = await fetch("https://fakestoreapi.com/products/6");
  let product = await data.json();
  sec_thr_img.src = product.image;
}
FetchedImage();
