# deno-basic

## 1. Characteristic of deno

1. typescript 지원
2. 보안 강화
3. await 독립적 사용 가능
4. 표준 라이브러리 확장/개선(go 영향)
5. npm 없는 url import

## 2. Typescript

1. 변수 선언 시 type을 지정해줌
2. 배열은 number[] 혹은 Array<number>의 두가지 선언 방식 있음
3. 튜플로 다양한 type의 자료 저장 가능(배열은 only one type)
4. 이넘은 Object와 비슷한느낌... 다만 내부 변수들은 최초 지정한 type을 따라감. 처음에 이넘 내부 변수에 값 지정(초기화)을 안하면 자동으로 0부터 1씩 늘어나며 순서대로 할당됨. if문에서 이넘 type 체크도 해줌
5. any로 type 지정을 해주면 다양한 값을 js때처럼 받을 수 있음(타입스크립트 장점을 버리는것이기 때문에 js와 혼용하는 상황 정도에서만 쓰자)
6. 기본적으로 ts의 타입들엔 null 할당이 불가능(any 제외) 이것 해결위해 union 형식 사용
7. 함수도 return 형식을 선언하고 type 형식으로 지정할 수 있음 (단, 추가 파라미터 있으면 안됨)
8. 리터럴 이넘도 union으로 type 지정이 가능하지만 이걸 type으로 하면 선언한 값 내에서만 값 지정 가능
9. interface를 파라미터로 들어온 값의 type으로 지정하면 들어온 값 구조를 명확히 알 수 있음(코딩시 편함) => enum이 type화가 안됨... 이걸로 쓰라고 해놓은듯 
10. interface도 js의 객체를 옮겨온듯? (js의 object가 기존 변수 선언하듯이 하기, enum, interface로 세분화된 느낌) 있어도 되고 없어도 되는 선택형 선언을 변수 이름 뒤에 ? 붙여주면 할수있음
11. 변수명 앞에 readonly 붙여주면 읽기전용 프로퍼티 생성가능(const와 동일한듯)
12. interface는 함수 계약이다. 함수가 전체적으로 따라야 하는 형식을 지정해준다. 콜백함수 파라미터 및 return형식도 지정가능. 지정한 콜백 형식 외 다른 콜백 전달 불가.