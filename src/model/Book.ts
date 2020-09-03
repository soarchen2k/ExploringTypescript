export class Book {
  title: string;
  author: string;
  price: number;

  // 使用 参数+? 来声明一个可选参数，任何选项参数都必须在方法参数的末尾
  constructor(title?: string, author?: string, price?: number) {
    this.title = title;
    if (author) {
      this.author = author;
    }
    if (price) {
      this.price = price;
    }
  }

  // TypeScript 中一个 Method 的格式
  // private methodeName(paramName: ParamType): ReturnType
  priceWithTax(taxRate: number): number {
    return this.price * (1 + taxRate);
  }

  // 使用 StringTemplate
  toString() {
    return `Title: ${this.title}, Author: ${this.author}`;
  }
}

export class Video {
  title: string;
  author: string;
  price: number;
}
