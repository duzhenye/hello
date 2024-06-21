import Component from 'forumkit/common/Component';
import Page from 'forumkit/common/components/Page';
import ItemList from 'forumkit/common/utils/ItemList';
import IndexPage from 'forumkit/site/components/IndexPage';
import listItems from 'forumkit/common/helpers/listItems';

export default class Troubleshooting extends Page {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle("故障排除");
  }

  view() {
    return m(".IndexPage", [

      m(
        ".container",
        m(".IndexPageContainer", [

          m(
            "div.IndexPageBer.leftber",
            m("div", IndexPage.prototype.sidebarItems().toArray())
          ),

          m(
            ".IndexPage-results.centerber",
            m("div.ContentPages", this.pageContent()),
          ),

          m(
            "div.IndexPageBer.rightbar",
            m("div", IndexPage.prototype.rightbarItems().toArray())
          ),

        ])
      ),
    ]);
  }


  pageContent() {

    return (
        <div class="Pages-page">
          <header class="Hero PageHero">
            <div class="iconcontainer">
              <div class="fontico"><i class="fas fa-info-circle"></i></div>
              <div class="icocont">
                <div class="titolo1">故障排除</div>
              </div>
            </div>
          </header>
          <div class="Pages-container">
            <div class="Post-body">
              <p>
                如果 Forumkit 未按预期安装或工作，您应该做的第一件事是再次检查您的环境是否满足系统要求。如果您缺少 Forumkit 需要运行的内容，则需要先进行补救。
              </p>

              <p>
                接下来，您应该花几分钟时间搜索<a href="/">支持论坛</a>和问题跟踪器。可能有人已经报告了该问题，并且修复程序可用或正在进行中。如果您已彻底搜索，但找不到有关该问题的任何信息，则是时候开始进行故障排除了。
              </p>

              <h2>1.激活调试模式</h2>
              <blockquote>
                <p><b>跳过生产</b></p>
                <p>
                    这些调试工具非常有用，但可能会公开不应公开的信息。 如果您在暂存或开发环境中，这些步骤很好，但如果您不知道自己在做什么，请在生产环境中跳过此步骤。
                </p>
              </blockquote>

              <p>
                在继续前，您应当启用 Forumkit 的调试模式。 用文本编辑器打开 <b>config.php</b> ,将 <b>debug</b> 的值改为 <b>true</b> ,然后保存文件即可。 开启后,Forumkit 会显示详细的错误报告，方便您了解到底发生了什么。
              </p>

              <p>
                如果上面的改动不起任何作用，并且论坛所有页面都变成空白，请试试将 <b>php.ini</b> 文件中的 <b>display_errors</b> 设置为 <b>On</b> 。
              </p>






            </div>
          </div>
        </div>
    );
  }


}
