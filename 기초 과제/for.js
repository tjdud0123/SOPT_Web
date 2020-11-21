const fourthMembers = [{
        name: "엄서영",
        age: 26,
        university: "이화여자대학교",
        department: "융합콘텐츠학과",
        favoriteThing: "펭귄"
    },
    {
        name: "김동관",
        age: 26,
        university: "인천대학교",
        department: "컴퓨터공학과",
        favoriteThing: "뒷풀이"
    },
    {
        name: "천주윤",
        age: 23,
        university: "서울여자대학교",
        department: "산업디자인학과",
        favoriteThing: "김선호"
    },
    {
        name: "이재훈",
        age: 26,
        university: "단국대학교",
        department: "신소재공학과",
        favoriteThing: "강아지"
    }
];

const printInfo = ({
    name,
    age,
    university,
    department,
    favoriteThing
}) => {
    console.log(
        `이름: ${name}\n나이: ${age}\n학교: ${university}\n전공: ${department}\n좋아하는 것: ${favoriteThing}\n`
    )
}

// 기본 for 문
for (let i = 0; i < fourthMembers.length; i++) {
    printInfo(fourthMembers[i])
}

// for ... of iterable 요소 접근
for (let member of fourthMembers) {
    printInfo(member)
}

// for ... in 배열 인덱스, 객체 key값 접근
for (let index in fourthMembers) {
    printInfo(fourthMembers[index])
}

// forEach
fourthMembers.forEach((member) => {
    printInfo(member)
})