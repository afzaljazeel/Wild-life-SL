
// Fetch the JSON data
fetch("animals.json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("mainTitle").textContent =
    data.mainTitle;
    document.getElementById("mainPara").textContent =
      data.mainPara;
      document.getElementById("animal1").textContent =
      data.animal1;
      document.getElementById("title1").textContent =
      data.title1;
      
    document.getElementById("title2").textContent =
      data.title2;
      document.getElementById("animal2").textContent =
      data.animal2;

    document.getElementById("title3").textContent =
      data.title3;
      document.getElementById("animal3").textContent =
      data.animal3;

      document.getElementById("title4").textContent =
      data.title4;
      document.getElementById("animal4").textContent =
      data.animal4;

      document.getElementById("title5").textContent =
      data.title5;
      document.getElementById("animal5").textContent =
      data.animal5;

      document.getElementById("title6").textContent =
      data.title6;
      document.getElementById("animal6").textContent =
      data.animal6;
  })
  .catch((error) => console.error("Error fetching data:", error));
