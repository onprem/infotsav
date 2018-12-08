export const tech_explore_function = () => {

    var $cont = document.querySelector('.tech_cont');
    var $elsArr = [].slice.call(document.querySelectorAll('.tech_el'));
    var $closeBtnsArr = [].slice.call(document.querySelectorAll('.tech_el__close-btn'));

    setTimeout(function() {
      $cont.classList.remove('s--inactive');
    }, 200);

    $elsArr.forEach(function($tech_el) {
      $tech_el.addEventListener('click', function() {
        if (this.classList.contains('s--active')) return;
        $cont.classList.add('s--tech_el-active');
        this.classList.add('s--active');
      });
    });

    $closeBtnsArr.forEach(function($btn) {
      $btn.addEventListener('click', function(e) {
        e.stopPropagation();
        $cont.classList.remove('s--tech_el-active');
        document.querySelector('.tech_el.s--active').classList.remove('s--active');
      });
    });
}
