import app from 'forumkit/site/app';
import AboutUs from './components/AboutUs';
import Troubleshooting from './components/Troubleshooting';
import addSideBar from "./addSideBar";

app.initializers.add('duzhenye/hello', (app) => {


  //console.log('[duzhenye/hello] 你好，网站！');
  app.routes.aboutUs = { path: '/about-us', component: AboutUs };
  app.routes.Troubleshooting = { path: '/troubleshooting', component: Troubleshooting };



  const multiplier = 1.75

  function loadMoreIfNeeded() {
    const distanceToBottom = -(
      (document.body.scrollHeight || document.documentElement.scrollHeight) -
      (document.body.scrollTop ||
        document.documentElement.scrollTop +
        document.documentElement.clientHeight)
    );

    if (distanceToBottom > document.documentElement.clientHeight * multiplier) return;

    $(".DiscussionList-loadMore button").click();
  }

  document.addEventListener("scroll", loadMoreIfNeeded, { passive: true });

  addSideBar();

});
