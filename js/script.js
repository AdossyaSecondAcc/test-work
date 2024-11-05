window.addEventListener('DOMContentLoaded', () => {

const sidebarList = document.querySelector('.sidebar__list'),
    sidebarNav = document.querySelectorAll('.sidebar__item'),
    dataShow = document.querySelectorAll("[data-show='show']");
        

sidebarList.addEventListener('click', (e) => {
    const element = e.target.closest('.sidebar__item');
        if (element){
            sidebarNav.forEach((item, i) => {

                if (item === element){
                    dataShow.forEach(item => {
                        item.classList.remove('active');
                    })
                    dataShow[i].classList.add('active');
                }

                item.classList.remove('active');
                element.classList.add('active');
            })
        }
})




})