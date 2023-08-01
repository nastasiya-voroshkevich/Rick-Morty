


export function popup(el) {
  const body = document.querySelector("body")
  body.classList.add('no-scroll')
  let div = document.createElement("div");
  div.classList.add("wrapp-modal");
  body.append(div);

  let addition = document.createElement("div");
  addition.classList.add("fade-block");
  div.append(addition);
  let divModal = document.createElement("div");
  divModal.classList.add("modal-window");
  divModal.classList.add("slideInDown");
  addition.append(divModal);
  let img = document.createElement("img");
  img.className = "image-modal";
  img.src = el.image;
  divModal.append(img);

  let divWrapp = document.createElement("div");
  divWrapp.classList.add("modal-window__wrapp");
  divModal.append(divWrapp);
  let pName = document.createElement("p");
  pName.innerText = 'Name: ';
  pName.classList.add('title-name');
  divWrapp.append(pName);
  let p = document.createElement("p");
  p.innerText = el.name;
  divWrapp.append(p);
  let pLocation = document.createElement("p");
  pLocation.innerText = 'Location:';
  pLocation.classList.add('title-name');
  divWrapp.append(pLocation);
  let pLocationData = document.createElement("p");
  pLocationData.innerText = el.location.name;
  divWrapp.append(pLocationData);
  let pStatus = document.createElement("p");
  pStatus.innerText = 'Status:   ';
  pStatus.classList.add('title-name');
  divWrapp.append(pStatus);
  let pStatusData = document.createElement("p");
  pStatusData.innerText = el.status;
  divWrapp.append(pStatusData);
  let pSpecies = document.createElement("p");
  pSpecies.innerText = 'Species:';
  pSpecies.classList.add('title-name');
  divWrapp.append(pSpecies);
  let pSpeciesData = document.createElement("p");
  pSpeciesData.innerText = el.species;
  divWrapp.append(pSpeciesData);
  let pOrigin = document.createElement("p");
  pOrigin.innerText = 'Origin:';
  pOrigin.classList.add('title-name');
  divWrapp.append(pOrigin);
  let pOriginData = document.createElement("p");
  pOriginData.innerText = el.origin.name;
  divWrapp.append(pOriginData);
  let pGenger = document.createElement("p");
  pGenger.innerText = 'Gender:';
  pGenger.classList.add('title-name');
  divWrapp.append(pGenger);
  let pGengerData = document.createElement("p");
  pGengerData.innerText = el.gender;

  divWrapp.append(pGengerData);

  addition.addEventListener('click', function () {
    document.querySelector("body").classList.remove('no-scroll')
    document.querySelector(".wrapp-modal").remove();

  })

}




