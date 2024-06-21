import Component from 'forumkit/common/Component';
import Page from 'forumkit/common/components/Page';
import ItemList from 'forumkit/common/utils/ItemList';
import IndexPage from 'forumkit/site/components/IndexPage';
import listItems from 'forumkit/common/helpers/listItems';

export default class AboutUs extends Page {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle("关于我们");
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
                <div class="titolo1">现代论坛</div>
              </div>
            </div>
          </header>
          <div class="Pages-container">
            <div class="Post-body"><p>想法，无论大小，总是从人开始。</p>

              <p>
                项目、产品和以人为本的想法成长为社区。
              </p>

              <p>
                当平台与每个人一起流动时，协作效果最好。
              </p>

              <h2>为什么选择 Forumkit</h2>
              <ul>
                <li>Forumkit 是一个建立社区的平台。</li>
                <li>但不仅仅是另一个聊天应用程序或其他论坛网站。 Forumkit 是对老式公告板论坛的现代演绎，您可能还记得互联网早期的论坛。</li>
                <li>凭借全新的视角和新的目标，Forumkit旨在成为下一个互联网文化时代的社区平台。</li>
              </ul>

              <h2>我们提供什么</h2>
              <ul>
                <li><b>论坛：</b> 讨论广泛的技术主题，从 Web 开发和移动应用程序开发到机器学习和人工智能。</li>
                <li><b>问与答：</b> 从社区中的其他程序员和专家那里获得帮助。</li>
                <li><b>资源：</b> 查找有用的文章、教程和其他资源，以帮助您学习和成长为程序员。</li>
                <li><b>博客：</b> 分享您对世界各地的新闻和故事。</li>
                <li><code>composer require duzhenye/hello *@dev</code></li>
              </ul>

              <h2>为了你和你的朋友</h2>
              <p>为人类优化，为网络复兴做好准备。
              Forumkit 旨在为未来几十年的互联网公民及其构建的网络奠定稳定的基础。 <a href="/admin">管理</a> 在当今的互联网中，保持闭源是没有意义的。分叉它，破解它，提供托管，用作其他应用程序的基础，为社区做出贡献。不知道从哪里开始？使用 Forumkit 来学习建筑！</p>
              <p>如果您喜欢社交，喜欢与志同道合的人聊天，并希望作为早起的鸟儿来引导 Forumkit 的发展，请单击此链接！</p></div>
          </div>
        </div>
    );
  }


}
