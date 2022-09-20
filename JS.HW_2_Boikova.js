// Напишите валидационный скрипт используя функции

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой
let minStr;
let maxStr;
let onlytetters;
let uppercasel;
let havenumber;
let havesymbol;
let notempty;

function script(check_string) {
  if (typeof check_string == "string") {
    if (!check_string) {
      return [console.log("This string can't be empty")];
    } else {
      notempty = true;
    }
    console.log(notempty);
    if (check_string.length < 5) {
      console.log("String < 5");
    } else {
      minStr = true;
    }
    console.log(minStr);
    if (check_string.length > 64) {
      console.log("String > 64");
    } else {
      maxStr = true;
    }
    console.log(maxStr);
    if (/[A-Za-zА-Яа-я]/.test(check_string)) {
      onlytetters = true;
    } else {
      console.log("The string must contain letters");
      onlytetters = false;
    }
    console.log(onlytetters);
    if (/[A-ZА-Я]/.test(check_string)) {
      uppercasel = true;
    } else {
      console.log("Must be at least one uppercase letter");
    }
    console.log(uppercasel);
    if (/[0-9]/.test(check_string)) {
      havenumber = true;
    } else {
      console.log("Must be at least one number");
    }
    console.log(havenumber);
    if (/["@"]/.test(check_string)) {
      havesymbol = true;
    } else {
      console.log("Add @");
    }
    console.log(havesymbol);
  } else {
    console.log("Not a string entered");
  }
  if (
    minStr &&
    maxStr &&
    onlytetters &&
    uppercasel &&
    havenumber &&
    havesymbol &&
    notempty
  ) {
    console.log("String entered correctly");
  }
}
script("");
