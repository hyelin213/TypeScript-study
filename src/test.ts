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

// enum : 단어를 통해서 순서번호 또는 글자를 정의해 두고 활용
enum Direction {
    UP,
    DOWN,
    LEF,
    RIGHT,
};
let i : Direction;
i = Direction.UP;

// Literal : 데이터 종류X, 데이터 값을 미리 지정
type OS = "Window" | "Linux" | "Mac";
let j:OS = "Window";

// Union : 변수의 종류 2개 이상을 정의할 때
type Un = number | string;
let k:Un = 5;

// 객체
let o:{} = {};
let oB: {
    a: Un;
    b: boolean;
} = {a: 1, b: true};

// 함수
function go(): void {};
function gogo(a: Un, b:string): string {
    return a + b;
}
let res: string = gogo("false", "9");

// 클래스
class Z {};
let zIns:Z = new Z();

class Animal extends Z {}; // Z를 모두 상속받음
// 일반적인 형태
let aIns:Animal = new Animal();
// Z 상속
let bIns:Z = new Animal();

// 복잡한 상속
// 자연
class Nature {};
// 포유류
class Marmal extends Nature {};
// 사람
class Person extends Marmal {};
// 상속들로 인스턴스 생성 시 데이터 타입 주의
let hu1:Person = new Person();
let hu2:Marmal = new Person();
let hu3:Nature = new Person();

// 클래스의 특성(값:Property, 함수:Method 로 구분) 파악
// 즉, 클래스도 데이터 종류(타입)인데 특이점으로는 값과 기능을 가진 데이터 타입이다.
// 프로그래밍언어에서 값 + 기능의 데이터 타입을
// 활용할 수 있도록 해주는 언어를 "객체 지향 언어"라고 한다.
// JAVA, C++ ....

class Cat {
    // Cat이라는 데이터에 활용될 변수(property) 세팅
    private eye:number = 2;
    protected nose:number = 1;
    readonly lip:number = 1; // 변경X
    public leg:number = 4;
    public tail:number = 1;
    // 생성자 함수
    constructor(_count:number = 0){
        // private, protected 가 적용되면 함수 생성 불가능.
        // readonly는 한번 초기화 가능
        this.lip = _count;
    }
    // C++, C#, JAVA....  public void Cat(){}

    // 데이터 특성 중 메서드 정의
    say(){
        // Cat 내의 변수를 모두 접근할 수 있다.
        console.log(this.eye);
        console.log(this.nose);
        console.log(this.lip);
        console.log(this.leg);
        console.log(this.tail);
    }

    // private 변수
    private _nickName = ""; // private 이기 때문에 블록 바깥에서 사용할 수 없다.
    // getter 메서드
    get nickName(){ // 매개변수X
        return this._nickName;
    }
    // setter 메서드
    set nickName(_name:string) { // 매개변수 무조건!
        this._nickName = _name;
    }
}
// new 는 인스턴스를 생산한다.
let yaOng = new Cat(1);
console.log(yaOng.lip);
yaOng.say(); // say함수가 public이기 때문에 접근이 가능하다.

console.log(yaOng.nickName); // get 적용
yaOng.nickName = "양양이"; // set 적용

let tiger = new Cat();
let lion = new Cat();