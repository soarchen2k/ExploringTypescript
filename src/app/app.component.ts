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
    // 对具有自定义 value 的 enum 来说，不能直接用 'value' 来取 value 的值，但可以用以下方法来获取
    let label1;
    for (const subject in SubjectArea) {
      if (SubjectArea[subject] === 'Science and Maths') {
        label1 = subject;
      }
    }
    console.log(`The matched label 1 is : ${label1}`);

    let label2 = Object.keys(SubjectArea).find(it => {
      return SubjectArea[it] === 'History';})
    console.log(`The matched label 2 is : ${label2}`);

    let label3 = Object.keys(SubjectArea).find(
      it => SubjectArea[it] === 'Classic Literature'
    );

    console.log(`The matched label 3 is : ${label3}`);
  }

}
