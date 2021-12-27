const doc = (id) => document.getElementById(id);
var height_unit = "F";
var weight_unit = "K";
var height_ = 0;
document.getElementById("heightUnit").addEventListener("change", (e) => {
  height_unit = e.target.value;
  toggle_input();
});

document.getElementById("weight_unit").addEventListener("change", (e) => {
  weight_unit = e.target.value;
});

function calculate_bmi() {
  let w = parseInt(doc("weight").value);
  console.log({ height_unit });

  let h =
    height_unit === "F"
      ? parseInt(doc("heightF").value)
      : parseInt(doc("heightC").value);

  let i = parseInt(doc("inch").value) * (1 / 12);

  let weight = weight_unit === "K" ? w : w * 0.454;
  let height = height_unit === "F" ? (h + i) * 0.305 : h / 100;
  let bmi = weight / (height * height);
  if (isNaN(bmi)) {
    alert("Please Input correctly");
  } else {
    update_bmi(bmi.toFixed(3));
    indicate(bmi);
  }
}

function update_bmi(bmi) {
  doc("bmi").innerText = bmi;
}

function indicate(bmi) {
  if (bmi <= 18.5) {
    doc("indicator").children[0].style.border = "2px red solid";
    doc("indicator").children[1].style.border = "none";
    doc("indicator").children[2].style.border = "none";
    doc("indicator").children[3].style.border = "none";
  } else if (bmi <= 24.9 && bmi > 18.5) {
    doc("indicator").children[1].style.border = "2px red solid";
    doc("indicator").children[0].style.border = "none";
    doc("indicator").children[2].style.border = "none";
    doc("indicator").children[3].style.border = "none";
  } else if (bmi > 24.9 && bmi <= 29.9) {
    doc("indicator").children[2].style.border = "2px red solid";
    doc("indicator").children[1].style.border = "none";
    doc("indicator").children[0].style.border = "none";
    doc("indicator").children[3].style.border = "none";
  } else {
    doc("indicator").children[3].style.border = "2px red solid";
    doc("indicator").children[1].style.border = "none";
    doc("indicator").children[2].style.border = "none";
    doc("indicator").children[0].style.border = "none";
  }
}

function toggle_input() {
  doc("cm_input_box").style.display = height_unit === "C" ? "inline" : "none";
  doc("feet_input_box").style.display = height_unit === "C" ? "none" : "inline";
}
