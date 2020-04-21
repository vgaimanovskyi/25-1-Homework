/*
// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function whatMore(a, b) {
    if (a == b) {
        return 0
    } else {
        return (a > b) ? 1 : -1;
    }
}
console.log(whatMore(2, 4));

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(a) {
    if (a === 0 || a === 1) {
        return 1;
    } else {
        return a * factorial(a - 1);
    }
}
console.log(factorial(5));

// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
function doNumber(a, b, c) {
    return String(Math.abs(a)) + String(Math.abs(b)) + String(Math.abs(c));
}
console.log(doNumber(4, 6, -7));

// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function recSquare(a, b = a) {
    if (a > 0 && b > 0) {
        return a * b;
    } else {
        return a <= 0 ? "'a' is not correct" : "'b' is not correct";
    }
}
console.log(recSquare(3, 4));

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным.
// Совершенное число – это число, равное сумме всех своих собственных делителей.
// !!! copy-paste !! =(
function perfectNumber(a) {
    let result = 0;
    if (a === 0) {
        return false;
    }
    for (let i = a - 1; i >= 1; i -= 1) {
        if (a % i === 0) {
            result += i;
        }
    }
    if (result === a) {
        return result;
    } else {
        return false;
    }
}
// console.log(perfectNumber(6));

// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
// и выводит только те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
// !!! error !!!
function searchNumbers(a, b) {
    let min, max, result;
    if (a > b) {
        max = a;
        min = b;
    } else {
        max = b;
        min = a;
    }
    while (min <= max) {
        let i = 1;
        result = perfectNumber(min);
        if (result === min) {
            return result;
        } else {
            min += i;
        }
    }
}
console.log(searchNumbers(1, 30));

// 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function time(h, m = "00", s = "00") {
    if (h < 0 || h > 23) {
        return "0 <= h < 23";
    } else if (m < 0 || m > 59) {
        return "0 <= m < 60";
    } else if (s < 0 || s > 59) {
        return "0 <= s < 60";
    }
    return `«${h}:${m}:${s}»`;
}
console.log(time(21, 59));

// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function secConvert(h, m = "00", s = "00") {
    if (h < 0 || h > 23) {
        return "0 <= h < 23";
    } else if (m < 0 || m > 59) {
        return "0 <= m < 60";
    } else if (s < 0 || s > 59) {
        return "0 <= s < 60";
    }
    return h * 3600 + Number(m) * 60 + Number(s);
}
console.log(secConvert(1, 1, 1));

// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
function hourConvert(sec) {
    const h = Math.floor(sec / 3600);
    const s = sec % 100;
    const m = (sec - h * 3600 - s) / 60;
    return `«${h}:${m}:${s}»`;
}
console.log(hourConvert(15929));

// 10. Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс».
// При выполнении задания используйте функции из предыдущих 2-х заданий:
// сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
function timeCount(h1, m1, s1, h2, m2, s2) {
    const res1 = secConvert(h1, m1, s1);
    const res2 = secConvert(h2, m2, s2);
    let result;
    if (res1 > res2) {
        result = res1 - res2;
    } else {
        result = res2 - res1;
    }
    console.log(hourConvert(result));
}
timeCount(5, 20, 8, 9, 45, 37);
*/