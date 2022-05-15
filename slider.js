var slider = document.getElementById("sliderRange");
var userAge = document.getElementById("age");

userAge.innerHTML = slider.value;

// 1.Version
slider.oninput = function() {
    userAge.innerHTML = this.value
}

// 2.Version
// function calculateAge() {
//   userAge.innerHTML = slider.value;
// }
