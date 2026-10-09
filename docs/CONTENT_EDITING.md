# 网站服务内容编辑

本次新增两个英文服务模块，每个模块包括列表页和详情页。现有 Product 模块继续承担产品展示，无需建立第二套产品销售页面。

| 模块 | 数据文件 | 页面入口 |
| --- | --- | --- |
| Analysis Services（分析服务） | `src/data/analysisServices.js` | `/analysis-services` |
| Research Services（科研服务） | `src/data/researchServices.js` | `/research-services` |

当前包含 7 个分析服务、9 个科研服务，共 16 个英文示例。原有四个示例的正文与地址保留；新增十二个示例的技术简介参考欧易公开服务页面整理，通用流程、要求及交付说明为可编辑模板。列表使用本地组学示意图；所有示意结果均不代表实验或客户项目数据。

## 修改模块介绍与分类

每个数据文件默认导出一个对象，顶层字段如下：

| 字段 | 格式 | 用途 |
| --- | --- | --- |
| `title` | 字符串 | 模块名称 |
| `description` | 字符串 | 列表页简介 |
| `eyebrow` | 字符串 | 简短的引导文字 |
| `image` | 字符串 | 列表条目的默认图片 URL |
| `previewImage` | 字符串或导入图片 | 首页与服务总览入口图片 |
| `previewSummary` | 字符串 | 首页与服务总览的一句话说明 |
| `basePath` | 字符串 | 模块基础路径，与路由配置一致 |
| `ctaLabel` | 字符串 | 咨询按钮文案 |
| `categories` | 对象数组 | 列表页分类，元素为 `{ id, label, image? }`，`image` 是该分类的默认示意图 |
| `items` | 对象数组 | 详情内容，格式见下文 |

增加分类时，向 `categories` 添加一项，例如 `{ id: 'proteomics', label: 'Proteomics' }`。分类 `id` 在当前模块内保持唯一，建议使用小写英文和连字符。

服务的 `category` 必须与一个分类 `id` 完全一致。删除分类前，先将其条目转移到其他分类或一并删除，避免无法按分类找到条目。

## 新增或编辑服务

复制同文件中的一个条目，再修改以下字段。详情 URL 由 `basePath` 和 `slug` 组合生成，例如 `/analysis-services/rna-seq-analysis`。

```js
{
  slug: 'your-service',
  category: 'transcriptomics',
  title: 'Your Service Name',
  summary: 'A short description for the service card.',
  image: '/images/business/your-service.jpg',
  overview: 'A paragraph introducing your service.',
  input: [
    { title: 'Required information', description: 'Describe the required inputs.' },
  ],
  workflow: [
    { title: 'Project planning', description: 'Describe the first step.' },
  ],
  analyses: [],
  deliverables: [
    { title: 'Project report', description: 'Describe the agreed outputs.' },
  ],
  applications: [],
  sampleGuidelines: [],
  results: [
    {
      title: 'Example result',
      description: 'Explain the image and its project context.',
      image: '/images/business/example-result.jpg',
    },
  ],
  isPlaceholder: true,
  sourceUrl: 'https://your-reference-page.example/',
  sourceTitle: 'Reference page title',
  sourceCheckedAt: 'YYYY-MM-DD',
  caseStudies: [],
  faq: [
    { question: 'What should I prepare?', answer: 'Provide your approved answer.' },
  ],
}
```

- `slug` 在同一模块内必须唯一，建议使用小写英文、数字与连字符。已发布后修改 `slug` 会改变详情链接。
- `title`、`summary` 和 `category` 用于服务列表；`overview` 是详情页中的一段文字。
- `input`、`workflow`、`analyses`、`deliverables`、`applications`、`sampleGuidelines` 均为 `{ title, description }` 对象数组。
- `results` 和 `caseStudies` 使用 `{ title, description, image? }` 数组，其中 `image` 可省略。没有真实案例时保持 `caseStudies: []`。
- `faq` 使用 `{ question, answer }` 数组。
- 未使用的可选数组设为 `[]`，或省略该字段，模板会隐藏相应章节。`overview` 可留空或省略；其他必填字段应保留。
- 条目在 `items` 中的顺序决定其展示顺序；删除对应对象即可删除该服务。

