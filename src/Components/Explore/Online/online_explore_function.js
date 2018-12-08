export const online_explore_function = () => {

    var $cont = document.querySelector('.online_cont');
    var $elsArr = [].slice.call(document.querySelectorAll('.online_el'));
    var $closeBtnsArr = [].slice.call(document.querySelectorAll('.online_el__close-btn'));

    setTimeout(function() {
      $cont.classList.remove('s--inactive');
    }, 200);

    $elsArr.forEach(function($online_el) {
      $online_el.addEventListener('click', function() {
        if (this.classList.contains('s--active')) return;
        $cont.classList.add('s--online_el-active');
        this.classList.add('s--active');
      });
    });

    $closeBtnsArr.forEach(function($btn) {
      $btn.addEventListener('click', function(e) {
        e.stopPropagation();
        $cont.classList.remove('s--online_el-active');
        document.querySelector('.online_el.s--active').classList.remove('s--active');
      });
    });
}
