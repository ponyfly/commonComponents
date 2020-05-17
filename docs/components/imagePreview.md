# imagePreview 图片预览

## 基础用法
<imagePreview/>

## Attributes

| 参数  | 说明  | 类型  | 可选值 | 默认值  |
|---|---|---|---|---|
|dialogZIndex  | 图片预览弹窗层级  | Number  | -  | 1999  |
|size  | 图片尺寸  |  Number | -  | 50  |
|imgs |  图片数组 |  [Array, String]  |  -   |  ''  |
|maxZoom |  最大放大倍数 |  Number  |   -  |  4  |
|minZoom |  最小放大倍数 |  Number  |   -  |  0.5  |
|delFunc |  删除图片时调用api的func |  Function  |  -   |  -  |
|urlKey |  发送请求时，url的key |  String  |  -   |  src  |
|restArgs | 其他的参数  |  Object  |  -   |  {}  |
|successWords |  成功后的文案 |   String |  -   |  删除成功！  |
|successCB | 成功后的回调  |  Function  |  -   |  -  |
|removable |  是否可删除 |  Boolean  |   -  |   false |
|notAppendToChild | 是否挂载到body  |  Boolean  |     | false   |
|useReplace | 是否添加后缀`cf_mtr_1080_nw`  |  Boolean  |  -   |  true  |
|needTooltip |  鼠标悬停是否使用Tooltip |  Boolean  |  -   |  false  |
|placement | 鼠标悬停时，Tooltip 的出现位置  |  String  |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end   |  left  |
