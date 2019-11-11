var symbol:String = "+";
var total:string = "";
var currentValue:string = "";
var operatorFlag:boolean = false; // 数字 = false, 演算子 = true
var element:any = document.getElementById("screen");

/**
 * 数値入力時の可算
 */
const inputValue = (data:String) => {
    if (currentValue.length > 7) return
    if (operatorFlag) operatorFlag = false 
    currentValue += data;
    element.innerHTML = currentValue;
};

/**
 *  値「.」の入力
 *  値「.」の複数入力抑止
 */

const inputDot = (data:String) => {
    if (!element.innerHTML.includes(data)) {
        currentValue += data;
        element.innerHTML = currentValue;
    }
};

/**
 * ±反転
 */
const inverted = (data:String) => {
    if (!currentValue) {
        total = "-" + total;
        element.innerHTML = total;
    } else {
        currentValue = "-" + currentValue;
        element.innerHTML = currentValue;
    }
};

/**
 * 計算
 */

const calclation = (data:String) => {
    if (!operatorFlag && data !== "=") {
        operatorFlag = true;
        cal.type1();
        symbol = data;
        cal.type3();
    } else if (operatorFlag && data === "=") {
        cal.type2();
        cal.type3();
    } else if (data === "=") {
        operatorFlag = true;
        cal.type1();
        cal.type3();
    } else {
        symbol = data;
    }
};

const percent = () => {
    let formula:Number = Number(currentValue) / 100 
    if (symbol === "+" || symbol === "-") {
        formula = Number(total) * Number(formula);
    }
    currentValue = String(formula);
    element.innerHTML = currentValue;
};

/**
 * リセット
 */

const allCrear = () => {
    symbol = "";
    total = "";
    currentValue = "";
    operatorFlag = false;
    element.innerHTML = "0"
};

module cal {
    let formula:string;  
    export function type1 () {
        formula = total + symbol + currentValue;
        total = eval(formula);
    };
    export function type2 () {
        formula = total + symbol + total;
        total = eval(formula);
    }
    export function type3 () {
        currentValue = "";
        element.innerHTML = total;
    }
}
