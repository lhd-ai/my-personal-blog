<script lang="ts">
import { VueComponent } from "@/markdown/FontEnd/Ts/enum.md"
export default {
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    //ts枚举
    // enum Days { Sun, Mon,Tue,Web,Thu,Fri,Sat}
    // console.log(Days["Sun"] === 0)
    // console.log(Days["Mon"] ===1)
    // console.log(Days["Tue"] === 2)
    // console.log(Days["Sat"] === 6)

    // console.log(Days[0] === "Sun")
    // console.log(Days[1] === "Mon")
    // console.log(Days[2] === "Tue")
    // console.log(Days[6] == "Sat")

    //手动赋值与自动赋值的重复了
    // enum DaysTwo { Sun = 3, Mon = 1, Tue, Web, Thu, Fri, Sat }
    // console.log(DaysTwo["Sun"] === 3); // true
    // console.log(DaysTwo["Web"] === 3); // true
    // console.log(DaysTwo[3] === "Sun"); // false
    // console.log(DaysTwo[3] === "Web"); // true

    //枚举可以赋值小数或者负数
    // enum DaysThree { Sun = 7, Mon = 1.5, Tue, Web, Thu, Fri = -1, Sat}
    // console.log(DaysThree["Sun"] === 7) // true
    // console.log(DaysThree["Mon"] === 1.5) // true
    // console.log(DaysThree["Tue"] === 2.5) // true
    // console.log(DaysThree["Sat"] === 0) // true
    // console.log(DaysThree["Fri"] === -1) // true

    //ts枚举计算所得项
    // enum Color {red, grenn, bule = 'blue'.length}
    // enum ColoeTwo { red, green = "green".length, bule}//报错
    // enum ColorThree { red, green = 'green'.length, bule = "3"}//报错
    // enum ColorFour { red, green = 'green'.length, bule = 3}//不报错

    //ts枚举常数枚举
    // const enum Directions {
    //   Up,
    //   Down,
    //   Left,
    //   Right
    // }
    // let directions = [Directions.Up,Directions.Down,Directions.Left,Directions.Right]
    // console.log(directions)//[0,1,2,3]
    // const enum Color {Red, Green, Blue = "blue".length};//报错

    //ts外部枚举
    // let newdirections = [DirecTions.Up,DirecTions.Down,DirecTions.Left,DirecTions.Right]
    //declar enum定义的外部枚举仅用于编译时检查，编译阶段会被删除，所以会报错找不到DirecTions
    // console.log(newdirections)
  },
}
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>