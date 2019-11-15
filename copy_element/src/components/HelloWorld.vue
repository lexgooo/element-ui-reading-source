<template>
    <div class="hello">
        <div class="icon">
        <h1>图标</h1>
        <icon name="delete-solid" />
        </div>
        <div class="button">
        <h1>按钮</h1>
        <div>
            <lx-button @click="handleClick">默认按钮</lx-button>
            <lx-button type="primary">主要按钮</lx-button>
            <lx-button type="success">成功按钮</lx-button>
            <lx-button type="info">信息按钮</lx-button>
            <lx-button type="warning">警告按钮</lx-button>
            <lx-button type="danger">危险按钮</lx-button>
        </div>
        <div>
            <lx-button disabled>默认按钮</lx-button>
            <lx-button type="primary" disabled>主要按钮</lx-button>
            <lx-button type="success" disabled>成功按钮</lx-button>
            <lx-button type="info" disabled>信息按钮</lx-button>
            <lx-button type="warning" disabled>警告按钮</lx-button>
            <lx-button type="danger" disabled>危险按钮</lx-button>
        </div>
        <div>
            <lx-button plain>默认按钮</lx-button>
            <lx-button type="primary" plain>主要按钮</lx-button>
            <lx-button type="success" plain>成功按钮</lx-button>
            <lx-button type="info" plain>信息按钮</lx-button>
            <lx-button type="warning" plain>警告按钮</lx-button>
            <lx-button type="danger" plain>危险按钮</lx-button>
        </div>
        <div>
            <lx-button plain disabled>默认按钮</lx-button>
            <lx-button type="primary" plain disabled>主要按钮</lx-button>
            <lx-button type="success" plain disabled>成功按钮</lx-button>
            <lx-button type="info" plain disabled>信息按钮</lx-button>
            <lx-button type="warning" plain disabled>警告按钮</lx-button>
            <lx-button type="danger" plain disabled>危险按钮</lx-button>
        </div>
        <div>
            <lx-button round>默认按钮</lx-button>
            <lx-button type="primary" round>主要按钮</lx-button>
            <lx-button type="success" round>成功按钮</lx-button>
            <lx-button type="info" round>信息按钮</lx-button>
            <lx-button type="warning" round>警告按钮</lx-button>
            <lx-button type="danger" round>危险按钮</lx-button>
        </div>
        <div>
            <lx-button icon="lx-icon-search" circle></lx-button>
            <lx-button type="primary" icon="lx-icon-edit" circle></lx-button>
            <lx-button type="success" icon="lx-icon-check" circle></lx-button>
            <lx-button type="info" icon="lx-icon-message" circle></lx-button>
            <lx-button type="warning" icon="lx-icon-star-off" circle></lx-button>
            <lx-button type="danger" icon="lx-icon-delete" circle></lx-button>
        </div>
        <div>
            <lx-button round icon="lx-icon-edit">默认按钮</lx-button>
            <lx-button round icon="iconfont icon-earth">三方图标</lx-button>
            <lx-button type="primary" round loading>主要按钮</lx-button>
            <lx-button type="success" round size="medium">中等按钮</lx-button>
            <lx-button type="info" round size="small">较小按钮</lx-button>
            <lx-button type="warning" round size="mini">最小按钮</lx-button>
            <lx-button type="text">文本按钮</lx-button>
            <lx-button type="text" disabled>文本按钮</lx-button>
        </div>
        </div>
        <div class="button-group">
        <h1>按钮组</h1>
        <div>
            <lx-button-group>
            <lx-button type="primary">按钮1</lx-button>
            <lx-button type="primary">按钮2</lx-button>
            <lx-button type="primary">按钮3</lx-button>
            <lx-button type="primary" loading>按钮4</lx-button>
            <lx-button type="primary" disabled>按钮5</lx-button>
            <lx-button type="primary" icon="lx-icon-delete">按钮6</lx-button>
            </lx-button-group>
        </div>
        <div>
            <lx-button-group>
            <lx-button type="primary" plain>按钮1</lx-button>
            <lx-button type="primary" plain>按钮2</lx-button>
            <lx-button type="primary" plain>按钮3</lx-button>
            <lx-button type="primary" loading plain>按钮4</lx-button>
            <lx-button type="primary" disabled plain>按钮5</lx-button>
            <lx-button type="primary" icon="lx-icon-delete" plain
                >按钮6</lx-button
            >
            </lx-button-group>
        </div>
        </div>
        <div class="radio">
        <h1>单选框</h1>
        <div>
            <h2>默认使用</h2>
            <lx-radio v-model="radio" label="1">单选框1</lx-radio>
            <lx-radio v-model="radio" label="2">单选框2</lx-radio>
        </div>
        <div>
            <h2>没有传入对应的 slot 文字</h2>
            <lx-radio v-model="radio1" label="标签1"></lx-radio>
            <lx-radio v-model="radio1" label="标签2"></lx-radio>
        </div>
        <div>
            <h2>单选框组</h2>
            <lx-radio-group v-model="radio1">
                <lx-radio label="标签1"></lx-radio>
                <lx-radio label="标签2"></lx-radio>
            </lx-radio-group>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      radio: "1",
      radio1: "标签1"
    };
  },
  methods: {
    handleClick() {
      console.log("默认按钮点击事件");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.button,
.button-group {
  div + div {
    margin-top: 15px;
  }
}
</style>
