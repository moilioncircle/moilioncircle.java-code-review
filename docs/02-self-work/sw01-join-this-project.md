---
isOriginal: true
icon: interact
category:
  - 自学
tag:
  - 规则
  - 命名
  - 协作
---

# SW01.如何参与此项目

在我看来，有幸看到此项目，就是你我莫大的缘分了，在看代码笑话，让身边人别犯蠢即算参与了。
互动的话，提交Issue或PR到Github上，因此项目优先考虑国内玩家的速度和面子问题。
若以上还不能满足，那么需要你有一定的动手能力和情绪控制能力，因为后面全是自助式的，没有保姆。

## 01A.目录和文件的命名

考虑到OS差异，Url和File的兼容性，简化为以下要点，

* 字符集统一`UTF8`。
* `README.md`必须大写，在vuepress中有特殊含义。
* 目录和文件，`烤串`命名法。统一小写以`-`分隔单词。
* 目录，有2位序号和2个单词构成，`##-xxx-yyy`
* 文件，有目录，序号，目录命名约定构成，
  + team-rule和self-work的约定为实意单词。
  + code-debt约定为项目代号+日期+时间。
* 序号，统一领取，默认10进制。
* 文章，主标题为文件序号，章节则追加`a.`，即字母为序。
* 标点，一个中文中用中文，英文中用英文。

项目的前3个目录有特别要求和目的，以下分别说明。

* `team-rule`是团队规则，是CodeReview的执行标准，要求清晰，便于理解和执行。
  规则以`tr##`缩写，因此不会超过百条，但规则下可以细分不同的执行策略，以a-z命名。
* `self-work`是自学资料，用来对齐不同人员的知识盲区。大部分是行业内认可的权威资料。
* `code-debt`是技术债务，主要是对私有项目的审查和重构，需要注意隐私或机密内容。
* `04-09`，目前没有明确规划，属于保留序号。
* `10-99`，规划为公开项目的Review，包括低质量的重构和高质量的学习。

## 01B.工程的结构和技术

整个工程使用的是`vuepress`技术和官方的`hope`主题，以下官方文档有详解。

* <https://v2.vuepress.vuejs.org/zh>
* <https://vuepress-theme-hope.github.io/v2>

首先`fork`本repo成为自己的git项目，然后`clone`到本地，重点关注docs目录。
可以手工生成对应目录的文件，也可以使用idea体系下的`Any2dto`插件复制review。

目前VuePress2和theme-hope2都是beta版，需要注意版本的兼容性。

对vuepress的开发，简单遵循prettier的格式化就好。

## 01C.编写Markdown文章

以`GFM`语法为主，但vuepress对MD有很多增强，且解析为vue模板。
所以需要遵守约定，并避免在代码块外误用无法识别的闭合tag。

### C1.标题，8-10中文长

格式为`编号`+`序号`+`小节`+`.`+`内容`，其中以`.`分隔。

* 编号 - 2位大写字母①，
* 序号 - 数字序号，2-4位②
* 小节 - 1位字母③，大写从A-Z

标题长度应该控制在20字符，每级标题使用上一级标记+序号

* 一级标题为①②，顶级文章可无①
* 二级标题为②③，如rule常被外部引用，使用①②③
* 三级标题，使用③的字母加数字即可
* 四级标题，可参考三级规则或无序号

### C2.配置，做好分类和标签

以`Frontmatter`标记，主要设置以下几个。

* author:trydofor - 作者，默认trydofor
* isOriginal:true - 是否原创，默认false
* icon:java - 图标，使用iconfont，无默认值。
* category - 分类，中文，一般为所属目录，推荐一个，可多个。
* tag - 标签，中文，多个文章关键词。

### C3.正文，合适的文本模式可读性

可以使用`VsCode`编辑，使用`markdownlint`格式化。

* 标点，中文中使用中文标点，英文中使用英文。
* 换行，推荐手动断行，保持markdown的文本形态可读性。
* 空白，中文与英数间可不增加空格（prettier会强制增加）
* 链接，使用相对路径`./`，`/`为publish资源，裸链接用`<>`括起来。
* 列表，无序列表，层级关系一级`*`，二级`+`，三级`-`

### C4.增强，上标增强或图标组件

在vuepress和theme-hope在存在markdown(MD)的增强，如在MD中使用Vue组件。
但这样有一个缺点，就是MD本身在文本状态下的可读性，尤其标签在浏览器中标签不显示。

所以NotBad对sup标记有进行了增强，增加了Icon组件。

* 执行级别 - `^必须^` ^必须^，`^推荐^`^推荐^，`^可选^`^可选^，`^慎用^`^慎用^
* 能力水准 - `^猿初^`^猿初^，`^猿中^`^猿中^，`^猿高^`^猿高^，`^狮初^`^狮初^
* 图标 - 增加文本乐趣 `<FontIcon icon="preview"/>` <FontIcon icon="preview"/>

## 01D.开发者的常见问题

此项目采用pnpm做包管理，因此不会显示的传递依赖。基本上，需要保证以下核心依赖的版本一致。
该死的json不支持注释，并且npm体系，还不打算支持json5等支持注释的配置格式。

* vuepress - 核心科技
* vuepress-theme-hope - 主题核心，与前者一致。
* vue - 必须保持唯一版本，建议和hope一致。
* vue-router - 同上。

碰到问题时，如果不是因为自定义功能引起的，可以，

* 首先查看[常见错误](https://vuepress-theme-hope.github.io/v2/zh/faq/)
* 到github上，搜索Issue

### D01.dev正常但build失败

清一下缓存试试：`rm -rf docs/.vuepress/{.cache/,.temp/}`

### D02.useXXX() without provider

> useXXX() is called without provider

保证 vuepress，theme-hope，vue和vue-router的版本**一致且唯一**。
