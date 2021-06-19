// Invoke Functions Call on Document Loaded
document.addEventListener('DOMContentLoaded', function () {
  hljs.highlightAll();
});



let alertWrapper = document.querySelector('.alerts--wrapper')
let alertClose = document.querySelector('.alert__close')


if (alertWrapper) {
  alertClose.addEventListener('click', () =>
    alertWrapper.style.display = 'none'
  )
}
