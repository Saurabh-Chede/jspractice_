function Counter() {
  let count = [];
  for (let i = 0; i < 100; i++) {
    count.push(i);
  }
  return count;
}
console.log(Counter());

const object = {
  name: "Saurabh",
  age: 28,
  email: "saurabhchede21@gmail.com",
  data: {
    add: "fdgfhs",
    numsgh: 35,
    password: 123466,
  },
};

// for each loop

const arr = [1, 2, 3, 4, 5];

// arr.forEach((num) => {
//     console.log(num * 5);
// });

// const re = arr.map((num) => {
//     return num * 100
// })

// console.log(re)

// arr.push(100)

// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(200)
// console.log(arr);

const newarr = arr.slice(1, 3);
console.log(newarr);

const newarr2 = arr.splice(1, 3);
console.log(newarr2);
console.log(arr);

const myTimer = () => {
  const now = new Date();
  const time = now.toLocaleTimeString();
  setInterval(() => {
    console.log(`current time ${time}`);
  }, 10000);
};

// myTimer();

const collector = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/1`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
};

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch:", error);
  }
}

fetchData();

