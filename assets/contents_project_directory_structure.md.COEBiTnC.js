import{_ as s,o as n,c as p,a0 as l}from"./chunks/framework.Cyxxdjdf.js";const u=JSON.parse('{"title":"工程目录结构","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"contents/project_directory_structure.md","filePath":"contents/project_directory_structure.md"}'),e={name:"contents/project_directory_structure.md"};function i(t,a,c,o,d,r){return n(),p("div",null,[...a[0]||(a[0]=[l(`<h1 id="工程目录结构" tabindex="-1">工程目录结构 <a class="header-anchor" href="#工程目录结构" aria-label="Permalink to &quot;工程目录结构&quot;">​</a></h1><h2 id="项目初创" tabindex="-1">项目初创 <a class="header-anchor" href="#项目初创" aria-label="Permalink to &quot;项目初创&quot;">​</a></h2><p>一个 Android 项目创建后，会生成一套默认的目录结构，它也是 Android 工程体系与 Gradle 构建系统的基础。</p><p>典型结构如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>my-android-project/</span></span>
<span class="line"><span>├── app/</span></span>
<span class="line"><span>│   ├── build/</span></span>
<span class="line"><span>│   ├── libs/</span></span>
<span class="line"><span>│   ├── src/</span></span>
<span class="line"><span>│   │   ├── main/</span></span>
<span class="line"><span>│   │   │   ├── java/</span></span>
<span class="line"><span>│   │   │   ├── kotlin/</span></span>
<span class="line"><span>│   │   │   ├── res/</span></span>
<span class="line"><span>│   │   │   └── AndroidManifest.xml</span></span>
<span class="line"><span>│   │   ├── test/</span></span>
<span class="line"><span>│   │   └── androidTest/</span></span>
<span class="line"><span>│   ├── build.gradle</span></span>
<span class="line"><span>│   └── proguard-rules.pro</span></span>
<span class="line"><span>├── build.gradle</span></span>
<span class="line"><span>├── settings.gradle</span></span>
<span class="line"><span>└── gradle/</span></span>
<span class="line"><span>    └── wrapper/</span></span></code></pre></div><p>在实际开发中，大多数目录结构都是围绕 main 与 res 展开的，其中最核心的部分通常是：</p><ul><li>包名目录</li><li>资源目录</li></ul><p>其中 res 目录本身具备固定规则，而项目中最容易随着业务增长不断演化的，往往是包名目录结构。</p><details class="details custom-block"><summary>res 资源目录</summary><p>基本轮廓如下，文件和文件夹新增都是有固定规则的。<code>“一些目录下的资源文件需要有命名规范后续会提到”</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>res/</span></span>
<span class="line"><span>├── drawable/                   </span></span>
<span class="line"><span>├── drawable-xxhdpi/            </span></span>
<span class="line"><span>├── layout/                     </span></span>
<span class="line"><span>├── values/                     </span></span>
<span class="line"><span>│   ├── strings.xml             </span></span>
<span class="line"><span>│   ├── colors.xml              </span></span>
<span class="line"><span>│   └── styles.xml              </span></span>
<span class="line"><span>├── mipmap/                     </span></span>
<span class="line"><span>└── raw/</span></span></code></pre></div><p>谷歌官方指南：<a href="https://developer.android.google.cn/guide/topics/resources/providing-resources" target="_blank" rel="noreferrer">《资源目录存放指引》</a></p></details><p>因此，本文重点讨论的是：如何合理组织包名目录结构。</p><h2 id="包名目录" tabindex="-1">包名目录 <a class="header-anchor" href="#包名目录" aria-label="Permalink to &quot;包名目录&quot;">​</a></h2><p>在 <code>main</code> 目录下，如果项目是 Java 和 kotlin 混开，那么可以：</p><ul><li>分别存放在 <code>java</code> 和 <code>kotlin</code> 目录中</li><li>统一 <code>java</code> 目录。</li></ul><p>当项目规模较大、两种语言文件较多时，更推荐按语言拆分：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>main/java/</span></span>
<span class="line"><span>    └──com/example/myapp</span></span>
<span class="line"><span>main/kotlin</span></span>
<span class="line"><span>    └──com/example/myapp</span></span></code></pre></div><p>两个目录下的包结构应保持一致。</p><div class="danger custom-block"><p class="custom-block-title">🚫 重要注意事项</p><p>不建议将 Java 文件放在 <code>kotlin</code> 目录下。</p><p>虽然部分 Gradle 或 Kotlin 插件版本能够正常编译，但在不同 AGP、IDE 或构建配置下，可能出现索引异常、类缺失或构建行为不一致的问题。</p><p>推荐保持：</p><ul><li>Java 文件放在 java/</li><li>Kotlin 文件放在 kotlin/</li></ul><p>统一目录职责，避免潜在兼容性问题。</p></div><h2 id="基础目录结构" tabindex="-1">基础目录结构 <a class="header-anchor" href="#基础目录结构" aria-label="Permalink to &quot;基础目录结构&quot;">​</a></h2><p>包名目录的层级设计，会直接影响项目的：</p><ul><li>可维护性</li><li>可扩展性</li><li>阅读效率</li><li>团队协作成本</li></ul><p>一个常见的基础结构如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>com/example/myapp/</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── app/              # Application、全局初始化、全局变量</span></span>
<span class="line"><span>├── base/             # 存放各个组件的通用基类（取名 base/basic 均可）</span></span>
<span class="line"><span>│   ├── activity/</span></span>
<span class="line"><span>│   ├── fragment/</span></span>
<span class="line"><span>│   ├── dialog/</span></span>
<span class="line"><span>│   ├── holder/</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── consts/           # 全局常量</span></span>
<span class="line"><span>├── model/            # 数据模型</span></span>
<span class="line"><span>├── ui/</span></span>
<span class="line"><span>│   ├── activity/</span></span>
<span class="line"><span>│   ├── fragment/</span></span>
<span class="line"><span>│   ├── dialog/</span></span>
<span class="line"><span>│   ├── adapter/</span></span>
<span class="line"><span>│   │   └── holder/</span></span>
<span class="line"><span>│   ├── widget/</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── utils/            # 工具类</span></span>
<span class="line"><span>└── ...</span></span></code></pre></div><p>即使是中小型项目，也通常建议具备基础目录分层。</p><p>随着业务扩展，再逐步细化。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>避免在项目初期过度拆分目录。</p><p>目录结构的目标是降低理解成本，而不是追求层级数量。</p><p>如果一个目录长期只包含少量文件，或拆分后无法带来明显收益，应优先保持简单结构。</p><hr><p>避免将 utils 逐渐演变成“杂项目录”。</p><p>工具类应具备明确职责与边界，不相关逻辑不要持续堆积在同一个目录中。</p><p>当工具类开始明显增长时，应进一步拆分：</p></div><h2 id="常见目录扩展" tabindex="-1">常见目录扩展 <a class="header-anchor" href="#常见目录扩展" aria-label="Permalink to &quot;常见目录扩展&quot;">​</a></h2><p>除了基础结构外，实际项目中还会根据：</p><ul><li>Android 组件</li><li>第三方框架</li><li>架构设计</li><li>业务规模</li></ul><p>继续扩展目录层级。</p><h3 id="组件目录" tabindex="-1">组件目录 <a class="header-anchor" href="#组件目录" aria-label="Permalink to &quot;组件目录&quot;">​</a></h3><p>Android 四大组件 除 Activity 通常放在 ui 下外，其余组件一般会独立管理。</p><ul><li><strong>Service</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>com/example/myapp/</span></span>
<span class="line"><span>            ├──app/</span></span>
<span class="line"><span>            ├──.../</span></span>
<span class="line"><span>            └──services/ # 管理各个服务组件</span></span></code></pre></div><ul><li><strong>BroadcastReceiver</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>com/example/myapp/</span></span>
<span class="line"><span>            ├──app/</span></span>
<span class="line"><span>            ├──.../</span></span>
<span class="line"><span>            └──receivers/ # 管理各个广播组件（全局和本地广播都在此存放）</span></span></code></pre></div><ul><li><strong>ContentProvider</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>com/example/myapp/</span></span>
<span class="line"><span>            ├──app/</span></span>
<span class="line"><span>            ├──.../</span></span>
<span class="line"><span>            └──providers/ # 管理各个内容提供器组件</span></span></code></pre></div><h3 id="第三方框架" tabindex="-1">第三方框架 <a class="header-anchor" href="#第三方框架" aria-label="Permalink to &quot;第三方框架&quot;">​</a></h3><p>当第三方框架开始产生：</p><ul><li>配置类</li><li>扩展类</li><li>适配层</li><li>自定义实现</li></ul><p>通常会单独建立一级目录。</p><h4 id="glide-图片加载框架" tabindex="-1">Glide 图片加载框架 <a class="header-anchor" href="#glide-图片加载框架" aria-label="Permalink to &quot;Glide 图片加载框架&quot;">​</a></h4><p>当 Glide 仅作为简单图片加载库使用时，不一定需要单独目录。</p><p>但如果已经开始：</p><ul><li>自定义 Module</li><li>自定义 Loader</li><li>编译期配置</li><li>网络适配</li></ul><p>则建议：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>com/example/myapp/</span></span>
<span class="line"><span>            └──glide/ # 存放glide框架相关的配置类</span></span></code></pre></div><p>用于统一管理 Glide 相关配置。</p><h4 id="网络请求库" tabindex="-1">网络请求库 <a class="header-anchor" href="#网络请求库" aria-label="Permalink to &quot;网络请求库&quot;">​</a></h4><p>当网络层逐渐复杂后，通常会统一抽象：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>com/example/myapp/</span></span>
<span class="line"><span>            └──http/</span></span>
<span class="line"><span>                ├── api/</span></span>
<span class="line"><span>                ├── interceptor/</span></span>
<span class="line"><span>                ├── server/</span></span>
<span class="line"><span>                ├── response/</span></span>
<span class="line"><span>                └── ...</span></span></code></pre></div><p>当网络相关能力开始集中后，像 Glide 网络配置这类内容，也可以归入网络层统一管理。</p><h4 id="数据库" tabindex="-1">数据库 <a class="header-anchor" href="#数据库" aria-label="Permalink to &quot;数据库&quot;">​</a></h4><p>例如 Room：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>com/example/myapp/</span></span>
<span class="line"><span>            └──db/</span></span>
<span class="line"><span>               ├──dao/ # dao 层分类</span></span>
<span class="line"><span>               ├──entity/ # 相关实体类</span></span>
<span class="line"><span>               └──.../</span></span></code></pre></div><h4 id="依赖注入" tabindex="-1">依赖注入 <a class="header-anchor" href="#依赖注入" aria-label="Permalink to &quot;依赖注入&quot;">​</a></h4><p>例如：</p><ul><li>Hilt</li><li>Dagger</li><li>Koin</li></ul><p>通常会建立：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>com/example/myapp/</span></span>
<span class="line"><span>            └──di/ # 依赖注入</span></span></code></pre></div><h3 id="其他目录" tabindex="-1">其他目录 <a class="header-anchor" href="#其他目录" aria-label="Permalink to &quot;其他目录&quot;">​</a></h3><h4 id="串口通信" tabindex="-1">串口通信 <a class="header-anchor" href="#串口通信" aria-label="Permalink to &quot;串口通信&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>com/example/myapp/</span></span>
<span class="line"><span>            └──serial/</span></span>
<span class="line"><span>                ├── config/     # 串口配置</span></span>
<span class="line"><span>                ├── manager/    # 串口管理</span></span>
<span class="line"><span>                ├── listener/   # 数据监听</span></span>
<span class="line"><span>                ├── protocol/   # 通信协议</span></span>
<span class="line"><span>                └── parser/     # 数据解析</span></span></code></pre></div><h4 id="自定义注解" tabindex="-1">自定义注解 <a class="header-anchor" href="#自定义注解" aria-label="Permalink to &quot;自定义注解&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>com/example/myapp/</span></span>
<span class="line"><span>            └──annotation/ # 存放自定义的注解类</span></span></code></pre></div><h4 id="kotlin-扩展函数" tabindex="-1">Kotlin 扩展函数 <a class="header-anchor" href="#kotlin-扩展函数" aria-label="Permalink to &quot;Kotlin 扩展函数&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>com/example/myapp/</span></span>
<span class="line"><span>            └──extensions/ # 存放扩展函数文件</span></span></code></pre></div><h4 id="任务类" tabindex="-1">任务类 <a class="header-anchor" href="#任务类" aria-label="Permalink to &quot;任务类&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>com/example/myapp/</span></span>
<span class="line"><span>            └──tasks/ # 存放各个任务类</span></span></code></pre></div><h3 id="目录扩展原则" tabindex="-1">目录扩展原则 <a class="header-anchor" href="#目录扩展原则" aria-label="Permalink to &quot;目录扩展原则&quot;">​</a></h3><p>通过以上目录扩展可以发现，新增一级目录通常遵循以下原则。</p><h4 id="_1-单一职责原则" tabindex="-1">1. 单一职责原则 <a class="header-anchor" href="#_1-单一职责原则" aria-label="Permalink to &quot;1. 单一职责原则&quot;">​</a></h4><p>每一级目录应聚焦单一职责。</p><p>避免将不相关逻辑混合存放。</p><h4 id="_2-功能聚合原则" tabindex="-1">2. 功能聚合原则 <a class="header-anchor" href="#_2-功能聚合原则" aria-label="Permalink to &quot;2. 功能聚合原则&quot;">​</a></h4><p>目录应围绕：</p><ul><li>功能模块</li><li>技术能力</li><li>业务领域</li></ul><p>进行聚合。</p><h4 id="_3-可维护性和可扩展性" tabindex="-1">3. 可维护性和可扩展性 <a class="header-anchor" href="#_3-可维护性和可扩展性" aria-label="Permalink to &quot;3. 可维护性和可扩展性&quot;">​</a></h4><p>目录结构应具备扩展空间。</p><p>新增功能时，能够自然融入，而不是不断推翻原有结构。</p><p>例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>service/</span></span>
<span class="line"><span>model/</span></span>
<span class="line"><span>http/</span></span></code></pre></div><p>都具备天然扩展能力。</p><h4 id="_4-避免横向膨胀" tabindex="-1">4. 避免横向膨胀 <a class="header-anchor" href="#_4-避免横向膨胀" aria-label="Permalink to &quot;4. 避免横向膨胀&quot;">​</a></h4><p>当一级目录数量开始明显增多时，应考虑：</p><ul><li>模块聚合</li><li>业务分层</li><li>feature 化</li></ul><p>而不是无限新增一级目录。</p><p>避免最终出现：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/user</span></span>
<span class="line"><span>/order</span></span>
<span class="line"><span>/pay</span></span>
<span class="line"><span>/chat</span></span>
<span class="line"><span>/video</span></span>
<span class="line"><span>/home</span></span>
<span class="line"><span>/profile</span></span></code></pre></div><p>导致根目录持续膨胀。</p><h3 id="架构目录扩展" tabindex="-1">架构目录扩展 <a class="header-anchor" href="#架构目录扩展" aria-label="Permalink to &quot;架构目录扩展&quot;">​</a></h3><p>目录结构最终应服务于架构设计。</p><p>不同架构下，目录划分也会有所区别。</p><h4 id="mvvm-分层结构" tabindex="-1">MVVM 分层结构 <a class="header-anchor" href="#mvvm-分层结构" aria-label="Permalink to &quot;MVVM 分层结构&quot;">​</a></h4><p>这个架构的详细内容可具体参见官方文档：<a href="https://developer.android.com/topic/architecture?hl=zh-cn" target="_blank" rel="noreferrer">https://developer.android.com/topic/architecture?hl=zh-cn</a></p><p>基于 Repository 的 MVVM 分层是目前较常见的一种组织方式，它会将：</p><ul><li>UI</li><li>数据源</li><li>数据仓库</li><li>ViewModel</li></ul><p>进行职责拆分。</p><p>典型结构如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>com/example/myapp/</span></span>
<span class="line"><span>            ├── model/</span></span>
<span class="line"><span>            ├── sources/</span></span>
<span class="line"><span>            │   ├── local/        # 本地 api 接口和实现类</span></span>
<span class="line"><span>            │   ├── remote/       # 远端 api 接口和实现类</span></span>
<span class="line"><span>            │   └── repository/   # 存放数据仓库接口和实现类</span></span>
<span class="line"><span>            ├── viewmodel/</span></span>
<span class="line"><span>            └── ui/</span></span></code></pre></div><p>这种结构的核心目标是：</p><ul><li>ViewModel 更轻量</li><li>数据来源更清晰</li><li>业务职责更明确</li></ul><div class="warning custom-block"><p class="custom-block-title">注意</p><p>不要让 ViewModel 同时承担：</p><ul><li>UI 控制</li><li>业务逻辑</li><li>数据处理</li><li>网络请求</li></ul><p>否则本质上只是换了一种形式继续耦合。</p></div><h2 id="模块化目录结构" tabindex="-1">模块化目录结构 <a class="header-anchor" href="#模块化目录结构" aria-label="Permalink to &quot;模块化目录结构&quot;">​</a></h2><p>当项目规模继续扩大后，可以进一步演化为模块化结构。</p><p>模块化之后，目录划分会更加偏向：</p><ul><li>业务域</li><li>能力域</li><li>基础设施层</li></ul><p>而不仅仅是简单的功能分类。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>工程目录结构没有绝对标准。</p><p>真正合理的目录结构，应当：</p><ul><li>清晰</li><li>稳定</li><li>易维护</li><li>易扩展</li></ul><p>目录的意义，不是追求 “分类越多越专业”，而是让项目能够随着业务增长依然保持可读性与可控性。</p><div class="tip custom-block"><p class="custom-block-title">演进</p><p>在实际开发中，应根据：</p><ul><li>项目规模</li><li>团队人数</li><li>架构复杂度</li><li>业务特点</li></ul><p>不断调整与演进目录结构，不要一味的机械套用固定模板。</p></div>`,115)])])}const b=s(e,[["render",i]]);export{u as __pageData,b as default};
