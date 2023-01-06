<script lang="ts">
import { VueComponent } from "@/markdown/FontEnd/Ts/class.md"
import { ca } from 'element-plus/es/locale'
export default {
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    //ES6类的用法-属性和方法
    // class Animal {
    //   public name;
    //   constructor(name: string) {
    //     this.name = name
    //   }
    //   sayHi() {
    //     return `My name is ${this.name}`
    //   }
    // }
    // let a = new Animal('Jack')
    // console.log(a.sayHi())//My name is Jack

    // //类的继承
    // class Cat extends Animal {
    //   constructor(name: string) {
    //     super(name)//调用父类的constructor(name)
    //     console.log(this.name)
    //   }
    //   sayHi() {
    //     return 'Meow,' + super.sayHi() //调用父类的sayHi
    //   }
    // }
    // let c = new Cat('Tom')//Tom
    // console.log(c.sayHi())//Meow,My name is Tom

    // //类的存取器
    // class AnimalTwo {
    //   constructor(name: string) {
    //     this.name = name
    //   }
    //   get name() {
    //     return "Jack"
    //   }
    //   set name(value) {
    //     console.log('setter:' + value)
    //   }
    // }

    // let d = new AnimalTwo('kitty')//'setter': kitty
    // d.name = 'Tom'; // setter: Tom
    // console.log(d.name); // Jack

    // //静态方法
    // class AnimalThree {
    //   static isAnimal(a: any) {
    //     return a instanceof Animal
    //   }
    // }
    // let e = new Animal('Jack')
    // AnimalThree.isAnimal(e)//true
    // e.isAnimal(e)// // TypeError: a.isAnimal is not a function

    //es7类新增了一些东西-实例的属性不在只能通过构造函数的this.xxx来定义，es7可以直接在类里面定义
    // class AnimalFour {
    //   name = 'Jack'
    //   constructor() {
    //     //...
    //   }
    // }
    // let f = new AnimalFour()
    // console.log(AnimalFour.name,'111')
    // console.log(f.name)//Jack

    // class AnimalFive {
    //   static num = 42
    //   constructor() {
    //     //...
    //   }
    // }
    // console.log(AnimalFive.num)

    //实现一个类继承多个类
    class Animal {
      name: string
      constructor(name: string) {
        this.name = name
      }
      eat():void{
        console.log('111')
      }
    }
    // class Cat extends Animal {
    //   food:string
    //   constructor(name: string,food: string){
    //     super(name)
    //     this.food = food
    //   }
    //   eat(){
    //     console.log(`${this.name} 吃 ${this.food}`)
    //   }
    // }
    // let cat:Cat = new Cat('猫','鱼')
    // console.log(cat.name)
    // cat.eat()
    
  }
}
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>