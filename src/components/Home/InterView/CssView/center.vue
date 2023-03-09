<template>
    <h1>元素水平垂直居中</h1>
    <br>
    <h2>利用定位+margin:auto</h2>

    <div class="fatherone">
        <div class="childone"></div>

    </div>
    <p>父元素设置相对定位，子元素设置绝对定位，上下左右设置为0，margin设置为auto则上下左右居中，设置为0 auto则左右居中，设置为auto 0 则水平居中，不需要知道子元素宽高</p>

    <h2>利用定位+margin：负值</h2>

    <div class="fathertwo">
        <div class="childtwo"></div>
    </div>
    <p>父元素设置相对定位，子元素设置绝对定位，top设置为50%,margin-top设置为负的子元素的高度，为垂直居中，left设置50%,margin-left设置围殴负的子元素的宽度的值，则为水平居中，需要知道子元素的宽高值</p>

    <h2>利用定位+transform</h2>

    <div class="fatherthree">
        <div class="childthree"></div>
    </div>
    <p>父元素设置相对定位，子元素设置绝对定位，top设置50%,再设置transform:translateY(-50%)为垂直居中，left设置为50%，再设置transform:translateX(-50%)则为水平居中，不需要知道子元素宽高值
    </p>

    <h2>flex布局</h2>
    <div class="fatherfour">
        <div class="childfour"></div>
    </div>
    <p>父元素设置display:flex,设置主轴排序为居中排序，可以实现水平居中，次轴设置为居中可以实现垂直居中，不需要知道子元素宽高</p>

    <div class="ceshi" style="width: 200px;height:50px;border: 1px solid red; text-align: center;line-height: 50px;">
        <span>李李李李李</span></div>
    <p>水平居中：text-align:center 垂直居中：line-height == heigth</p>
    <div class="ceshi"
        style="width: 200px;height:50px;border: 1px solid red; display: flex;justify-content: center;align-items: center;">
        <span>李李李李李</span></div>
    <p>父元素设置display:flex justify-content: center;实现水平居中align-items: center;实现垂直居中</p>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.father {
    width: 200px;
    height: 200px;
    position: relative;
    border: 1px solid red;
}

.fatherone {


    .childone {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        border: 1px solid green;
    }

    .father()
}

.fathertwo {

    .childtwo {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -50px;
        margin-left: -50px;
        border: 1px solid green;
    }

    .father()
}

.fatherthree {

    .childthree {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid green;
    }

    .father()
}

.fatherfour {
    width: 200px;
    height: 200px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;

    .childfour {
        width: 100px;
        height: 100px;
        border: 1px solid green;
    }
}</style>