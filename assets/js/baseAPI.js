// 每次 发出$.get() 或 $.post 或 $.ajax() 前会调用函数$.ajaxPrefilter()
// 这个函数可以拿到我们给 ajax提供的配置对象



$.ajaxPrefilter(function(options){
  // option.url 可以获取到发出请求接口的参数
  // 设置根路径,每次请求前自动拼接
  // 作用:便于维护,不用每次发请求都填写根路径,接口根路径发生改变只需改变 baseAPI 中的配置
  options.url = 'http://ajax.frontend.itheima.net' + options.url
})