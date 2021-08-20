let parent = document.querySelector(".block-two");
let arra = [
  {
    avatar: `./icons/src.png`,
    steps_tomake: `Find best doctor's`,
    description: `Find your doctor easily with a minimum of effort. We've kept everything organised for you.`,
  },
  {
    avatar: `./icons/calendar.png`,
    steps_tomake: `Get Appointment`,
    description: `Ask for an appointment of the doctor quickly with almost a single click. We take care of the rest.`,
  },
  {
    avatar: `./icons/phone.png`,
    steps_tomake: `Happy Consultations`,
    description: `Do consultations and  take the service based on your appointment. Get back to good health`,
  },
];

for (let items of arra) {
  let block = document.createElement("div");
  block.classList.add("icon-div");
  block.innerHTML = `<img class="icon" src=${items.avatar} /> <h1 class="txt-one">${items.steps_tomake}</h1> <p class="parag-one">${items.description}</p> `;
  parent.append(block);
}

let boxy = document.querySelector(".grid-one");
let urra = [
  {
    avatar: `./icons/heart.png`,
    steps_tomake: `Cardiology`,
    description: `Our cardiologists are skilled at  the diagnosing and treating diseases
    of the cardiovascular system.`,
  },
  {
    avatar: `./icons/lung.png`,
    steps_tomake: `Pulmonology`,
    description: `Our Pulmonologist are skilled at  diagnosing treating diseases of the Pulmonology system.`,
  },
  {
    avatar: `./icons/pill.png`,
    steps_tomake: `Medicine`,
    description: `Our medcine doctor are skilled at  diagnosing treating diseases of the  latest medicne system.`,
  },
];

for (let items of urra) {
  let blockone = document.createElement("div");
  blockone.classList.add("icon-div");
  blockone.style.background = `linear-gradient(138.88deg, rgba(254, 254, 254, 0) -2.44%, #F9F9F9 -2.43%, rgba(254, 254, 254, 0.51) 98.26%)`;
  blockone.style.filter = `drop-shadow(0px 4px 120px rgba(0, 0, 0, 0.05))`;
  blockone.style.borderRadius = `10px`;
  blockone.innerHTML = `<img class="icon" src=${items.avatar} /> <h1 class="txt-one">${items.steps_tomake}</h1> <p class="parag-one">${items.description}</p> `;
  boxy.append(blockone);
}

//******************************

let special = document.querySelector(".last-two");

let xmlURL = "https://reqres.in/api/users?page=2";
let xml = new XMLHttpRequest();
let btn = document.querySelector(".load-more");

xml.open("GET", xmlURL);
xml.onload = function () {
  if (xml.readyState === 4 && xml.status === 200) {
    console.log(xml.response);
    let json = JSON.parse(xml.response);
    let dat = json.data;
    console.log(dat);
    for (let items of dat.slice(0, 3)) {
      console.log(items);
      let block1 = document.createElement("div");
      block1.classList.add("avatar-icon");
      block1.innerHTML = `<img src=${items.avatar} /> <p>${items.last_name}</p> <p>${items.email}</p> <p>${items.first_name}</p>`;
      special.append(block1);
    }

    btn.addEventListener("click", function () {
      for (let items of dat.slice(3, 6)) {
        console.log(items);
        let block2 = document.createElement("div");
        block2.classList.add("avatar-icon");
        block2.innerHTML = `<img src=${items.avatar} /> <p>${items.id}</p> <p>${items.email}</p> `;
        special.append(block2);
      }
    });
  } else console.error("Error 404");
};

xml.send();
console.log(xml);
