import { Component } from '@angular/core';
import {Book, SubjectArea, Video} from '../model/Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExploringTypescript';

  // 在 constructor 中运行 exploringArrays 查看数组的初始化情况
  constructor() {
    this.exploringEnums();
  }

  exploringEnums() {
    // console.log(SubjectArea.ART);
    // console.log(SubjectArea.HISTORY);
    // console.log(SubjectArea.LITERATURE);
    // console.log(SubjectArea[2]);
    //
    // // 对 Enum 进行 forEach 循环遍历时，需要用 in 关键字，区别于对数组进行遍历
    // // 直接遍历 enum，会把 key 和 value 都分别遍历出来
    // for (const subject in SubjectArea) {
    //   console.log(subject);
    // }

    // 使用 keys 方法，可以把 enum 中的 keys 先加入数组
    // enumArray1.slice(enumArray1.length / 2) 表示从该位置开始遍历，直到 end
    const enumArray1 = Object.keys(SubjectArea);
    for (const value of enumArray1.slice(enumArray1.length / 2)) {
      console.log(value);
    }

    // 使用 values 方法，可以把 enum 中的 values 先加入数组
    // enumArray2.slice(0, enumArray2.length / 2) 表示从 0 位置开始遍历知道该位置
    const enumArray2 = Object.values(SubjectArea);
    for (const value of enumArray2.slice(0, enumArray2.length / 2)) {
      console.log(value);
    }
  }

}
