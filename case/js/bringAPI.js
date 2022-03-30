const apiPath = "https://api.bring.com/pickuppoint/api/postalCode/no/getCitiesAndTypes/";
const apiFileType = `json`;
const settings = {
 method: "GET",
 headers: {
  "Content-Type": "application/json",
  host: "cors-anywhere.herokuapp.com",
  "X-Mybring-API-Uid": "christopher.tonnesl@stud.noroff.no",
  "X-Mybring-API-Key": "edb432e7-d589-4a51-b4ff-5df4cf0139fa",
  "X-Bring-Client-URL": "",
 },
};
const cors = "https://cors-anywhere.herokuapp.com/";

const el = document.querySelector("#zipCode");
el.addEventListener("change", onZipChange);

async function getZipInfo(zip) {
 try {
  let response = await fetch(`${apiPath}${zip}.${apiFileType}`, settings);
  const data = await response.json();
  console.log(data);
  return data;
 } catch (error) {
  console.log(error);
 }
}

async function onZipChange(event) {
 const zip = event.target.value;
 const data = await getZipInfo(zip);
 const dataResult = data.postalCode;

 // Do your DOM rendering here
 const cityName = document.getElementById("cityName");
 const zipCode = document.getElementById("zipCode");

 if (!dataResult) {
  zipCode.classList.add("form-error");
  cityName.classList.add("form-error");
  zipCode.classList.remove("form-success");
  cityName.classList.remove("form-success");
  cityName.innerText = "Fant ikke postnummeret*";
 } else {
  const name = dataResult[0].city;
  zipCode.classList.remove("form-error");
  cityName.classList.remove("form-error");
  zipCode.classList.add("form-success");
  cityName.classList.add("form-success");
  cityName.innerText = name;
  return name;
 }
}
