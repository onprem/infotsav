export const susp_explore_function = () => {

    var $cont = document.querySelector('.susp_cont');
    var $elsArr = [].slice.call(document.querySelectorAll('.susp_el'));
    var $closeBtnsArr = [].slice.call(document.querySelectorAll('.susp_el__close-btn'));

    setTimeout(function() {
      $cont.classList.remove('s--inactive');
    }, 200);

    $elsArr.forEach(function($susp_el) {
      $susp_el.addEventListener('click', function() {
        if (this.classList.contains('s--active')) return;
        $cont.classList.add('s--susp_el-active');
        this.classList.add('s--active');
      });
    });

    $closeBtnsArr.forEach(function($btn) {
      $btn.addEventListener('click', function(e) {
        e.stopPropagation();
        $cont.classList.remove('s--susp_el-active');
        document.querySelector('.susp_el.s--active').classList.remove('s--active');
      });
    });
}
