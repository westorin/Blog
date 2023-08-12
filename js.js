//fetch("https://apis.is/petrol")
//  .then((res) => {
//    return res.json();
//  })
//  .then((data) => {
//    console.log(data);
//
//    data.forEach((results) => {
//      const markup = `<li>${results.diesel}</li>`;
//      document.querySelector("ul").insertAdjacentHTML(markup);
//    });
//  });

const getData = async () => {
  const res = await fetch("https://apis.is/petrol");
  const data = await res.json();

  const ulDiv = document.getElementById("ul");
  const diesel = data.results.diesel;

  const heading = document.createElement("li");
  heading.innerHTML = JSON.stringify(data.results[0]);
  ulDiv.appendChild(heading);

  document.querySelector(".info").innerHTML = `
  <section class="info">
    <ul>
      <li>Staðsetning: ${data.results[0].name}</li>
      <li>Bensínstöð: ${data.results[0].company}</li>
      <li>Bensín: ${data.results[0].bensin95}</li>
      <li>Dísel: ${data.results[0].diesel}</li>
      <ul>
        <li>Latitude: ${data.results[0].geo.lat}</li>
        <li>Longitude: ${data.results[0].geo.lon}</li>
      </ul>
    </ul>
  </section>
  `;

  //const bensinInfoEl = document.getElementsByClassName("test");
  //for (let { bensin95 } of Object.keys(res)) {
  //  const bensinInfo = document.createElement("p");
  //  bensinInfo.innerText = bensin95;
  //  bensinInfoEl.append(bensinInfo);
  //  console.log("working");
  //}

  console.log("Data", data.results[0]);
  console.log("Res", res);
};

getData();

//  data.forEach((user) => {
//  const markup = `<li>${data.results.diesel}</li>`;
//  document.querySelector("ul").insertAdjacentHTML(markup);
//});
