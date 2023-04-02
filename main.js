//Document object, chứa tất cả nội dung trên website
//console.log(document);
//document.write('String'), ghi vào thẻ <body> và sau phần tử cuối cùng
//document.write('String');
//document.write('String');
//Get element method:
// by: id, class, tagname, css selector, html colection
//
// var headingNode = document.getElementById('heading');
// console.log(headingNode);

/*
console.log([headingNode]);// Kết quả nhận về thực ra là một object
console.log({
    element: headingNode
});
// 1 trang web , tên id chỉ tồn tại 1 lần: Element là số ít trong câu lệnh

//----------------------Truy cập bằng class
var headingNodes = document.getElementsByClassName('heading');
console.log(headingNodes);
// TRả về một HTMLcolection
//----------------------Truy cập bằng tagname
// Select thông qua tên thẻ element
var headingNodes = document.getElementsByTagName('h1');
console.log(headingNodes);
// TRả về một HTMLcolection
//----------------------Truy vấn bằng css selector
//Kết quả trả về là một phần tử, và nhận phần tử đầu tiên
var headingNode = document.querySelector('.heading');
console.log(headingNode);
//
var headingNode = document.querySelector('.header .heading_2');
console.log(headingNode);
//Để nhận về nhiều kết quả dùng câu lệnh: document.querySelectorAll
//----------------------Truy cập bằng html collection
// Khi select vào các form thì ko cần thông qua id
console.log(document.forms);
*/
//----------------------------------------------------------------
// var listItemNodes = document.querySelector('.box-1');
// //Công việc 1: sử dụng listItemNodes
// console.log(listItemNodes);
// //Công việc 2 sử dụng các con là thẻ li của listItemNodes
// console.log(listItemNodes.querySelectorAll('li'));
//-----------------------------------------------------------
//5 phương thức lấy ra element trong Dom:
//Lấy trực tiếp element: byID, querySelector
//HTML colection: img, form, a.
//document.write: in ra giá trị ngay sau khi được thực thi

//---------------------------Attribute Node và Text Node-------------------
//Thuộc tính của tag: attribute node
//Nội dung hiển thị nằm trong thẻ: text node.
//-----------------------------DOM attribute-------------------------------
// var headingElement = document.querySelector('h1');
// console.log(headingElement);
/*
//Thêm attribute, có khi script được thực thi
headingElement.title = 'heading';
//Thêm id
headingElement.id = 'heading';
//thêm class , dùng className để tránh trùng từ khóa
headingElement.className = 'heading';
*/
//Với element không có attribute hợp lệ thì sẽ không thêm đc trực tiếp
//đang set trực tiếp bằng toán tử gán: seter
// Dùng phương thức để tạo 1 attribute
//headingElement.setAttribute('class', 'heading');//tên attribute, giá trị
//Dùng phương thức để lấy 1 attribute;
//console.log(headingElement.getAttribute('class'));


