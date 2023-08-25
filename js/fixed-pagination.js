document.addEventListener('scroll',function(){

    //滚动条高度+视窗高度 = 可见区域底部高度
    var visibleBottom = window.scrollY + document.documentElement.clientHeight;
    //可见区域顶部高度
    var visibleTop = window.scrollY;
    // 获取翻页按钮容器
    var pagination = document.getElementById('pagination');
    // 获取位置监测容器，此处采用评论区
    var eventlistner = document.getElementById('post-comment');
    if (eventlistner&&pagination){
    var centerY = eventlistner.offsetTop+(eventlistner.offsetHeight/2);
    if(centerY>visibleTop&&centerY<visibleBottom){
      pagination.style.display = 'flex';
    }else{
      pagination.style.display = 'none';
    }
  }
})