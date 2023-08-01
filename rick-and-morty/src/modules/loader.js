


export function loader () {

let loader = document.querySelector('.loading__wrapp');


 document.body.onload = function() {
   setTimeout( () => {
     if(!loader.classList.contains('done')) {
      loader.classList.add('done');

    }

  }, 1000  )
 }


}