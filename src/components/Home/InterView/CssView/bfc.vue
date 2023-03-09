<template>
  <h1>BFC是什么</h1>
  <br>
  <br>
  <p>BFC，块级格式化上下午，它是页面中的一块渲染区域，并且有一套属于自己的渲染规则</p>

  <h2>如何创建一个BFC</h2>

  <ul>
    <li>设置浮动</li>
    <li>设置定位，position值为absolute或fixed</li>
    <li>overflow指定除了visible以外的值</li>
  </ul>

  <h2>BFC有什么特点</h2>
  <ul>
    <li>在BFC中，块级元素从顶端开始垂直排列</li>
    <li>如果两个块级元素属于同一个BFC，它们的上下margin会重叠（或者说折叠），以较大的为准。但是如果两个块级元素分别在不同的BFC中，它们的上下边距就不会重叠了，而是两者之和。</li>
    <li>BFC的区域不会与浮动的元素区域重叠，也就是说不会与浮动盒子产生交集，而是紧贴浮动边缘。</li>
    <li>计算BFC的高度时，浮动元素也参与计算。BFC可以包含浮动元素。（利用这个特性可以清除浮动）</li>
    <li>BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。</li>
  </ul>

  <h2>解决什么问题</h2>

  <ul>
    <li>
        <p>解决外边距折叠问题</p>
        <p>正常情况下，相邻的两个元素上面元素设置了下外边距为100px,下面元素设置了上外边距为100px，那两者上下之间外边距会发生重叠，只有效较大值的外边距</p>
        <p>此时只需要让两个元素属于不同的BFC或者其中一个元素放入BFC中就可以解决了</p>
        <div class="one">
            <div class="top"></div>
            <div class="bfc">
                <div class="bottom"></div>
            </div>
        </div>
    </li>
    <li>
        <p>制作两栏布局</p>
        <p>利用BFC的区域不会于浮动的元素重叠这个特性实现双栏布局</p>
        <div class="two">
            <div class="left">111</div>
            <div class="right">222</div>
        </div>
    </li>
    <li>
        <p>清除元素内部的元素</p>
        <p>这里清除浮动的意思并不是清除你设置的元素的浮动属性，而是清除设置了浮动属性之后给别的元素带来的影响。例如我们给子元素设置浮动，那么父元素的高度就撑不开了。</p>
        <p>BFC有一个特性：计算BFC的高度是，浮动元素也参与计算，利用这个特性可以清除浮动</p>
        <div class="three">
            <div class="top"></div>
            <div class="bottom"></div>
        </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>


</script>

<style lang="less" scoped>
    .one{
        width: 500px;
        height: 500px;
        border: 1px solid red;
        .top{
            width: 200px;
            height: 100px;
            border: 1px solid green;
            margin-bottom: 100px;
        }
        .bfc{
            overflow: hidden;
            .bottom{
            width: 200px;
            height: 100px;
            border: 1px solid palegoldenrod;
            margin-top: 100px;
        }
        }

    }
    .two{
        width: 500px;
        height: 500px;
        border: 1px solid red;
        .left{
            width: 100px;
            height: 200px;
            background-color: red;
            float: left;
        }
        .right{
            height: 200px;
            overflow: hidden;
            background-color: green;
        }
    }
    .three{
        width: 500px;
        border: 1px solid red;
        overflow: hidden;
        .top{
            width: 200px;
            height: 200px;
            background-color: green;
            float: left;
        }
        .bottom{
            width: 200px;
            height: 200px;
            overflow: hidden;
            background-color: aqua;
        }
    }
</style>