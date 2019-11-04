# Icon 图标  
## 知识点
- 不常见的属性选择器
    - `[attribute^=value]` : 有以 `value` 作为 `attribute` 属性值的开始的属性的元素。
    - `[attribute*=value]` : 有 `attribute` 属性值中包含 `value` 字段的属性值的元素。
    - 代码中实例：
    ```scss
    [class^="el-icon-"], [class*=" el-icon-"] {...}
    ```
    
    > 以上选择器指向的是以 `class` 为 `el-icon-` 开头的，或者 `class` 包含 ` el-icon-` 的元素。

- 属性选择器扩展
    - `[attribute~=value]` : `attribute` 属性中以空格分隔的属性里包含了 `value` 字段的属性的元素。
    - `[attribute|=value]` : `attribute` 属性中以连字符连接的属性字段中包含有 `value` 字段的属性值所在的元素。
    - `[attribute$=value]` : `attribute` 属性包含有以`value` 字段作为结束的属性所在的元素。
