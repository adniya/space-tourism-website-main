
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabs.forEach(tab => tab.addEventListener('click', changeTab));

tabList.addEventListener('keydown', changeFoucus );
let tabfocus=0;
function changeFoucus(e){
    const keydownLeft=37;
const keydownRight=39;

if(e.keyCode === keydownLeft || e.keyCode === keydownRight){
   tabs[tabfocus].setAttribute("tabindex", -1);
}
if(e.keyCode === keydownRight){
tabfocus++;
if(tabfocus >= tabs.length){
    tabfocus=0;
}}
if(e.keyCode === keydownLeft){
    tabfocus--;
    if(tabfocus < 0){
        tabfocus=tabs.length -1;
    } }
tabs[tabfocus].setAttribute("tabindex", 0);
tabs[tabfocus].focus();
}
function changeTab(e){
    const targetTab= e.target;
    const targetPanel=targetTab.getAttribute("aria-controls");
    const  targetImage=targetTab.getAttribute('data-image');
    const tabContainer=targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;
    
    tabContainer
    .querySelector('[aria-selected="true"]').
    setAttribute("aria-selected",false);
    targetTab.setAttribute("aria-selected", true);



    mainContainer.querySelectorAll('[role="tabpanel"]').forEach((panel) => panel.setAttribute('hidden', true));

    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');
   mainContainer.querySelectorAll('picture').forEach((pic) => pic.setAttribute('hidden', true));
   mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');
}