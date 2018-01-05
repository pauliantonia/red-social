
$(document).ready(function(){

$(function(){ //funcion splash inicio
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 2000);
});
  //CODIGOS PARA MOSTRAR Y OCULTAR INFORMACIÓN DEL MODAL SEGÚN LOS PASOS 
  $("#fade_out").click(function(){ // Al hacer click en btn siguiente que muestre contenido paso dos
    $(".step_two").show();
  });
  $("#fade_out").click(function(){ // Al hacer click en btn siguiente que oculte contenido paso uno
    $(".main_content").hide();
  });
   $("#fade_in").click(function(){ // Al hacer click en btn paso uno que muestre contenido paso uno y btn_step_three
    $(".main_content, #fade_out").show();
  });
  $("#fade_in").click(function(){ // Al hacer click en btn paso uno que oculte contenido paso dos y tres y btn_step_three
    $(".step_two , .step_three , #btn_step_three").hide();
  });
  $("#fade_in_two").click(function(){ // Al hacer click en btn paso dos que muestre contenido paso dos y btn_step_three
    $(".step_two, #btn_step_three").show();
  });
  $("#fade_in_two").click(function(){ // Al hacer click en btn paso dos que oculte contenido paso uno y tres
    $(".main_content , .step_three").hide();
  });
   $("#btn_step_three").click(function(){ // Al hacer click en btn_step_three que muestre contenido paso tres
    $(".step_three").show();
  });
  $("#btn_step_three").click(function(){ // Al hacer click en btn_step_three que muestre contenido paso tres
    $(".step_two").hide();
  });
  $("#fade_in_three").click(function(){ // Al hacer click en btn paso tres que oculte contenido paso dos
    $(".step_three").show();
  });
  $("#fade_in_three").click(function(){ // Al hacer click en btn paso tres que oculte contenido paso uno y dos
    $(".main_content , .step_two").hide();
  });
  $("#fade_out").click(function(){ // Ocultar btn ingresar 
    $("#fade_out").hide();
  });
  $("#fade_out").click(function(){ // Mostrar nuevo btn ingresa (btn_step_three)
    $("#btn_step_three").show();
  });
  
});

  //BASE DE DATOS
  var tattoArtist = [
  {ID:'REAL1', img:'realistic.jpg', name: 'Demian', estilo: 'realismo', 
  studio: 'The Cure'
  },
  {ID:'REAL2', img:'realistic_2.jpg', name: 'Peter Griffin', estilo: 'realismo', 
  studio:'Pete & Pete'
  },
  {ID:'REAL3', img:'realistic_3.jpg', name: 'Luci', estilo: 'realismo', 
  studio:'Iron Tatt'
  },
  {ID:'REAL4', img:'realistic_4.jpg', name: 'Eric Cartman', estilo: 'realismo', 
  studio:'The Beast'
  },
  {ID:'GEO1', img:'geo.jpg', name: 'G G Gio', estilo: 'geometrico', 
  studio: 'The Cure'
  },
  {ID:'GEO2', img:'geo_2.jpg', name: 'Amadeus', estilo: 'geometrico', 
  studio:'Pete & Pete'
  },
  {ID:'GEO3', img:'geo_3.jpg', name: 'RuPaul', estilo: 'geometrico', 
  studio:'Iron Tatt'
  },
  {ID:'GEO4', img:'geo_4.jpg', name: 'Walter White', estilo: 'geometrico', 
  studio:'The Beast'
  },
  {ID:'DOT1', img:'dot.jpg', name: 'Constantine', estilo: 'puntillismo', 
  studio: 'Heaven and Hell'
  },
  {ID:'DOT2', img:'dot_2.jpg', name: 'Bianca del Rio', estilo: 'puntillismo', 
  studio:'Not today satan'
  },
  {ID:'DOT3', img:'dot_3.jpg', name: 'Violet chachki', estilo: 'puntillismo', 
  studio:'Vodevil'
  },
  {ID:'DOT4', img:'dot_4.jpg', name: 'Blue evy', estilo: 'puntillismo', 
  studio:'Lemonade'
  },
  {ID:'SR1', img:'sr.jpg', name: 'Dug', estilo: 'surrealismo', 
  studio: 'La Cueva'
  },
  {ID:'SR2', img:'sr_2.jpg', name: 'Mr.Beans', estilo: 'surrealismo', 
  studio:'Cureptano'
  },
  {ID:'SR3', img:'sr_3.jpg', name: 'Fonzie', estilo: 'surrealismo', 
  studio:'Motors'
  },
  {ID:'SR4', img:'sr_4.jpg', name: 'Bender', estilo: 'surrealismo', 
  studio:'La Nave'
  },
  {ID:'AC1', img:'ac.jpg', name: 'Batman', estilo: 'acuarela', 
  studio: 'La Baticueva'
  },
  {ID:'AC2', img:'ac_2.jpg', name: 'Ell', estilo: 'acuarela', 
  studio:'Ruc'
  },
  {ID:'AC3', img:'ac_3.jpg', name: 'Lizzi', estilo: 'acuarela', 
  studio:'Wolf'
  },
  {ID:'AC4', img:'ac_4.jpg', name: 'Tituss Burgess', estilo: 'acuarela', 
  studio:'Landia'
  },
  {ID:'OLD1', img:'old_school.jpg', name: 'Daniel Rojas', estilo: 'old_school', 
  studio: 'Menphis'
  },
  {ID:'OLD2', img:'old_school_2.jpg', name: 'Emilia Sandoval', estilo: 'old_school', 
  studio:'Krost'
  },
  {ID:'OLD3', img:'old_school_3.jpg', name: 'Antonio Roldan', estilo: 'old_school', 
  studio:'Molotov'
  },
  {ID:'OLD4', img:'old_school_4.jpg', name: 'Linda Hallberg', estilo: 'old_school', 
  studio:'Back to the past'
  },
  {ID:'NEO1', img:'neo.jpg', name: 'NEO', estilo: 'neotradicional', 
  studio: 'Lab'
  },
  {ID:'NEO2', img:'neo_2.jpg', name: 'Nerd', estilo: 'neotradicional', 
  studio:'Juice'
  },
  {ID:'NEO3', img:'neo_3.jpg', name: 'Zordon', estilo: 'neotradicional', 
  studio:'Gimme the power'
  },
  {ID:'NEO4', img:'neo_4.jpg', name: 'Merlin', estilo: 'neotradicional', 
  studio:'Magic Place'
  },
  {ID:'NEW1', img:'new.jpg', name: 'Salem', estilo: 'new_school', 
  studio: 'Coven'
  },
  {ID:'NEW2', img:'new_2.jpg', name: 'Beto Reyes', estilo: 'new_school', 
  studio:'The Hill'
  },
  {ID:'NEW3', img:'new_3.jpg', name: 'Morocha Amorocha', estilo: 'new_schooll', 
  studio:'The Range'
  },
  {ID:'NEW4', img:'new_4.jpg', name: 'Capitanazo', estilo: 'new_school', 
  studio:'Tinte'
  },
  {ID:'JP1', img:'japo.jpg', name: 'Mery', estilo: 'japones', 
  studio: 'DCarton'
  },
  {ID:'JP2', img:'japo_2.jpg', name: 'Nolan', estilo: 'japones', 
  studio:'The force'
  },
  {ID:'JP3', img:'japo_3.jpg', name: 'Reagan karras', estilo: 'japones', 
  studio:'Devil ink'
  },
  {ID:'JP4', img:'japo_4.jpg', name: 'Iommi', estilo: 'japones', 
  studio:'Paranoid'
  },
  {ID:'POL1', img:'pol.jpg', name: 'Lulú', estilo: 'celta_polinesio', 
  studio: 'DCarton'
  },
  {ID:'POL2', img:'pol_2.jpg', name: 'Prince', estilo: 'celta_polinesio', 
  studio:'The force'
  },
  {ID:'POL3', img:'pol_3.jpg', name: 'Ozzy', estilo: 'celta_polinesio', 
  studio:'Devil ink'
  },
  {ID:'POL4', img:'pol_4.jpg', name: 'Iommi', estilo: 'celta_polinesio', 
  studio:'Paranoid'
  },
];


  //Agregar los elementos a la página
  for(i= 0 ; i< tattoArtist.length ; i++){

    $('.tattoos').append("<div><img src='assets/img/tattoo/" + tattoArtist[i]['img'] + 
    "'><span>" + tattoArtist[i]['name'] + "</span> <span>" +  tattoArtist[i]['estilo'] + 
    "<span>" + tattoArtist[i]['studio'] + "</span></div>");
  }
  // Detectar el valor y filtrar
  $('#estilos').on('change', function(){
    $('.tattoos').empty(); // borrar los elementos

    // Ejecuta un for para agregar los elementos,solo si el elemento coincide con el filtro selecionado
    var picSelect = this.value; // obtengo el valor del elemento seleccionado

    for(i= 0 ; i< tattoArtist.length ; i++){
      if(picSelect == tattoArtist[i]['estilo']){
        $('.tattoos').append("<div><img src='assets/img/tattoo/" + tattoArtist[i]['img'] + 
    "'><span>" + tattoArtist[i]['name'] + "</span> <span>" + tattoArtist[i]['estilo'] + 
    "<span>" + tattoArtist[i]['studio'] + "</span></div>");
      } 
  }
});

