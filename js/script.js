// // Variables // // 
var body = document.querySelector("body");
var selectMood = document.querySelector("#moods");
//console.log(body, moods);

// // Functions // // 
selectMood.addEventListener("change", function (e) {
    var mood = e.target.value;
    if (mood === "happy") {
      body.classList.remove("sad");
      body.classList.remove("passionate");
      body.classList.add("happy");
    } else if (mood === "sad") {
      body.classList.remove("happy");
      body.classList.remove("passionate");
      body.classList.add("sad");
    } else if (mood === "passionate") {
      body.classList.remove("sad");
      body.classList.remove("happy");
      body.classList.add("passionate");
    }
});