!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},n=null;t.startBtn.addEventListener("click",(function(){n=setInterval((function(){document.body.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16))),t.startBtn.setAttribute("disabled",!0)}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.startBtn.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.633c59a9.js.map