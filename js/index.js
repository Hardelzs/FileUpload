const buttonUp = document.getElementById("btn");
const realLife = document.getElementById("real-file");
const textfile = document.getElementById("text-file");
const upload = document.getElementById("btn2");

buttonUp.addEventListener("click", () => {
  realLife.click();
});

realLife.addEventListener("change", () => {
  if (realLife.value) {
    textfile.innerHTML = realLife.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  } else {
    textfile.innerHTML = "No file chosen, yet";
  }
});

upload.addEventListener("click", () => {
  document.getElementById("dev").innerHTML = textfile.innerHTML;
});
