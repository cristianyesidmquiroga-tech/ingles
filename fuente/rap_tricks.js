/* Trucos rápidos: cómo decidir en segundos qué va en cada espacio. */
const TRICKS={
 ps:{t:'Pasado simple',items:[
  'Yesterday, last week, two years ago o in 2020 son pistas de pasado simple: Yesterday I played soccer. Pero si la frase dice qué estabas haciendo en ese momento, va was o were + -ing: Yesterday at 8 I was sleeping.',
  'When I was a child es cuando era niño. Si era una costumbre que se repetía, usa used to: I used to play with cars. Si pasó una sola vez, usa pasado simple: I broke my arm.',
  'Si la frase tiene did o didn\'t, el verbo queda sin cambios, en forma base: didn\'t go, did you finish. Nunca didn\'t went.',
  'Una sola marca de pasado por verbo: o la lleva did, o la lleva el verbo, nunca los dos.',
  'Con be no se usa did: la negativa es wasn\'t o weren\'t, no didn\'t was.',
  'Truco para elegir la forma: si en español dirías "ayer yo ___", va la segunda columna de tu tabla de verbos.',
  'En preguntas el orden es Wh + did + sujeto + verbo base: What did you do? Nunca What did you did?',
  'Ojo con la escritura: study pasa a studied y stop dobla la p y queda stopped.']},
 pc:{t:'Pasado continuo, when y while',items:[
  'While casi siempre va con la acción larga en -ing. When suele ir con la corta en pasado simple, pero también puede ir con la larga: When I was walking home, I saw an accident.',
  'Si hay una hora exacta y te preguntan qué pasaba en ese momento, va was o were más -ing.',
  'Regla de las dos acciones: la que se interrumpe va en continuo, la que interrumpe va en simple.',
  'Después de was o were, en pasado continuo siempre va -ing: was playing, no was played.',
  'Si la frase empieza con While o When, esa parte lleva coma antes de la otra.',
  'Los verbos de estado no van en continuo: I was knowing está mal, es I knew. Igual con want, like y need.']},
 pp:{t:'Presente perfecto',items:[
  'Palabras imán: ever, never, just, already, yet, so far, this week. Si aparecen, va have o has más participio.',
  'Si hay fecha cerrada, como yesterday, last year o in 2020, no puede ser presente perfecto.',
  'Since va con el momento en que empezó: since 2020, since Monday, since I was a child. For va con cuánto duró: for two years.',
  'Has para he, she e it. Have para el resto.',
  'Been es fue y volvió. Gone es se fue y todavía no vuelve.',
  'El participio es la tercera columna: seen, done, written. Nunca la segunda: have saw está mal.',
  'Already va entre have y el participio. Yet va al final, y solo en negativas y preguntas: I have already eaten, Have you eaten yet?',
  'Si la pregunta empieza con How long, la respuesta lleva for o since.']},
 used:{t:'Used to',items:[
  'Si puedes decir "antes yo... y ya no", va used to más verbo base.',
  'Con didn\'t se cae la d: didn\'t use to. En la pregunta también: Did you use to?',
  'Si pasó una sola vez, no es used to, es pasado simple.',
  'Después de used to nunca va -ing ni -ed: used to play, no used to playing.',
  'Used to solo existe en pasado. Para un hábito de hoy se usa usually: I usually walk, no I use to walk.',
  'No confundas used to, que es antes sí y ya no, con be used to más -ing, que es estar acostumbrado: I am used to working at night.']},
 pron:{t:'Pronombres',items:[
  'Antes del verbo va el sujeto: I, he, she, we, they. Después del verbo o de una preposición va el objeto: me, him, her, us, them.',
  'Truco del español: si dirías "a mí, a él, con ellos, para nosotros", entonces va el objeto.',
  'Con dos personas, tapa a la otra y lee: en "Scott invited Patrick and ___" queda "Scott invited me".',
  'Después de with, to, for, by, about siempre va el objeto.',
  'It sirve para una cosa o un animal, y funciona como sujeto y como objeto. En plural, el sujeto es they y el objeto es them: They are expensive, I bought them.',
  'En inglés el sujeto nunca se omite: Is raining está mal, es It is raining.']},
 ed:{t:'Pronunciación de la -ed',items:[
  'Si el verbo termina en t o en d, la -ed suena /id/ y suma una sílaba: wanted, needed, decided.',
  'Si el último sonido es sordo, como k, p, s, sh, ch, f o x, suena /t/: worked, stopped, washed, watched, liked, danced. Manda el sonido, no la letra escrita al final.',
  'En los demás casos suena /d/: played, lived, cleaned, studied.',
  'Prueba del dedo en la garganta: úsala solo si el verbo no termina en t ni en d. Pon el dedo en el último sonido antes de la -ed: si vibra es /d/, si no vibra es /t/.',
  'Solo hay sílaba extra en el grupo /id/. En los otros dos la palabra sigue sonando igual de corta.']},
 modals:{"t": "Modales", "items": ["Después de can, must, should o might la acción va limpia: sin to y sin -s. He can play, no He can plays.", "Mustn't es una señal de prohibido: significa que no lo puedes hacer.", "Don't have to es distinto: no es obligatorio pero si quieres lo haces igual.", "Must y have to son casi iguales: tener que. Con él o ella, have to cambia: she has to.", "Para hablar del pasado de must se usa had to: Yesterday I had to walk.", "Busca la idea: ¿consejo? should. ¿Quizás? might. ¿Casi seguro? must be. ¿Imposible? can't be.", "Para pedir algo con amabilidad: Could you...? Para pedir permiso muy educado: May I...?"]},
 conn:{"t": "Conectores", "items": ["Because va con una frase completa: because I was sick. Because of va con una sola cosa: because of the rain.", "Because dice por qué. So dice qué pasó después: I was hungry, so I ate.", "But une dos ideas contrarias: I like tea, but I don't like coffee.", "However es un sin embargo que empieza frase nueva: punto antes y coma después.", "Para contar pasos: First, Then, After that, Finally. Como una receta.", "Although es aunque, y no se junta con but: Although it was late, we played."]},
 phrasal:{"t": "Phrasal verbs", "items": ["Apréndelos como una sola palabra: turn off es apagar y turn on es prender.", "Si usas it, va en medio: turn it off. No se dice turn off it.", "Look for, que es buscar, no se separa: look for it.", "Los del computador que más salen: log in (entrar), log out (salir), back up (hacer copia), set up (instalar)."]},
 reading:{"t": "Lecturas", "items": ["Lee primero la pregunta y busca esa misma palabra en el texto. La respuesta casi siempre está cerca.", "No necesitas entender todo. Basta con entender la frase donde está la respuesta.", "Las respuestas salen en el mismo orden del texto.", "Si dos opciones se parecen, busca la palabra que las hace distintas: can o can't, must o might."]},
 mixed:{t:'Elegir el tiempo correcto',items:[
  'Busca primero la palabra de tiempo para reducir las opciones, y confirma con el auxiliar (did, have, was) antes de marcar.',
  'Momento cerrado, como yesterday o last year, es pasado simple. Momento abierto o sin fecha, con ever o yet, es presente perfecto.',
  'Si te preguntan qué pasaba en un momento exacto, es pasado continuo.',
  'Si ves did o didn\'t, el verbo va en base. Si ves have o has, va el participio.',
  'En opción múltiple descarta primero lo imposible: modal con -s, can to, must to, didn\'t went, have saw.',
  'Si dos opciones se parecen, di la frase en español: casi siempre una de las dos no se puede decir.']},
 exam:{"t": "Estrategia en el examen", "items": ["Contesta primero las fáciles. Las difíciles márcalas y vuelve al final.", "Antes de escribir, piensa qué falta en el espacio: ¿una acción, un modal o un conector?", "Al final revisa: después de can, must o should, ¿la acción va sin -s y sin to?", "En el oral responde con dos frases cortas: la respuesta y un detalle. I can swim. I learned when I was six.", "Si te trabas, di Let me think for a second, o Could you repeat the question, please?"]}
};
/* Qué truco corresponde a cada nivel, por el comienzo de su identificador. */
const TRICK_BY_LEVEL=[['g5_seq','conn'],['g5_port','reading'],['g5_','modals'],['ps','ps'],['pc','pc'],['pp','pp'],['mix','mixed'],['ut','used'],['pr','pron'],['pn','ed'],['m_','modals'],['md','modals'],['c_read','reading'],['c_','conn'],['cn','conn'],['pv','phrasal'],['or','exam'],['o4','exam'],['o5','exam'],['au','reading'],['ex','exam']];
