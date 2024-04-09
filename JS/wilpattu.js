              // Fetch the JSON data
              fetch("wilpattu.json")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("p1").textContent = data.p1;
            document.getElementById("p2").textContent = data.p2;
            document.getElementById("p3").textContent = data.p3;

        })
        .catch((error) => console.error("Error fetching data:", error));
