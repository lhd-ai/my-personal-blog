<template>
    <h1>双栏布局</h1>

    <div class="one">
        <div class="left">1leftleftleftleft</div>
        <div class="right">2rightrightrightrightrightrightright</div>
    </div>
    <p>通过flex实现，父元素设置display:flex,左边子元素设置固定宽度，右边子元素设置flex:1</p>

    <div class="two">
        <div class="left">1leftleftleftleft</div>
        <div class="right">2rightrightrightrightrightrightright</div>
    </div>
    <p>左边子元素设置固定宽度，设置左浮动，右边子元素设置左外边距值为左边子元素值，父元素设置BFC，防止右边元素的内容进入左边子元素中</p>
    <p>还可以左边设置左浮动，右边设置BFC，这样就不用设置外边距了</p>

    <h1>三栏布局</h1>

    <div class="three">
        <div class="left">left</div>
        <div class="middle">middle</div>
        <div class="right">right</div>
    </div>

    <p>父元素设置display：flex,左边和右边子元素设置固定宽度，中间元素设置flex:1</p>

    <div class="four">
        <div class="left">left</div>
        <div class="right">right</div>
        <div class="middle">middle</div>
    </div>
    <p>左边子元素设置固定宽度，设置左浮动，右边子元素设置固定宽度，设置右浮动，中间元素宽度自适应，设置左右外边距值为左子元素，右子元素值，特别注意，html结构中间元素要在右边元素下边否则右边元素会在下方显示</p>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.one {
    width: 100vw;
    height: 200px;
    border: 1px solid red;
    display: flex;

    .left {
        width: 200px;
        background-color: green;
    }

    .right {
        flex: 1;
        background-color: palegreen;
    }
}

.two {
    width: 100vw;
    height: 200px;
    border: 1px solid red;
    overflow: hidden;

    .left {
        width: 200px;
        height: 200px;
        background-color: green;
        float: left;
    }

    .right {
        height: 200px;
        margin-left: 200px;
        background-color: palegreen;
        overflow: hidden;
    }
}
.three{
    width: 100vw;
    height: 200px;
    border: 1px solid red;
    display: flex;
    .left{
        width: 200px;
        background-color: green;;
    }
  
    .middle{
        flex: 1;
        background-color: red;
    }
    .right{
        width: 200px;
        background-color: palegreen;
    }
}
.four{
    width: 100vw;
    height: 200px;
    overflow: hidden;
    border: 1px solid red;
    .left{
        width: 200px;
        height: 100%;
        background-color: green;
        float: left;
    }
    .right{
        width: 200px;
        height: 100%;
        float: right;
        background-color: palegreen;
    }
    .middle{
        background-color: red;
        height: 100%;
        margin-left: 200px;
        margin-right: 200px;
    }
}
</style>