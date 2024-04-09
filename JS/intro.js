              // Fetch the JSON data
              fetch("intro.json")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("p1").textContent = data.p1;
            document.getElementById("p2").textContent = data.p2;
            document.getElementById("p3").textContent = data.p3;
            document.getElementById("p4").textContent = data.p4;
            document.getElementById("p5").textContent = data.p5;
            document.getElementById("p6").textContent = data.p6;
          
        })
        .catch((error) => console.error("Error fetching data:", error));
