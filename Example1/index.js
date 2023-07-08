

// let example = document.getElementById("example");


// let n = 20
// let x = ''
// for (let i = 0; i < n; i++) {
//     if (i === 0 || i === n - 1) {
//         x += drawFullLine()
//     }
//     else {
//         x += drawNotFullLine()
//     }
// }

// function drawFullLine() {
//     let temp = ''
//         for (let j = 0; j < n; j++) {
//             temp += "%"
//         }
//         return temp + "\n"
// }

// function drawNotFullLine(){
//     let temp = ''
//         for (let j = 0; j < n; j++) {
//             if (j === 0 || j === n - 1) temp += "%"
//             else temp += " "
//         }
//         return temp + "\n"
// }
// console.log(x)




/** Buổi 1:
 *
 * Hàm build-in
 * 1. alert
 * 2. console.log
 * 3. confirm
 * 4. prompt : co them input text
 * 5.set timeout; set time hien thi
 * 6.set interval: chạy vòng lặp trong bao nhiêu giây
 */


// var fullName ='Vo thi phuong';
// var age=18;
// alert('fullName');
// alert('age');
// console.warn(fullName); //in ra cảnh báo màu vàng
// console.log(age);
// console.error(fullName);
// confirm('ban co met khong');
// prompt('ban ok k?')

// setTimeout(function(){
//     document.getElementById('example').innerHTML=fullName;
//     document.getElementById('example2').innerHTML=age;
// },2000);


// setInterval(function(){
//     // document.getElementById("example").innerHTML=age + fullName;
//     console.log('ga'+Math.random());
// },1000);

// function myFunction(){
//     document.getElementById("example").innerHTML='test';
// }



/**
 * Buổi 2: Toán tử
 * 1. Toán tử số học-Arithmetic
 * 2. Toán tử gán-assignment
 * 3. Toán tử so sánh-Comparison
 * 4. Toán tử logic-Logical
 */

    // var a= 1+2;
    // console.log(a);
    // document.getElementById("example").innerHTML="gia tri: " +a;

    // var x=1, y=2;
    // if(x==y){
    //     alert('đung');
    // }else{
    //     alert('sai');
    // }


    // var x=1, y=2;
    // if(x>0 && y>=0){
    //     alert('dung');
    // }

    // const car = {tyle:"xanh", color:"do" , price:"400"};
    // car.color = "xanh";
    // document.getElementById("example").innerHTML= "day la mau " + car.color + car.price;



    /**
     * Buổi 3: Toán tử số học
     * 1. Cộng
     * 2. Trừ
     * 3. Nhân
     * 4. Chia
     * 5.  Luỹ thừa
     * 6. Chia
     * 7. Chia lấy số dư
     * 8. tăng 1 giá trị số
     * 9. Giảm 1 giá trị số
     */

   //  var a=0, b=2;
    // var c = a**b; // **: luy thua
    // var c = a/b; //chia k lay du
    // var c = a%b; //%: chia lay du

    // a++; //tang a them 1 don vi, a--: giam 1 gia tri
    // console.log(a);

    /**
     * Buoi 4: Tiền tố (Prefix và Postfix)
     */
    // var c= a-- + b++;
    // var c = ++a ; 
    // var c= ++a -2 * b-- + a++;  //1 -2 * 2 + 1 =-2; 
    //a++ => trả về giá trị a trước khi +1
    // ++a => trả về giá trị a sau khi +1
    // document.getElementById("example").innerHTML ="ket qua la: " + c;







// var sum=0;
// for(var i=0; i<=100;i++){
//    sum+=i;
//    console.log(i);
// }



// var sum=0;
// for(var i=0;i<=100;i++){
//    if(i%2==0){
//       sum+=i;
//    }
// }
// alert(sum);
// console.log(myFunction(100));


// function myFunction(n){
//   var sum=0;
//   for(var i=0; i<=n;i++){
//     sum+=i;
//   }
//   return sum;

// } 


// console.log(myFunction(4));


// function myFunction(n){
//   var sum=0;
//   for(var i=0; i<=n;i++){
//     sum+=i*i;
//   }
//   return sum;

// } 




// console.log(myFunction(4));


// function myFunction(n){
//   var sum=0;
//   for(var i=0; i<=n; i+=2){
//     sum+=i;
    
//   }


//   return sum;

// }


// function myFunction(a,b,c){
//   var x=a-b*c;
//   return x;
// }
// console.log(myFunction(1,2,4));



// function myFunction(a,b){
//   var x=a+"phuong"+b;
//   return x;
// }
// console.log(myFunction("test ", " C"));


// function myFunction(a,b){
//   if(a+b>10){
//     return a+b;
//   }else{
//     return 10;
//   }
// }
// console.log(myFunction(10,10))
// }

// function myFunction(){
//   var x= "xanh";
//   var y= x.toUpperCase();
//   console.log(y);
// }myFunction();
// (


// function myFunction(x){
//   var y= x.toUpperCase();
//   console.log(y);
// }myFunction("xanh");


// function myFunction(x){
//   var y= x.toUpperCase();
//   return y;
// } 
// console.log(myFunction('xanh'));



// console.log("Hello".toUpperCase());
// //> HELLO

// console.log("apple".toUpperCase());
// //> APPLE



// function myFunction(x){
  
//   if (x==x.toUpperCase()){
//     return x.toLowerCase();
//   }else return x.toUpperCase();
  
// }
// console.log(myFunction('XANH'))

  

// function myFunction(a,b,c){
//   max=c;
  // if(a>max){
  //   max=a;
  // }
  // if(b>max){
  //   max=b;
  // }
  // if(c>max){
  //   max=c;
  // }
  // return max;
//   if(a>max){
//     max=a;
//   }
//   if(b>max){
//     max=b;
//   }
//   return max;
// }

// console.log(myFunction(1,2,3))


// function getMax(a,b,c) {
//   return Math.max(a,b,c)
// }
// console.log(getMax(1,2,3))
// function myFunction(a,b,c){
//   var max=getMax(a,b,c);
//   if(a+b>max && a+c>max && b+c>max){
//     return true;
//   }else return false;
// } console.log(myFunction(1,2,7))


// function myFunction(b){
//   sum = '';
//   for(let i=0;i<=b;i++){
//     sum+='*%4657565857'
//     console.log(sum)
//   }
//   console.log(sum);
// }
// myFunction(5)

// function myFunction(){
//   square = 1
//   for(var i=1;i<10;i++){
//     square *= 2
//     console.log(square)
//   }
// }myFunction()



// function myFunction(){
//   for(var i=0;i<100;i++){
//     console.log(i)
//   }
// }myFunction()




// function myFunction(){
//   sum=0;
//   for(var i=0;i<100;i++){
//     sum+=i;
    
//   }
//   console.log(sum)
// }myFunction()


// function myFunction(){
//   sum=0;
//   for(var i=1;i<100;i++){
//     sum+=1/i;
    
//   }
//   console.log(sum)
// }myFunction()

// function myFunction(){

//   for(var i=1;i<10;i++){
//     console.log(1/i)
//   }
// }myFunction()


// function myFunction(){
// sum=1;
//   for(var i=1;i<10;i++){
//     sum*=3;
//     console.log(sum)
//   }
// }myFunction()


function myFunction(){
    sum=""
    for(var i=0;i<10;i++){
      sum+="*"
      console.log(sum)

    }
  }myFunction()



