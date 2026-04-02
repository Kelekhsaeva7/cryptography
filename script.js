// Общие функции для всех страниц

// Подсветка активного пункта меню
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const menuLinks = document.querySelectorAll('.sidebar a');
    
    menuLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Плавная прокрутка для якорных ссылок на главной
    if (currentPage === 'index.html' || currentPage === '') {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 20,
                        behavior: 'smooth'
                    });
                    
                    // Обновляем активную ссылку
                    document.querySelectorAll('.sidebar a').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });
    }
});

// Функция для отображения/скрытия результатов
function showResult(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'block';
    }
}

function hideResult(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'none';
    }
}

// Общая функция шифрования Цезаря
function caesarCipher(text, shift, encrypt = true) {
    const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i].toUpperCase();
        const index = alphabet.indexOf(char);
        
        if (index !== -1) {
            let newIndex;
            if (encrypt) {
                newIndex = (index + shift) % alphabet.length;
            } else {
                newIndex = (index - shift + alphabet.length) % alphabet.length;
            }
            result += alphabet[newIndex];
        } else {
            result += char;
        }
    }
    
    return result;
}