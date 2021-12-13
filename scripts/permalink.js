const { parse } = require('path');

hexo.extend.generator.register('archive', function (locals) {
  for (const data of locals.posts.data) {
    data.slug = parse(data.source).name;
  }
  return locals;
});

hexo.extend.filter.register('post_permalink', function (permalink) {
  return permalink.startsWith('archive-') ? permalink.slice(8) : permalink;
});
