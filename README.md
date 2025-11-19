# CodeGym — Sandbox de Ejercicios de JavaScript

CodeGym es un entorno ligero, seguro y completamente local para practicar ejercicios de JavaScript.  
Utiliza **Web Workers como sandbox**, permitiendo ejecutar código del usuario sin riesgo para la página principal, con soporte para:

- Ejecución aislada en un Worker  
- Timeout configurable  
- Pruebas automáticas por ejercicio  
- DOM virtual simple para ejercicios con HTML  
- Persistencia de progreso en `localStorage`  
- Lista de ejercicios cargados dinámicamente  

---

## 🚀 Objetivo del Proyecto

Crear un espacio tipo “gimnasio de programación” donde cualquier persona pueda practicar JavaScript desde lo más básico hasta manipulación del DOM, eventos, JSON y lógica general.

El proyecto funciona **sin backend**, sólo requiere abrir `validador.html` en el navegador.

---

## 📂 Estructura del Proyecto

```
CodeGym/
│
├── index.html        # Página principal con el validador
└── exercises/
    ├── basics.js         # Ejercicios de lógica básica
    ├── arrays.js         # Ejercicios de arreglos
    ├── strings.js        # Ejercicios de strings
    ├── dom.js            # Ejercicios con DOM virtual
    ├── events.js         # Ejercicios de eventos
    ├── json.js           # Ejercicios con JSON
    └── index.js          # Registro de todos los ejercicios
```

---

## 🧩 Cómo funciona un ejercicio

Cada archivo de ejercicio debe exportar una lista de objetos con esta estructura:

```js
{
  id: "unique-id",
  title: "Título del ejercicio",
  description: "Descripción corta del ejercicio",
  template: "Código inicial que verá el alumno",
  tests: [
    "sum(2,2) === 4",
    "typeof sum === 'function'"
  ],
  html: "<button id='btn'>Click</button>" // opcional
}
```

### Campos:

| Campo | Uso |
|-------|-----|
| `id` | Debe ser único. Se usa para guardar progreso. |
| `title` | Nombre del ejercicio. |
| `description` | Explicación visible para el usuario. |
| `template` | Código inicial en el editor. |
| `tests` | Lista de expresiones evaluadas en el Worker. |
| `html` | HTML opcional para ejercicios que usan DOM virtual. |

---

## ➕ Cómo agregar un nuevo archivo de ejercicios

1. Crea un archivo en `exercises/`, por ejemplo:

```
exercises/loops.js
```

2. Dentro del archivo exporta tus ejercicios:

```js
exercises.push({
  id: "loop-basic-1",
  title: "Suma de 1 a N",
  description: "Escribe una función que sume los números del 1 al N.",
  template: `function sumToN(n) {
  // tu código aquí
}`,
  tests: [
    "sumToN(5) === 15",
    "sumToN(1) === 1"
  ]
});
```

3. Edita **`exercises/index.js`** y agrega:

```js
import './loops.js';
```

4. ¡Listo! Aparecerá automáticamente en la lista.

---

## 🛡️ Seguridad

El código del usuario se ejecuta en un **Web Worker aislado**, con:

- Timeout configurable  
- Sin acceso al DOM real  
- Sin acceso al `window` global  
- DOM simulado controlado  
- El Worker se destruye al terminar  

---

## 📄 Cómo ejecutar CodeGym

No requiere servidor:

1. Descarga el proyecto  
2. Abre `index.html` en tu navegador  
3. Empieza a resolver ejercicios

---

## 🤝 Contribuciones

Se aceptan mejoras, nuevos ejercicios y optimizaciones al sandbox.

---

## 🌐 Autor

Proyecto creado por **AldoIs Mendoza**  
https://imagukrei.com
