import type { Localized } from '../i18n/types'

/**
 * ─────────────────────────────────────────────────────────────
 *  PROJECTS — all project data lives here.
 * ─────────────────────────────────────────────────────────────
 *  To add a project: copy one object below and edit it.
 *  - image:  put the file in /public/projects/ and reference it as
 *            "/projects/<file>". Recommended ratio 16:10 (e.g. 1280×800),
 *            WebP/AVIF/SVG for best Lighthouse scores.
 *  - demoUrl / repoUrl: optional. Omit (or leave undefined) to hide the button.
 *  - featured: true makes the card span the full width on desktop.
 */
export interface Project {
  id: string
  title: string
  /** One-line category shown above the title */
  kind: Localized
  description: Localized
  role: Localized
  tags: string[]
  image: string
  imageAlt: Localized
  year: string
  demoUrl?: string
  repoUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'nghia-hanh-so',
    title: 'Nghĩa Hành Số',
    kind: { vi: 'Chính quyền số · Zalo Mini App', en: 'Digital government · Zalo Mini App' },
    description: {
      vi: 'Nền tảng chuyển đổi số cho huyện Nghĩa Hành: Zalo Mini App giúp người dân tra cứu thủ tục, gửi phản ánh, nhận thông báo; backend quản trị cho cán bộ và trợ lý AI trả lời câu hỏi hành chính.',
      en: 'A digital-transformation platform for Nghia Hanh district: a Zalo Mini App for citizens to look up procedures, submit feedback and get notices; an admin backend for officials and an AI assistant answering administrative questions.',
    },
    role: { vi: 'Full-stack · Backend lead', en: 'Full-stack · Backend lead' },
    tags: ['Zalo Mini App', 'React', 'Spring Boot', 'MySQL', 'OpenAI API', 'Docker'],
    image: '/projects/nghia-hanh-so.svg',
    imageAlt: {
      vi: 'Giao diện Zalo Mini App Nghĩa Hành Số',
      en: 'Nghia Hanh So Zalo Mini App interface',
    },
    year: '2025',
    demoUrl: 'https://example.com/nghia-hanh-so',
    featured: true,
  },
  {
    id: 'viway-fitness-pro',
    title: 'Viway Fitness Pro',
    kind: { vi: 'Ứng dụng di động · Fitness', en: 'Mobile app · Fitness' },
    description: {
      vi: 'Ứng dụng quản lý phòng gym và luyện tập cá nhân: lịch tập, theo dõi chỉ số cơ thể, gói hội viên và thanh toán.',
      en: 'A gym-management and personal training app: workout plans, body-metric tracking, memberships and payments.',
    },
    role: { vi: 'Mobile & Backend developer', en: 'Mobile & Backend developer' },
    tags: ['React Native', 'Spring Boot', 'MySQL', 'JWT'],
    image: '/projects/viway-fitness.svg',
    imageAlt: { vi: 'Màn hình ứng dụng Viway Fitness Pro', en: 'Viway Fitness Pro app screens' },
    year: '2025',
    demoUrl: 'https://example.com/viway',
    repoUrl: 'https://github.com/ducpham04/viway-fitness-pro',
  },
  {
    id: 'landing-pages',
    title: 'Premium Landing Pages',
    kind: { vi: 'Freelance · BĐS & Nội thất', en: 'Freelance · Real estate & Interiors' },
    description: {
      vi: 'Chuỗi landing page cho khách hàng bất động sản và nội thất: thiết kế riêng, animation tinh tế, form thu lead, tối ưu tốc độ và SEO.',
      en: 'A series of landing pages for real-estate and interior-design clients: bespoke design, subtle animation, lead capture, tuned for speed and SEO.',
    },
    role: { vi: 'Thiết kế & Frontend', en: 'Design & Frontend' },
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    image: '/projects/landing-pages.svg',
    imageAlt: { vi: 'Bộ sưu tập landing page BĐS và nội thất', en: 'Real-estate and interior landing pages' },
    year: '2024–2025',
    demoUrl: 'https://example.com/landing',
  },
  {
    id: 'mindx-grading',
    title: 'MindX Grading Tool',
    kind: { vi: 'Công cụ nội bộ · Giáo dục', en: 'Internal tool · Education' },
    description: {
      vi: 'Công cụ chấm bài tự động cho giáo viên MindX: chạy test trên bài nộp, tổng hợp điểm và gửi nhận xét, tiết kiệm hàng giờ mỗi tuần.',
      en: 'An auto-grading tool for MindX teachers: runs tests against submissions, aggregates scores and sends feedback, saving hours every week.',
    },
    role: { vi: 'Tác giả', en: 'Author' },
    tags: ['Node.js', 'React', 'Google Sheets API'],
    image: '/projects/mindx-grading.svg',
    imageAlt: { vi: 'Bảng điều khiển công cụ chấm bài', en: 'Grading tool dashboard' },
    year: '2024',
    repoUrl: 'https://github.com/ducpham04/mindx-grading-tool',
  },
]
