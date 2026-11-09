# Phạm Văn Đức — Portfolio

Website portfolio cá nhân: **Web Developer (React, Spring Boot)**.

**Stack:** React 19 · Vite · TypeScript · Tailwind CSS v4 · Framer Motion
**Tính năng:** song ngữ VI/EN (lưu lựa chọn, URL riêng `/` và `/en/`), dark/light mode (theo hệ thống + lưu lựa chọn), mobile-first, prerender HTML tĩnh khi build, SEO + Open Graph + favicon, tôn trọng `prefers-reduced-motion`.

| Lighthouse (local, `vite preview`) | Performance | Accessibility | Best Practices | SEO |
| ---------------------------------- | ----------- | ------------- | -------------- | --- |
| Mobile                             | 93–95       | 100           | 100            | 100 |
| Desktop                            | 100         | 100           | 100            | 100 |

---

## 1. Chạy dự án

Yêu cầu: **Node.js ≥ 20.19** (khuyến nghị 22, xem `.nvmrc`).

```bash
npm install
```

```bash
npm run dev        # chạy dev server tại http://localhost:5173
```

```bash
npm run build      # type-check + build + prerender ra thư mục dist/
```

```bash
npm run preview    # xem bản build tại http://localhost:4173
```

```bash
npm run lint       # oxlint (bao gồm rule React, a11y), fail nếu có warning
```

---

## 2. Sửa nội dung

Toàn bộ nội dung nằm trong `src/data/` và `src/i18n/`. Không cần đụng vào component.
Mọi chuỗi song ngữ có dạng `{ vi: '…', en: '…' }` — TypeScript sẽ báo lỗi nếu thiếu một ngôn ngữ.

| Muốn sửa                                                          | File                        |
| ----------------------------------------------------------------- | --------------------------- |
| Email, GitHub, LinkedIn, link CV, Formspree                       | `src/data/profile.ts`       |
| Đoạn giới thiệu, timeline (học vấn / MindX / dự án)                | `src/data/profile.ts` (`about`) |
| Nhóm kỹ năng                                                      | `src/data/skills.ts`        |
| **Dự án** (ảnh, mô tả, tech tags, link demo/GitHub)               | `src/data/projects.ts`      |
| Chữ trên giao diện (menu, tiêu đề section, nút, form, meta title) | `src/i18n/dictionary.ts`    |
| Màu sắc, font, style chung                                        | `src/index.css`             |

### Thêm một dự án

1. Đặt ảnh vào `public/projects/` (tỉ lệ 16:10, ví dụ 1280×800; ưu tiên WebP/AVIF/SVG cho nhẹ).
2. Thêm một object vào mảng `projects` trong `src/data/projects.ts`:

```ts
{
  id: 'my-app',
  title: 'My App',
  kind: { vi: 'Web app · SaaS', en: 'Web app · SaaS' },
  description: { vi: 'Mô tả…', en: 'Description…' },
  role: { vi: 'Full-stack', en: 'Full-stack' },
  tags: ['Spring Boot', 'React'],
  image: '/projects/my-app.webp',
  imageAlt: { vi: 'Ảnh chụp My App', en: 'My App screenshot' },
  year: '2026',
  demoUrl: 'https://…',   // bỏ trống để ẩn nút
  repoUrl: 'https://…',   // bỏ trống → hiện "Mã nguồn riêng tư"
  featured: false,        // true → card chiếm full chiều ngang
},
```

### CV

Thay `public/cv.pdf` bằng CV thật (giữ nguyên tên file, hoặc đổi `cvUrl` trong `profile.ts`).

### Form liên hệ

