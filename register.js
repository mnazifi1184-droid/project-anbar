// register.js — ثبت‌نام ساده فقط در سمت کلاینت (demo)
// هشدار: ذخیرهٔ رمز به‌صورت ساده در localStorage امن نیست؛ فقط برای نمونه و تست.

const signupForm = document.getElementById('signupForm');
const signupMsg = document.getElementById('message');
const signupBtn = document.getElementById('signupBtn');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  signupMsg.textContent = '';
  signupBtn.disabled = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm').value;

  if (!name || !email || !password || !confirm) {
    signupMsg.style.color = 'crimson';
    signupMsg.textContent = 'همهٔ فیلدها را پر کنید.';
    signupBtn.disabled = false;
    return;
  }

  if (password.length < 6) {
    signupMsg.style.color = 'crimson';
    signupMsg.textContent = 'رمز باید حداقل ۶ کاراکتر باشد.';
    signupBtn.disabled = false;
    return;
  }

  if (password !== confirm) {
    signupMsg.style.color = 'crimson';
    signupMsg.textContent = 'تکرار رمز عبور مطابقت ندارد.';
    signupBtn.disabled = false;
    return;
  }

  // شبیه‌سازی تاخیر سرور
  await new Promise(r => setTimeout(r, 700));

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.find(u => u.email === email)) {
    signupMsg.style.color = 'crimson';
    signupMsg.textContent = 'این ایمیل قبلاً ثبت شده است.';
    signupBtn.disabled = false;
    return;
  }

  users.push({ name, email, password, createdAt: Date.now() });
  localStorage.setItem('users', JSON.stringify(users));

  // ثبت موفق
  signupMsg.style.color = 'green';
  signupMsg.textContent = 'ثبت‌نام با موفقیت انجام شد. منتقل می‌شوید به صفحه ورود...';

  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1200);

});
