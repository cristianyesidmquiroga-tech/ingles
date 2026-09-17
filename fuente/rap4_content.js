/* Contenido para hablar de la guía RAP 4. Datos puros. */
/* "*ed" acepta cualquier palabra terminada en -ed; "*ing" cualquier palabra terminada en -ing. */
const PAST4=["*ed","did","was","were","went","had","made","got","saw","ate","came","bought","took","wrote","read","met","spent","drove","ran","gave","found","left","said","told","thought","slept","began","broke","built","chose","drank","fell","felt","flew","forgot","knew","lost","paid","put","rode","sang","sat","sold","sent","spoke","swam","taught","threw","understood","wore","won","heard","rang","became","brought","caught","kept","stood","woke","grew","cut","hit","hurt","let","meant","held","fought","drew","hid","shut","fed","led","lay","could"];

/* Lee y repite en voz alta */
const R4SAY={
 ps:[["I finished my homework yesterday.","Terminé mi tarea ayer."],["We started a new project last month.","Empezamos un proyecto nuevo el mes pasado."],["I didn't go to class on Monday.","No fui a clase el lunes."],["Where did you study last year?","¿Dónde estudiaste el año pasado?"],["She wanted to learn Python.","Ella quería aprender Python."],["They bought a new computer.","Ellos compraron un computador nuevo."]],
 pc:[["I was studying when you called.","Estaba estudiando cuando llamaste."],["What were you doing last night?","¿Qué estabas haciendo anoche?"],["While I was coding, the lights went out.","Mientras programaba, se fue la luz."],["They weren't listening to the teacher.","Ellos no estaban escuchando al profesor."],["She was cooking dinner when I arrived.","Ella estaba cocinando la cena cuando llegué."]],
 pp:[["I have studied English since last year.","Estudio inglés desde el año pasado."],["Have you ever worked in a company?","¿Alguna vez has trabajado en una empresa?"],["We haven't finished the project yet.","Todavía no hemos terminado el proyecto."],["She has just sent the email.","Ella acaba de enviar el correo."],["I have never been to the beach.","Nunca he ido a la playa."]],
 ut:[["I used to play soccer every Sunday.","Antes jugaba fútbol todos los domingos."],["I didn't use to like English.","Antes no me gustaba el inglés."],["Did you use to walk to school?","¿Antes ibas caminando al colegio?"],["My father used to work on a farm.","Antes mi papá trabajaba en una finca."]],
 pr:[["Can you help me with this?","¿Me puedes ayudar con esto?"],["I sent the report to them.","Les envié el informe a ellos."],["My instructor called me yesterday.","Mi instructor me llamó ayer."],["We showed it to our client.","Se lo mostramos a nuestro cliente."]],
 pn:[["She washed the dishes.","Ella lavó los platos."],["We visited our grandparents.","Visitamos a nuestros abuelos."],["He stopped and listened.","Él se detuvo y escuchó."],["They studied and passed the exam.","Estudiaron y pasaron el examen."],["I worked, played and rested.","Trabajé, jugué y descansé."]]
};

/* Responde hablando: la app revisa la estructura pedida */
const R4TALK={
 ps:[
  {q:"What did you do yesterday?",hint:"Responde en pasado simple: I watched, I went, I studied...",need:"un verbo en pasado simple",groups:[PAST4],min:4,model:"I went to SENA and I studied English."},
  {q:"Where did you study last year?",hint:"Usa un verbo en pasado.",need:"un verbo en pasado simple",groups:[PAST4],min:4,model:"I studied at a school in my town."},
  {q:"What was the last movie you watched?",hint:"Usa was o watched.",need:"un verbo en pasado simple",groups:[PAST4],min:4,model:"The last movie I watched was Spider-Man."},
  {q:"Did you finish your homework last night?",hint:"Responde Yes, I did o No, I didn't y agrega un detalle.",need:"un verbo en pasado simple",groups:[PAST4],min:5,model:"Yes, I did. I finished it at nine."}],
 pc:[
  {q:"What were you doing at seven o'clock this morning?",hint:"Usa I was + verbo con -ing.",need:"was o were y un verbo con -ing",groups:[["was","were"],["*ing"]],min:4,model:"I was having breakfast with my family."},
  {q:"What were you doing when your instructor arrived?",hint:"Usa I was + verbo con -ing.",need:"was o were y un verbo con -ing",groups:[["was","were"],["*ing"]],min:5,model:"I was talking with my classmates when he arrived."},
  {q:"What was happening while you were working on your project?",hint:"Usa while y was o were + -ing.",need:"was o were y un verbo con -ing",groups:[["was","were"],["*ing"]],min:6,model:"While I was working, my classmates were testing the database."}],
 pp:[
  {q:"Have you ever worked in a company?",hint:"Responde Yes, I have o No, I haven't y agrega una frase con have + participio (worked, been...).",need:"have o has con un participio",groups:[["have","has"],["*ed","been","done","gone","had","seen","made","worked","learned","have not","has not","never"]],min:5,model:"No, I haven't. I have never worked in a company."},
  {q:"How long have you studied English?",hint:"Usa I have studied... for o since.",need:"have o has y for o since",groups:[["have","has"],["for","since"]],min:5,model:"I have studied English for three years."},
  {q:"What have you learned this year?",hint:"Usa I have learned...",need:"have o has con un participio",groups:[["have","has"],["*ed","been","done","gone","had","seen","made","worked","learned","have not","has not","never"]],min:5,model:"I have learned how to create databases."},
  {q:"Have you finished your project yet?",hint:"Usa have o has con yet, already o just: No, I haven't finished it yet.",need:"have o has y yet, already o just",groups:[["have","has"],["yet","already","just"]],min:4,model:"Not yet. I have finished the database, but I haven't finished the design yet."}],
 ut:[
  {q:"What did you use to do when you were a child?",hint:"Usa I used to...",need:"used to",groups:[["used to","use to"]],min:5,model:"I used to play soccer with my cousins."},
  {q:"What food didn't you use to like when you were a child?",hint:"Usa I didn't use to...",need:"didn't use to",groups:[["did not use to","did not used to","never used to"]],min:5,model:"I didn't use to like vegetables."}],
 pr:[
  {q:"Who helps you with your homework?",hint:"Usa me: ... helps me.",need:"el pronombre me",groups:[["me"]],min:3,model:"My sister helps me with my homework."},
  {q:"What do you do with your old notebooks?",hint:"Usa them.",need:"el pronombre them",groups:[["them"]],min:4,model:"I give them to my little cousins."}]
};
