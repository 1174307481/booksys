$(document).ready(function() {
    $('#logoutBtn').click(function() {
        sessionStorage.clear();
        window.location.href = 'login.html';
    });

    $('.sidebar a').click(function(e) {
        e.preventDefault();
        $('.sidebar a').removeClass('active');
        $(this).addClass('active');
        const url = $(this).attr('href');
        const breadcrumb = $(this).data('breadcrumb');
        if (url !== '#') {
            $('#contentFrame').attr('src', url);
            updateBreadcrumb(breadcrumb);
        }
    });

    $('.menu-toggle').click(function(e) {
        e.preventDefault();
        const submenu = $(this).next('.submenu');
        submenu.slideToggle(300, function() {
            const icon = $(this).prev('.menu-toggle').find('.toggle-icon');
            if (submenu.is(':visible')) {
                icon.attr('src', 'img/up.svg');
            } else {
                icon.attr('src', 'img/down.svg');
            }
        });
    });

    function updateBreadcrumb(breadcrumb) {
        const breadcrumbContainer = $('#breadcrumb');
        breadcrumbContainer.empty();
        const parts = breadcrumb.split('>');
        parts.forEach((part, index) => {
            if (index > 0) {
                breadcrumbContainer.append(' > ');
            }
            breadcrumbContainer.append(`<span href="#">${part}</span>`);
        });
    }

    // 默认展开第一个菜单并设置默认选中状态
    const firstMenuToggle = $('.menu-toggle').first();
    const firstSubmenu = firstMenuToggle.next('.submenu');
    firstSubmenu.show();
    firstMenuToggle.find('.toggle-icon').attr('src', 'img/up.svg');

    // const firstLink = firstSubmenu.find('a').first();
    // firstLink.addClass('active');
    // $('#contentFrame').attr('src', firstLink.attr('href'));
    // updateBreadcrumb(firstLink.data('breadcrumb'));
});
