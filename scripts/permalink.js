hexo.extend.filter.register('post_permalink', function (permalink) {
  return permalink.startsWith('archive-') ? permalink.slice(8) : permalink;
});
