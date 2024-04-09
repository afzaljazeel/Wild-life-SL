//const greeting = document.querySelector('.greeting');

///window.onload = () => {
   // if(!sessionStorage.name){
  //      location.href = '/login';
   // } else{
   //     greeting.innerHTML = `hello ${sessionStorage.name}`;
   // }
//}

//const logOut = document.querySelector('.logout');

///logOut.onclick = () => {
   // sessionStorage.clear();
    //location.reload();
//}




// Fetch the JSON data
fetch("index.json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("content1").textContent =
      data.content1;
    document.getElementById("content2").textContent =
      data.content2;
    document.getElementById("content3").textContent =
      data.content3;
  })
  .catch((error) => console.error("Error fetching data:", error));
