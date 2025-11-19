// exercises/json.js
const jsonExercises = [
  {
    id:'json-parse',
    title:'parseUser(json)',
    description:'Retorna un objeto a partir de un string JSON.',
    template:`function parseUser(j){
  // tu código aquí
}`,
    tests:[
      'parseUser("{\\"name\\":\\"Aldo\\"}").name==="Aldo"',
      'typeof parseUser("{\\"age\\":30}").age==="number"'
    ]
  },
  {
    id:'json-stringify',
    title:'userToJson(user)',
    description:'Convierte un objeto en un string JSON.',
    template:`function userToJson(user){
  // tu código aquí
}`,
    tests:[
      'userToJson({name:"Aldo"}).includes("Aldo")',
      'typeof userToJson({age:30})==="string"'
    ]
  },
  {
    id:'json-access',
    title:'getUserEmail(json)',
    description:'Dado un JSON de usuario, retorna el campo "email".',
    template:`function getUserEmail(j){
  // tu código aquí
}`,
    tests:[
      'getUserEmail("{\\"email\\":\\"a@b.com\\"}")==="a@b.com"',
      'getUserEmail("{\\"email\\":\\"test@example.com\\"}")==="test@example.com"'
    ]
  },
  {
    id:'json-update',
    title:'updateUserName(json,newName)',
    description:'Actualiza el campo "name" de un JSON de usuario y retorna el JSON modificado como string.',
    template:`function updateUserName(j,newName){
  // tu código aquí
}`,
    tests:[
      'updateUserName("{\\"name\\":\\"Aldo\\"}","Juan").includes("Juan")',
      'JSON.parse(updateUserName("{\\"name\\":\\"Aldo\\"}","Juan")).name==="Juan"'
    ]
  },
  {
    id:'json-array-access',
    title:'getFirstFriend(json)',
    description:'Dado un JSON con lista de amigos, retorna el nombre del primer amigo.',
    template:`function getFirstFriend(j){
  // tu código aquí
}`,
    tests:[
      'getFirstFriend("{\\"friends\\":[\\"Ana\\",\\"Luis\\"]}")==="Ana"',
      'getFirstFriend("{\\"friends\\":[\\"Pedro\\",\\"Maria\\"]}")==="Pedro"'
    ]
  },
  {
    id:'json-filter-array',
    title:'filterAdults(json)',
    description:'Dado un JSON con array de personas, retorna un array solo con los mayores de 18.',
    template:`function filterAdults(j){
  // tu código aquí
}`,
    tests:[
      'JSON.stringify(filterAdults("{\\"people\\":[{\\"name\\":\\"A\\",\\"age\\":20},{\\"name\\":\\"B\\",\\"age\\":15}]}"))==="[{\"name\":\"A\",\"age\":20}]"',
      'filterAdults("{\\"people\\":[{\\"name\\":\\"X\\",\\"age\\":17},{\\"name\\":\\"Y\\",\\"age\\":22}]}")[0].name==="Y"'
    ]
  }
];
