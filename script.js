// JavaScript вынесенный в отдельный файл
function showResult(id, text, isCorrect) {
    const result = document.getElementById(id);
    result.style.display = 'block';
    result.innerHTML = text;
    result.style.backgroundColor = isCorrect ? '#d4edda' : '#f8d7da';
    result.style.color = isCorrect ? '#155724' : '#721c24';
}

function checkCaesar() {
    const answer = document.getElementById('caesarInput').value.toUpperCase().replace(/\s+/g, '');
    const correct = 'ФМЛЗИЧ'; // ПРИВЕТ +4
    if (answer === correct) {
        showResult('caesarResult', '✅ Верно! Молодец!', true);
    } else {
        showResult('caesarResult', '❌ Попробуй ещё раз. Подсказка: сдвиг на 4.', false);
    }
}

function checkAtbash() {
    const answer = document.getElementById('atbashInput').value.toUpperCase().replace(/\s+/g, '');
    const correct = 'АЛГОРИТМ';
    if (answer === correct) {
        showResult('atbashResult', '✅ Верно! Ты отлично справился!', true);
    } else {
        showResult('atbashResult', '❌ Неправильно. Помни: А ↔ Я, Б ↔ Ю...', false);
    }
}

function checkVigenere() {
    const answer = document.getElementById('vigenereInput').value.toUpperCase().replace(/\s+/g, '');
    const correct = 'ЙАХЕЪЧДЙА';
    if (answer === correct) {
        showResult('vigenereResult', '✅ Супер! Шифр Виженера тебе покорился!', true);
    } else {
        showResult('vigenereResult', '❌ Проверь таблицу Виженера. Ключ: ЗАДАЧА.', false);
    }
}

function checkKasiski() {
    const answer = document.getElementById('kasiskiInput').value.trim();
    const correctAnswers = ['3', 'три', '3 символа'];
    if (correctAnswers.includes(answer.toLowerCase())) {
        showResult('kasiskiResult', '✅ Правильно! Длина ключа — 3 символа.', true);
    } else {
        showResult('kasiskiResult', '❌ Подсказка: расстояние между повторениями — 6 символов.', false);
    }
}

function checkXOR() {
    const answer = document.getElementById('xorInput').value.trim();
    const correct = '0111';
    if (answer === correct) {
        showResult('xorResult', '✅ Верно! XOR — это просто!', true);
    } else {
        showResult('xorResult', '❌ Вспомни: 1 XOR 0 = 1, 0 XOR 1 = 1, 1 XOR 1 = 0.', false);
    }
}

function checkFinal() {
    const answer = document.getElementById('finalMessage').value.toUpperCase().trim();
    if (answer.includes('ПОЗДРАВЛЯЮ') || answer.includes('МОЛОДЕЦ') || answer.includes('УРА')) {
        showResult('finalResult', '🎊 Ты настоящий криптоаналитик! Курс пройден!', true);
    } else {
        showResult('finalResult', '❌ Почти! Используй все изученные шифры по порядку.', false);
    }
}

// Плавная прокрутка
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.sidebar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Подсветка активного раздела при прокрутке
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.sidebar a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});
