const eventsExercises = [
  {
    id:'on-click',
    title:'registerClick()',
    description:'Registra un evento click y ejecuta un callback.',
    template:
`let clicked = false;

function registerClick(btn){
  // btn.onclick = ...
}
`,
    tests:[
      `(function(){const b={onclick:null};registerClick(b);b.onclick();return clicked===true})()===true`
    ]
  }
];