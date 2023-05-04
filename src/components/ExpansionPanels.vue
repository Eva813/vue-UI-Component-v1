<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style>

.wrapper > div:first-child .title {
  /* 标题1的样式规则 */
  background-color: yellow;
}
/* .border-style{
  border-left: 2px solid green;
  border-right: 2px solid green;
  

}

.border-style:first-child{
  border-top: 2px solid green;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.border-style:last-child{
  border-bottom: 2px solid green;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.border-style:not(:last-child){
  border-bottom: 2px solid orange;
} */
</style>
