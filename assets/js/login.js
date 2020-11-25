$(function(){
  // 去注册
  $('#link_regbox').on('click',function(){
    $(this).parent().hide().siblings('.regbox').show()
  })
  
  // 去登录
  $('#link_login').on('click',function(){
    $(this).parent().hide().siblings('.login').show()
  })
  
  // layui 校验规则设置
  let form = layui.form

  form.verify({
    pwd: [
      /^[\S]{6,12}$/
      ,'密码必须6到12位，且不能出现空格'
    ], 
    // 验证注册的两次密码是否一致
    rpwd:function(value){
      if($('.regbox [name=password]').val()!=value){
        return '两次密码不一致';
      }
    }
  })

  // 注册
  $('#form_reg').on('submit',function(e){
    e.preventDefault()
    $.ajax({
      type:'POST',
      url:'http://ajax.frontend.itheima.net/api/reguser',
      data:{
        username:$('#form_reg [name=username]').val().trim(),
        password:$('#form_reg [name=password]').val().trim()
      },
      success(res){
        if(res.status!==0){return layer.msg(res.message)}
        layer.msg(res.message)
        $('#link_login').click()
      }
    })
  })

  // 登录
  $('#form_login').on('submit',function(e){
    e.preventDefault()
    $.ajax({
      type:'POST',
      url:'http://ajax.frontend.itheima.net/api/login',
      data:{
        username:$('#form_login [name=username]').val().trim(),
        password:$('#form_login [name=password]').val().trim()
      },
      success(res){
        // 登录失败提示消息
        if(res.status!==0){return layer.msg(res.message, {icon: 5})}
        // 登录成功提示消息
        layer.msg(res.message, {icon: 1})
        // 登录成功保存token
        localStorage.setItem('token',res.token)
      }
    })
  })


})