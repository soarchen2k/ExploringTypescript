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
    // 对 Enum 进行 forEach 循环遍历时，需要用 in 关键字，区别于对数组进行遍历
    // 直接遍历 enum，会把 key 和 value 都分别遍历出来
    // 当 ENUM 中有自定义 values 的时候，可以用下面这种方式遍历
    for (const subject in SubjectArea) {
      console.log(subject);
      console.log(SubjectArea[subject]);
    }

  }

}
