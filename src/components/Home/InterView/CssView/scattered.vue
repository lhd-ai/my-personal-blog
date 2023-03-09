<template>
    <h2>实现单行/多行文本溢出的省略样式</h2>

    <p>单行文本溢出省略</p>
    <p>涉及的css属性有</p>
    <ul>
        <li>text-overflow:规定当文本溢出时，显示省略号来代表被修建的文本</li>
        <li>white-space:设置文字在一行显示，不能换行</li>
        <li>overflow:文字长度超出限定宽度，则因此超出的内容</li>
    </ul>
    <p> overflow设为hidden，普通情况用在块级元素的外层隐藏内部溢出元素，或者配合下面两个属性实现文本溢出省略

        white-space:nowrap，作用是设置文本不换行，是overflow:hidden和text-overflow：ellipsis生效的基础

        text-overflow属性值有如下：
    </p>
    <ul>
        <li>clip：当对象内文本溢出部分裁切掉</li>
        <li>ellipsis：当对象内文本溢出时显示省略标记（...）</li>
    </ul>
    <div class="ceshi">省略省略省略省略省略省略省略省略省略省略</div>

    <p>多行文本溢出显示省略号</p>
    <ul>
        <li>-webkit-line-clamp:2 ：用来限制在一个块级元素显示的文本的行数，2表示最多显示2行，为了实现该效果需要组合其他的webkit属性</li>
        <li>display:-webkit-box; 和1结合使用，将对象作为弹性伸缩盒子模型显示</li>
        <li>-webkit-box-orient:vertical; 和1结合使用，设置或检索伸缩盒对象的子元素的排列方式</li>
        <li>overflow:hidden</li>
        <li>text-overflow:ellipsis</li>
    </ul>
    <div class="ceshitwo">
        多行省略 多行省略 多行省略 多行省略 多行省略 多行省略 多行省略
    </div>

    <h2>通过css画一个三角形</h2>
    <div class="ceshithree"></div>
    <br>
    <div class="ceshifour"></div>
    <br>
    <div class="ceshifive"></div>
    <div class="ceshisix"></div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.ceshi {
    width: 70px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.ceshitwo {
    width: 70px;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.ceshithree{
    width: 0;
    height: 0;
    border-style:solid;
    border-width: 0 50px 50px;
    border-color: transparent transparent #d9534f;
}
.ceshifour{
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 50px 0;
    border-color:#d9534f transparent transparent
}
.ceshifive{
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 0 50px 50px;
    border-color: transparent transparent transparent #d9534f;
}
.ceshisix{
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 50px 50px 0;
    border-color: transparent #d9534f transparent transparent;
}
</style>