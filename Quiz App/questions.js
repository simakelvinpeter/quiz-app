const allQuestions = {
  programming: {
    general: [
        {
          question: "What does HTML stand for?",
          options: ["HyperText Markup Language", "HyperText Markdown Language", "Hyper Transfer Markup Language", "HyperText Model Language"],
          answer: "HyperText Markup Language"
        },
        {
          question: "Which symbol is used for comments in JavaScript?",
          options: ["<!-- -->", "//", "/* */", "#"],
          answer: "//"
        },
        {
          question: "What is the result of 3 + '3' in JavaScript?",
          options: ["6", "33", "Error", "undefined"],
          answer: "33"
        },
        {
          question: "Which company developed JavaScript?",
          options: ["Microsoft", "Netscape", "Google", "Sun Microsystems"],
          answer: "Netscape"
        },
        {
          question: "What is the correct syntax for referring to an external script called 'app.js'?",
          options: ["<script src='app.js'>", "<script href='app.js'>", "<script ref='app.js'>", "<script name='app.js'>"],
          answer: "<script src='app.js'>"
        },
        {
          question: "Which method is used to parse a string to an integer in JavaScript?",
          options: ["parseInt()", "parseFloat()", "Number()", "toString()"],
          answer: "parseInt()"
        },
        {
          question: "What is the output of 'typeof null' in JavaScript?",
          options: ["null", "object", "undefined", "string"],
          answer: "object"
        },
        {
          question: "Which keyword is used to declare a constant in JavaScript?",
          options: ["let", "var", "const", "constant"],
          answer: "const"
        },
        {
          question: "What is the default value of an uninitialized variable in JavaScript?",
          options: ["null", "undefined", "0", "NaN"],
          answer: "undefined"
        },
        {
          question: "Which function is used to convert JSON data to a JavaScript object?",
          options: ["JSON.parse()", "JSON.stringify()", "JSON.objectify()", "JSON.convert()"],
          answer: "JSON.parse()"
        },
        {
          question: "What does the '===' operator check in JavaScript?",
          options: ["Equality only", "Equality and type", "Type only", "None of the above"],
          answer: "Equality and type"
        },
        {
          question: "Which array method is used to add elements to the end of an array?",
          options: ["push()", "pop()", "shift()", "unshift()"],
          answer: "push()"
        },
        {
          question: "What is the purpose of the 'this' keyword in JavaScript?",
          options: ["Refers to the current object", "Refers to the global object", "Refers to the parent object", "None of the above"],
          answer: "Refers to the current object"
        },
        {
          question: "Which method is used to remove the last element from an array?",
          options: ["pop()", "push()", "shift()", "unshift()"],
          answer: "pop()"
        },
        {
          question: "What is the output of 'console.log(typeof NaN)'?",
          options: ["number", "NaN", "undefined", "object"],
          answer: "number"
        },
        {
          question: "Which statement is used to stop a loop in JavaScript?",
          options: ["break", "stop", "exit", "return"],
          answer: "break"
        },
        {
          question: "Which method is used to join two or more arrays in JavaScript?",
          options: ["concat()", "join()", "merge()", "combine()"],
          answer: "concat()"
        },
        {
          question: "What is the purpose of the 'map()' method in JavaScript?",
          options: ["Iterates over an array and returns a new array", "Filters elements in an array", "Sorts an array", "None of the above"],
          answer: "Iterates over an array and returns a new array"
        },
        {
          question: "Which keyword is used to handle exceptions in JavaScript?",
          options: ["catch", "try", "throw", "finally"],
          answer: "catch"
        },
        {
          question: "What is the output of 'Boolean(0)' in JavaScript?",
          options: ["true", "false", "undefined", "null"],
          answer: "false"
        }
      ],
    python: [
  {
    "question": "Which keyword defines a function?",
    "options": [
      "def",
      "func",
      "function",
      "define"
    ],
    "answer": "def"
  },
  {
    "question": "Which type stores an ordered mutable collection?",
    "options": [
      "list",
      "tuple",
      "set",
      "int"
    ],
    "answer": "list"
  },
  {
    "question": "What does len([1, 2, 3]) return?",
    "options": [
      "3",
      "2",
      "4",
      "1"
    ],
    "answer": "3"
  },
  {
    "question": "Which symbol starts a single-line comment?",
    "options": [
      "#",
      "//",
      "<!--",
      "--"
    ],
    "answer": "#"
  },
  {
    "question": "Which value represents no value?",
    "options": [
      "None",
      "null",
      "nil",
      "void"
    ],
    "answer": "None"
  },
  {
    "question": "What is 7 // 2?",
    "options": [
      "3",
      "3.5",
      "4",
      "1"
    ],
    "answer": "3"
  },
  {
    "question": "What is 2 ** 3?",
    "options": [
      "8",
      "6",
      "9",
      "5"
    ],
    "answer": "8"
  },
  {
    "question": "Which keyword starts a conditional?",
    "options": [
      "if",
      "when",
      "check",
      "caseof"
    ],
    "answer": "if"
  },
  {
    "question": "Which function displays text?",
    "options": [
      "print()",
      "echo()",
      "displayText()",
      "console.log()"
    ],
    "answer": "print()"
  },
  {
    "question": "Which type holds key-value pairs?",
    "options": [
      "dict",
      "list",
      "tuple",
      "str"
    ],
    "answer": "dict"
  },
  {
    "question": "Which keyword imports a module?",
    "options": [
      "import",
      "include",
      "using",
      "require"
    ],
    "answer": "import"
  },
  {
    "question": "What does range(3) produce?",
    "options": [
      "0, 1, 2",
      "1, 2, 3",
      "0, 1, 2, 3",
      "Only 3"
    ],
    "answer": "0, 1, 2"
  },
  {
    "question": "Which list method adds one item at the end?",
    "options": [
      "append()",
      "push()",
      "addLastItem()",
      "insertEnd()"
    ],
    "answer": "append()"
  },
  {
    "question": "Which keyword handles an exception?",
    "options": [
      "except",
      "catch",
      "rescue",
      "error"
    ],
    "answer": "except"
  },
  {
    "question": "Which Boolean literal is valid Python?",
    "options": [
      "True",
      "true",
      "TRUE",
      "Yes"
    ],
    "answer": "True"
  },
  {
    "question": "Which operator tests equality?",
    "options": [
      "==",
      "=",
      "===",
      ":="
    ],
    "answer": "=="
  },
  {
    "question": "What is the type of \"hello\"?",
    "options": [
      "str",
      "char",
      "text",
      "word"
    ],
    "answer": "str"
  },
  {
    "question": "Which keyword creates a class?",
    "options": [
      "class",
      "object",
      "struct",
      "typeclass"
    ],
    "answer": "class"
  },
  {
    "question": "Which collection is immutable?",
    "options": [
      "tuple",
      "list",
      "dict",
      "set"
    ],
    "answer": "tuple"
  },
  {
    "question": "Which statement exits a loop?",
    "options": [
      "break",
      "exitloop",
      "stop",
      "finish"
    ],
    "answer": "break"
  }
],
    cpp: [
  {
    "question": "Which header provides cout?",
    "options": [
      "<iostream>",
      "<stdio>",
      "<output>",
      "<console>"
    ],
    "answer": "<iostream>"
  },
  {
    "question": "Which function is the usual program entry point?",
    "options": [
      "main()",
      "start()",
      "run()",
      "init()"
    ],
    "answer": "main()"
  },
  {
    "question": "Which punctuation ends most statements?",
    "options": [
      ";",
      ":",
      ",",
      "."
    ],
    "answer": ";"
  },
  {
    "question": "Which keyword declares a constant?",
    "options": [
      "const",
      "constant",
      "fixed",
      "let"
    ],
    "answer": "const"
  },
  {
    "question": "Which operator accesses a pointer member?",
    "options": [
      "->",
      "=>",
      "::",
      ".."
    ],
    "answer": "->"
  },
  {
    "question": "Which symbol starts a single-line comment?",
    "options": [
      "//",
      "#",
      "<!--",
      "--"
    ],
    "answer": "//"
  },
  {
    "question": "Which container is a resizable sequence?",
    "options": [
      "std::vector",
      "std::array",
      "int",
      "std::pair"
    ],
    "answer": "std::vector"
  },
  {
    "question": "Which operator gives an address?",
    "options": [
      "&",
      "*",
      "@",
      "%"
    ],
    "answer": "&"
  },
  {
    "question": "Which operator dereferences a pointer?",
    "options": [
      "*",
      "&",
      "->>",
      "!"
    ],
    "answer": "*"
  },
  {
    "question": "Which keyword allocates an object dynamically?",
    "options": [
      "new",
      "create",
      "mallocObject",
      "alloc"
    ],
    "answer": "new"
  },
  {
    "question": "Which keyword releases an object allocated with new?",
    "options": [
      "delete",
      "remove",
      "freeObject",
      "destroy"
    ],
    "answer": "delete"
  },
  {
    "question": "Which keyword defines a class?",
    "options": [
      "class",
      "object",
      "defineclass",
      "blueprint"
    ],
    "answer": "class"
  },
  {
    "question": "What does std::endl insert?",
    "options": [
      "A newline and a stream flush",
      "A tab",
      "A space",
      "An end-of-file marker"
    ],
    "answer": "A newline and a stream flush"
  },
  {
    "question": "Which operator checks equality?",
    "options": [
      "==",
      "=",
      "===",
      "!="
    ],
    "answer": "=="
  },
  {
    "question": "What does bool represent?",
    "options": [
      "A true or false value",
      "An integer array",
      "A character string",
      "A pointer only"
    ],
    "answer": "A true or false value"
  },
  {
    "question": "Which keyword returns a function result?",
    "options": [
      "return",
      "yieldResult",
      "send",
      "result"
    ],
    "answer": "return"
  },
  {
    "question": "Which keyword permits a name scope?",
    "options": [
      "namespace",
      "package",
      "moduleName",
      "scopeof"
    ],
    "answer": "namespace"
  },
  {
    "question": "Which loop always runs its body at least once?",
    "options": [
      "do-while",
      "while",
      "for",
      "range-for"
    ],
    "answer": "do-while"
  },
  {
    "question": "Which standard type stores a text string?",
    "options": [
      "std::string",
      "std::text",
      "std::word",
      "std::chars"
    ],
    "answer": "std::string"
  },
  {
    "question": "What does nullptr represent?",
    "options": [
      "A null pointer",
      "The integer one",
      "An empty string",
      "A deleted class"
    ],
    "answer": "A null pointer"
  }
]
  },
  science: {
    physics: [
  {
    "question": "What is the SI unit of force?",
    "options": [
      "Newton",
      "Joule",
      "Watt",
      "Pascal"
    ],
    "answer": "Newton"
  },
  {
    "question": "What is the SI unit of energy?",
    "options": [
      "Joule",
      "Newton",
      "Volt",
      "Ampere"
    ],
    "answer": "Joule"
  },
  {
    "question": "What is speed calculated from?",
    "options": [
      "Distance divided by time",
      "Time divided by distance",
      "Mass times distance",
      "Force divided by area"
    ],
    "answer": "Distance divided by time"
  },
  {
    "question": "What does acceleration measure?",
    "options": [
      "Change in velocity per unit time",
      "Distance per unit mass",
      "Energy per second",
      "Force per area"
    ],
    "answer": "Change in velocity per unit time"
  },
  {
    "question": "Which equation describes Newton's second law?",
    "options": [
      "F = ma",
      "E = mv",
      "P = Ft",
      "V = IR²"
    ],
    "answer": "F = ma"
  },
  {
    "question": "What is the SI unit of power?",
    "options": [
      "Watt",
      "Joule",
      "Newton",
      "Ohm"
    ],
    "answer": "Watt"
  },
  {
    "question": "What is the approximate speed of light in vacuum?",
    "options": [
      "300,000,000 m/s",
      "340 m/s",
      "3,000 m/s",
      "30,000 m/s"
    ],
    "answer": "300,000,000 m/s"
  },
  {
    "question": "Which wave can travel through a vacuum?",
    "options": [
      "Light",
      "Sound",
      "Water waves",
      "Seismic P waves"
    ],
    "answer": "Light"
  },
  {
    "question": "What is the SI unit of electric current?",
    "options": [
      "Ampere",
      "Volt",
      "Ohm",
      "Coulomb"
    ],
    "answer": "Ampere"
  },
  {
    "question": "Which equation is Ohm's law?",
    "options": [
      "V = IR",
      "F = ma",
      "P = mv",
      "E = mgh"
    ],
    "answer": "V = IR"
  },
  {
    "question": "What is the SI unit of frequency?",
    "options": [
      "Hertz",
      "Second",
      "Metre",
      "Watt"
    ],
    "answer": "Hertz"
  },
  {
    "question": "Which quantity is a vector?",
    "options": [
      "Velocity",
      "Speed",
      "Mass",
      "Temperature"
    ],
    "answer": "Velocity"
  },
  {
    "question": "What is momentum for a mass m at velocity v?",
    "options": [
      "mv",
      "mv²",
      "m/v",
      "v/m"
    ],
    "answer": "mv"
  },
  {
    "question": "What is pressure?",
    "options": [
      "Force divided by area",
      "Force times area",
      "Mass divided by speed",
      "Energy times time"
    ],
    "answer": "Force divided by area"
  },
  {
    "question": "Which lens converges parallel light rays?",
    "options": [
      "Convex lens",
      "Concave lens",
      "Plane mirror",
      "Opaque sheet"
    ],
    "answer": "Convex lens"
  },
  {
    "question": "What is the SI unit of temperature?",
    "options": [
      "Kelvin",
      "Celsius",
      "Fahrenheit",
      "Joule"
    ],
    "answer": "Kelvin"
  },
  {
    "question": "What is gravitational potential energy near Earth?",
    "options": [
      "mgh",
      "mv",
      "F/a",
      "IR"
    ],
    "answer": "mgh"
  },
  {
    "question": "Which process transfers heat through bulk fluid motion?",
    "options": [
      "Convection",
      "Conduction",
      "Reflection",
      "Refraction"
    ],
    "answer": "Convection"
  },
  {
    "question": "What is the angle of reflection equal to?",
    "options": [
      "The angle of incidence",
      "Twice the angle of incidence",
      "Always 90 degrees",
      "Always zero"
    ],
    "answer": "The angle of incidence"
  },
  {
    "question": "Which particle has a negative electric charge?",
    "options": [
      "Electron",
      "Proton",
      "Neutron",
      "Photon"
    ],
    "answer": "Electron"
  }
],
    chemistry: [
  {
    "question": "What is the chemical symbol for gold?",
    "options": [
      "Au",
      "Ag",
      "Go",
      "Gd"
    ],
    "answer": "Au"
  },
  {
    "question": "What is the chemical symbol for sodium?",
    "options": [
      "Na",
      "S",
      "So",
      "N"
    ],
    "answer": "Na"
  },
  {
    "question": "What is the formula of water?",
    "options": [
      "H2O",
      "CO2",
      "O2",
      "H2O2"
    ],
    "answer": "H2O"
  },
  {
    "question": "Which particle determines an element's atomic number?",
    "options": [
      "Proton",
      "Neutron",
      "Electron pair",
      "Molecule"
    ],
    "answer": "Proton"
  },
  {
    "question": "What is the pH of neutral pure water at 25°C?",
    "options": [
      "7",
      "0",
      "14",
      "1"
    ],
    "answer": "7"
  },
  {
    "question": "Which gas is a noble gas?",
    "options": [
      "Helium",
      "Oxygen",
      "Nitrogen",
      "Hydrogen"
    ],
    "answer": "Helium"
  },
  {
    "question": "What is the chemical symbol for oxygen?",
    "options": [
      "O",
      "Ox",
      "Og",
      "Om"
    ],
    "answer": "O"
  },
  {
    "question": "What is table salt's main compound?",
    "options": [
      "Sodium chloride",
      "Sodium carbonate",
      "Calcium oxide",
      "Potassium nitrate"
    ],
    "answer": "Sodium chloride"
  },
  {
    "question": "Which bond involves sharing electron pairs?",
    "options": [
      "Covalent",
      "Ionic",
      "Gravitational",
      "Magnetic"
    ],
    "answer": "Covalent"
  },
  {
    "question": "What does an acid typically donate in the Brønsted–Lowry model?",
    "options": [
      "A proton",
      "A neutron",
      "An electron pair",
      "A metal atom"
    ],
    "answer": "A proton"
  },
  {
    "question": "What is a catalyst?",
    "options": [
      "A substance that increases reaction rate without overall consumption",
      "A substance consumed as fuel",
      "Any acidic liquid",
      "A reaction product only"
    ],
    "answer": "A substance that increases reaction rate without overall consumption"
  },
  {
    "question": "Which gas is commonly released when an acid reacts with a carbonate?",
    "options": [
      "Carbon dioxide",
      "Hydrogen",
      "Helium",
      "Argon"
    ],
    "answer": "Carbon dioxide"
  },
  {
    "question": "What is the formula of carbon dioxide?",
    "options": [
      "CO2",
      "CO",
      "C2O",
      "CaO"
    ],
    "answer": "CO2"
  },
  {
    "question": "What is an isotope?",
    "options": [
      "Atoms of one element with different neutron numbers",
      "Atoms with different proton and electron numbers only",
      "Two bonded elements",
      "An electrically neutral molecule"
    ],
    "answer": "Atoms of one element with different neutron numbers"
  },
  {
    "question": "Which subatomic particle has no electric charge?",
    "options": [
      "Neutron",
      "Proton",
      "Electron",
      "Positron"
    ],
    "answer": "Neutron"
  },
  {
    "question": "What is oxidation in terms of electrons?",
    "options": [
      "Loss of electrons",
      "Gain of electrons",
      "No electron change",
      "Splitting the nucleus"
    ],
    "answer": "Loss of electrons"
  },
  {
    "question": "Which element has atomic number 1?",
    "options": [
      "Hydrogen",
      "Helium",
      "Lithium",
      "Carbon"
    ],
    "answer": "Hydrogen"
  },
  {
    "question": "What is the main gas in dry Earth air?",
    "options": [
      "Nitrogen",
      "Oxygen",
      "Carbon dioxide",
      "Hydrogen"
    ],
    "answer": "Nitrogen"
  },
  {
    "question": "Which technique separates components using different boiling points?",
    "options": [
      "Distillation",
      "Filtration",
      "Magnetic separation",
      "Sieving"
    ],
    "answer": "Distillation"
  },
  {
    "question": "What is a solution?",
    "options": [
      "A homogeneous mixture",
      "A pure element only",
      "An insoluble solid only",
      "A mixture with visibly separate layers"
    ],
    "answer": "A homogeneous mixture"
  }
]
  }
};
