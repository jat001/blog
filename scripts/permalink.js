hexo.extend.filter.register('post_permalink', function (permalink) {
  if (RegExp('^20\\d{2}/').test(permalink) && Number(permalink.slice(0, 4)) < 2023)
    permalink = permalink.slice(5);
  if (permalink.startsWith('archive-'))
    permalink = permalink.slice(8);
  return permalink;
});
