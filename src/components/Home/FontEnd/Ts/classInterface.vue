<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/Ts/classInterface.md'
export default {
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    //ts类与接口
    // interface Alarm{
    //   alert(): void
    // }
    // class Door{

    // }
    // class SecurityDoor extends Door implements Alarm{
    //   alert(){
    //     console.log('SecurityDoor alert')
    //   }
    // }
    // class Car implements Alarm {
    //   alert(){
    //     console.log('Car alert')
    //   }
    // }

    //ts一个类实现多个接口
    // interface Alarm {
    //   alert(): void;
    // }

    // interface Light {
    //   lightOn(): void;
    //   lightOff(): void;
    // }

    // class Car implements Alarm, Light {
    //   alert() {
    //     console.log('Car alert');
    //   }
    //   lightOn() {
    //     console.log('Car light on');
    //   }
    //   lightOff() {
    //     console.log('Car light off');
    //   }
    // }

    //接口继承接口
    // interface Alarm{
    //   alet():void
    // }
    // interface LightableAlarm extends Alarm{
    //   lightOn():void
    //   lightOff():void
    // }

    //接口继承类
    // class Point {
    //   x: number
    //   y: number
    //   constructor(x:number, y: number){
    //     this.x = x
    //     this.y = y
    //   }
    // }
    // interface Point3d extends Point{
    //   z: number
    // }
    // let point3d: Point3d = { x: 1, y: 2, z: 3}

    // class Point {
    //   x: number
    //   y: number
    //   constructor(x: number,y: number){
    //     this.x = x
    //     this.y = y
    //   }
    // }
    // let p = new Point(1,2)

    // class Point{
    //   x: number
    //   y:number
    //   constructor(x: number,y: number){
    //     this.x = x
    //     this.y =y
    //   }
    // }
    // function printPoint(p: Point){
    //   console.log(p.x,p.y)
    // }
    // printPoint(new Point(1,2))//1 2

    //声明类时创建的类型不包含构造函数、静态属性、静态方法
    // class Point {
    //   //静态属性坐标系原点
    //   static origin = new Point(0, 0)
    //   //静态方法，计算与元的距离
    //   static distanceToOrigin(p: Point) {
    //     return Math.sqrt(p.x * p.x + p.y * p.y)
    //   }
    //   //实例属性x
    //   x: number
    //   //实例属性y
    //   y: number
    //   //构造函数
    //   constructor(x: number, y: number) {
    //     this.x = x
    //     this.y = y
    //   }
    //   //实例方法，打印此点
    //   PrintPoint() {
    //     console.log(this.x, this.y)
    //   }
    // }
    // interface PointInstanceType {
    //   x: number
    //   y: number
    //   printPoint(): void
    // }
    // let p1: Point;
    // let p2: PointInstanceType;
  },
}
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>
