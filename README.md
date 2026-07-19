# Simple HTML+JS Login (Demo)

این پروژه یک صفحه لاگین ساده با HTML و JavaScript است (سمت کلاینت). این پیاده‌سازی برای تست/نمونه است — برای استفاده واقعی باید لاگیک احراز هویت را به سرور منتقل و رمزها را امن کنید.

نمونه‌ی ورود:
- ایمیل: user@example.com
- رمز: password123

نحوه اجرا (محلی)
1. این پوشه را باز کن و فایل `index.html` را در مرورگر باز کن.
   یا یک سرور ساده اجرا کن:
   - با Python: `python -m http.server 8080`
   - یا با npm package: `npx serve .` سپس به http://localhost:5000 برو.

نحوه ارسال به GitHub
1. اگر هنوز ریپوزیتوری ندارید، یک پوشه جدید بساز و فایل‌ها را داخلش قرار بده.
2. از ترمینال:
   git init
   git add .
   git commit -m "Initial simple HTML+JS login"
3. ایجاد مخزن در GitHub:
   - با gh-cli: `gh repo create <USERNAME>/<REPO_NAME> --public --source=. --remote=origin --push`
   - یا به github.com رفته و یک مخزن جدید بساز، سپس:
     git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git
     git branch -M main
     git push -u origin main

توضیحات تکمیلی
- این پروژه فقط برای دموست؛ برای استفاده واقعی باید احراز هویت سمت سرور، ذخیره امن توکن‌ها و مدیریت نشست انجام بشه.
- اگر می‌خواهی من این کد را به مخزن تو push کنم، همین کار را انجام دادم؛ اکنون به من بگو می‌خواهی branch دیگری، فایل اضافی یا README فارسی‌تر اضافه کنم یا تنظیمات خاصی (مثلاً GitHub Pages) فعال کنم.
