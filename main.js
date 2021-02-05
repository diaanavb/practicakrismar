const numeroOpciones = 3;

const numeroCards = 3;

const elementos1 = [
  {
    rutaImagen: "assets/manzana.svg",
    id: "manzana_img",
    div:
      "<div class='draggable' draggable='true' id='manzana' ondragstart='onDragStart(event)'><h3>manzana</h3></div>",
    divHidden:
      "<div class='option_hidden' id='manzana_hidden' hidden><h3 class='non_draggable'>manzana</h3></div>",
  },
  {
    rutaImagen: "assets/melon.svg",
    id: "melon_img",
    div:
      "<div class='draggable' draggable='true' id='melon' ondragstart='onDragStart(event)'><h3>melón</h3></div>",
    divHidden:
      "<div class='option_hidden' id='melon_hidden' hidden><h3 class='non_draggable'>melón</h3></div>",
  },
  {
    rutaImagen: "assets/naranja.svg",
    id: "naranja_img",
    div:
      "<div class='draggable' draggable='true' id='naranja' ondragstart='onDragStart(event)'><h3>naranja</h3></div>",
    divHidden:
      "<div class='option_hidden' id='naranja_hidden' hidden><h3 class='non_draggable'>naranja</h3></div>",
  },
  {
    rutaImagen: "assets/pera.svg",
    id: "pera_img",
    div:
      "<div class='draggable' draggable='true' id='pera' ondragstart='onDragStart(event)'><h3>pera</h3></div>",
    divHidden:
      "<div class='option_hidden' id='pera_hidden' hidden><h3 class='non_draggable'>pera</h3></div>",
  },
  {
    rutaImagen: "assets/sandia.svg",
    id: "sandia_img",
    div:
      "<div class='draggable' draggable='true' id='sandia' ondragstart='onDragStart(event)'><h3>sandía</h3></div>",
    divHidden:
      "<div class='option_hidden' id='sandia_hidden' hidden><h3 class='non_draggable'>sandía</h3></div>",
  },
  {
    rutaImagen: "assets/uva.svg",
    id: "uva_img",
    div:
      "<div class='draggable' draggable='true' id='uva' ondragstart='onDragStart(event)'><h3>uva</h3></div>",
    divHidden:
      "<div class='option_hidden' id='uva_hidden' hidden><h3 class='non_draggable'>uva</h3></div>",
  },
];

const elementos2 = [
  {
    div:
      "<div class='draggable' draggable='true' id='avion' ondragstart='onDragStart(event)'><h3>avión</h3></div>",
    divHidden:
      "<div class='option_hidden' id='avion_hidden' hidden><h3 class='non_draggable'>avión</h3></div>",
  },
  {
    div:
      "<div class='draggable' draggable='true' id='bicicleta' ondragstart='onDragStart(event)'><h3>bicicleta</h3></div>",
    divHidden:
      "<div class='option_hidden' id='bicicleta_hidden' hidden><h3 class='non_draggable'>bicicleta</h3></div>",
  },
  {
    div:
      "<div class='draggable' draggable='true' id='coche' ondragstart='onDragStart(event)'><h3>coche</h3></div>",
    divHidden:
      "<div class='option_hidden' id='coche_hidden' hidden><h3 class='non_draggable'>coche</h3></div>",
  },
  {
    div:
      "<div class='draggable' draggable='true' id='helicoptero' ondragstart='onDragStart(event)'><h3>helicoptero</h3></div>",
    divHidden:
      "<div class='option_hidden' id='helicoptero_hidden' hidden><h3 class='non_draggable'>helicoptero</h3></div>",
  },
  {
    div:
      "<div class='draggable' draggable='true' id='tren' ondragstart='onDragStart(event)'><h3>tren</h3></div>",
    divHidden:
      "<div class='option_hidden' id='tren_hidden' hidden><h3 class='non_draggable'>tren</h3></div>",
  },
];

