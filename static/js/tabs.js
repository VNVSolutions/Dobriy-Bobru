var i, tabcontent, tablinks;


function openTabs(evt, tabsName) {
    const currentClickClass = evt.currentTarget.closest('div')
    const tabItem = document.querySelectorAll('.tab__item')
    tabcontent = currentClickClass.getElementsByClassName("tabcontent");
    tablinks = currentClickClass.querySelectorAll(".tablinks");
    const tabsSelector =  document.getElementById(tabsName)
    tabsSelector.style.display = "block";
    evt.currentTarget.className += " active";
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    for (i = 0; i < tabItem.length; i++) {
        if((tabItem[i].querySelector('.tab')).matches(`.${(currentClickClass.className.split(" "))[1]}`)){
            tabcontent = tabItem[i].querySelectorAll('.tabcontent')

            for (i = 0; i < tabcontent.length; i++) {

                 tabcontent[i].style.display = "none";
            }
        }
    }
    tabsSelector.style.display = "block";
    if( evt.currentTarget.className.includes(`active`) ){
        evt.currentTarget.classList.remove('active')
    }else
        evt.currentTarget.className += " active";
}

function chooseTabs (evt){
    const currentClickClass = evt.currentTarget.closest('div')
    tablinks = currentClickClass.querySelectorAll(".tablinks");

    evt.currentTarget.className += " active";
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    if( evt.currentTarget.className.includes(`active`) ){
        console.log(evt.currentTarget.className);
        evt.currentTarget.classList.remove('active')
    }else
     evt.currentTarget.className += " active";
}
