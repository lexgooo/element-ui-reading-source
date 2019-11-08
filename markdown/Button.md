# Button 按钮

## 所有功能点
- 点击事件
- 传入 `size` 字段为字符串，支持 `medium`, `small`, `mini`, 分别显示不同大小 的按钮样式。
- 传入 `autofocus` 字段为布尔值控制按钮是否为自动选中
- 传入 `type` 属性为字符串，支持 `primary`, `success`, `warning`, `danger`, `info`, `text` 分别给按钮不同的类名，并显示不同风格和颜色的按钮。
- 传入 `plain` 属性为布尔值，根据当前值为按钮加上对应的 `class` 对应样式为镂空按钮。
- 传入 `circle` 属性为布尔值，根据当前值为按钮加上对应的 `class` 对应样式为圆形按钮。
- 传入 `loading` 属性为布尔值，根据当前值为原生按钮加上 `disabled` 状态，并加上相应的禁用状态 `class` 对应的禁用样式，并加上对应的元素显示。
- 传入 `disabled` 属性值为布尔值，根据当前值为原生按钮元素加上禁用状态，并为当前状态加上对应的元素样式。
- 传入 `icon` 属性字符串，为原生按钮元素上加上图标。


## 知识点
- `<button>` 元素的 `autofocus` 属性：当这个值为 `true` 时当前按钮在页面加载完成后就会自动获得焦点。
- `<button>` 元素的 `type` 属性值为 `reset` 时，点击这个按钮时，当前按钮所在的表单元素都会被重置为默认值。
- sass 语法中的 `!default` 关键字：使用在变量值的后面，如果分配给变量的值后添加了 `!default` 标志，那主就意味着：如果已经赋值，那么它不会被重新赋值，但是如果它尚未赋值，那么它会被赋予新的给定值。
- sass 语法中的 `!global` 标识：sass 中使用块级作用域进行变量作用域的划分，如果想要把块级作用域中的变量提升为全局变量，就可以在变量值后加 `!global` 标识。
    ```scss
    #main {
    $width: 5em !global;
    width: $width;
    }

    #sidebar {
    width: $width;
    }
    ```
- sass 关键字 `@content` : 在定义 `@mixin` 混合样式时，如果使用 `@content` 关键字，在引用这个混合样式时，可以额外的添加一些样式，添加的这些样式就会被引用在 `@content` 出现的位置。
- sass 中的插值语句 `#{}` : 通过这个插值语句可以在选择器或属性名中使用变量，也可以在变量值中用来包裹用于运算的变量值。
    ```scss
    $name: foo;
    $attr: border;
    p.#{$name} {
        #{$attr}-color: blue;
    }

    p {
        $font-size: 12px;
        $line-height: 30px;
        font: #{$font-size}/#{$line-height};
    }
    ```
- css3 中 `appearance` 属性：用来改变当前元素的默认的界面显示。使当前元素表现出别的元素特性。比如让文本元素显示得像按钮元素。
    - 所有主流的浏览器都不支持该属性
    - Firefox 支持代替的 `-moz-appearance` 属性
    - Safari 和 Chrome 支持替代的 `-webkit-appearance` 属性
    - 属性值可选 

    | 值 | 描述 |
    | -- | --- |
    | `normal` | 将元素呈现为常规元素，即默认呈现方式 |
    | `icon` | 将元素呈现为图标（小图片）|
    | `window` | 将元素呈现为视口 |
    | `button` | 将元素呈现为按钮 |
    | `menu` | 将元素呈现为一套供用户选择的选项 |
    | `field` | 将元素呈现为输入字段 |
- css 的 `user-select` 属性：控制用户能否选中文本。
    - 支持属性值：`auto` | `text` | `none` | `contain` | `all` 
    - 这是个实验属性，浏览器支持还不是很好
- sass 中 `&` 的意义：在编译后的 css 文件中，`&` 将被替换成嵌套外层的父选择器。
- sass 中 `@at-root` 指令：作用是把该指令后的样式作用域提升到全局。
- css 的 `pointer-events` 属性：如果该元素为 svg 元素，可用于指定 svg 的特定区域成为鼠标事件的 `target`， 如果值为 `none` ，当前元素对于鼠标事件就不会有任何反应。
- `lx-button` 组件中默认的 `slot` 组件外包的 `span` 元素使用了 `v-if="$slots.default"` 语句的目的是当按钮的默认 `slots` 没有值的的时候，就不显示这个元素，以免样式受到影响，因为在样式中如果有图标也有 `slot` 内容的时候，这个 `span` 元素有一个 `5px` 的左边距。

## 觉得源码中的可以改进的点 (v2.12.0)
- `button` 的 `icon` 传入的完整的字体图标的类名，这意味着可以传入第三方的图标类，但是在样式中却没有针对第三图标的样式优化：把图标和文字间加一个 `5px` 的间隔。

    > 涉及的源码文件及位置 :
    >   1. packages/button/src/button.vue -> line 21
    >   2. packages/theme-chalk/src/button.scss -> line 47 ~ line 51
