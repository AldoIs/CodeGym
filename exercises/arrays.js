// exercises/arrays.js
const arrays = [
  {
    id: 'arr-first',
    title: 'first(arr)',
    description: 'Devuelve el primer elemento.',
    template: `function first(arr){\n}`,
    tests: [
      'first([1,2,3])===1',
      'first(["a","b"])==="a"'
    ]
  },
  {
    id: 'arr-last',
    title: 'last(arr)',
    description: 'Devuelve el último elemento.',
    template: `function last(arr){\n}`,
    tests: [
      'last([1,2,3])===3',
      'last(["a","b"])==="b"'
    ]
  },
  {
    id: 'arr-sum',
    title: 'sumArray(arr)',
    description: 'Suma todos los valores.',
    template: `function sumArray(arr){\n}`,
    tests: [
      'sumArray([1,2,3])===6',
      'sumArray([-1,1])===0'
    ]
  },
  {
    id: 'arr-map-doble',
    title: 'mapDouble(arr)',
    description: 'Duplica cada valor.',
    template: `function mapDouble(arr){\n}`,
    tests: [
      'JSON.stringify(mapDouble([1,2])) === "[2,4]"'
    ]
  },
  {
    id: 'arr-filter-even',
    title: 'filterEven(arr)',
    description: 'Filtra los pares.',
    template: `function filterEven(arr){\n}`,
    tests: [
      'JSON.stringify(filterEven([1,2,3,4])) === "[2,4]"'
    ]
  }
];
