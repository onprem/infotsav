export const man_explore_function = () => {

    var $cont = document.querySelector('.man_cont');
    var $elsArr = [].slice.call(document.querySelectorAll('.man_el'));
    var $closeBtnsArr = [].slice.call(document.querySelectorAll('.man_el__close-btn'));

    setTimeout(function() {
      $cont.classList.remove('s--inactive');
    }, 200);

    $elsArr.forEach(function($man_el) {
      $man_el.addEventListener('click', function() {
        if (this.classList.contains('s--active')) return;
        $cont.classList.add('s--man_el-active');
        this.classList.add('s--active');
      });
    });

    $closeBtnsArr.forEach(function($btn) {
      $btn.addEventListener('click', function(e) {
        e.stopPropagation();
        $cont.classList.remove('s--man_el-active');
        document.querySelector('.man_el.s--active').classList.remove('s--active');
      });
    });
}
