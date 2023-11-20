var id = document.getElementById("id");
var advice = document.getElementById("advice");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((response) => {
      id.innerHTML = `ADVICE #${response.slip.id}`;
      advice.innerHTML = `"${response.slip.advice}"`;
    })
    .catch((_) => console.log(_));
}
