console.log("JS co");

const ratio = 0.3;
let app  = document.querySelectorAll('.apparition');
let options = {
    root: null, //quand l'élément est dans l'écran
    rootMargin: '0px', //s'applique au moment ou on dépasse la marge signalé ici 0px
    threshold: ratio //si 1 alors l'élément doit être totalement dans l'écran pour l'enclenchement
  }
  
  const callback = function(entries, observer){
      entries.forEach(function (entry){
          console.log(entry);
          if(entry.intersectionRatio > ratio){
              entry.target.classList.add('apparition-visible')
              observer.unobserve(entry.target) //j'arrete d'observer

          }
      })
  }

  let observer = new IntersectionObserver(callback, options);
  app.forEach(function(visible) {
    observer.observe(visible);
  })