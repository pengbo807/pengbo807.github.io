# Bo Peng 的个人主页

网站：[pengbo807.github.io](https://pengbo807.github.io/)。使用 Jekyll，兼容 GitHub Pages。

## 日常修改只需关注这三个文件

| 文件 | 修改内容 |
| --- | --- |
| `_pages/about.md` | 个人介绍、News、Publications 开场、教育经历、实习、联系方式 |
| `_data/publication_topics.yml` | 三个研究方向的介绍、每组包含的论文，以及论文显示顺序 |
| `_data/publications.yml` | 论文标题、作者、年份、会议、链接、摘要和配图信息 |

### 调整论文顺序或分组

编辑 `_data/publication_topics.yml` 中对应方向的 `papers` 列表。列表从上到下就是页面上的显示顺序；每项必须对应 `_data/publications.yml` 中已有的 `id`。

### 新增一篇论文

1. 在 `_data/publications.yml` 中复制一篇现有论文的完整条目，修改内容，并设置一个不重复的 `id`。
2. 把这个 `id` 加到 `_data/publication_topics.yml` 中相应方向的 `papers` 列表。
3. 如有配图，放到 `images/publications/`，填写图片路径、说明和宽高，并在 `sources.json` 中记录图片来源。

`authors` 字段用 `<strong>Bo Peng</strong>` 加粗姓名，`*` 表示共同贡献。论文录用信息和作者标记以可公开核实的信息为准。

## 其他文件的用途

| 路径 | 用途 |
| --- | --- |
| `_layouts/academic.html` | 页面框架、左侧个人信息、顶部导航、搜索和社交分享信息 |
| `_includes/publication-list.html` | 按研究方向显示论文列表 |
| `_includes/profile-icon.html` | 侧栏的小图标 |
| `assets/css/academic.css` | 字体、颜色、间距、电脑和手机布局 |
| `assets/js/academic.js` | 手机菜单、复制邮箱、导航高亮 |
| `_config.yml` | 网站地址、邮箱、构建设置 |
| `_pages/404.md`、`sitemap.md`、`terms.md` | 错误页、站点地图、网站说明页 |
| `images/favicon.svg` | 浏览器标签页图标 |
| `images/publications/` | 论文配图及来源记录 |
| `images/portraits/` | 保留的个人头像与生成提示词，不会发布到网站 |
| `Gemfile` | 本地运行网站所需的依赖 |
| `LICENSE` | 原模板的许可证声明 |

导航和侧栏在 `_layouts/academic.html` 中直接维护。旧模板的样式、脚本、示例素材和无效配置已清理。

页面布局参考了 [Pingjie Wang 的主页](https://applewpj.github.io/)，样式为独立实现。论文配图来自原论文或官方项目，来源记录保存在 `images/publications/sources.json`。

## 本地预览

安装 Ruby 和 Bundler 后，在当前文件夹运行：

```sh
bundle install
bundle exec jekyll serve
```

在浏览器打开 `http://localhost:4000`。修改内容后会自动重新生成；修改 `_config.yml` 后需要重启预览。

检查正式构建：

```sh
JEKYLL_ENV=production bundle exec jekyll build --safe
```

`_site/` 是自动生成的结果，可以删除，不要在里面修改内容。它已被 Git 忽略。

发布前检查主页、论文图片、手机菜单及 `/about/` 跳转。修改本地文件不会自动发布；推送到仓库后由 GitHub Pages 发布。
