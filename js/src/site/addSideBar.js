import app from 'forumkit/site/app';
import { extend } from 'forumkit/common/extend';
import IndexPage from 'forumkit/site/components/IndexPage';
import Separator from 'forumkit/common/components/Separator';
import LinkButton from 'forumkit/common/components/LinkButton';

export default function () {
  
  // 在索引页面的侧边栏中添加一个指向标签页面的链接，以及一个包含所有标签的列表。
  extend(IndexPage.prototype, 'rightbarItems', function (items) {

    items.add(
      'sidebar-about',
      <LinkButton icon="fas fa-info-circle" href={'/about-us'}>
        {app.translator.trans('hello.site.about')}
      </LinkButton>,
      -14
    );

    items.add(
      'sidebar-troubleshooting',
      <LinkButton icon="fas fa-info-circle" href={'/troubleshooting'}>
        {app.translator.trans('hello.site.troubleshooting')}
      </LinkButton>,
      -14
    );

    const CustomFooter = () => {
      const currentYear = new Date().getFullYear();

      return (
        <span className="CustomSidebarFooter">© {currentYear} Forumkit</span>
      );
    }

    items.add('custom-sidebar', CustomFooter(), -14);

  });
}
