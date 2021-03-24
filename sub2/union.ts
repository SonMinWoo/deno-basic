let nullnum: number | null = null

type stringFn = () => string; //형식의 별칭(alias) 선언. string을 return하는 함수라는 type 형식 만듬

function print(x: string | stringFn) {
    if (typeof x == "string") return console.log(x);
    console.log(x());
}

print(() => {
    return "hello!";
})
/* 반환 형식 다름
print(() => {
    return 23;
})
*/

/* 추가 파라미터 있으면 안됨
print((name:string) => {
    return name;
})
*/

//리터럴 enum
type validStrings = "hello" | "world" | "it's me" //3중 하나만 할당 가능
let myString: validStrings = "world"
//myString = "hoho"
console.log(myString)