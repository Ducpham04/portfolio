# Checklist

Cập nhật: 2026-11-05. Xem chi tiết trong [HANDOFF.md](HANDOFF.md).

## Yêu cầu ban đầu (PR đầu tiên)

- [x] React + Vite + TypeScript + Tailwind CSS + Framer Motion
- [x] Song ngữ VI/EN: có nút chuyển, lưu lựa chọn, URL riêng (`/` và `/en/`) có `hreflang`
- [x] Dark/light mode: mặc định theo hệ điều hành, lưu lựa chọn, không nháy khi tải trang
- [x] Mobile-first, không tràn ngang ở 390px
- [x] Hero: tên, chức danh, một câu giới thiệu, nút Liên hệ / Hire me và Tải CV (`/cv.pdf`)
- [x] About: học vấn (FPT HCM), giảng dạy MindX, freelance
- [x] Skills: Backend, Frontend, Mobile, Tools
- [x] Projects: ảnh, mô tả, tech tags, link demo/GitHub; dữ liệu trong `src/data/projects.ts`
- [x] Services: landing page, hệ thống quản lý cho SME, Spring Boot backend, nút Fiverr
- [x] Contact: form (mailto mặc định, Formspree qua `VITE_FORMSPREE_ID`), email, GitHub, LinkedIn
- [x] SEO meta, Open Graph, JSON-LD, sitemap, robots, favicon và manifest
- [x] Lighthouse ≥ 90 mọi mục (đo local: mobile 93–95 / 100 / 100 / 100; desktop 100 cả 4 mục)
- [x] Accessibility cơ bản: skip link, focus ring, aria, reduced motion, tương phản AA
- [x] README: cách chạy, cách sửa nội dung, deploy Vercel/Render
- [x] `npm run build` không lỗi, `npm run lint` sạch
- [x] Commit và tạo PR

## Nâng cấp thiết kế bằng Impeccable

- [x] Cài skill vào `.claude/skills/impeccable`
- [x] `PRODUCT.md`: phỏng vấn bối cảnh sản phẩm (init)
- [x] Chọn hướng thiết kế: **Biển hiệu Sài Gòn** (do người dùng chọn)
- [x] Hợp đồng thiết kế (direction contract): `.impeccable/surfaces/src-app-tsx.md`
- [x] Dựng lại toàn bộ giao diện theo hướng mới: font, bảng màu, mọi section, header, footer
- [x] Bỏ các mẫu bị Impeccable cấm: nhãn nhỏ phía trên tiêu đề, số thứ tự section, font Fraunces, nền kem, mono làm "trang phục"
- [x] Chạy detector trên trang đã render (`/` và `/en/`): không còn warning
- [x] Sửa CLS do đổi font (font fallback khớp kích thước): CLS từ 0.2 xuống ≤ 0.02
- [x] Làm lại OG image, favicon, icon, CV mẫu theo phong cách mới
- [ ] **Đang làm dở:** finish review bằng agent độc lập (`degraded/finish-reviewer.md`). Đã chụp ảnh bằng chứng (`.impeccable/review/`, không commit), nhưng lượt review bị dừng giữa chừng.
- [ ] Viết `DESIGN.md` (documenter) sau finish review
- [ ] Rà lại giao diện dark mode và tablet (768–1024px) sau lần sửa cuối

## Việc của chủ site (thay placeholder)

- [ ] Ảnh chụp thật và link demo/GitHub thật cho 4 dự án (`public/projects/`, `src/data/projects.ts`)
- [ ] `public/cv.pdf` thật
- [ ] URL Fiverr và LinkedIn (`src/data/profile.ts`)
- [ ] Domain thật thay cho `phamvanduc.vercel.app` (`index.html`, `public/robots.txt`, `public/sitemap.xml`)
- [ ] Giá dịch vụ (`src/data/services.ts`) và mốc thời gian (`src/data/profile.ts`)
- [ ] (Tuỳ chọn) Formspree ID