//---------------------------------------Text node--------------
//Lấy ra nội dung text node và chỉnh sửa nội dung text-node
//var headingElement = document.querySelector('.heading');
//Lấy thuộc tính đã tồn tại trong element
//console.log(headingElement.innerText);
//console.log(headingElement.textContent);
//Chỉnh sửa nội dung:
//headingElement.innerText = 'Xin chào các bạn';
//headingElement.textContent = 'Xin chào các bạn';
//Khác nhau innerText và textContent:
//innerText: nội dung lấy giống với nội dung trên trình duyệt: nhìn thấy
//textContent: nội dung lấy ra giống vs trên DOM: khoảng cách
//--innerText là thuộc tính của elementNode
//--textContent là thuộc tính của cả textNode và elementNode
//Khi sửa đổi nội dung text:
//---------------------------------------------------------------
//-----------------InnerHTML vs Outer HTML Property--------------
//Thêm 1 element và 1 element có sẵn
//var boxElement = document.querySelector('.box');
//console.log(boxElement);
//innerHTMl và outerHTTL là thuộc tính của elementNode
//-------------------Thêm một element vào bằng innerHTML
//boxElement.innerHTML = '<h1 title = "heading">Heading</h1>';
//truy cập vào thẻ vừa tạo để lấy nội dung
//console.log(document.querySelector('.box h1').innerText);
//có thể lấy ra nội dung html bằng innerHTML
//lăn chuột đến đâu, tải đến đó
//--------------------outerHTML
//----ghi đè nội dung chính nó
//boxElement.outerHTML = '<span> Test </span>';
//Lấy trong DOM
//console.log(boxElement.innerHTML);
//--------------Ví dụ:
/*
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
//Tạo hàm thêm element node vào 1 node có sẵn từ 1 mảng cho trc
function render(courses) {
    //dùng map để in ra các phần tử có trong mảng
    var arrHTML = courses.map(function(element, index, arr){
        //Dùng temple String để tạo phần tử của mảng
        return `<li>${element}</li>`
    })
    //Chuyển mảng về string bằng join
    var strHTML = arrHTML.join('');
    //Truy cập đến tag ul
    var ulElement = document.querySelector('ul');
    //Thêm vào tag ul có sẵn các tag trong string
    ulElement.innerHTML = strHTML;
}
console.log(render(courses));

// render(courses)
*/
//-----------------------------------------------------
//----------------Node property----------------------
// var boxElement = document.querySelector('.box');
// console.log([boxElement]);
//Tìm thuộc tính của element:
//thuộc tinh cần chú ý:
/*
- attributes: cũng là một đối tượng và chứa nhiều thuộc tính bên trong
- contenteditable: làm cho 1 div trở thành thẻ input.
- first-child:
- id
- tabindex
*/
//-----------------DOM CSS----------------------------
//--------DOM style-----------
/*
var boxElement = document.querySelector('.box');
console.log(boxElement.style);
//---Viết thường từ đầu tiên, viết hoa từ tiếp theo: camelCase
// boxElement.style.width = '100px';
// boxElement.style.height = '100px';
// boxElement.style.backgroundColor = 'red';

//Sử dụng đối tượng Object
Object.assign(boxElement.style, {
    width: '200px',
    height: '200px',
    backgroundColor: 'green',
});// Set CSS inline

//in ra thuộc tính:
console.log(boxElement.style.backgroundColor);
*/
//------------------------------------------------------------
//--------------------classList property---------------------
// var boxElement = document.querySelector('.box');
// console.log(boxElement.classList);
//in ra DOMTokenList: quản lí Class của element đang được gọi
//add, contains, remove, toggle:nếu có: xóa bỏ, không có: thêm
//
//boxElement.classList.add('red');
//Thêm nhiều class, mỗi class cách nhau bằng 1 dấu phẩy
//boxElement.classList.add('red','blue');
//Kiểm tra class có tồn tại trong element hay ko
//console.log(boxElement.classList.contains('red'));
//Xóa một class trong classlist element
// setTimeout(function(){
// boxElement.classList.remove('red');
// }, 3000);
//toggle: 
// setTimeout(function(){
//     boxElement.classList.toggle('red');
//     }, 3000);
//Tạo ví dụ chữ nhấp nháy:
// setInterval(function(){
//     boxElement.classList.toggle('red');
// }, 1000);
//-----------------------DOM Events---------------------
//----------------------------------------------------
//1. Attribute events:
//2. Assign event by using element node
//Cần biết đc tên events:
//Search: DOM EVENT
//Thường sử dụng: click, resize, scroll
//---------Event Click
//thêm tiền tố: on trước attribute
//click vào thẻ con của dom-even: vẫn lấy thẻ chứa on-click
//----------------Gán event ----------
//get element:
// var h1Element = document.querySelectorAll('h1');
// console.log(h1Element);
// //chạy vòng lặp để click vào từng tag h1
// for(var i = 0; i < h1Element.length; i++){
//     h1Element[i].onclick = function(event){
//         //sử dụng event để trả về sự kiện người dùng click
//         console.log(event.target);
//     }
// }
//Gọi onclick và gán cho 1 function
// h1Element.onclick = function(e){
//     //lấy nội dung của chính element
//     //trả lại 1 attribute là target:
//     console.log(e.target.innerText);
// }
//-----------------------------DOM Events Example--------------
// sd element node
//var inputValue;
//var inputElement = document.querySelector('input[type="text"]');
//console.log(inputElement);
//Lắng nghe sự kiện
/*
//onchange chạy khi khác ndung ban đầu và click ra ngoài
inputElement.onchange = function(event) {
    console.log(event.target.value);
}
//oninput chạy ngay khi nội dung khác , đang được gõ
inputElement.oninput = function(event) {
    
    inputValue = event.target.value;
    //console.log(event.target.value);
}
//check box:
var checkElement = document.querySelector('input[type="checkbox"]');
checkElement.onchange = function(event) {
    //dùng checked để xem có đang check
    //console.log(event.target.checked);
}
//Select
var selectElement = document.querySelector('select');
selectElement.onchange = function(event) {
    //in ra giá trị value của thẻ,
    console.log(event.target.value);
}
*/
//Key up:
// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeyup = function(event){
//     //console.log(event.target.value);
//     //trả ra mã phím bấm
//     console.log(event.which);
//     switch(event.which){
//         case 27:
//             console.log('exit');
//             break
//     }
// }
//Thực thi bên ngoài
// document.onkeydown = function(event){
//     switch(event.which){
//         case 27:
//             console.log('exit');
//             break
//     }
// }