内容使用纯文本，不需要在字符串中填写 HTML。包含英文单引号的字符串可以改用双引号包裹，避免 JavaScript 语法错误。

## 替换图片

图片优先级为条目 `image` → 模块 `image` → 分类 `image`；三者为空时，卡片直接展示文字。当前分类图片是本地 SVG 示意图，位于 `public/images/business/`。可把自有 JPG、PNG、WebP 或 SVG 图片放入 `public/images/business/`，再将数据中的 `image` 改为 `/images/business/文件名.扩展名`。URL 不要包含 `public/` 前缀；文件名和大小写要完全一致。

模块顶层 `image` 是默认图片，条目自己的 `image` 可以覆盖它。结果和案例图片放在对应对象的 `image` 中。建议使用横向图片，避免重要内容被裁切。

## 首页入口与产品预览

首页和 Services 总览共同使用 `src/components/Business/ScientificServices.vue`。两个服务模块的标题、入口图片和简短说明直接读取上述数据文件，修改后两个入口同步更新。入口使用 `previewImage` 与 `previewSummary`；列表页保留完整 `description` 和分类筛选。

`src/data/businessNavigation.js` 维护导航和页脚的服务链接，以及三个原有专项服务的摘要。Analysis Services、Research Services 排在前面，专项服务排在后面。

首页三大产品板块的数据在 `src/data/homeProducts.js`，展示组件为 `src/components/Business/ProductPreview.vue`。桌面三类并列、平板两列、手机单列。每类展示代表图片、分类选择、最多 3 项完整产品名称，长介绍保留在数据和详情页，View all 进入原有完整目录。产品的独立详情地址需要已存在于路由中；没有独立详情的功能条目链接到所在分类。

手机端服务详情目录默认收起，点击 On this page 展开。空数组对应的章节和目录项都不会显示。

## 现有 Product 模块

产品继续沿用现有 PRODUCTS 导航和路由。实际内容按当前路由在以下位置维护：

- `src/views/Products/instruments.vue`：仪器列表。
- `src/views/instrumentDetail/`：仪器及相关产品详情。
- `src/views/Reagent/`：试剂分类和详情。
- `src/views/LifeScience/`：生命科学产品分类和详情。
- `src/routes/routes.js`：产品页面路由；`/products` 当前重定向到试剂页面。

请以路由实际引用的组件为准，不要仅凭 `Products` 目录里的历史文件名判断当前显示内容。

本次服务数据不包含产品价格、库存、订单或支付功能。产品销售展示和咨询入口沿用现有 Product 页面。

## 修改后检查

1. 启动开发预览，查看两个服务列表、分类筛选及修改后的详情页。
2. 确认图片加载正常，咨询入口可用，空章节不会显示空白标题。
3. 直接打开或刷新一个详情链接，检查路由可以正常访问。
4. 运行项目的 `npm run build`，确认数据文件没有语法错误后再发布。


## 旧视频素材待补充

Resources 页原有的两份本地视频文件未包含在仓库中，原始远程地址本次也无法访问。保留视频卡片，点击后展示不可用提示，避免请求不存在的文件。

- iR Automated Library Construction System Operation Video：原文件 `20181102163955471.mp4`。
- Fingertip Blood Collection Video：原文件 `20210618154754933.mp4`。

取得可使用的视频后，放入 `public/videos/`，在 `src/views/Resources/resources.vue` 的 `videos` 数据中，将相应条目的空 `src` 改为 `/videos/文件名.mp4`；播放器会自动启用。布局无需改动。


## 新增服务与参考记录

`src/data/servicePreviewContent.js` 维护新增十二个服务、两个模块的七类分类和可复用的预览流程。原有四个示例仍保存在原数据文件中，新增条目通过 `additionalAnalysisServices` / `additionalResearchServices` 合并。后续可直接编辑这个文件中的服务字段；有特殊输入、流程、交付或 FAQ 时，在对应条目中覆盖默认字段。

