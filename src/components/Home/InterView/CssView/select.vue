<template>
    <h1>css选择器</h1>
    <div class="putong">
        <p>关于css属性选择器常用的有：</p>
        <ul>
            <li id="box">id选择器(#box),选择id为box的元素</li>
            <li class="one">类选择器(.one),选择类名为one的所有元素</li>
            <li>标签选择器(li),选择标签为li的所有元素</li>
            <li>后代选择器(#box div),选择id为box元素内部所有的div元素</li>
            <li>子选择器(.one>.one1)选择父元素为.one的所有.one1的元素</li>
            <li>相邻同胞选择器(.one+.two)选择紧接在.one后的所有.two元素</li>
            <li>群组选择器(div,p),选择div,p的所有元素</li>
        </ul>
    </div>
    <div class="wei">
        <p class="weilei">伪类选择器</p>
        <a href="">伪类选择器</a>
        <a href="">伪类选择器2</a>
        <ul>
            <li>:link:选择未被访问的链接</li>
            <li>:hover:鼠标指针浮动在上面的元素</li>
            <li>:visited:选取已被访问的链接</li>
            <li>:active 选择活动链接</li>
            <li>执行顺序 link hover active visited</li>
        </ul>

        <p class="weiyuansu">伪元素选择器</p>
        <div class="yuansu"></div>
        <ul>
            <li>:before:选择器在被选元素的内容前面插入内容</li>
            <li>:after:选择器在被选元素的内容后面插入内容</li>
        </ul>
    </div>
    <div class="cengci">
        <p class="ceng">层次选择器</p>
        <ul class="cengul">
            <li>:firet-of-type表示一组同级元素中其类型的第一个元素</li>
            <li>:last-of-type表示一组同级元素中其类型的最后一个元素</li>
            <li>:only-child表示没有任何兄弟的元素</li>
            <li>:only-of-type 表示没有同类型兄弟元素的元素</li>
            <li>:nth-child(n)根据元素在一组同级中的位置匹配元素</li>
            <li>:nth-last-of-type 匹配给定类型的元素，基于它们在一组兄弟元素中的位置，从末尾开始计数</li>
            <li>:last-child 表示一组兄弟元素中的最后一个元素</li>
        </ul>
    </div>
    <div class="shuxing">
        <p>属性选择器</p>
        <ul>
            <li value="lllonelll">[attribute*=value]：选择attribute属性值包含value的所有元素</li>
            <li value="onekkk">[attribute^=value]：选择attribute属性开头为value的所有元素</li>
            <li value="jjjone">[attribute$=value]：选择attribute属性结尾为value的所有元素</li>
        </ul>
    </div>
    <h2>优先级</h2>
    <p>内联 > id选择器 > 类选择器 > 标签选择器</p>
    <p>其余的都相当于1</p>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
p:only-of-type{
    border: 2px solid red;
}
.putong {
    li {
        color: green;
    }

    #box {
        color: red;
    }

    .one {
        color: blue;
    }
}

.wei {
    a:link {
        border: 2px solid palegreen;
    }

    a:hover {
        border: 2px solid red;
    }

    a:visited {
        border: 2px solid black;
    }

    a:active {
        border: 2px solid green;
    }

    .yuansu {
        width: 100px;
        height: 30px;
    }

    .yuansu::before {
        content: ':bofore';
        color: red;
    }
    .yuansu::after{
        content: ':after';
        color: blue;
    }
    .weiyuansu {}
}
.cengci{
    .cengul{
        li:first-of-type{
            color: red;
        }
        li:last-of-type{
            color: blue;
        }
        li:nth-child(2n){
            border: 1px solid green;
        }
        li:nth-last-of-type(2){
            font-size: 20px;
        }
        li:last-child{
            border: 2px solid purple;
        }
    }
}
.shuxing{
    [value*=one]{
        color: red;
    }
    [value^=one]{
        color: blue;
    }
    [value$=one]{
        color: green;
    }
}
</style>