// import * as test from './test-package-module';
import * as foo from 'foo';

console.log(foo.bar);

// type T = 'a'|'b'|'c'
// const T:['a','b','c'] = ['a','b','c'];

const S = 'jinxin';

// interface Foo{
//     name: string;
//     age: number;
//     six: 'man'|'woman';
// }

type Foo<T> =  { [K in string]: K }

interface test1 {

}

// 用于创建字符串列表映射至 `K: V` 的函数
function strEnum<T extends string>(o: Array<T>): { [K in string]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

// 创建 K: V
const Direction = strEnum(['North', 'South', 'East', 'West']);

