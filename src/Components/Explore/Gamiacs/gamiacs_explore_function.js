export const gam_explore_function = () => {

    var $cont = document.querySelector('.gam_cont');
    var $elsArr = [].slice.call(document.querySelectorAll('.gam_el'));
    var $closeBtnsArr = [].slice.call(document.querySelectorAll('.gam_el__close-btn'));

    setTimeout(function() {
      $cont.classList.remove('s--inactive');
    }, 200);

    $elsArr.forEach(function($gam_el) {
      $gam_el.addEventListener('click', function() {
        if (this.classList.contains('s--active')) return;
        $cont.classList.add('s--gam_el-active');
        this.classList.add('s--active');
      });
    });

    $closeBtnsArr.forEach(function($btn) {
      $btn.addEventListener('click', function(e) {
        e.stopPropagation();
        $cont.classList.remove('s--gam_el-active');
        document.querySelector('.gam_el.s--active').classList.remove('s--active');
      });
    });
}
