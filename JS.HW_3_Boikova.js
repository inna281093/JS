// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

var checkAge = function (age_1, age_2, age_3) {
  if (age_1 < age_2) {
    console.log(
      "You don't have access cause your age is " +
        age_1 +
        " It's less then " +
        age_2
    );
  } else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome!");
  } else if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel");
  } else {
    console.log("Technical work");
  }
};
checkAge(17, 18, 61);

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
var AGE = function (age_1, age_2, age_3) {
  if (
    typeof age_1 == "number" &&
    typeof age_2 == "number" &&
    typeof age_3 == "number"
  ) {
    if (age_1 < age_2) {
      console.log(
        "You don’t have access cause your age is",
        +age_1 + ", It’s less then",
        age_3
      );
    } else if (age_1 >= age_2 && age_1 < age_3) {
      console.log("Welcome  !");
    } else if (age_1 > age_3) {
      console.log("Keep calm and look Culture channel");
    } else {
      console.log("Technical work”");
    }
  } else {
    console.log("ERROR");
  }
};

AGE("18", "17", 61);

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
var age_2 = 17;
var age_3 = 61;
var AGE = function (age) {
  if (isNaN(age)) {
    alert("Это не число!");
  } else if (age < age_2) {
    console.log(
      "You don’t have access cause your age is",
      +age + ", It’s less then",
      age_3
    );
  } else if (age >= age_2 && age < age_3) {
    console.log("Welcome  !");
  } else if (age > age_3) {
    console.log("Keep calm and look Culture channel");
  } else {
    console.log("Technical work”");
  }
};
AGE("2");
let prom = prompt("Введите число!");
AGE(prom);
// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
var AGE = function (age_1, age_2, age_3) {
  if (
    /^[0-9]+$/.test(Number(age_1)) &&
    /^[0-9]+$/.test(Number(age_2)) &&
    /^[0-9]+$/.test(Number(age_3))
  ) {
    if (age_1 < age_2) {
      console.log(
        "You don’t have access cause your age is",
        +age_1 + ", It’s less then",
        age_3
      );
    } else if (age_1 >= age_2 && age_1 < age_3) {
      console.log("Welcome  !");
    } else if (age_1 > age_3) {
      console.log("Keep calm and look Culture channel");
    } else {
      alert("Technical work”");
    }
  } else {
    alert("ERROR");
  }
};
let xyz1 = prompt("Введите первое число");
let xyz2 = prompt("Введите второе число");
let xyz3 = prompt("Введите третье");
AGE(xyz1, xyz2, xyz3);
