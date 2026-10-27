// let funcNoname = function() {
//     alert("함수_01");
//     alert("함수_02");
// }

// //funcNoname();
// alert(typeof (funcNoname) + ' + ' + funcNoname);

// function funcName() {
//     alert("함수_01");
//     alert("함수_02");
// };

// alert(typeof (funcName) + ' + ' + funcName);

// function f(x) {
//     return x * x;
// };

// alert(f(3));

// let fun = function () {
//     alert("함수호출");
// };

// let fun = function fun() {
//     alert("함수호출");
// };

// function callTenTimes(callback_func){
//     for (let i = 0; i < 10; i++) {
//         callback_func();
//     }
// }

// callTenTimes(fun);

let person = {
    name : "이건영",
    ord: function(age) {
        alert(this.name + "의 나이는 " + age + " 입니다.");
    }
};

person.ord(24);