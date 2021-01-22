function cambiar(a) {
  if (a.tagName == "IMG")
    document.body.style.backgroundImage = "url(" + a.src + ")";
}


