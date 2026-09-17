/* Lecturas de comprensión: el aprendiz lee el texto y responde. */
const LECTURAS={
 a41:{
  title:"A day at work",
  intro:"Vas a leer a un aprendiz que cuenta un día de trabajo.",
  script:"Hello, my name is Andres. I am a student at a technology center. Last Monday I arrived early because we had an important meeting. While I was preparing the computers, my instructor called me. He asked me to install a new program. I installed it in twenty minutes. After the meeting, we tested the system with the security guards. They found two problems, so we fixed them in the afternoon. I have worked on this project since March, and I have learned a lot about databases. Yesterday I finished the report and I sent it to my instructor.",
  qs:[
   {q:"Why did Andres arrive early last Monday?",o:["Because they had an important meeting.","Because his computer was broken.","Because he had to write a report."],a:"Because they had an important meeting.",e:"I arrived early because we had an important meeting."},
   {q:"What was he doing when his instructor called him?",o:["He was preparing the computers.","He was writing a report.","He was talking to the guards."],a:"He was preparing the computers.",e:"While I was preparing the computers, my instructor called me."},
   {q:"What did his instructor ask him to do?",o:["To install a new program.","To buy a new computer.","To call the guards."],a:"To install a new program.",e:"He asked me to install a new program."},
   {q:"Who found problems in the system?",o:["The security guards.","The instructor.","The visitors."],a:"The security guards.",e:"We tested the system with the security guards. They found two problems."},
   {q:"How long has he worked on this project?",o:["Since March.","For twenty minutes.","Since yesterday."],a:"Since March.",e:"I have worked on this project since March."},
   {q:"What did he do yesterday?",o:["He finished the report and sent it.","He fixed two problems.","He installed a new program."],a:"He finished the report and sent it.",e:"Yesterday I finished the report and I sent it to my instructor."},
   {q:"In 'we fixed them in the afternoon', what does them mean?",o:["The two problems.","The computers.","The reports."],a:"The two problems.",e:"They found two problems, so we fixed them in the afternoon."}]},
 a42:{
  title:"A job interview",
  intro:"Vas a leer una entrevista de trabajo entre un entrevistador y Laura.",
  script:"Interviewer. Good morning, Laura. Have you ever worked in a software company? Laura. Yes, I have. I worked in a small company last year. Interviewer. What did you do there? Laura. I tested web applications and I wrote reports. Interviewer. Have you used databases? Laura. Yes, I have used them for two years. Interviewer. Did you use to work with a team? Laura. Yes, I did. We used to have a meeting every Monday. Interviewer. Perfect. When can you start? Laura. I can start next Monday.",
  qs:[
   {q:"Has Laura worked in a software company before?",o:["Yes, she has.","No, she hasn't.","She has never worked."],a:"Yes, she has.",e:"Yes, I have. I worked in a small company last year."},
   {q:"What did she do in that company?",o:["She tested web applications and wrote reports.","She sold computers.","She taught English."],a:"She tested web applications and wrote reports.",e:"I tested web applications and I wrote reports."},
   {q:"How long has she used databases?",o:["For two years.","Since last year.","For two months."],a:"For two years.",e:"I have used them for two years."},
   {q:"What did her team use to do every Monday?",o:["They used to have a meeting.","They used to write reports.","They used to travel."],a:"They used to have a meeting.",e:"We used to have a meeting every Monday."},
   {q:"When can Laura start?",o:["Next Monday.","Next year.","Today."],a:"Next Monday.",e:"I can start next Monday."}]},
 a51:{
  title:"Rules in the computer lab",
  intro:"Vas a leer las reglas de una sala de computadores. Fíjate en los verbos modales: must, mustn't, don't have to, should, may y have to.",
  script:"Good morning, everyone. Before we start, please listen to the rules of the computer lab. You must wear your ID card all the time. You mustn't eat or drink near the computers. You don't have to bring your own laptop, because we have computers for everybody. If you have a problem with a machine, you should tell the instructor, because he can repair it quickly. However, you mustn't open the machine yourself. You may use your phone, but only outside the lab. Finally, you have to log out and turn off the computer before you leave. Thank you.",
  qs:[
   {q:"What must students wear in the lab?",o:["Their ID card.","A uniform.","Safety glasses."],a:"Their ID card.",e:"You must wear your ID card all the time."},
   {q:"What is forbidden near the computers?",o:["Eating and drinking.","Talking.","Using a mouse."],a:"Eating and drinking.",e:"You mustn't eat or drink near the computers."},
   {q:"Do students have to bring their own laptop?",o:["No, it isn't necessary.","Yes, it is obligatory.","Yes, but only on Mondays."],a:"No, it isn't necessary.",e:"You don't have to bring your own laptop."},
   {q:"What should you do if a machine has a problem?",o:["Tell the instructor.","Turn off the lab.","Buy a new machine."],a:"Tell the instructor.",e:"You should tell the instructor."},
   {q:"Where can students use their phone?",o:["Outside the lab.","Next to the computers.","Nowhere."],a:"Outside the lab.",e:"You may use your phone, but only outside the lab."},
   {q:"What mustn't you do yourself?",o:["Open the machine.","Tell the instructor.","Turn off the computer."],a:"Open the machine.",e:"However, you mustn't open the machine yourself."},
   {q:"What do you have to do before you leave?",o:["Log out and turn off the computer.","Print your work.","Call the technician."],a:"Log out and turn off the computer.",e:"You have to log out and turn off the computer before you leave."}]},
 a52:{
  title:"How to register a visitor",
  intro:"Vas a leer a un jefe que explica un proceso. Fíjate en los conectores de secuencia y en los phrasal verbs.",
  script:"Now I'm going to explain how we register a visitor. First, ask the visitor for their ID card. Then, type the name in the system. After that, print a badge with the name of the visitor. Finally, give the badge to the visitor and explain the safety rules. Remember: visitors mustn't enter the warehouse alone because it is dangerous. If the printer runs out of paper, you should call the technician.",
  qs:[
   {q:"What is the first step?",o:["Ask the visitor for their ID card.","Print a badge.","Explain the safety rules."],a:"Ask the visitor for their ID card.",e:"First, ask the visitor for their ID card."},
   {q:"What do you do after you type the name?",o:["You print a badge.","You call the technician.","You open the warehouse."],a:"You print a badge.",e:"After that, print a badge with the name of the visitor."},
   {q:"Why mustn't visitors enter the warehouse alone?",o:["Because it is dangerous.","Because it is closed.","Because they don't have a badge."],a:"Because it is dangerous.",e:"Visitors mustn't enter the warehouse alone because it is dangerous."},
   {q:"What should you do if the printer runs out of paper?",o:["Call the technician.","Give the badge to the visitor.","Turn off the system."],a:"Call the technician.",e:"If the printer runs out of paper, you should call the technician."},
   {q:"What do you do in the last step?",o:["Give the badge and explain the safety rules.","Type the name in the system.","Ask for the ID card."],a:"Give the badge and explain the safety rules.",e:"Finally, give the badge to the visitor and explain the safety rules."}],
  seq:{q:"Ordena los pasos del proceso que leíste:",steps:["First, ask the visitor for their ID card.","Then, type the name in the system.","After that, print a badge with the name of the visitor.","Finally, give the badge to the visitor."],e:"First, Then, After that, Finally."}}
};
