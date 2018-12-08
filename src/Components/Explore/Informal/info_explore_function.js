export const info_explore_function = () => {

    var $cont = document.querySelector('.info_cont');
    var $elsArr = [].slice.call(document.querySelectorAll('.info_el'));
    var $closeBtnsArr = [].slice.call(document.querySelectorAll('.info_el__close-btn'));

    setTimeout(function() {
      $cont.classList.remove('s--inactive');
    }, 200);

    $elsArr.forEach(function($info_el) {
      $info_el.addEventListener('click', function() {
        if (this.classList.contains('s--active')) return;
        $cont.classList.add('s--info_el-active');
        this.classList.add('s--active');
      });
    });

    $closeBtnsArr.forEach(function($btn) {
      $btn.addEventListener('click', function(e) {
        e.stopPropagation();
        $cont.classList.remove('s--info_el-active');
        document.querySelector('.info_el.s--active').classList.remove('s--active');
      });
    });
}