新增条目的 `sourceUrl`、`sourceTitle`、`sourceCheckedAt`、`isPlaceholder` 用于内部内容维护，不在访客界面展示。参考公司的仪器型号、资质、客户、论文及服务指标均未填入本站公司介绍。改为确认后的实际业务时，替换正文与示例图，并将 `isPlaceholder` 改为 `false`。

| 分类 | 分析服务 | 科研服务 |
| --- | --- | --- |
| Transcriptomics | RNA-seq Data Analysis（原有） | Transcriptome Sequencing（原有）、De Novo Transcriptome Sequencing |
| Single-cell / Spatial | Single-cell Data Analysis（原有） | Single-cell RNA Sequencing、Spatial Transcriptomics |
| Genomics | Variant Analysis | Targeted Sequencing（原有） |
| Microbiome | Microbiome Data Analysis | Microbiome Profiling |
| Proteomics | Proteomics Data Analysis | DIA Proteomics |
| Metabolomics | Metabolomics Data Analysis | LC-MS Metabolomics |
| Multi-omics | Multi-omics Integration | Multi-omics Research |

参考页面于 2026-10-05 检查。部分流程和分析内容以图片呈现，当前仅采用核对后的技术要点及自行制作的本地图示；访客浏览时不会请求欧易图片或内容。

- [基因组重测序](https://www.oebiotech.com/jiyinzufuwu/WGS.html)
- [微生物多样性测序](https://www.oebiotech.com/weishengwufuwu/16S_ITS_18S.html)
- [DIA 定量蛋白质组学](https://www.oebiotech.com/danbaizufuwu/DIA.html)
- [LC-MS 代谢组学](https://www.oebiotech.com/daixiezufuwu/lcms.html)
- [多组学联合](https://www.oebiotech.com/duozuxuefuwu/multiomics.html)
- [真核无参转录组](https://www.oebiotech.com/zhuanluzufuwu/Eukaryotic%20De%20novo%20Transcriptome.html)
- [单细胞 RNA 测序](https://www.oebiotech.com/danxibaocexu/scrna-seq.html)
- [空间转录组](https://www.oebiotech.com/kjzlzcx/VisiumHD.html)

## 页面元信息与正式发布待核对项

`src/utils/pageMetadata.js` 随路由更新英文页面标题、description 和 Open Graph / Twitter 信息；服务详情读取服务名称与摘要。HTML 入口另提供通用公司元信息及本地 Logo。本站仍使用 SPA，详情元信息由浏览器执行脚本后更新；如需各详情在不执行 JavaScript 的分享或搜索抓取中呈现独立元信息，可在正式发布阶段增加预渲染。

正式域名尚未确认，当前没有写入占位域名的 canonical 或 sitemap。域名确定后再生成正式 canonical、站点地图及绝对分享图片地址。

原有业务内容保持：顶部 Logo 和页脚为 Vivolution，首页地址为 Nanjing ARP，联系页还包含 Quintara 的海外办公室信息；公司名称、地址、邮箱、电话需要在正式发布前统一核对。联系页 Company Information 的原中文公司名称与地址也保持原文。表单的英文提示与校验已整理，邮件提交方式未变。


## Unified corporate presentation (2026-10-05)

- Navigation uses a single white row with the original green/purple brand line; desktop dropdowns support keyboard activation and Escape. Mobile menus use explicit expansion buttons.
- Homepage product families use one focused image/category/preview panel, with at most three results per category. Original catalog URLs and the `/products` redirect remain intact.
- Products, Analysis Services and Research Services have permanent links immediately after the homepage carousel. The original technology page is linked from a new visual section using existing title/subtitle copy.
- All five service modules share `ServiceHero` and `ServiceContact`. The three legacy modules also share `ServiceDirectory` and `styles/legacy-services.css`; substantive copy remains in the legacy Vue files.
- Service lists show category, title, summary and detail link. Illustrative omics figures remain in service details, not repeated above every list result.
- The existing sixteen configurable service examples, source records and placeholder flags are unchanged. No backend or purchasing flow is added.
- Existing legacy service statistics, institution names, team biographies and regulatory claims are retained as requested and still need content verification before publication.
- Original photos have local WebP derivatives under `src/assets/home/optimized/`; original files are preserved. The mobile carousel starts paused, with explicit controls available.
