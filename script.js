// ساده‌ترین پیاده‌سازی لاگین فقط با JS سمت کلاینت.
// برای محیط واقعی باید به بک‌اند متصل شوی و رمزها را به صورت امن بررسی کنی.

const loginForm = document.getElementById('loginForm');
const messageEl = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');

// نمونه اعتبارسنجی محلی (فقط برای demo)
const demoUser = {
  email: 'user@example.com',
  password: 'password123'
};

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  messageEl.textContent = '';
  submitBtn.disabled = true;
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // اعتبارسنجی ابتدایی فرم
  if (!email || !password) {
    messageEl.textContent = 'ایمیل و رمز را وارد کنید.';
    submitBtn.disabled = false;
    return;
  }

  messageEl.textContent = 'در حال بررسی...';

  // شبیه‌سازی تماس به سرور با تاخیر
  await new Promise(r => setTimeout(r, 700));

  // راه تست سریع: مقایسه با کاربر دمو
  if (email === demoUser.email && password === demoUser.password) {
    // ساخت یک "توکن" ساده برای مثال — در دنیای واقعی JWT یا توکن امن از سرور دریافت کن
    const token = btoa(JSON.stringify({ email, ts: Date.now() }));
    localStorage.setItem('auth_token', token);
    messageEl.style.color = 'green';
    messageEl.textContent = 'ورود موفق. توکن در localStorage ذخیره شد.';
    // اگر خواستی ریدایرکت به صفحه‌ی محافظت‌شده انجام بده:
    // window.location.href = 'dashboard.html';
  } else {
    messageEl.style.color = 'crimson';
    messageEl.textContent = 'ایمیل یا رمز اشتباه است.';
  }

  submitBtn.disabled = false;
});

/*
اگر بخواهی از بک‌اند واقعی استفاده کنی:
داخل این فایل fetch به endpoint لاگین (مثلاً POST /api/login) بفرست و در صورت موفقیت توکن بگیر و ذخیره کن.

مثال:
const res = await fetch('https://api.example.com/login', {
  method:'POST', headers:{'Content-Type':'application/json'},
  body: JSON.stringify({ email, password })
});
const data = await res.json();
if (res.ok) { localStorage.setItem('auth_token', data.token); ... }
*/
