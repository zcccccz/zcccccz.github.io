// use for email copy
(function name(params) {
    'use strict';
    //添加点击事件
    document.body.addEventListener('click', copy, true);

    //copy事件
    function copy(e) {
        //找到要复制的区域
        var
            t = e.target,
            c = t.dataset.copytarget,
            inp = (c ? document.querySelector(c) : null);
        //要复制的区域是否可以选中
        if (inp && inp.select) {
            //选中
            inp.select();

            try {
                //执行复制
                document.execCommand('copy');
            } catch (error) {
                alert('请使用Ctrl+c进行复制');
            }
        }
    }
})();