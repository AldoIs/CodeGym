// exercises/index.js
importScripts(
  'basics.js',
  'arrays.js',
  'strings.js',
  'dom.js',
  'events.js',
  'json.js'
);

// Concatenar TODOS los ejercicios en 1 arreglo global
const exercises = [
  ...basics,
  ...arrays,
  ...strings,
  ...domExercises,
  ...eventsExercises,
  ...jsonExercises
];

self.exercises = exercises;