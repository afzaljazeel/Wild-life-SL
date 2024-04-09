              // Fetch the JSON data
              fetch("department.json")
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("heading").textContent = data.heading;
          document.getElementById("introduction1").textContent = data.introduction1;
     
          document.getElementById("title1").textContent = data.responsibilities[0].title1;
          document.getElementById("description1").textContent = data.responsibilities[0].description1;
          document.getElementById("title2").textContent = data.responsibilities[1].title2;
          document.getElementById("description2").textContent = data.responsibilities[1].description2;
          document.getElementById("title3").textContent = data.responsibilities[2].title3;
          document.getElementById("description3").textContent = data.responsibilities[2].description3;
          document.getElementById("title4").textContent = data.responsibilities[3].title4;
          document.getElementById("description4").textContent = data.responsibilities[3].description4;
          document.getElementById("title5").textContent = data.responsibilities[4].title5;
          document.getElementById("description5").textContent = data.responsibilities[4].description5;

          document.getElementById("summary1").textContent = data.summary1;
        })
        .catch((error) => console.error("Error fetching data:", error));
