// document.write 就好像直接在html寫東西，只能以字串方式顯示，與下面那個不同
document.write('<h1>test<h1>')

//以下敘述為另一種編寫方式，稱為模板字串，可直接加入JS所宣告的變數
let testNumber = 123
document.write(`<P>${testNumber}<p>`)
//且此方法可以直接換行，可不用\n
document.write(`123
                123
                123`)

//document.querySelector 用來獲得特定標籤
/*ex:
document.querySelector("p")  找p標籤
document.querySelector(".class_name")  找class=class_name的標籤
document.querySelector("#id_name")  找id=id_name的標籤
*/
//document.getElementById 選擇用什麼屬性來獲得特定標籤
console.log("\ndocument.getElementById('testGetElement')");
testElement = document.getElementById('testGetElement')
//屬型innerHTML來獲得標籤內HTML的資訊(不包含標籤本身)
console.log('testElement.innerHTML = '+testElement.innerHTML)
//屬型innerText來獲得標籤內text的資訊
console.log('testElement.innerText = '+testElement.innerText)
//屬型value來獲得input標籤內所輸入的值的資訊
console.log(document.querySelector('input').value)
//屬型.style可改變CSS
testElement.style.backgroundColor = "black" 

// 用let宣告的變數可改變
// 用const宣告的變數不可改變

//JS中括號裡宣告的是區域變數，迴圈裡宣告的也是如此(這點與python不同)

//基本資料型態
//數字 
console.log("\n數字");
let number = -123.2;
console.log(Math.round(number));
console.log(Math.abs(number));
//字串轉成數字
let listNumber = "123";
console.log(typeof Number(listNumber));

//字串
console.log("\n字串");
let testList = "字串testing";
console.log(testList.length);
console.log(testList[1]);
console.log(testList.substring(3,6));

//boolean
let testBoolean = true;

//array
console.log("\nArray");
let testArray = [1,"字串",true];
console.log(testArray);
console.log(testArray.length);//array長度
testArray.push('testData')//在array最後面加入資料
console.log(testArray);
console.log(testArray.splice(0,2)); //刪除array資料，第一個參數為起始點，第二個參數為幾筆資料
console.log(testArray);


//function
console.log("\nFunciton");
function testFunction(){
    console.log("This is testing of function")
};
testFunction()

//object
console.log("\npbject");
let testObject = {
    name : "Eating",
    height : 169,
    IQ : 180,
    objectFunction:function(){
        console.log('objectFunction')
        console.log(this.name)
    }
};
console.log(testObject.name)
console.log(testObject.height)
testObject.objectFunction();
//刪除object的屬性
delete testObject.name;
console.log(testObject);

//class
console.log("\nclass");
class Phone{
    constructor(number,year,is_waterproof){
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof; 
    }
    phone_age(){
        return "class_function"
    }
}
let phone1 = new Phone('0977',12,true)
console.log(phone1.number)
console.log(phone1.year)
console.log(phone1.is_waterproof)
console.log(phone1.phone_age())

//localStorage把資料儲存在瀏覽器  *都是以字串資料型態儲存*
console.log("\nlocalStorage");
localStorage.setItem("key",100); //將100這個值存在字串名稱為key裡
console.log(localStorage.getItem("key"));//取得字串名稱為key的值
console.log(typeof localStorage.getItem("key"));  //都是以字串資料型態儲存
localStorage.removeItem("key"); //刪除資料
//若是要儲存object，需變成json格式，之後才方便使用
//無法儲存function
let jsonTestObject = JSON.stringify(testObject); //將物件轉換成json格式的字串
console.log(jsonTestObject);
console.log(JSON.parse(jsonTestObject)); //將json格式轉換為物件
console.log(typeof JSON.parse(jsonTestObject)); 

//prompt 跳出視窗可輸入東西
let testInput = prompt("這是prompt的提示字");

//alert 跳出提醒視窗
alert(`alert\ntest`);

//監聽事件
//第一種寫法
//onclick="clickFunction()" 
function clickFunction(){
    clickButton1 = document.querySelector("#clickButton1")
    if(clickButton1.innerText == "再按一次"){
        clickButton1.innerText = "按鈕1"
    }
    else if(clickButton1.innerText == "按鈕1"){
        clickButton1.innerText = "再按一次"
    } 
}

//第二種寫法
clickButton2 = document.querySelector("#clickButton2")
clickButton2.addEventListener("click",function(){clickButton2.innerText = "成功"})

clickButton3 = document.querySelector("#clickButton3")
clickButton3.addEventListener("mouseover",function(){clickButton3.innerText = "請滑出去"})
clickButton3.addEventListener("mouseout",function(){clickButton3.innerText = "按鈕3"})