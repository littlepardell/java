interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  {
    question: "¿Qué es un array bidimensional?",
    options: [
      "Un array con un solo índice",
      "Un array con dos índices",
      "Un array con tres índices",
      "Un array con cuatro índices"
    ],
    correctAnswer: "Un array con dos índices"
  },
  {
    question: "¿Cómo se declara un array bidimensional en Java?",
    options: [
      "int[] array;",
      "int[][] array;",
      "int array[];",
      "int array[][];"
    ],
    correctAnswer: "int[][] array;"
  },
  {
    question: "¿Cómo se accede a un elemento en un array bidimensional?",
    options: [
      "array[fila][columna]",
      "array[columna][fila]",
      "array[fila, columna]",
      "array[columna, fila]"
    ],
    correctAnswer: "array[fila][columna]"
  },
  {
    question: "¿Qué representa el primer índice en un array bidimensional?",
    options: [
      "La fila",
      "La columna",
      "La profundidad",
      "El tamaño"
    ],
    correctAnswer: "La fila"
  },
  {
    question: "¿Qué representa el segundo índice en un array bidimensional?",
    options: [
      "La fila",
      "La columna",
      "La profundidad",
      "El tamaño"
    ],
    correctAnswer: "La columna"
  },
  {
    question: "¿Cómo se inicializa un array bidimensional con valores específicos?",
    options: [
      "Usando llaves dobles {{ }}",
      "Usando un bucle for",
      "Usando el método Arrays.fill()",
      "Usando el constructor del array"
    ],
    correctAnswer: "Usando llaves dobles {{ }}"
  },
  {
    question: "¿Qué es un array tridimensional?",
    options: [
      "Un array con tres índices",
      "Un array con dos índices",
      "Un array con un índice",
      "Un array sin índices"
    ],
    correctAnswer: "Un array con tres índices"
  },
  {
    question: "¿Cómo se declara un array tridimensional en Java?",
    options: [
      "int[][][] array;",
      "int[] array;",
      "int[][] array;",
      "int[][][][] array;"
    ],
    correctAnswer: "int[][][] array;"
  },
  {
    question: "¿Cómo se accede a un elemento en un array tridimensional?",
    options: [
      "array[índice1][índice2][índice3]",
      "array[índice1, índice2, índice3]",
      "array[índice3][índice2][índice1]",
      "array[índice1][índice3][índice2]"
    ],
    correctAnswer: "array[índice1][índice2][índice3]"
  },
  {
    question: "¿Cuál es la diferencia entre un bucle while y un bucle do-while?",
    options: [
      "El bucle while evalúa la condición antes de ejecutar el cuerpo, mientras que el do-while la evalúa después.",
      "El bucle do-while evalúa la condición antes de ejecutar el cuerpo, mientras que el while la evalúa después.",
      "No hay diferencia.",
      "El bucle while es más rápido que el do-while."
    ],
    correctAnswer: "El bucle while evalúa la condición antes de ejecutar el cuerpo, mientras que el do-while la evalúa después."
  },
  {
    question: "¿Cuál es la sintaxis correcta para un bucle for en Java?",
    options: [
      "for (inicialización; condición; incremento) { }",
      "for (condición; inicialización; incremento) { }",
      "for (incremento; condición; inicialización) { }",
      "for (inicialización; incremento; condición) { }"
    ],
    correctAnswer: "for (inicialización; condición; incremento) { }"
  },
  {
    question: "¿Qué hace la abreviación variable++?",
    options: [
      "Incrementa la variable en 1",
      "Decrementa la variable en 1",
      "Multiplica la variable por 2",
      "Divide la variable por 2"
    ],
    correctAnswer: "Incrementa la variable en 1"
  },
  {
    question: "¿Qué bucle es más adecuado cuando se conoce el número de iteraciones?",
    options: [
      "while",
      "do-while",
      "for",
      "Ninguno"
    ],
    correctAnswer: "for"
  },
  {
    question: "¿Qué bucle siempre se ejecuta al menos una vez?",
    options: [
      "while",
      "do-while",
      "for",
      "Ninguno"
    ],
    correctAnswer: "do-while"
  },
  {
    question: "¿Qué hace la palabra clave break en un bucle?",
    options: [
      "Termina el bucle inmediatamente",
      "Salta a la siguiente iteración",
      "Detiene la ejecución del programa",
      "Imprime un mensaje"
    ],
    correctAnswer: "Termina el bucle inmediatamente"
  },
  {
    question: "¿Qué hace la palabra clave continue en un bucle?",
    options: [
      "Termina el bucle inmediatamente",
      "Salta a la siguiente iteración",
      "Detiene la ejecución del programa",
      "Imprime un mensaje"
    ],
    correctAnswer: "Salta a la siguiente iteración"
  },
  {
    question: "¿Qué es un bucle anidado?",
    options: [
      "Un bucle dentro de otro bucle",
      "Un bucle que se ejecuta solo una vez",
      "Un bucle sin condición",
      "Un bucle con múltiples condiciones"
    ],
    correctAnswer: "Un bucle dentro de otro bucle"
  },
  {
    question: "¿Para qué se usan los bucles anidados?",
    options: [
      "Para iterar sobre estructuras de datos multidimensionales",
      "Para mejorar el rendimiento",
      "Para simplificar el código",
      "Para evitar errores"
    ],
    correctAnswer: "Para iterar sobre estructuras de datos multidimensionales"
  },
  {
    question: "¿Qué es un bucle infinito?",
    options: [
      "Un bucle que nunca termina",
      "Un bucle que se ejecuta solo una vez",
      "Un bucle sin cuerpo",
      "Un bucle con una condición siempre falsa"
    ],
    correctAnswer: "Un bucle que nunca termina"
  },
  {
    question: "¿Qué método se usa para leer un String completo con Scanner?",
    options: [
      "next()",
      "nextLine()",
      "nextString()",
      "readLine()"
    ],
    correctAnswer: "nextLine()"
  },
  {
    question: "¿Cómo se lee un carácter con Scanner?",
    options: [
      "nextChar()",
      "next().charAt(0)",
      "readChar()",
      "nextCharacter()"
    ],
    correctAnswer: "next().charAt(0)"
  },
  {
    question: "¿Qué hace el método nextInt()?",
    options: [
      "Lee un número entero",
      "Lee un número decimal",
      "Lee un carácter",
      "Lee un booleano"
    ],
    correctAnswer: "Lee un número entero"
  },
  {
    question: "¿Qué método se usa para leer un número decimal con Scanner?",
    options: [
      "nextInt()",
      "nextDouble()",
      "nextFloat()",
      "nextDecimal()"
    ],
    correctAnswer: "nextDouble()"
  },
  {
    question: "¿Qué método se usa para leer un booleano con Scanner?",
    options: [
      "nextBoolean()",
      "nextBool()",
      "nextTrueFalse()",
      "nextBit()"
    ],
    correctAnswer: "nextBoolean()"
  },
  {
    question: "¿Qué sucede si se intenta leer un tipo de dato incorrecto con Scanner?",
    options: [
      "Se produce una excepción",
      "Se devuelve un valor por defecto",
      "Se ignora la entrada",
      "Se muestra un mensaje de error"
    ],
    correctAnswer: "Se produce una excepción"
  },
  {
    question: "¿Qué método se usa para leer una línea completa incluyendo espacios?",
    options: [
      "nextLine()",
      "next()",
      "readLine()",
      "nextString()"
    ],
    correctAnswer: "nextLine()"
  },
  {
    question: "¿Qué método se usa para leer un float con Scanner?",
    options: [
      "nextFloat()",
      "nextDouble()",
      "nextInt()",
      "nextDecimal()"
    ],
    correctAnswer: "nextFloat()"
  },
  {
    question: "¿Cómo se cierra un objeto Scanner?",
    options: [
      "Usando el método close()",
      "Usando la palabra clave finalize",
      "No es necesario cerrarlo",
      "Usando el método dispose()"
    ],
    correctAnswer: "Usando el método close()"
  },
  {
    question: "¿Qué es una clase en OO?",
    options: [
      "Una instancia de un objeto",
      "Una plantilla para crear objetos",
      "Un método",
      "Un atributo"
    ],
    correctAnswer: "Una plantilla para crear objetos"
  },
  {
    question: "¿Qué es un objeto en OO?",
    options: [
      "Una clase",
      "Una instancia de una clase",
      "Un método",
      "Un atributo"
    ],
    correctAnswer: "Una instancia de una clase"
  },
  {
    question: "¿Qué representan los atributos en una clase?",
    options: [
      "Acciones",
      "Características",
      "Comportamientos",
      "Eventos"
    ],
    correctAnswer: "Características"
  },
  {
    question: "¿Qué es un método en una clase?",
    options: [
      "Una característica del objeto",
      "Un comportamiento del objeto",
      "Un tipo de dato",
      "Un constructor"
    ],
    correctAnswer: "Un comportamiento del objeto"
  },
  {
    question: "¿Cómo se crea un objeto en Java?",
    options: [
      "Usando la palabra clave new",
      "Usando la palabra clave create",
      "Usando la palabra clave object",
      "Usando la palabra clave instance"
    ],
    correctAnswer: "Usando la palabra clave new"
  },
  {
    question: "¿Qué es un paquete en Java?",
    options: [
      "Una colección de clases relacionadas",
      "Un tipo de dato",
      "Un método",
      "Un atributo"
    ],
    correctAnswer: "Una colección de clases relacionadas"
  },
  {
    question: "¿Cómo se importa una clase de otro paquete?",
    options: [
      "Usando la palabra clave import",
      "Usando la palabra clave include",
      "Usando la palabra clave require",
      "Usando la palabra clave load"
    ],
    correctAnswer: "Usando la palabra clave import"
  },
  {
    question: "¿Qué es la palabra clave this?",
    options: [
      "Se refiere al objeto actual",
      "Se refiere a la superclase",
      "Se refiere a la subclase",
      "Se refiere al método actual"
    ],
    correctAnswer: "Se refiere al objeto actual"
  },
  {
    question: "¿Qué es la encapsulación?",
    options: [
      "Ocultar los datos internos de un objeto",
      "Heredar atributos y métodos de otra clase",
      "Tratar objetos de subclases como si fueran de la superclase",
      "Definir métodos abstractos"
    ],
    correctAnswer: "Ocultar los datos internos de un objeto"
  },
  {
    question: "¿Qué es la herencia?",
    options: [
      "Ocultar los datos internos de un objeto",
      "Heredar atributos y métodos de otra clase",
      "Tratar objetos de subclases como si fueran de la superclase",
      "Definir métodos abstractos"
    ],
    correctAnswer: "Heredar atributos y métodos de otra clase"
  },
  {
    question: "¿Qué es el polimorfismo?",
    options: [
      "Ocultar los datos internos de un objeto",
      "Heredar atributos y métodos de otra clase",
      "Tratar objetos de subclases como si fueran de la superclase",
      "Definir métodos abstractos"
    ],
    correctAnswer: "Tratar objetos de subclases como si fueran de la superclase"
  },
  {
    question: "¿Qué es la abstracción?",
    options: [
      "Ocultar los datos internos de un objeto",
      "Heredar atributos y métodos de otra clase",
      "Tratar objetos de subclases como si fueran de la superclase",
      "Definir métodos abstractos"
    ],
    correctAnswer: "Definir métodos abstractos"
  },
  {
    question: "¿Qué permite la encapsulación?",
    options: [
      "Ocultar la implementación interna",
      "Reutilizar código",
      "Tratar objetos de manera genérica",
      "Definir comportamientos comunes"
    ],
    correctAnswer: "Ocultar la implementación interna"
  },
  {
    question: "¿Qué permite la herencia?",
    options: [
      "Ocultar la implementación interna",
      "Reutilizar código",
      "Tratar objetos de manera genérica",
      "Definir comportamientos comunes"
    ],
    correctAnswer: "Reutilizar código"
  },
  {
    question: "¿Qué permite el polimorfismo?",
    options: [
      "Ocultar la implementación interna",
      "Reutilizar código",
      "Tratar objetos de manera genérica",
      "Definir comportamientos comunes"
    ],
    correctAnswer: "Tratar objetos de manera genérica"
  },
  {
    question: "¿Qué permite la abstracción?",
    options: [
      "Ocultar la implementación interna",
      "Reutilizar código",
      "Tratar objetos de manera genérica",
      "Definir comportamientos comunes"
    ],
    correctAnswer: "Definir comportamientos comunes"
  },
  {
    question: "¿Qué es un getter?",
    options: [
      "Un método que obtiene el valor de un atributo",
      "Un método que establece el valor de un atributo",
      "Un método que crea un nuevo objeto",
      "Un método que destruye un objeto"
    ],
    correctAnswer: "Un método que obtiene el valor de un atributo"
  },
  {
    question: "¿Qué es un setter?",
    options: [
      "Un método que obtiene el valor de un atributo",
      "Un método que establece el valor de un atributo",
      "Un método que crea un nuevo objeto",
      "Un método que destruye un objeto"
    ],
    correctAnswer: "Un método que establece el valor de un atributo"
  },
  {
    question: "¿Qué es la sobrecarga de métodos?",
    options: [
      "Definir múltiples métodos con el mismo nombre pero diferentes parámetros",
      "Definir un método con el mismo nombre que la clase",
      "Definir un método sin parámetros",
      "Definir un método con parámetros por defecto"
    ],
    correctAnswer: "Definir múltiples métodos con el mismo nombre pero diferentes parámetros"
  },
  {
    question: "¿Qué es un constructor en Java?",
    options: [
      "Un método que devuelve un valor",
      "Un método especial que inicializa objetos",
      "Un atributo de la clase",
      "Un tipo de dato"
    ],
    correctAnswer: "Un método especial que inicializa objetos"
  },
  {
    question: "¿Qué sucede si no se define un constructor en una clase?",
    options: [
      "La clase no se puede instanciar",
      "Java proporciona un constructor por defecto",
      "Se produce un error de compilación",
      "La clase no tiene atributos"
    ],
    correctAnswer: "Java proporciona un constructor por defecto"
  },
  {
    question: "¿Puede una clase tener múltiples constructores?",
    options: [
      "Sí, siempre que tengan diferentes parámetros",
      "No, solo uno",
      "Sí, pero deben tener el mismo nombre",
      "No, los constructores son únicos"
    ],
    correctAnswer: "Sí, siempre que tengan diferentes parámetros"
  },
  {
    question: "¿Cuál es el propósito de un constructor?",
    options: [
      "Inicializar los atributos del objeto",
      "Definir los métodos del objeto",
      "Heredar de otra clase",
      "Implementar una interfaz"
    ],
    correctAnswer: "Inicializar los atributos del objeto"
  },
  {
    question: "¿Puede un constructor tener parámetros?",
    options: [
      "Sí",
      "No",
      "Solo si es estático",
      "Solo si es privado"
    ],
    correctAnswer: "Sí"
  },
  {
    question: "¿Qué es la sobrecarga de constructores?",
    options: [
      "Definir múltiples constructores con diferentes parámetros",
      "Definir un constructor con el mismo nombre que la clase",
      "Definir un constructor sin parámetros",
      "Definir un constructor con parámetros por defecto"
    ],
    correctAnswer: "Definir múltiples constructores con diferentes parámetros"
  },
  {
    question: "¿Puede un constructor llamar a otro constructor de la misma clase?",
    options: [
      "Sí, usando this()",
      "No",
      "Solo si es estático",
      "Solo si es privado"
    ],
    correctAnswer: "Sí, usando this()"
  },
  {
    question: "¿Qué es un constructor por defecto?",
    options: [
      "Un constructor sin parámetros proporcionado por Java",
      "Un constructor con parámetros",
      "Un constructor estático",
      "Un constructor privado"
    ],
    correctAnswer: "Un constructor sin parámetros proporcionado por Java"
  },
  {
    question: "¿Puede un constructor ser privado?",
    options: [
      "Sí",
      "No",
      "Solo en clases abstractas",
      "Solo en interfaces"
    ],
    correctAnswer: "Sí"
  },
  {
    question: "¿Qué hace el método toString por defecto?",
    options: [
      "Devuelve el nombre de la clase y la dirección de memoria",
      "Devuelve una cadena vacía",
      "Devuelve null",
      "Devuelve el valor de los atributos"
    ],
    correctAnswer: "Devuelve el nombre de la clase y la dirección de memoria"
  },
  {
    question: "¿Cómo se sobrescribe el método toString?",
    options: [
      "Usando la anotación @Override",
      "Definiendo un nuevo método con el mismo nombre",
      "No se puede sobrescribir",
      "Usando la palabra clave super"
    ],
    correctAnswer: "Usando la anotación @Override"
  },
  {
    question: "¿Por qué es útil sobrescribir el método toString?",
    options: [
      "Para proporcionar una representación en cadena personalizada del objeto",
      "Para mejorar el rendimiento",
      "Para ocultar los datos internos",
      "Para implementar polimorfismo"
    ],
    correctAnswer: "Para proporcionar una representación en cadena personalizada del objeto"
  },
  {
    question: "¿Qué anotación se usa al sobrescribir toString?",
    options: [
      "@Override",
      "@ToString",
      "@OverrideToString",
      "@StringOverride"
    ],
    correctAnswer: "@Override"
  },
  {
    question: "¿Qué devuelve el método toString si no se sobrescribe?",
    options: [
      "El nombre de la clase y la dirección de memoria",
      "Una cadena vacía",
      "null",
      "El valor de los atributos"
    ],
    correctAnswer: "El nombre de la clase y la dirección de memoria"
  },
  {
    question: "¿Es obligatorio sobrescribir toString?",
    options: [
      "No",
      "Sí",
      "Solo en clases abstractas",
      "Solo en interfaces"
    ],
    correctAnswer: "No"
  },
  {
    question: "¿Qué es una clase abstracta?",
    options: [
      "Una clase que no se puede instanciar directamente",
      "Una clase que solo tiene métodos abstractos",
      "Una clase que no tiene atributos",
      "Una clase que no tiene constructores"
    ],
    correctAnswer: "Una clase que no se puede instanciar directamente"
  },
  {
    question: "¿Pueden las clases abstractas tener métodos concretos?",
    options: [
      "Sí",
      "No",
      "Solo si son estáticos",
      "Solo si son privados"
    ],
    correctAnswer: "Sí"
  },
  {
    question: "¿Qué deben hacer las subclases de una clase abstracta?",
    options: [
      "Implementar todos los métodos abstractos",
      "No pueden heredar de clases abstractas",
      "Solo heredar los métodos concretos",
      "Definir nuevos métodos abstractos"
    ],
    correctAnswer: "Implementar todos los métodos abstractos"
  },
  {
    question: "¿Puede una clase abstracta tener constructores?",
    options: [
      "Sí",
      "No",
      "Solo si no tiene métodos abstractos",
      "Solo si es final"
    ],
    correctAnswer: "Sí"
  },
  {
    question: "¿Puede una clase abstracta ser instanciada directamente?",
    options: [
      "No",
      "Sí",
      "Solo si no tiene métodos abstractos",
      "Solo si es pública"
    ],
    correctAnswer: "No"
  },
  {
    question: "¿Qué palabra clave se usa para declarar una clase abstracta?",
    options: [
      "abstract",
      "final",
      "static",
      "public"
    ],
    correctAnswer: "abstract"
  },
  {
    question: "¿Puede una clase abstracta tener atributos?",
    options: [
      "Sí",
      "No",
      "Solo si son estáticos",
      "Solo si son finales"
    ],
    correctAnswer: "Sí"
  },
  {
    question: "¿Puede una clase abstracta implementar interfaces?",
    options: [
      "Sí",
      "No",
      "Solo si no tiene métodos abstractos",
      "Solo si es pública"
    ],
    correctAnswer: "Sí"
  },
  {
    question: "¿Qué es una interfaz en Java?",
    options: [
      "Una clase con solo métodos abstractos",
      "Una clase con solo métodos concretos",
      "Una clase que no se puede instanciar",
      "Una clase que hereda de múltiples clases"
    ],
    correctAnswer: "Una clase con solo métodos abstractos"
  },
  {
    question: "¿Cómo se implementa una interfaz en una clase?",
    options: [
      "Usando la palabra clave extends",
      "Usando la palabra clave implements",
      "Usando la palabra clave interface",
      "Usando la palabra clave abstract"
    ],
    correctAnswer: "Usando la palabra clave implements"
  },
  {
    question: "¿Puede una clase implementar múltiples interfaces?",
    options: [
      "Sí",
      "No",
      "Solo si son del mismo paquete",
      "Solo si no tienen métodos con el mismo nombre"
    ],
    correctAnswer: "Sí"
  },
  {
    question: "¿Qué contienen las interfaces en Java?",
    options: [
      "Solo métodos abstractos y constantes",
      "Métodos concretos",
      "Atributos",
      "Constructores"
    ],
    correctAnswer: "Solo métodos abstractos y constantes"
  },
  {
    question: "¿Puede una interfaz heredar de otra interfaz?",
    options: [
      "Sí",
      "No",
      "Solo si no tiene métodos",
      "Solo si es del mismo paquete"
    ],
    correctAnswer: "Sí"
  },
  {
    question: "¿Qué palabra clave se usa para implementar una interfaz?",
    options: [
      "implements",
      "extends",
      "interface",
      "abstract"
    ],
    correctAnswer: "implements"
  },
  {
    question: "¿Pueden las interfaces tener métodos concretos?",
    options: [
      "Sí, desde Java 8 con la palabra clave default",
      "No",
      "Solo si son estáticos",
      "Solo si son privados"
    ],
    correctAnswer: "Sí, desde Java 8 con la palabra clave default"
  },
  {
    question: "¿Qué es una interfaz funcional?",
    options: [
      "Una interfaz con un solo método abstracto",
      "Una interfaz con múltiples métodos abstractos",
      "Una interfaz sin métodos",
      "Una interfaz con métodos concretos"
    ],
    correctAnswer: "Una interfaz con un solo método abstracto"
  },
  {
    question: "¿Qué es una API?",
    options: [
      "Una interfaz de programación de aplicaciones",
      "Un tipo de dato",
      "Un método",
      "Un atributo"
    ],
    correctAnswer: "Una interfaz de programación de aplicaciones"
  },
  {
    question: "¿Qué es una API REST?",
    options: [
      "Una arquitectura basada en HTTP para APIs",
      "Un tipo de API que no usa HTTP",
      "Una API que solo devuelve JSON",
      "Una API que solo acepta peticiones GET"
    ],
    correctAnswer: "Una arquitectura basada en HTTP para APIs"
  },
  {
    question: "¿Cuáles son algunas ventajas de REST?",
    options: [
      "Separación cliente-servidor, escalabilidad, variedad de formatos",
      "Mayor seguridad, menor latencia, mejor rendimiento",
      "Facilidad de implementación, menor consumo de recursos, mayor compatibilidad",
      "Todas las anteriores"
    ],
    correctAnswer: "Separación cliente-servidor, escalabilidad, variedad de formatos"
  },
  {
    question: "¿Qué significa REST en API REST?",
    options: [
      "Representational State Transfer",
      "Remote Execution of State Transitions",
      "Resource Efficient State Transfer",
      "Real-time Execution of State Transitions"
    ],
    correctAnswer: "Representational State Transfer"
  },
  {
    question: "¿Qué método HTTP se usa para obtener datos en una API REST?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correctAnswer: "GET"
  },
  {
    question: "¿Qué método HTTP se usa para crear nuevos recursos en una API REST?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correctAnswer: "POST"
  },
  {
    question: "¿Qué método HTTP se usa para actualizar recursos existentes en una API REST?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correctAnswer: "PUT"
  },
  {
    question: "¿Qué método HTTP se usa para eliminar recursos en una API REST?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correctAnswer: "DELETE"
  },
  {
    question: "¿Qué es JSON?",
    options: [
      "Un formato de intercambio de datos",
      "Un lenguaje de programación",
      "Un tipo de API",
      "Un método HTTP"
    ],
    correctAnswer: "Un formato de intercambio de datos"
  },
  {
    question: "¿Qué es XML?",
    options: [
      "Un formato de intercambio de datos",
      "Un lenguaje de programación",
      "Un tipo de API",
      "Un método HTTP"
    ],
    correctAnswer: "Un formato de intercambio de datos"
  },
  {
    question: "¿Por qué usar Spring Boot?",
    options: [
      "Es un framework completo para aplicaciones web en Java",
      "Es más rápido que otros frameworks",
      "Es más seguro que otros frameworks",
      "Es más fácil de aprender que otros frameworks"
    ],
    correctAnswer: "Es un framework completo para aplicaciones web en Java"
  },
  {
    question: "¿Qué es un controlador en Spring Boot?",
    options: [
      "Una clase que maneja las peticiones HTTP",
      "Una clase que define la lógica de negocio",
      "Una clase que interactúa con la base de datos",
      "Una clase que define la interfaz de usuario"
    ],
    correctAnswer: "Una clase que maneja las peticiones HTTP"
  },
  {
    question: "¿Cómo se define un método para manejar una petición GET en Spring Boot?",
    options: [
      "Usando la anotación @GetMapping",
      "Usando la anotación @PostMapping",
      "Usando la anotación @PutMapping",
      "Usando la anotación @DeleteMapping"
    ],
    correctAnswer: "Usando la anotación @GetMapping"
  },
  {
    question: "¿Qué es un ResponseEntity en Spring Boot?",
    options: [
      "Una clase que representa la respuesta HTTP",
      "Una clase que representa la petición HTTP",
      "Una clase que maneja excepciones",
      "Una clase que define la lógica de negocio"
    ],
    correctAnswer: "Una clase que representa la respuesta HTTP"
  },
  {
    question: "¿Cómo se obtiene un parámetro de la URL en un método de controlador?",
    options: [
      "Usando @PathVariable",
      "Usando @RequestParam",
      "Usando @Param",
      "Usando @Variable"
    ],
    correctAnswer: "Usando @PathVariable"
  },
  {
    question: "¿Qué anotación se usa para definir un controlador en Spring Boot?",
    options: [
      "@RestController",
      "@Controller",
      "@Service",
      "@Repository"
    ],
    correctAnswer: "@RestController"
  },
  {
    question: "¿Qué es un servicio en Spring Boot?",
    options: [
      "Una clase que define la lógica de negocio",
      "Una clase que maneja las peticiones HTTP",
      "Una clase que interactúa con la base de datos",
      "Una clase que define la interfaz de usuario"
    ],
    correctAnswer: "Una clase que define la lógica de negocio"
  },
  {
    question: "¿Qué es un repositorio en Spring Boot?",
    options: [
      "Una interfaz que interactúa con la base de datos",
      "Una clase que define la lógica de negocio",
      "Una clase que maneja las peticiones HTTP",
      "Una clase que define la interfaz de usuario"
    ],
    correctAnswer: "Una interfaz que interactúa con la base de datos"
  },
  {
    question: "¿Qué anotación se usa para inyectar dependencias en Spring Boot?",
    options: [
      "@Autowired",
      "@Inject",
      "@Dependency",
      "@Wire"
    ],
    correctAnswer: "@Autowired"
  },
  {
    question: "¿Qué es el archivo application.properties en Spring Boot?",
    options: [
      "Un archivo de configuración para la aplicación",
      "Un archivo de registro",
      "Un archivo de recursos",
      "Un archivo de prueba"
    ],
    correctAnswer: "Un archivo de configuración para la aplicación"
  },
  {
    question: "¿Qué anotación se usa para mapear una petición POST a un método?",
    options: [
      "@PostMapping",
      "@GetMapping",
      "@PutMapping",
      "@DeleteMapping"
    ],
    correctAnswer: "@PostMapping"
  },
  {
    question: "¿Qué es Spring Boot?",
    options: [
      "Un framework para desarrollar aplicaciones web en Java",
      "Un lenguaje de programación",
      "Un tipo de base de datos",
      "Un servidor web"
    ],
    correctAnswer: "Un framework para desarrollar aplicaciones web en Java"
  }
];