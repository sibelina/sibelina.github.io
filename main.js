let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color:#ff7277;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#ff7277;">Socioterritorióloga aprendiendo programación web</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
