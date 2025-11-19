// exercises/basics.js
const basics = [
  {
    id: 'sum',
    title: 'sum(a,b)',
    description: 'Crea una función sum(a,b) que retorne la suma.',
    template: `function sum(a,b){\n  // tu código\n}`,
    tests: [
      'sum(1,2) === 3',
      'sum(-1,1) === 0',
      'typeof sum === "function"'
    ]
  },
  {
    id: 'isEven',
    title: 'isEven(n)',
    description: 'Devuelve true si n es par.',
    template: `function isEven(n){\n  // tu código\n}`,
    tests: [
      'isEven(2) === true',
      'isEven(3) === false'
    ]
  },
  {
    id: 'min',
    title: 'min(a,b)',
    description: 'Retorna el número menor.',
    template: `function min(a,b){\n}`,
    tests: [
      'min(2,1)===1',
      'min(-5,10)===-5'
    ]
  },
  {
    id: 'max',
    title: 'max(a,b)',
    description: 'Retorna el número mayor.',
    template: `function max(a,b){\n}`,
    tests: [
      'max(2,1)===2',
      'max(-5,10)===10'
    ]
  },
  {
    id: 'factorial',
    title: 'factorial(n)',
    description: 'Calcula factorial.',
    template: `function factorial(n){\n}`,
    tests: [
      'factorial(5)===120',
      'factorial(3)===6'
    ]
  }
];
