let o = {
    homeTown: "Metro City",
    formed: 2016,
  };

let strObject = JSON.stringify(o);
console.log(typeof strObject, strObject); 
  // string '{"homeTown": "Metro City", "formed": 2016}'

// strObject '{"homeTown": "Metro City", "formed": 2016}'
let obj = JSON.parse(strObject);
console.log(typeof obj, obj); 
// object { homeTown: "Metro City", formed: 2016 }
console.log(obj.formed)
// 2016