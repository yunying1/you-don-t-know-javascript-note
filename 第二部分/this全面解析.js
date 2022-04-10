/**
 * 默认绑定
 * 严格模式下，this指向undefined，非严格模式下，this指向window
 */
var name = "default";

function fn() {
    console.log(this.name); // 此处的window被默认绑定到this上
}

fn(); // default


/**
 * 显示绑定
 */

var obj = {
    name: "yx",
};

function fn() {
    console.log(this.name);
}

// call
fn.call(obj); // yx

// apply
fn.apply(obj); // yx

// bind
var fn2 = fn.bind(obj);
fn2(); // yx


/**
 * 隐式绑定
 */

function fn() {
    console.log(this.name);
}

var obj = {
    name: "yx",
    fn: fn,
}
// 此处存在上下文调用，obj被隐式绑定到this上
obj.fn(); // yx

// 隐式丢失
var fn2 = obj.fn; // 此时fn2指向的是obj.fn的引用，所以obj的this指向被丢失
fn2(); // 非严格模式下为''，严格模式下为TypeError


/**
 * new绑定
 */

function fn() {
    this.name = "yx";
}

var obj = new fn(); // 此时obj的this指向被绑定到fn的实例上
console.log(obj.name); // yx