//-----------------------------PreventDefault vaf stopPropagation

// var aElements = document.querySelectorAll('a');
// //dùng anchors phải đặt name
// //console.log(aElements);
// //lắng nghe sự kiện
// for(var i = 0; i < aElements.length; i++){
//     aElements[i].onclick = function(event){
//         //console.log(event.target.href);
//         if(!event.target.href.startsWith('https://gamek.vn')){
//             //ngăn chặn hành vi mặc định
//             event.preventDefault();

//         }
//     }
// }
//Bắt sự kiện thẻ li
// var ulElement = document.querySelector('ul');
// ulElement.onmousedown = function(event){
//     //bỏ đi hành vi mặc định của đối tượng
//     event.preventDefault();
// }
// ulElement.onclick = function(event) {
//     console.log(event.target);
// }
// var divElement = document.querySelector('div')
// divElement.onclick = function(event){
//     console.log("DIV");
// }
// var buttonElement = document.querySelector('button');
// buttonElement.onclick = function(event){
//     //Ngăn chặn nổi bọt
//     event.stopPropagation();
//     console.log("Click Me!");
// }
//----------------Even Listener----------------------

var btn = document.querySelector('button');
//xử lý nhiều việc  khi event xảy ra
// setTimeout(function(){
//     btn.onclick = function(event){
//         console.log('Viec 1');
        
//         console.log('Viec 2');
    
//         alert("Việc 3")
    
//     }
// }, 3000);
//btn là 1 object, nên có thể ghi đè
//lắng nghe/ hủy bỏ lắng nghe
//Lắng nghe sự kiện
function viec1(){
    console.log("viec_1");
}
btn.addEventListener('click', viec1);//2 đối số: eventname, functioncallback
btn.addEventListener('click', function(event){
    console.log('event 2');
});//2 đối số: eventname, functioncallback
btn.addEventListener('click', function(event){
    console.log('event 3');
});//2 đối số: eventname, functioncallback
//hủy bỏ lắng nghe
setTimeout(function(){
    btn.removeEventListener('click', viec1);
}, 3000);
// sd eventlister: ko muốn lắng nghe liên tục, hủy bỏ lắng nghe