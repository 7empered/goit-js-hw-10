import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-A92OCY9B.js";const a=document.getElementById("datetime-picker"),r=document.querySelector("[data-start]"),p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),D=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let s,d;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<=new Date?(y.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),r.disabled=!0):(s=e,r.disabled=!1)}};h(a,g);r.addEventListener("click",()=>{s&&(r.disabled=!0,a.disabled=!0,d=setInterval(()=>{const e=s-new Date;if(e<=0){clearInterval(d),u(0,0,0,0),a.disabled=!1;return}const n=q(e);u(n.days,n.hours,n.minutes,n.seconds)},1e3))});function q(t){const i=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:f}}function o(t){return String(t).padStart(2,"0")}function u(t,e,n,c){p.textContent=o(t),S.textContent=o(e),D.textContent=o(n),b.textContent=o(c)}
//# sourceMappingURL=1-timer.js.map
