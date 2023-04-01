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
