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

  // ابتدا چک کن که کاربری در localStorage ثبت شده باشه
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const found = users.find(u => u.email === email);

  // اگر کاربر در localStorage نیست، از demo استفاده کن
  if (!found) {
    if (email === demoUser.email && password === demoUser.password) {
      const token = btoa(JSON.stringify({ email, ts: Date.now() }));
      localStorage.setItem('auth_token', token);
      messageEl.style.color = 'green';
      messageEl.textContent = 'ورود موفق. توکن در localStorage ذخیره شد.';
    } else {
      messageEl.style.color = 'crimson';
      messageEl.textContent = 'ایمیل یا رمز اشتباه است.';
    }
  } else {
    // اگر کاربر وجود داشت، رمز را بررسی کن
    if (found.password === password) {
      const token = btoa(JSON.stringify({ email, ts: Date.now() }));
      localStorage.setItem('auth_token', token);
      messageEl.style.color = 'green';
      messageEl.textContent = 'ورود موفق. توکن در localStorage ذخیره شد.';
    } else {
      messageEl.style.color = 'crimson';
      messageEl.textContent = 'ایمیل یا رمز اشتباه است.';
    }
  }

  submitBtn.disabled = false;
});
