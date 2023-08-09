// 1. 숫자 타입(number)

// TS는 데이터의 타입 추론해서 처리
let age: number = 50;
// 점수는 숫자로 개발자가 세팅했다.
let point: number = 80;
console.log(typeof age);
console.log(typeof point);
// 코드가 실행 중에 숫자가 아닌 문자로 변경
// 개발자가 검증을 해야 한다.
// 숫자가 아닌 경우에 대해서 처리가 필요.
point = 75;
console.log(typeof point);

// 2. 문자 타입(string)
let myName:string = "홍길동";
let hi:string = `안녕하세요. ${myName}`;
console.log(hi);

// 3. 불리언 타입(boolean)
let success:boolean = true;
let hasMoney:boolean = false;

// 4. undefined 타입
let hasHobby = undefined;
hasHobby = 1;
hasHobby = "안녕";
hasHobby = true;
// 예측되지 않는 코드(any)가 들어가면 문제가 발생할 수 있다.

// 5. null 타입
// any는 노력하여 제거해야 함.
let hasHobbyNull:null = null;
// hasHobbyNull = 1;
// hasHobbyNull = "A";
// hasHobbyNull = "안녕";
// hasHobbyNull = true; => 싹 다 오류!

// 6. array 타입
let hasHobbyArray:Array<number> = []; // 흔히 Array<T(데이터 종류)> 표현을 주로 사용한다(직관적임)
// hasHobbyArray = 1;
// hasHobbyArray = true;
// hasHobbyArray = "A";
// hasHobbyArray = null;
// hasHobbyArray = undefined;
hasHobbyArray = [1, 2];

let hasPhone:string[] = [];
hasPhone = ["IPhone", "Android"];

// 추천X : let hasBucket:any[] = [];
let hasBucket:Array<number | string> = [];
hasBucket = [1000, "사과"];

let hasGoods:Array<number | string | boolean> = [];
hasGoods = [5000, "딸기", true, 0.5];

// 7. tupple 타입
// 기존 JS에 없던 문법
// 서로 다른 데이터 타입으로 된 배열이 어렵다.
// 개발자가 정의한 복잡한 데이터 배열의 형태를 구성
// 개수와 데이터타입의 순서가 맞아야한다.

type Go = string | number;
let hasHobbySth:Array<Go> = [1000, "쇼핑"];

// tupple 사용 예시
// let hasHobbyTupp:[number, string] = [1000, "쇼핑"];
type GoTuple = [number, string];
let hasHobbyTupp:GoTuple = [1000, "쇼핑"]

// Tuple에 정의한 순서가 안 맞음
// let hasHobbyTuppBucket:GoTuple = ["쇼핑", 1000];

// Tuple에 정의한 순서는 맞지만, 데이터의 수가 다름
// let hasShopping:GoTuple = [4000, "사과", 2000];

// ---------------------------------------------------------------------------

// 타입스크립트는 타입을 작성해 준다.
// 기존 타입 활용 미 사용자 타입 정의가능
// 기존 타입 : number, string, boolean ...
// 사용자 타입 : type, interface(사용빈도 높음), class ...
// 타입작성 시 기준은 vscode 타입추론 우선

// 타입스크립트는 최종 결과 JS 파일 생성
// 최신 ES 문법 >>> 하위버전 JS 생성 가능

// 기본형 : number, string, boolean, null, undefined,
//          symbol, void, never, any(실행 중 타입결정)
// 기본형 객체 : object, array

// 사용자 지정 데이터 타입 키워드
// : type 이름, enum, tuple, class, interface(많이 사용됨) ....
let a:number = 5;
let b:string = 'a';
let c:boolean = true;
let d: undefined = undefined;
let e:null = null;
function add(a:any, b:any):void {
    console.log(a, b);
}
// f 배열에 숫자만 저장하는 경우
let f:Array<number> = [1, 2, 3];
// g 배열에 숫자 혹은 문자를 저장하는 경우
let g:(string|number)[] = [1, a]
let gA:Array<string|number> = [];

type TA = string | number;
let gB:Array<TA> = [];
// h 배열에 순서와 타입, 개수가 지정되는 경우
type Tu = [number, string, boolean, number];
let h:Tu = [1, "a", true, 100];
