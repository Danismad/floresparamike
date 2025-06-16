// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Midnight", time: 18 },
  { text: "You come and pick me up, no headlights", time: 21 },
  { text: "Long drive", time: 28 },
  { text: "Could end in burning flames or paradise", time: 31 },
  { text: "Fade into view, oh", time: 38 },
  { text: "It's been a while since I have even heard from you", time: 41 },
  { text: "(Heard from you)", time: 46 },
  { text: "I should just tell you to leave 'cause I", time: 49 },
  { text: "Know exactly where it leads, but I", time: 52 },
  { text: "Watch us go 'round and 'round each time", time: 54 },
  { text: "You got that James Dean daydream look in your eye", time: 58 },
  { text: "And I got that red lip classic thing that you like", time: 63 },
  { text: "And when we go crashing down, we come back every time", time: 68 },
  { text: "'Cause we never go out of style", time: 73 },
  { text: "We never go out of style", time: 75 },
  { text: "You got that long hair, slicked back, white t-shirt", time: 78 },
  { text: "And I got that good girl faith and a tight little skirt", time: 83 },
  { text: "And when we go crashing down, we come back every time", time: 88 },
  { text: "'Cause we never go out of style", time: 93 },
  { text: "We never go out of style", time: 96 },
  { text: "So it goes", time: 99 },
  { text: "He can't keep his wild eyes on the road, mm, mm", time: 102 },
  { text: "Takes me home", time: 109 },
  { text: "Lights are off, he's taking off his coat, mm yeah", time: 112 },
  { text: "I say, I heard, oh", time: 119 },
  { text: "That you've been out and about with some other girl", time: 122 },
  { text: "Some other girl", time: 127 },
  { text: "He says, What you've heard is true, but I", time: 130 },
  { text: "Can't stop thinking about you and I", time: 133 },
  { text: "I said, I've been there too a few times", time: 134 },
  { text: "'Cause you got that James Dean daydream look in your eye", time: 139 },
  { text: "And I got that red lip classic thing that you like", time: 143 },
  { text: "And when we go crashing down, we come back every time", time: 148 },
  { text: "'Cause we never go out of style", time: 153 },
  { text: "We never go out of style", time: 156 },
  { text: "You got that long hair, slicked back, white t-shirt", time: 158 },
  { text: "And I got that good girl faith and a tight little skirt", time: 164 },
  { text: "And when we go crashing down, we come back every time", time: 169 },
  { text: "'Cause we never go out of style (we never go, we never go)", time: 174 },
  { text: "We never go out of style", time: 176 },
  { text: "Take me home", time: 179 },
  { text: "Just take me home", time: 184 },
  { text: "Yeah, just take me home", time: 188 },
  { text: "(Out of style)", time: 197 },
  { text: "Oh, you got that James Dean daydream look in your eye", time: 199 },
  { text: "And I got that red lip classic thing that you like", time: 204 },
  { text: "And when we go crashing down, we come back every time", time: 209 },
  { text: "'Cause we never go out of style", time: 214 },
  { text: "We never go out of style", time: 216 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);