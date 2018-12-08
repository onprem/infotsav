export const robo_explore_function = () => {

    var $cont = document.querySelector('.robo_cont');
    var $elsArr = [].slice.call(document.querySelectorAll('.robo_el'));
    var $closeBtnsArr = [].slice.call(document.querySelectorAll('.robo_el__close-btn'));

    setTimeout(function() {
      $cont.classList.remove('s--inactive');
    }, 200);

    $elsArr.forEach(function($robo_el) {
      $robo_el.addEventListener('click', function() {
        if (this.classList.contains('s--active')) return;
        $cont.classList.add('s--robo_el-active');
        this.classList.add('s--active');
      });
    });

    $closeBtnsArr.forEach(function($btn) {
      $btn.addEventListener('click', function(e) {
        e.stopPropagation();
        $cont.classList.remove('s--robo_el-active');
        document.querySelector('.robo_el.s--active').classList.remove('s--active');
      });
    });
}
