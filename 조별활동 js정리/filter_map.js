//  Array.prototype.map()

let newArray = arr.map(callback(currentValue[, index[, array]]) {
    // return element for newArray, after executing something
  }

let numbers = [1, 4, 9]
let parameters = numbers.map((num, index, arr) =>
          	{console.log(num, index, arr)})
/* 결과
1 0 [ 1, 4, 9 ]
4 1 [ 1, 4, 9 ]
9 2 [ 1, 4, 9 ] */

// 예시
let numbers = [1, 4, 9]
// 일반 함수
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})
// 화살표 함수
let roots = numbers.map((num) => Math.sqrt(num))
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

// 응용

/* 명시된 키와 함께 읽기 가능한 string 으로 유저 테이블 출력 – 비구조화 할당 */
users.map(({id, age, group}) => `\n${id} ${age} ${group}`).join('')

/* 객체 배열에서 id가 47이면 나이1 증가 */
let updatedUsers = users.map(p => p.id !== 47 ? p : {...p, age: p.age + 1});

//  Array.prototype.filter()
let newArray = arr.filter(callback(currentValue[, index, [array]]) {
    // return element for newArray, if true
  }[, thisArg]);

  let numbers = [1, 4, 9]
let parameters = numbers.map((num, index, arr) =>
          	{console.log(num, index, arr)})
/* 결과
1 0 [ 1, 4, 9 ]
4 1 [ 1, 4, 9 ]
9 2 [ 1, 4, 9 ] */

// 예시
const words = ['limit', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// 응용
/* 간단한 검색(case-sensitive) */
let users = [
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ];
  let res = users.filter(it => it.name.includes('oli'))
  
  /* 간단한 검색(case-insensitive) */
  let res = users.filter(it => new RegExp('oli', "i").test(it.name));
  
  /* A와 B의 교집합 */
  let arrA = [1, 4, 3, 2];
  let arrB = [5, 2, 6, 7, 1];
  arrA.filter(it => arrB.includes(it));
