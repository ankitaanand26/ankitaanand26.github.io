const btn=document.getElementById('themeToggle');
let dark=false;
btn.addEventListener('click',()=>{
  dark=!dark;
  document.documentElement.style.setProperty('--bg',dark?'#161616':'#f5f3ee');
  document.documentElement.style.setProperty('--paper',dark?'#1e1e1d':'#fbfaf7');
  document.documentElement.style.setProperty('--ink',dark?'#f4f1ea':'#181817');
  document.documentElement.style.setProperty('--muted',dark?'#aaa69d':'#68665f');
  document.documentElement.style.setProperty('--line',dark?'#383733':'#d9d5cb');
  document.documentElement.style.setProperty('--accent2',dark?'#292620':'#e9dfc9');
  btn.textContent=dark?'☾':'☼';
});