const jugarPalabras = (event) => {
  document.getElementById("myModal").style.display = "none";
  let arregloAleatorios = [];
  for (let i = 0; i < numeroCards; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 6);
    let numeroEncontrado = arregloAleatorios.indexOf(numeroAleatorio);
    if (numeroEncontrado === -1) {
      arregloAleatorios.push(numeroAleatorio);
      let idImagenDiv = "imagen_" + i;
      let divImagen = document.getElementById(idImagenDiv);
      let img =
        "<img class='images' id='" +
        elementos1[numeroAleatorio].id +
        "' src='" +
        elementos1[numeroAleatorio].rutaImagen +
        "'></img>";
      divImagen.innerHTML = img;
    } else {
      i--;
    }
  }

  let arregloOpciones = [];
  for (let i = 0; i < arregloAleatorios.length; i++) {
    arregloOpciones.push(elementos1[arregloAleatorios[i]]);
  }
  arregloAleatorios = [];
  for (let i = 0; i < 2; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 5);
    let numeroEncontrado = arregloAleatorios.indexOf(numeroAleatorio);
    if (numeroEncontrado === -1) {
      arregloAleatorios.push(numeroAleatorio);
    } else {
      i--;
    }
  }
  for (let i = 0; i < arregloAleatorios.length; i++) {
    arregloOpciones.push(elementos2[arregloAleatorios[i]]);
  }

  arregloAleatorios = [];
  let contador = 1;
  for (let i = 0; i < arregloOpciones.length; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 5);
    let numeroEncontrado = arregloAleatorios.indexOf(numeroAleatorio);
    if (numeroEncontrado === -1) {
      arregloAleatorios.push(numeroAleatorio);

      if (contador <= numeroOpciones) {
        let divId = "card_option_" + contador;
        contador++;
        let divOpcion = document.getElementById(divId);
        divOpcion.innerHTML = arregloOpciones[numeroAleatorio].div;
        divOpcion.innerHTML += arregloOpciones[numeroAleatorio].divHidden;
      }
    } else {
      i--;
    }
  }
};

const onDragStart = (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
};

const onDragOver = (event) => {
  event.preventDefault();
};

const onDrop = (event, element) => {
  const children = element.children;
  if (children[0] != undefined) {
    const divRegresar = children[0];
    element.removeChild(children[0]);
    const classOption = "option_hidden";
    const textos = [];
    for (let i = 1; i <= numeroOpciones; i++) {
      let idOptions = "card_option_" + i;
      let cardOptionElement = document.getElementById(idOptions);
      let optionHiddenElement = cardOptionElement.getElementsByClassName(
        classOption
      );
      // console.log(optionHiddenElement[0]);

      let coleccionTextos = optionHiddenElement[0].getElementsByTagName("h3");

      // console.log(coleccionTextos[0]);

      let palabra = coleccionTextos[0].innerHTML;

      textos.push(palabra);
    }
    const palabraComparar = divRegresar.id;
    // palabraComparar = manzana
    // textos =  [manzana, pera, melon]
    // recorrer mi arreglo textos
    // si la palabra a comparar es == a un elemento del arreglo
    // regresar la posición en la que encontro que si eran iguales
    // regresar el div a la tarjeta correspondiente

    let posicion = 0;
    for (let i = 0; i < textos.length; i++) {
      if (palabraComparar === textos[i]) {
        posicion = i;
        break;
      }
    }
    posicion++;
    const idOptions = "card_option_" + posicion;
    const divOptions = document.getElementById(idOptions);
    divOptions.appendChild(divRegresar);

    const optionHidden = palabraComparar + "_hidden";
    document.getElementById(optionHidden).setAttribute("hidden", true);

    console.log(textos);
  }

  const id = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(id);
  element.appendChild(draggableElement);
  event.dataTransfer.clearData();
  const idHidden = id + "_hidden";
  const hiddenElement = document.getElementById(idHidden);
  // console.log(hiddenElement);
  hiddenElement.removeAttribute("hidden");

  let divClass = "card_text";
  let divCollection = document.getElementsByClassName(divClass);
  // console.log(divCollection);

  let banderaHijos = true;

  for (let i = 0; i < divCollection.length; i++) {
    if (divCollection[i].children.length === 0) {
      banderaHijos = false;
      break;
    }
  }

  if (banderaHijos) {
    let divClass = "card_image";
    let divImagesCollection = document.getElementsByClassName(divClass);
    for (let i = 0; i < divImagesCollection.length; i++) {
      let hijito = divImagesCollection[i].children[0];
      let idHijito = hijito.id.split("_img");
      let hijoCardText = divCollection[i].children[0];
      let idHijoCardText = hijoCardText.id;
      let banderaComparacion = "incorrecto";
      if (idHijito[0] === idHijoCardText) {
        banderaComparacion = "correcto";
        divCollection[i].style.background = "#06d6a0";
      } else {
        divCollection[i].style.background = "#ef476f";
      }
      console.log("tarjeta " + i + ": " + banderaComparacion);
    }
  }
};
