import { Component } from '@angular/core';
import {Book, Video} from '../model/Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExploringTypescript';

  // 在 constructor 中运行 exploringArrays 查看数组的初始化情况
  constructor() {
    // this.exploringArrays();
    // this.exploringObjects();
    // this.exploringMyObject();
    // this.exploringLambdaMethode();
    this.objectEquality();
  }

  /**
   * 在Typescript中声明变量，语法通常使用变量名称,后跟一个冒号,其次是数据类型
   * 当我们在类级别声明变量时，我们不使用let或const关键字。
   * 默认情况下，类级别变量是可变的(mutable)，
   * 但是您可以通过使用关键字readonly来创建不可变(immutable)的类级别变量。
   */
  myNumber1: number;
  readonly myNumber2: number;

  // 在这个类中创建一个方法
  // tslint:disable-next-line:typedef
  someMethod() {
    /**
     * 我想在方法中创建一个变量，语法还是一样的，我们用另一个number类型的变量，
     * 但我们需要在它前面加上let关键字或const关键字。
     * let和const的区别在于，let用于可变变量，这些变量的值会随时间变化。
     * const用于不可变变量，其值永远不会改变的变量。
     */
      // tslint:disable-next-line:prefer-const
    let myNumber1: number;
    let myNUmber2: number;
    const myNumber3 = 1;
    this.myNumber1 = 5;
    myNumber1 = 6;
    myNUmber2 = 2;

    // const declared 的参数是常量，只能 declare 一次，并且无法再更改
    // myNumber3 = 2;
    myNUmber2 = 3;
  }

  exploringArrays() {
    // 声明一个 number 数组的两种方法
    // 这里我们仅仅对数组进行了声明，而没有进行实例化(instantiate)
    // const myArray1: Array<number>;
    // 进行实例化
    // myArray1 = new Array<number>(5);
    // 一步完成
    const myArray1 = new Array<number>(5);

    // 第二种方法声明数组并实例化
    const myArray2: number[] = [1, 2, 3, null];

    console.log(myArray1);
    console.log(myArray2);
    console.log(myArray2[2]);
    // slice 方法，返回一个 subArray，包括第一个元素，不包括第二个元素
    console.log(myArray2.slice(0, 2));
    // splice 方法，删除从 start 位置开始的 deleteCount 数量的元素
    console.log(myArray2.splice(1, 2));
    console.log(myArray2);
    // push 方法，在数组的尾部增加一个数据
    myArray2.push(4);
    myArray2.push(5);
    console.log(myArray2);
    // pop 方法，弹出数组的最后一个数据，类似 stack 的 FIFO 操作
    console.log(myArray2.pop());
    console.log(myArray2);

    // 最简单的 for 循环
    for (let i = 1; i < 10; i++) {
      console.log(i);
    }

    // foreach 循环，以 of 来取数组中元素的 value
    for (let next of myArray2) {
      console.log(next);
    }

    // foreach 循环，以 in 来去数组中元素的 index
    for (let next in myArray2) {
      if (myArray2[next] === 4) {
        console.log('index for 4: ' + next);
      }
    }

    // while 循环
    let i = 0;
    while (i < myArray2.length) {
      console.log(myArray2[i]);
      i++;
    }
  }

  exploringObjects() {
    // 以 JavaScript 的方式创建对象，key-value 键值对
    let myConsumer = {firstName:'Matt', age: 21}
    console.log(myConsumer);
    console.log(typeof myConsumer);
  }

  // TypeScript 可以在一个 TS 文件中创建多个类，引用的时候只需要分别 import 即可
  exploringMyObject() {
    let myBook = new Book(null, 'Tom', 34.99);

    console.log(myBook);
    console.log(typeof myBook);
    console.log('Price of the book: ' + myBook.priceWithTax(.2));
    console.log(`Price of the book: ${myBook.priceWithTax(.2)}`);

    let myVideo = new Video();
    myVideo.author = 'Kate';
    myVideo.price = 65.78;
    myVideo.title = 'Next';
    console.log(myVideo);
  }

  // 使用 Lambda 表达式
  exploringLambdaMethode() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const oddNumbers = numbers.filter(
      num => num % 2 === 1
    );
    const evenNumbers = numbers.filter(
      num => {
        return num % 2 === 0;
      }
    );
    console.log(oddNumbers);
    console.log(evenNumbers);
  }

  objectEquality() {

  }

}