- **Mặc định:** form mở ứng dụng email của người dùng (`mailto:`) với nội dung đã điền sẵn.
- **Dùng Formspree:** tạo form tại [formspree.io](https://formspree.io), lấy ID (phần sau `/f/`), rồi đặt biến môi trường
  `VITE_FORMSPREE_ID=xxxxxxx` (copy `.env.example` → `.env.local` khi chạy local, hoặc thêm vào Environment Variables trên Vercel/Render).

### Domain / SEO

Domain đang là placeholder `https://phamvanduc.vercel.app`. Khi có domain thật, tìm & thay chuỗi này trong:
`index.html`, `public/robots.txt`, `public/sitemap.xml`.
Ảnh chia sẻ mạng xã hội: `public/og-image.png` (1200×630). Favicon: `public/favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`.

### Các mục nên cập nhật khi có thay đổi

- [ ] `public/cv.pdf` — xuất CV mới nhất ra PDF và thay file này
- [ ] Link demo của Landing Templates khi đã deploy (`src/data/projects.ts`)
- [ ] Domain trong `index.html`, `robots.txt`, `sitemap.xml` nếu đổi tên miền

---

## 3. Deploy

`npm run build` tạo ra site tĩnh trong `dist/` (gồm `dist/index.html` tiếng Việt và `dist/en/index.html` tiếng Anh) — host ở đâu cũng được.

### Vercel (khuyến nghị)

1. Push repo lên GitHub.
2. Vào [vercel.com/new](https://vercel.com/new) → Import repo. Vercel tự nhận cấu hình từ `vercel.json`
   (Build command `npm run build`, Output `dist`).
3. (Tuỳ chọn) Settings → Environment Variables → thêm `VITE_FORMSPREE_ID`.
4. Deploy. Mỗi lần push lên `main` sẽ tự deploy lại; mỗi PR có preview URL riêng.

Hoặc dùng CLI:

```bash
npx vercel --prod
```

### Render

Repo có sẵn `render.yaml` (Blueprint):

1. Vào [dashboard.render.com](https://dashboard.render.com) → **New → Blueprint** → chọn repo. Render đọc `render.yaml` và tạo một **Static Site**.
2. Hoặc tạo thủ công: **New → Static Site**, Build command `npm ci && npm run build`, Publish directory `dist`.
3. (Tuỳ chọn) Thêm biến môi trường `VITE_FORMSPREE_ID`.

---

## 4. Cấu trúc thư mục

```
├── index.html               # meta SEO, Open Graph, JSON-LD, script chống nháy theme
├── public/                  # favicon, og-image, cv.pdf, ảnh dự án, robots, sitemap
├── scripts/prerender.js     # render HTML tĩnh cho / và /en/ sau khi build
└── src/
    ├── data/                # ✏️ NỘI DUNG: profile, skills, projects
    ├── i18n/                # từ điển VI/EN, provider, phát hiện ngôn ngữ
    ├── theme/               # dark/light mode
    ├── sections/            # Hero, About, Skills, Projects, Contact
    ├── components/          # Header, Footer, Reveal (animation khi scroll), icons…
    ├── assets/fonts/        # Big Shoulders Display + Bungee + Be Vietnam Pro (tự host, subset latin + tiếng Việt)
    ├── Root.tsx             # providers dùng chung cho client & prerender
    ├── main.tsx             # entry phía client (hydrate)
    └── entry-server.tsx     # entry dùng khi prerender
```

### Ghi chú kỹ thuật

- **Ngôn ngữ:** lựa chọn được lưu trong `localStorage` (`lang`) và đồng bộ lên URL (`/` ↔ `/en/`) để chia sẻ link đúng ngôn ngữ; có `hreflang` cho SEO.
- **Theme:** lưu trong `localStorage` (`theme`); nếu chưa chọn thì theo cài đặt hệ điều hành. Script nhỏ trong `<head>` áp theme trước khi paint nên không bị nháy.
- **Animation:** Framer Motion qua `LazyMotion` (tải lười), tự tắt khi người dùng bật *reduce motion*.
- **Font:** Big Shoulders Display (chữ biển hiệu), Bungee (nhãn/nút), Be Vietnam Pro (nội dung), giấy phép SIL OFL 1.1. Có font fallback khớp kích thước để tránh layout shift.
