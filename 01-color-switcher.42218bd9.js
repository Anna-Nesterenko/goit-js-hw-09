const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};let e=null;t.startBtn.addEventListener("click",(()=>{e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.startBtn.setAttribute("disabled",!0)}),1e3)})),t.stopBtn.addEventListener("click",(()=>{clearInterval(e),t.startBtn.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.42218bd9.js.map