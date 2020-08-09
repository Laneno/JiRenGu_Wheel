<template>
     <button class="g-button">g-button</button>
</template>


<script>
export default {
    
}
</script>


<style lang="scss">
        .g-button{
            font-size: var(--font-size);
            height: var(--button-height);
            padding: 0 1em;             /*按钮左侧空一个字，不在按钮上加宽度width*/
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
            background: var(--button-bg); /*g-button使用弹性盒flex布局*/
            display: inline-flex;
            justify-content: center;    /*jfc:c*/
            align-items: center;        /*alc:c*/
            vertical-align: middle;        /*va:t  解决内联元素对不齐问题，只要不是默认值baseline都可以*/
            /*&表示当前的选择器*/
            &:hover{            /*hover悬停时，边框变深*/
                border-color: var(--border-color-hover);
            }
            &:active{           /*active点击时，背景变深*/
                background-color: var(--button-active-bg);
            }
            &:focus{            /*去掉按钮点击的蓝色边框*/
                outline: none;
                }
        }
</style>