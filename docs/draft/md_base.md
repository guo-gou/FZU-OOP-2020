# [markdown 基本语法](https://www.cnblogs.com/nickchen121/p/10821946.html)

### 一、标题

```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 最小只有六级标题
```

### 二、换行

代码：`内容1<br>内容2`

效果：内容 1<br>内容 2

### 三、加粗

代码：
`**我被加粗了**`
效果：
**我被加粗了**

### 四、斜体

代码：
`*我倾斜了* _我倾斜了_`
效果：
_我倾斜了_

### 五、[上标](https://www.jianshu.com/p/80ac23666a98)

代码：
`2<sup>2</sup>`
效果：
2<sup>2</sup>

### 六、[下标](https://www.jianshu.com/p/80ac23666a98)

代码：
`a=log<sub>2</sub>b`
效果：
a=log<sub>2</sub>b

### 七、代码引用（>式）

代码：
`> hello markdown!`
效果：

> hello markdown!

多层嵌套式
代码：

```
> hello markdown!
>
> > hello markdown!
```

效果：

> hello markdown!
>
> > hello markdown!

### 八、代码引用（\`\`\`式）

第一行反引号后面，输入代码块所使用的语言
代码：
\`\`\`python
print('hello nick')
\`\`\`

效果：

```python
print('hello nick')
```

### 九、代码引入（\`式）

代码：\`print('hello nick')\`

效果：`print('hello nick')`

### 十、插入链接（链接显示）

代码：
`<https://www.cnblogs.com/nickchen121/p/10718112.html>`
效果：
<https://www.cnblogs.com/nickchen121/p/10718112.html>

### 十一、插入链接（链接描述显示）

代码：
`[nickchen博客](https://www.cnblogs.com/nickchen121/p/10718112.html "nickchen博客")`
效果：
[nickchen 博客](https://www.cnblogs.com/nickchen121/p/10718112.html "nickchen博客")

### 十二、[插入图片](https://www.jianshu.com/p/280c6a6f2594)

#### 1.插入本地图片

只需要在基础语法的括号中填入图片的位置路径即可，支持绝对路径和相对路径。
例如：`![avatar](/home/picture/1.png)`

> 不灵活不好分享，本地图片的路径更改或丢失都会造成 markdown 文件调不出图

#### 2.插入网络图片

只需要在基础语法的括号中填入图片的网络链接即可，现在已经有很多免费/收费图床和方便传图的小工具可选。
例如：
`![avatar](http://baidu.com/pic/doge.png)`

> 将图片存在网络服务器上，非常依赖网络。

#### 3.把图片存入 markdown 文件

- 高级用法
  比如：
- `![avatar][base64str]`
- `[base64str]:data:image/png;base64,iVBORw0...`

### 十三、有序列表

代码：
`1. one`
`2. two`
`3. three`
效果：

1. one
2. two
3. three

### 十四、无序列表

代码：
`- one`
`- two`
`- three`
效果：

- one
- two
- three
  注意\-号后要有空格，除了用\-号还可以用+号，\*号，用法与\-号相同。

### 十五、分割线

代码（以下四种都可以）：

- `***`
- `---`
- `___`
- `- - -`
  效果：

---

### 十六、表格

第二行必须得有，并且第二行的冒号代表对齐格式，分别为居中；右对齐；左对齐
代码：
`name | age | sex`
`:-:|:-|-:`
`tony|20|男`
`lucy|18|女`
效果：

| name | age | sex |
| :--: | :-- | --: |
| tony | 20  |  男 |
| lucy | 18  |  女 |
