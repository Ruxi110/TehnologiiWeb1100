const arr = [1,2,3,4];

arr.push(5);

const lastItem = arr.pop();

arr.shift();

for(let i=0; i<arr.length; i++)
console.log(arr[i])

for(item of arr)
{
    console.log(item);
}

for(item in arr)
{
    console.log(item);
}

arr.forEach(item => {
    console.log(item);
})

console.log(arr);