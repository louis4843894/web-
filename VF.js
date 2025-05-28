/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// 讓所有 p 標籤在滑鼠移入時，字體顏色變換並加點小動態
document.querySelectorAll('p').forEach(p => {
p.addEventListener('mouseenter', () => {
    p.style.transition = 'color 0.4s ease, transform 0.3s ease';
    p.style.color = '#16a085';
    p.style.transform = 'scale(1.02)';
});
p.addEventListener('mouseleave', () => {
    p.style.color = '';
    p.style.transform = '';
});
});

// 讓 ul li 在點擊時切換顏色，模擬高亮效果
document.querySelectorAll('ul li').forEach(li => {
li.addEventListener('click', () => {
    if (li.style.color === 'rgb(22, 160, 133)') {
        li.style.color = '';
        li.style.fontWeight = '600';
    } else {
        li.style.color = '#16a085';
        li.style.fontWeight = 'bold';
    }
    });
});
document.querySelectorAll('.custom-tooltip').forEach(el => {
    // 建立 tooltip 元素
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip-box';
    tooltip.textContent = el.getAttribute('data-tooltip');
    document.body.appendChild(tooltip);

el.addEventListener('mouseenter', e => {
    tooltip.classList.add('show');

    // 取得滑鼠位置
    const rect = el.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    // 預設位置在元素上方中間
    let top = rect.top - tooltipRect.height - 8;
    let left = rect.left + (rect.width - tooltipRect.width) / 2;

    // 避免超出左邊界
    if (left < 8) left = 8;
    // 避免超出右邊界
    if (left + tooltipRect.width > window.innerWidth - 8) {
        left = window.innerWidth - tooltipRect.width - 8;
    }
    // 如果上方空間不足，改顯示在下方
    if (top < 8) {
        top = rect.bottom + 8;
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
    });

el.addEventListener('mouseleave', () => {
    tooltip.classList.remove('show');
    });
});