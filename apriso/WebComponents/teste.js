<script>
    (function () {

        function init() {
            if (typeof $Context !== 'undefined') {
                window.AprisoContext = $Context;
            }
        }

  // Garante que so roda depois do DOM montado
  if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
  }
    else {
        init();
  }
})();