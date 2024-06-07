const libros = [
  { titulo: "Padre Rico, Padre Pobre", autor: "Robert Kiyosaki" }, // Finanzas
  { titulo: "Pensar rápido, pensar despacio", autor: "Daniel Kahneman" }, // Psicología
  { titulo: "El poder del ahora", autor: "Eckhart Tolle" }, // Crecimiento Personal
  { titulo: "Cómo ganar amigos e influir sobre las personas", autor: "Dale Carnegie" }, // Autoayuda
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" }, // General

  { titulo: "Los secretos de la mente millonaria", autor: "T. Harv Eker" }, // Finanzas
  { titulo: "El hombre en busca de sentido", autor: "Viktor Frankl" }, // Psicología
  { titulo: "El monje que vendió su Ferrari", autor: "Robin Sharma" }, // Crecimiento Personal
  { titulo: "La magia del orden", autor: "Marie Kondo" }, // Autoayuda
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" }, // General

  { titulo: "Piense y hágase rico", autor: "Napoleon Hill" }, // Finanzas
  { titulo: "La inteligencia emocional", autor: "Daniel Goleman" }, // Psicología
  { titulo: "Grit: El poder de la pasión y la perseverancia", autor: "Angela Duckworth" }, // Crecimiento Personal
  { titulo: "El poder del pensamiento positivo", autor: "Norman Vincent Peale" }, // Autoayuda
  { titulo: "Matar a un ruiseñor", autor: "Harper Lee" }, // General

  { titulo: "La semana laboral de 4 horas", autor: "Tim Ferriss" }, // Finanzas
  { titulo: "Mindset: La actitud del éxito", autor: "Carol S. Dweck" }, // Psicología
  { titulo: "El poder de los hábitos", autor: "Charles Duhigg" }, // Crecimiento Personal
  { titulo: "Enamórate de ti", autor: "Walter Riso" }, // Autoayuda
  { titulo: "1984", autor: "George Orwell" }, // General

  { titulo: "Sapiens: De animales a dioses", autor: "Yuval Noah Harari" }, // Finanzas
  { titulo: "Los 7 hábitos de la gente altamente efectiva", autor: "Stephen Covey" }, // Psicología
  { titulo: "La sutil arte de que te importe un caraj*", autor: "Mark Manson" }, // Crecimiento Personal
  { titulo: "Los principios del éxito", autor: "Jack Canfield" }, // Autoayuda
  { titulo: "Orgullo y prejuicio", autor: "Jane Austen" }, // General

  { titulo: "La psicología del dinero", autor: "Morgan Housel" }, // Finanzas
  { titulo: "El arte de amar", autor: "Erich Fromm" }, // Psicología
  { titulo: "Cómo construir una historia", autor: "Christopher Vogler" }, // Crecimiento Personal
  { titulo: "El éxito no es casualidad", autor: "Tommy Newberry" }, // Autoayuda
  { titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald" }, // General

  { titulo: "Dinero: Domina el juego", autor: "Tony Robbins" }, // Finanzas
  { titulo: "Fortaleza emocional", autor: "José María Buceta" }, // Psicología
  { titulo: "La magia de pensar en grande", autor: "David J. Schwartz" }, // Crecimiento Personal
  { titulo: "La ventaja de la felicidad", autor: "Shawn Achor" }, // Autoayuda
  { titulo: "El retrato de Dorian Gray", autor: "Oscar Wilde" }, // General

  { titulo: "El código del dinero", autor: "Raimon Samsó" }, // Finanzas
  { titulo: "El cerebro del niño", autor: "Daniel J. Siegel" }, // Psicología
  { titulo: "Cómo fracasar en casi todo y aun así triunfar", autor: "Scott Adams" }, // Crecimiento Personal
  { titulo: "Rompe la barrera del no", autor: "Chris Voss" }, // Autoayuda
  { titulo: "Hamlet", autor: "William Shakespeare" }, // General

  { titulo: "Despierta tu héroe interior", autor: "Victor Hugo Manzanilla" }, // Finanzas
  { titulo: "Influencia: La psicología de la persuasión", autor: "Robert Cialdini" }, // Psicología
  { titulo: "El pequeño libro que genera riqueza", autor: "Pat Dorsey" }, // Crecimiento Personal
  { titulo: "Inteligencia emocional 2.0", autor: "Travis Bradberry" }, // Autoayuda
  { titulo: "Los hermanos Karamazov", autor: "Fiódor Dostoyevski" }, // General

  { titulo: "Atrévete a no gustar", autor: "Ichiro Kishimi y Fumitake Koga" }, // Finanzas
  { titulo: "El poder de los introvertidos", autor: "Susan Cain" }, // Psicología
  { titulo: "El club de las 5 de la mañana", autor: "Robin Sharma" }, // Crecimiento Personal
  { titulo: "El ego es el enemigo", autor: "Ryan Holiday" }, // Autoayuda
  { titulo: "La Odisea", autor: "Homero" }, // General

  { titulo: "Hazlo con miedo", autor: "Susana Ramírez" }, // Finanzas
  { titulo: "Más allá del bien y del mal", autor: "Friedrich Nietzsche" }, // Psicología
  { titulo: "Originales: Cómo los inconformistas mueven el mundo", autor: "Adam Grant" }, // Crecimiento Personal
  { titulo: "Superinteligencia: Caminos, peligros, estrategias", autor: "Nick Bostrom" }, // Autoayuda
  { titulo: "Anna Karenina", autor: "León Tolstói" }, // General

  { titulo: "De cero a uno", autor: "Peter Thiel" }, // Finanzas
  { titulo: "Grit: El poder de la pasión y la perseverancia", autor: "Angela Duckworth" }, // Psicología
  { titulo: "El poder del pensamiento flexible", autor: "Leona Brandwene" }, // Crecimiento Personal
  { titulo: "El efecto compuesto", autor: "Darren Hardy" }, // Autoayuda
  { titulo: "El proceso", autor: "Franz Kafka" }, // General

  { titulo: "Véndele a la mente, no a la gente", autor: "Jürgen Klaric" }, // Finanzas
  { titulo: "La mente organizada", autor: "Daniel J. Levitin" }, // Psicología
  { titulo: "Fluir (Flow)", autor: "Mihaly Csikszentmihalyi" }, // Crecimiento Personal
  { titulo: "Aprendiendo de los mejores", autor: "Francisco Alcaide Hernández" }, // Autoayuda
  { titulo: "Ulises", autor: "James Joyce" }, // General

  { titulo: "Autodisciplina en 10 días", autor: "Theodore Bryant" }, // Finanzas
  { titulo: "La paradoja de la elección", autor: "Barry Schwartz" }, // Psicología
  { titulo: "Roba como un artista", autor: "Austin Kleon" }, // Crecimiento Personal
  { titulo: "Psicología del éxito", autor: "Mario Luna" }, // Autoayuda
  { titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski" }, // General

  { titulo: "El hombre más rico de Babilonia", autor: "George S. Clason" }, // Finanzas
  { titulo: "El cisne negro", autor: "Nassim Nicholas Taleb" }, // Psicología
  { titulo: "Las 48 leyes del poder", autor: "Robert Greene" }, // Crecimiento Personal
  { titulo: "Fueras de serie (Outliers)", autor: "Malcolm Gladwell" }, // Autoayuda
  { titulo: "La metamorfosis", autor: "Franz Kafka" }, // General

  { titulo: "El arte de la guerra", autor: "Sun Tzu" }, // Finanzas
  { titulo: "El camino de los reyes", autor: "Brandon Sanderson" }, // Psicología
  { titulo: "La regla de las 5 horas", autor: "Michael Simmons" }, // Crecimiento Personal
  { titulo: "El juego interior del tenis", autor: "W. Timothy Gallwey" }, // Autoayuda
  { titulo: "Fahrenheit 451", autor: "Ray Bradbury" }, // General

  { titulo: "Todo cuenta", autor: "Gary Ryan Blair" }, // Finanzas
  { titulo: "Cómo fracasar en casi todo y aun así triunfar", autor: "Scott Adams" }, // Psicología
  { titulo: "La única cosa", autor: "Gary Keller y Jay Papasan" }, // Crecimiento Personal
  { titulo: "Reinicia (Rework)", autor: "Jason Fried y David Heinemeier Hansson" }, // Autoayuda
  { titulo: "El guardián entre el centeno", autor: "J.D. Salinger" }, // General

  { titulo: "La ciencia de hacerse rico", autor: "Wallace D. Wattles" }, // Finanzas
  { titulo: "La mente organizada", autor: "Daniel J. Levitin" }, // Psicología
  { titulo: "Las gafas de la felicidad", autor: "Rafael Santandreu" }, // Crecimiento Personal
  { titulo: "Pequeño cerdo capitalista", autor: "Sofía Macías" }, // Autoayuda
  { titulo: "Moby Dick", autor: "Herman Melville" }, // General

  { titulo: "Cómo ganar amigos e influir sobre las personas", autor: "Dale Carnegie" }, // Finanzas
  { titulo: "Influencia: La psicología de la persuasión", autor: "Robert Cialdini" }, // Psicología
  { titulo: "Tu mejor versión", autor: "Álex Rovira" }, // Crecimiento Personal
  { titulo: "Atrévete a no gustar", autor: "Ichiro Kishimi y Fumitake Koga" }, // Autoayuda
  { titulo: "El ruido y la furia", autor: "William Faulkner" }, // General

  { titulo: "El cisne negro", autor: "Nassim Nicholas Taleb" }, // Finanzas
  { titulo: "Superinteligencia: Caminos, peligros, estrategias", autor: "Nick Bostrom" }, // Psicología
  { titulo: "El pequeño libro que genera riqueza", autor: "Pat Dorsey" }, // Crecimiento Personal
  { titulo: "La ventaja de la felicidad", autor: "Shawn Achor" }, // Autoayuda
  { titulo: "Las aventuras de Huckleberry Finn", autor: "Mark Twain" }, // General
];

export default libros;
