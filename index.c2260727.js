function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequireb90d;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequireb90d=o),o.register("kyEFX",(function(t,n){var a,o;e(t.exports,"register",(function(){return a}),(function(e){return a=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var r={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},o=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("lSJsn",(function(e,t){e.exports=new URL(o("kyEFX").resolve("lvhf2"),import.meta.url).toString()})),o.register("fmvTu",(function(e,t){e.exports=new URL(o("kyEFX").resolve("chi4c"),import.meta.url).toString()})),o.register("hJJyq",(function(e,t){e.exports=new URL(o("kyEFX").resolve("cSHB2"),import.meta.url).toString()})),o.register("3nDHS",(function(e,t){e.exports=new URL(o("kyEFX").resolve("bUqjf"),import.meta.url).toString()})),o.register("fWcwC",(function(e,t){e.exports=new URL(o("kyEFX").resolve("jy7RY"),import.meta.url).toString()})),o.register("gFDDD",(function(e,t){e.exports=new URL(o("kyEFX").resolve("abkcS"),import.meta.url).toString()})),o.register("e1jaq",(function(e,t){e.exports=new URL(o("kyEFX").resolve("eb9ab"),import.meta.url).toString()})),o.register("lmYkz",(function(e,t){e.exports=new URL(o("kyEFX").resolve("1hwOO"),import.meta.url).toString()})),o.register("dSoRJ",(function(e,t){e.exports=new URL(o("kyEFX").resolve("8pHSq"),import.meta.url).toString()})),o("kyEFX").register(JSON.parse('{"7bk21":"index.c2260727.js","lvhf2":"shopping-cart-svgrepo-com.74c80abf.svg","chi4c":"idea-think-svgrepo-com.8762a208.svg","cSHB2":"idea-svgrepo-com.0def47a9.svg","bUqjf":"quote-right-svgrepo-com.68187a5b.svg","jy7RY":"archive-remove.83b38397.svg","abkcS":"edit-svgrepo-com.48e160d9.svg","eb9ab":"delete-svgrepo-com.ac258e42.svg","1hwOO":"archive-svgrepo-com.5da47804.svg","8pHSq":"close-svgrepo-com.584b59dd.svg","9Jxmw":"index.5556f7e2.css"}'));var r=[{catId:"1",catName:"Task",catImg:o("lSJsn")},{catId:"2",catName:"Random Thought",catImg:o("fmvTu")},{catId:"3",catName:"Idea",catImg:o("hJJyq")},{catId:"4",catName:"Quote",catImg:o("3nDHS")}];var c=e=>{const t=o("fWcwC");return`<li\n    class="dataList rawCommonArchived"\n    data-rawId="${e.recordId}"\n  >\n    <div >\n      <img src=${e.catImg} width="32" height="32" alt="test" />\n    </div>\n    <p class=" noteName ">${e.nameInput}</p>\n    <p class=" noteCreateDate">${e.createDate}</p>\n    <p class="noteCatName">${e.catName}</p>\n    <p class="noteContent">${e.content}</p>\n    <p class="noteModificationDate ">${e.modificationDate}</p>\n\n    <div\n      class="buttonArchive"\n      data-mode="archive"\n      data-id="${e.recordId}"\n    >\n      <img src=${t} width="32" height="32" alt="test" />\n    </div>\n\n  </li>`};var d=e=>{const t=o("gFDDD"),n=o("e1jaq"),a=o("lmYkz");return`<li\n    class="dataList rawCommon"\n    data-rawId="${e.recordId}"\n  >\n    <div>\n      <img src=${e.catImg} width="32" height="32" alt="test" />\n    </div>\n    <p class=" noteName ">${e.nameInput}</p>\n    <p class=" noteCreateDate">${e.createDate}</p>\n    <p class="noteCatName">${e.catName}</p>\n    <p class="noteContent">${e.content}</p>\n    <p class="noteModificationDate ">${e.modificationDate}</p>\n    <div class="buttonEdit" data-mode="edit" data-id="${e.recordId}">\n      <img src=${t} width="32" height="32" alt="test" />\n    </div>\n    <div\n      class="buttonArchive"\n      data-mode="archive"\n      data-id="${e.recordId}"\n    >\n      <img src=${a} width="32" height="32" alt="test" />\n    </div>\n    <div class="buttonDelete" data-mode="delete" data-id="${e.recordId}">\n      <img src=${n} width="32" height="32" alt="test" />\n    </div>\n  </li>`};var i=e=>{o("lmYkz");return`<li\n    class="dataList rawCommonSummary"\n\n  >\n    <div >\n      <img src=${e.catImg} width="32" height="32" alt="test" />\n    </div>\n    <p class=" noteName ">${e.nameInput}</p>\n    <p class=" totalActive">${e.totalActive}</p>\n    <p class=" totalArchived">${e.totalArchived}</p>\n  </li>`};var l=()=>{const e=JSON.parse(localStorage.getItem("list"))||[],t=[],n=e.filter((e=>!e.archived)).map((e=>` ${d(e)} `)).join(""),a=e.filter((e=>e.archived)).map((e=>` ${c(e)} `)).join("");r.forEach((n=>{const a=e.filter((e=>e.catId==n.catId)),o={catImg:n.catImg,nameInput:n.catName,totalActive:a.filter((e=>!e.archived)).length,totalArchived:a.filter((e=>e.archived)).length};t.push(o)}));const o=t.filter((e=>e.totalActive>0||e.totalArchived>0)).map((e=>` ${i(e)} `)).join(""),l=document.querySelector(".tableHeader");l.innerHTML="",l.insertAdjacentHTML("beforeend",n);const s=document.querySelector(".archivedList");s.innerHTML="",s.insertAdjacentHTML("beforeend",a);const m=document.querySelector(".summaryList");m.innerHTML="",m.insertAdjacentHTML("beforeend",o)};var s=(e=!1)=>{e&&(e.stopPropagation(),e.preventDefault());const t=document.getElementById("modal_form");document.getElementById("modal_form").closest(".modal_overlay").classList.remove("active"),t.innerHTML=""};var m=()=>(new Date).toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"});var u=(e,t)=>{const n=JSON.parse(localStorage.getItem("list"))||[];if(e.contentInput.length>0&&e.contentInput.length>0){const t=r.filter((t=>t.catId===e.categoryID)),a={catId:t[0].catId,catName:t[0].catName,catImg:t[0].catImg,createDate:m(),content:e.contentInput,nameInput:e.nameInput,mode:e.mode,recordId:Date.now()+Math.round(1e3*Math.random()),modificationDate:"",archived:!1};n.push(a),localStorage.setItem("list",JSON.stringify(n)),s(),l()}else alert("All fields must be filled")};var p=(e,t)=>{const n=r.filter((t=>t.catId===e.categoryID));editedElem=t.map((t=>(t.recordId==e.id&&(t.content=e.contentInput,t.nameInput=e.nameInput,t.modificationDate=m(),t.catId=n[0].catId,t.catName=n[0].catName,t.catImg=n[0].catImg),t))),localStorage.setItem("list",JSON.stringify(editedElem)),s(),l()};var v=(e,t)=>{const n=JSON.parse(localStorage.getItem("list"))||[];editedElem=n.filter((t=>t.recordId!=e.id)),localStorage.setItem("list",JSON.stringify(editedElem)),s(),l()};var g=(e,t)=>{const n=JSON.parse(localStorage.getItem("list"))||[];editedElem=n.map((t=>(t.recordId==e.id&&(t.archived=!t.archived,t.modificationDate=m()),t))),localStorage.setItem("list",JSON.stringify(editedElem)),s(),l()};var f=({mode:e,id:t=0,data:n})=>{document.querySelector("#btn-close").addEventListener("click",(()=>{s()})),document.querySelector("#btn-cancel").addEventListener("click",(()=>{s()})),"edit"===e?document.querySelector("#btn-confirm-edit").addEventListener("click",(e=>{e.preventDefault();const a={categoryID:document.querySelector("#category").value,contentInput:document.querySelector("#contentInput").value,nameInput:document.querySelector("#nameInput").value,mode:"edit",id:t};p(a,n)})):"deleted"===e?document.querySelector("#btn-confirm-deleted").addEventListener("click",(e=>{e.preventDefault();v({id:t})})):"archived"===e?document.querySelector("#btn-confirm-archived").addEventListener("click",(e=>{e.preventDefault();g({archived:!0,mode:"archived",id:t})})):document.querySelector("#btn-confirm").addEventListener("click",(e=>{e.preventDefault();const t={categoryID:document.querySelector("#category").value,contentInput:document.querySelector("#contentInput").value,nameInput:document.querySelector("#nameInput").value,mode:"add"};u(t)})),document.getElementById("modal_form").closest(".modal_overlay").classList.add("active")};var b=(e,t)=>{const n=o("dSoRJ");form_html=`\n    <form class="form">\n      <div>\n        <h3 class="modal-title">Add note</h3>\n        <button type="button" class="btn-close" id="btn-close">\n          <img src="${n}" width="32" height="32" alt="close" />\n        </button>\n      </div>\n      <div class="input-container">\n        <label>\n          Note Name\n          <input\n            type="text"\n            name="notes-name"\n            id="nameInput"\n            placeholder="Input note name"\n            required\n          />\n        </label>\n\n        <label>\n          Content\n          <textarea\n            type="text"\n            name="notes-name"\n            id="contentInput"\n            placeholder="Input note name"\n            required\n          ></textarea>\n        </label>\n\n        <select id="category" name="category">\n          ${e}\n        </select>\n      </div>\n      <div class="form__btn-list">\n        <button id="btn-cancel" class="form-button form-btn" type="button">\n          Cancel\n        </button>\n        <button id="btn-confirm" class="form-button form-btn" type="submit">\n          Confirm\n        </button>\n      </div>\n    </form>\n  `;document.getElementById("modal_form").innerHTML=form_html;f({data:t})};document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("modal_form"),t=document.querySelector(".create-note"),n=JSON.parse(localStorage.getItem("list"))||[];t.addEventListener("click",(e=>{d(e)})),l();const a=(t=!1)=>{t&&(t.stopPropagation(),t.preventDefault()),document.getElementById("modal_form").closest(".modal_overlay").classList.remove("active"),e.innerHTML=""},c=(e="1")=>r.map((t=>e==t.catId?`<option value="${t.catId}" selected>${t.catName}</option>`:`<option value="${t.catId}" >${t.catName}</option>`)).join(""),d=(t,a)=>{let r="";if("add"==a)b(c(),n);else if(t.target.closest("[data-mode]")&&"edit"==t.target.closest("[data-mode]").dataset.mode){const d=n.filter((e=>e.recordId==t.target.closest("[data-mode]").dataset.id))[0].catId;r=`\n        <form class="form">\n          <div>\n            <h3 class="modal-title">${"add"===a?"Add note":"Edit note"}</h3>\n            <button type="button" class="btn-close" id="btn-close">\n              <img src="${o("dSoRJ")}" width="32" height="32" alt="close" />\n            </button>\n          </div>\n          <div class="input-container">\n            <label>\n              Note Name\n              <input\n                type="text"\n                name="notes-name"\n                id="nameInput"\n                value="${t.target.parentElement.parentElement.children[1].innerHTML}"\n                placeholder="Input note name"\n                required\n              />\n            </label>\n\n            <label>\n              Content\n              <textarea\n                type="text"\n                name="notes-name"\n                id="contentInput"\n                placeholder="Input note name"\n                required\n              >\n${t.target.parentElement.parentElement.children[4].innerHTML}</textarea\n              >\n            </label>\n\n            <select id="category" name="category">\n              ${c(d)}\n            </select>\n          </div>\n          <div class="form__btn-list">\n            <button id="btn-cancel" class="form-button form-btn" type="button">\n              Cancel\n            </button>\n            <button\n              id="btn-confirm-edit"\n              class="form-button form-btn"\n              type="submit"\n            >\n              Confirm\n            </button>\n          </div>\n        </form>\n      `,e.innerHTML=r;const i={mode:"edit",id:t.target.closest("[data-id]").dataset.id,data:n};f(i)}else if(t.target.closest("[data-mode]")&&("delete"==t.target.closest("[data-mode]").dataset.mode||"archive"==t.target.closest("[data-mode]").dataset.mode)){const a=o("dSoRJ"),c="delete"===t.target.closest("[data-mode]").dataset.mode?"Delete note":"Archive note",d="delete"===t.target.closest("[data-mode]").dataset.mode?"deleted":"archived";r=`\n        <form class="delete-archive-form">\n          <div>\n            <h3 class="modal-title">${c}</h3>\n            <button type="button" class="btn-close" id="btn-close">\n              <img src="${a}" width="32" height="32" alt="close" />\n            </button>\n          </div>\n          <div class="delete-archive">\n            <p>\n              Note <strong>${t.target.parentElement.parentElement.children[1].innerHTML}</strong> will be ${d}. Press\n              <strong>OK</strong> for confirmation\n            </p>\n          </div>\n          <div class="form__btn-list">\n            <button id="btn-cancel" class="form-button form-btn" type="button">\n              Cancel\n            </button>\n            <button id="btn-confirm-${d}" class="form-button form-btn" type="submit">\n              Confirm\n            </button>\n          </div>\n        </form>\n      `,e.innerHTML=r;const i={mode:d,id:t.target.closest("[data-id]").dataset.id,data:n};f(i)}};document.querySelector(".tableHeader").addEventListener("click",(e=>d(e,"edit"))),document.querySelector(".archivedList").addEventListener("click",(e=>d(e,"edit"))),document.querySelector(".create-note").addEventListener("click",(e=>{d(e,"add")})),document.addEventListener("click",(e=>{e.target.classList.contains("modal_overlay")&&a()})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&a()}))}));
//# sourceMappingURL=index.c2260727.js.map
