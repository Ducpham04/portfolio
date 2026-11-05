# Handoff / Final report

Branch: `claude/ecstatic-galileo-5rzjvx` · PR: https://github.com/Ducpham04/portfolio/pull/1

## Đã xong

**1. Portfolio đầy đủ theo yêu cầu ban đầu**

- **Stack:** React 19, Vite, TypeScript, Tailwind CSS v4, Framer Motion (`LazyMotion`, tải lười).
- **Song ngữ VI/EN:** `/` và `/en/` đều được prerender thành HTML tĩnh khi build (`scripts/prerender.js`). Lựa chọn ngôn ngữ lưu trong `localStorage` và đồng bộ lên URL.
- **Dark/light mode:** áp theme trước khi paint nên không bị nháy. Mobile-first.
- **Nội dung tách khỏi component:**
  - `src/data/`: profile, skills, projects, services
  - `src/i18n/dictionary.ts`: chữ trên giao diện
- **SEO:** meta, Open Graph, JSON-LD, sitemap, robots, favicon và manifest.
- **Deploy:** `vercel.json` và `render.yaml`. README tiếng Việt.

**2. Làm lại thiết kế bằng [Impeccable](https://github.com/pbakaus/impeccable)**

- **Lý do:** thiết kế cũ (nền kem, serif Fraunces nghiêng, nhãn mono nhỏ) đúng là mẫu "AI default" mà Impeccable nêu tên.
- **Hướng mới:** "Biển hiệu Sài Gòn", do người dùng chọn.
  - Mỗi section là một tấm biển tôn sơn có ốc vít.
  - Màu đỏ, vàng, xanh coban, xanh lá; chữ đứng đặc có bóng đổ.
  - Dự án là các biển treo, đung đưa khi rê chuột.
  - Dịch vụ là "bảng giá" có đường chấm dẫn tới giá.
  - Light mode = tường vôi xanh ban ngày; dark mode = phố ban đêm.
- **Font:** Big Shoulders Display, Bungee, Be Vietnam Pro. Tự host, chỉ subset latin + tiếng Việt, có fallback khớp kích thước.
- **Tài liệu thiết kế:**
  - `PRODUCT.md`: bối cảnh sản phẩm, đã xác nhận với người dùng
  - `.impeccable/surfaces/src-app-tsx.md`: hợp đồng thiết kế
- **Đã gỡ** stats chưa xác thực (4+ năm, 15+ dự án, 200+ học viên) khỏi trang, vì `PRODUCT.md` ghi rõ không được trình bày như số liệu thật.
- **Ảnh dự án** vẫn là ảnh minh hoạ (SVG) và có nhãn "Ảnh minh hoạ / Illustration".

**3. Kiểm tra** (đo local bằng `vite preview`)

| | Performance | Accessibility | Best Practices | SEO | CLS |
|---|---|---|---|---|---|
| Mobile `/`, `/en/` | 93–95 | 100 | 100 | 100 | 0.005 |
| Desktop `/`, `/en/` | 100 | 100 | 100 | 100 | ≤ 0.02 |

- `npm run build` ✅ · `npm run lint` ✅ (oxlint `--deny-warnings`)
- `impeccable detect` trên mã nguồn: 0 finding. Trên trang render `/` và `/en/`: 0 warning sau khi sửa.
- Playwright: không có lỗi console hay lỗi hydration ở VI, EN, dark và mobile. Toggle ngôn ngữ, theme và menu mobile hoạt động.

## Đang làm dở

- **Finish review của Impeccable chưa chạy xong.** Đây là lượt đánh giá độc lập bằng agent mới, theo `.claude/skills/impeccable/reference/degraded/finish-reviewer.md`. Lượt review bị dừng giữa chừng khi hết thời gian, nên chưa có kết luận ship/fix.
- **`DESIGN.md` chưa viết.** Impeccable yêu cầu tạo file này sau finish review, cùng với `.impeccable/design.json`.

## Lỗi và hạn chế đã biết

- **Concept roll chạy chế độ "degraded":** proxy chặn `impeccable.style/api/roll`, nên không có challenger hay quality-bar board. Hướng thiết kế do người dùng chọn trực tiếp.
- **Không có công cụ tạo ảnh,** nên build theo đường code-led (không có comp mẫu để đối chiếu).
- **Ảnh dự án là SVG minh hoạ,** dùng font hệ thống (Arial) vì ảnh trong `<img>` không tải được web font.
- **Mobile Lighthouse chỉ dư ~3–5 điểm** so với ngưỡng 90. Nguyên nhân là JS bundle của React (~100 KB gzip) và font (~130 KB). Đo trên Vercel có thể lệch.
- **Biển hiệu nghiêng nhẹ trước khi hydrate:** khi chưa tải JS, biển dự án và biển tên hiện hơi nghiêng (trạng thái initial của animation), rồi về thẳng sau khi hydrate.
- **Footer ghi năm lúc build;** `suppressHydrationWarning` xử lý trường hợp năm thay đổi.
- **`.claude/skills/impeccable` (~2.3 MB) được commit** để người khác dùng lại skill. Có thể xoá nếu không cần.

## Bước tiếp theo (theo thứ tự)

1. **Chạy finish review.** Trong Claude Code: `/impeccable` rồi yêu cầu finish review cho `src/App.tsx`, hoặc chạy lại agent với input:
   - `PRODUCT.md`
   - `.impeccable/surfaces/src-app-tsx.md`
   - ảnh chụp mới vào `.impeccable/review/desktop.png` và `mobile.png` (1440 và 390)

   Sửa theo kết luận của review.
2. **Viết `DESIGN.md`** theo `.claude/skills/impeccable/reference/document.md`.
3. **Rà tablet 768–1024px và dark mode** sau các sửa cuối.
4. **Thay placeholder** (xem `docs/CHECKLIST.md`): ảnh và link dự án thật, `cv.pdf`, Fiverr, LinkedIn, domain, giá.
5. **Deploy lên Vercel** và đo lại Lighthouse/PageSpeed trên URL thật.
6. **(Tuỳ chọn) Giảm JS** để mobile có thêm biên điểm, ví dụ bỏ Framer Motion ở những chỗ CSS làm được.

## Lệnh hữu ích

```bash
npm run dev
```

```bash
npm run build && npm run preview
```

```bash
npm run lint
```

```bash
.claude/skills/impeccable/scripts/impeccable detect --json src
```

```bash
.claude/skills/impeccable/scripts/impeccable detect --json http://localhost:4173/
```

Lệnh thứ hai cần Chrome. Nếu chạy dưới quyền root, Chrome phải được chạy với `--no-sandbox`.
