/**
 * Script chính - Website Nhóm 1 Lập trình Web
 * Các chức năng: popup chào mừng, ẩn/hiện thông tin thành viên, menu mobile, form liên hệ
 */

(function () {
    'use strict';

    // ===== Popup chào mừng khi mở trang chủ (chỉ lần đầu) =====
    var pathname = window.location.pathname || '';
    var isHome = pathname === '/' || pathname === '' || pathname.endsWith('index.html') || pathname.endsWith('/');
    var welcomeShown = sessionStorage.getItem('welcomeShown');
    var modal = document.getElementById('welcome-modal');
    if (!welcomeShown && isHome && modal) {
        setTimeout(function () {
            modal.classList.add('show');
            sessionStorage.setItem('welcomeShown', '1');
        }, 500);
    }

    // Đóng modal khi click nút đóng hoặc Đồng ý
    function closeWelcomeModal() {
        var modal = document.getElementById('welcome-modal');
        if (modal) modal.classList.remove('show');
    }

    var closeBtn = document.querySelector('.modal-close');
    var okBtn = document.querySelector('.modal-ok');
    if (closeBtn) closeBtn.addEventListener('click', closeWelcomeModal);
    if (okBtn) okBtn.addEventListener('click', closeWelcomeModal);

    if (modal) modal.addEventListener('click', function (e) {
        if (e.target === this) closeWelcomeModal();
    });

    // ===== Ẩn/hiện thông tin chi tiết khi click vào ảnh thành viên =====
    var cards = document.querySelectorAll('.member-card');
    cards.forEach(function (card) {
        var avatar = card.querySelector('.member-avatar');
        if (!avatar) return;
        avatar.addEventListener('click', function () {
            card.classList.toggle('show-detail');
        });
        avatar.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.classList.toggle('show-detail');
            }
        });
    });

    // ===== Menu mobile (toggle) =====
    var navToggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.nav');
    if (navToggle && nav) {
        navToggle.addEventListener('click', function () {
            nav.classList.toggle('open');
        });
        // Đóng menu khi click link (trên mobile)
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('open');
            });
        });
    }

    // ===== Form liên hệ - xử lý submit (hiển thị thông báo) =====
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Cảm ơn bạn đã gửi góp ý! Chúng tôi sẽ phản hồi sớm.');
            contactForm.reset();
        });
    }
    const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
})();

