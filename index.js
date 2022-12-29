const arr = []
const arr1 = []
for (let i = 10;i<21;i++){
    arr.push(i)
    arr1.push(i**2)
}
document.querySelector('.out1').innerHTML = arr.join()
document.querySelector('.out2').innerHTML = arr1.join()

const arr3 = []
for (let i = 1;i<11;i++){
    arr3.push(`7 * ${i} = ${i*7}<br>`)
}
document.querySelector('.out3').innerHTML = arr3.join(' ')

let res = 0
for (let i = 1;i<16;i++){
    res += i
}
document.querySelector('.out4').innerHTML = res

let res2 = 1;
for (let i = 15; i<36;i++){
    res2 = i*res2
}
document.querySelector('.out5').innerHTML = res2

let res3 = 0;
for (let i = 1;i<501;i++){
    res3 +=i
}
const result = (res3/500)
document.querySelector('.out6').innerHTML = result

let res4 = 0
for (let i = 30; i<81;i++){
    if(i % 2 === 0){
        console.log(i)
        res4 +=i
    }
}
document.querySelector('.out7').innerHTML = res4

const arr5 = []
for (let i = 100; i<201; i++){
    if(i%3===0){
        arr5.push(i)
    }
}
document.querySelector('.out8').innerHTML = arr5.join()

const arr6 =[]
const sum = []
const num = 12
let resul1 = 0
for (let i = 1; i<num;i++){
       if (num%i === 0){
           arr6.push(i)
           if(i%2 === 0){
               resul1 +=i
               sum.push(i)
           }
   }
}
document.querySelector('.out9').innerHTML = arr6.join()
document.querySelector('.out9-1').innerHTML = resul1
document.querySelector('.out9-2').innerHTML = sum.length

const arr7 = []
for (let i = 1;i<11;i++){
    arr7.push('<hr>')
    for (let j = 1; j<11;j++){
        arr7.push(`${i} * ${j} = ${i*j}<br>`)
    }
}
document.querySelector('.out10').innerHTML = arr7.join(' ')
