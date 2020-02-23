const howMany = prompt('how many cases?');
for (i = 0; i < howMany; i++) {
    let string1 = prompt('give string1');
    let string2 = prompt('give string2');
    let a = Math.min(string1.length, string2.length);
    console.log(a);
    let ar = [];
    for (i = 0; i < a * 2; i++) {
        if (i % 2 == 0) {
            let str = string1.charAt(i/2);
            ar.push(str);
        } else {
            let str = string2.charAt((i-1)/2);
            ar.push(str);
            
        }
    }
    console.log(ar)
}