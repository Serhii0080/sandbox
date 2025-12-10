// 🍕 Задача  Даю вам функцию animal, принимающую 1 параметр: obj  Вот так:

// ❗❗  {name:"dog",legs:4,color:"white"}  и вернет строку следующего вида: "This white dog has 4 legs."

function animal(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

console.log(animal({ name: "dog", legs: 4, color: "white" }));
