function hideResults() {
  document.getElementById("of-age").setAttribute("class", "hidden");
  document.getElementById("not-of-age").setAttribute("class", "hidden");
  document.getElementById("invalid").setAttribute("class", "hidden");
}

window.onload = function() {
 
  document.querySelector("form").onsubmit = function(event) {
    
    event.preventDefault();
    hideResults();

    const age = parseInt(document.querySelector("input#age").value);

    let ofAge = document.getElementById("of-age");
    let notOfAge = document.getElementById("not-of-age");
    let invalidAge = document.getElementById("invalid");

    if (age >= 18){
      ofAge.removeAttribute("class");
    } else if (0 <= age < 18){
      notOfAge.removeAttribute("class");
    } //else {
    //   invalidAge.removeAttribute("class");
    // }
  };
};
