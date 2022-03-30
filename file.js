
  // Adding to the api fetch
  let zipCode = '';

  if(zipCode === ''){
    document.getElementById("zip").value
  }else {
    zipCode = '3770'  
  }
  
  fetch(`https://api.bring.com/pickuppoint/api/postalCode/no/getCitiesAndTypes/${zipCode}.json`, {
   method: "GET", // or 'PUT'
   headers: {
    "Content-Type": "application/json",
    "X-Mybring-API-Uid": "christopher.tonnesl@stud.noroff.no",
    "X-Mybring-API-Key": "edb432e7-d589-4a51-b4ff-5df4cf0139fa",
    "X-Bring-Client-URL": "",
   },
  })
   .then((response) => response.json())
   .then((data) => {
    //   console.log('Success:', data);
    console.log("Success:", data.postalCode);
    const dataArray = data.postalCode;
  
  
    const zip = document.querySelector("#zip");
    zip.addEventListener("change", () => {
      const cityName = dataArray[0].city
     const city = document.getElementById("cityName").innerText = cityName;
     return city;
    });
   })
   .catch((error) => {
    console.error("Error:", error);
   });
  