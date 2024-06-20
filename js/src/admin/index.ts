import app from 'forumkit/admin/app';

app.initializers.add('duzhenye/hello', () => {
  console.log('[duzhenye/hello] 您好，管理员！');
});
