// exercises/dom.js
const domExercises = [
  {
    id: 'dom-title',
    title: 'changeTitle()',
    description: 'La función debe cambiar el texto del h1 con id="t". Usa getElementById().',
    template: 
`function changeTitle(){
  // Solución usando getElementById
  const h1 = document.getElementById("t");
  h1.innerHTML = "Nuevo Título";
}
`,
    tests: [
      '(function(){ changeTitle(); return document.getElementById("t").innerHTML === "Nuevo Título" })() === true'
    ],
    html: `
<h1 id="t">Hola</h1>
`
  },
  {
    id: 'dom-list',
    title: 'addItem()',
    description: 'Agrega un <li>nuevo</li> al ul con id="list". Usa getElementById().',
    template:
`function addItem(){
  // Solución usando getElementById
  const ul = document.getElementById("list");
  ul.innerHTML += "<li>nuevo</li>";
}
`,
    tests: [
      '(function(){ addItem(); return document.getElementById("list").innerHTML.includes("<li>nuevo</li>") })() === true'
    ],
    html: `
<ul id="list"></ul>
`
  }
];
