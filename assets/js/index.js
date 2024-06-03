function customCounter1(incrementNumber) {
    let count = 0;

    function inc() {
        const currentValue = count;
        count += incrementNumber;
        return currentValue;
    }

    return inc;
}

const myCounter1 = customCounter1(5);
const result11 = myCounter1();
const result12 = myCounter1();
const result13 = myCounter1();
console.log('result11:', result11);
console.log('result12:', result12);
console.log('result13:', result13);


function customCounter2(incrementNumber, initialValue = 0) {
    let count = initialValue;

    function inc() {
        const currentValue = count;
        count += incrementNumber;
        return currentValue;
    }

    return inc;
}

const myCounter2 = customCounter2(5, 3);
const result21 = myCounter2();
const result22 = myCounter2();
const result23 = myCounter2();
console.log('result21:', result21);
console.log('result22:', result22);
console.log('result23:', result23);