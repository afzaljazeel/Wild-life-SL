
// Fetch the JSON data
fetch("leopard.json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("parkName1").textContent = data.leopardInfo[0].parkName1;
    document.getElementById("parkName2").textContent = data.leopardInfo[1].parkName2;
    document.getElementById("parkName3").textContent = data.leopardInfo[2].parkName3;

    document.getElementById("threatName1").textContent = data.threats1[0].threatName1;
    document.getElementById("threatName2").textContent = data.threats1[1].threatName2;
    document.getElementById("threatName3").textContent = data.threats1[2].threatName3;

    document.getElementById("threatName11").textContent = data.threats2[0].threatName11;
    document.getElementById("threatName22").textContent = data.threats2[1].threatName22;
    document.getElementById("threatName33").textContent = data.threats2[2].threatName33;

  })
  .catch((error) => console.error("Error fetching data:", error));
