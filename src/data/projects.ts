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
    id: 'viway-fitness-pro',
    title: 'Viway Fitness Pro',
    kind: { vi: 'Web app · Fitness & AI', en: 'Web app · Fitness & AI' },
    description: {
      vi: 'Ứng dụng web tạo kế hoạch tập luyện và dinh dưỡng cá nhân hoá bằng AI từ chỉ số cơ thể, mục tiêu và ngân sách. Có trang quản trị, thử thách, điểm thưởng và giới hạn lượt dùng AI theo từng người dùng. Đang chạy thật trên tên miền riêng.',
      en: 'A web app that generates personalized workout and meal plans with AI from body metrics, goals and budget. Includes an admin dashboard, challenges, rewards and per-user AI credits. Live on its own domain.',
    },
    role: { vi: 'Full-stack · dự án cá nhân', en: 'Full-stack · personal project' },
    tags: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'JWT', 'FastAPI', 'Docker'],
    image: '/projects/viway-fitness.webp',
    imageAlt: {
      vi: 'Luồng tập luyện của Viway: tổng quan, kế hoạch tuần, chi tiết buổi tập, đang tập với AI coach',
      en: 'Viway workout flow: overview, weekly plan, session detail, live training with an AI coach',
    },
    year: '2025–2026',
    demoUrl: 'https://app.viway.id.vn/',
    repoUrl: 'https://github.com/Ducpham04/Nura_Fitness_Pro-ct',
    featured: true,
  },
  {
    id: 'nghia-hanh-so',
    title: 'Nghĩa Hành Số',
    kind: { vi: 'Chính quyền số · Zalo Mini App', en: 'Digital government · Zalo Mini App' },
    description: {
      vi: 'Đồ án tốt nghiệp, đồng thời triển khai thật cho một xã: người dân gửi phản ánh qua Zalo Mini App, cán bộ tiếp nhận, xử lý và người dân theo dõi kết quả. Có trợ lý AI (RAG) trả lời câu hỏi hành chính. Đang ở giai đoạn MVP.',
      en: 'Graduation capstone that is also being deployed for a commune: residents submit feedback through a Zalo Mini App, officials process it and residents track the result. Includes an AI (RAG) assistant for administrative questions. Currently in the MVP phase.',
    },
    role: { vi: 'Technical Lead · nhóm 4 người', en: 'Technical Lead · team of 4' },
    tags: ['Zalo Mini App', 'REST API', 'RAG chatbot', 'Jira Scrum'],
    image: '/projects/nghia-hanh-so.svg',
    imageAlt: {
      vi: 'Minh hoạ ứng dụng Nghĩa Hành Số',
      en: 'Nghia Hanh So app illustration',
    },
    year: '2026',
  },
  {
    id: 'landing-templates',
    title: 'Landing Templates',
    kind: { vi: 'Frontend · dự án cá nhân', en: 'Frontend · personal project' },
    description: {
      vi: '3 landing page responsive cho ngành bất động sản, nội thất và giáo dục, mỗi trang một phong cách riêng. Render sẵn HTML lúc build để tải nhanh và tốt cho SEO, nội dung và form lấy từ file cấu hình để dễ tái sử dụng.',
      en: '3 responsive landing pages for real estate, interior design and education, each with its own visual style. Prerendered at build time for fast loads and SEO; content and lead forms are config-driven for reuse.',
    },
    role: { vi: 'Thiết kế & Frontend', en: 'Design & Frontend' },
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Framer Motion'],
    image: '/projects/landing-pages.svg',
    imageAlt: { vi: 'Minh hoạ 3 mẫu landing page', en: 'Illustration of the 3 landing page templates' },
    year: '2026',
    repoUrl: 'https://github.com/Ducpham04/landing-templates',
  },
  {
    id: 'mindx-grading',
    title: 'MindX Grading Tool',
    kind: { vi: 'Công cụ nội bộ · Giáo dục', en: 'Internal tool · Education' },
    description: {
      vi: 'Công cụ chạy trên trình duyệt giúp giáo viên chấm bài nhanh hơn trên LMS của MindX: gọi GraphQL API bằng token đăng nhập sẵn có, phân trang theo cursor và lọc bài nộp theo trạng thái.',
      en: "A browser tool that speeds up grading on MindX's LMS: calls its GraphQL API with the existing login token, handles cursor-based pagination and filters submissions by status.",
    },
    role: { vi: 'Tác giả', en: 'Author' },
    tags: ['JavaScript', 'GraphQL', 'Browser tooling'],
    image: '/projects/mindx-grading.svg',
    imageAlt: { vi: 'Minh hoạ công cụ chấm bài', en: 'Grading tool illustration' },
    year: '2026',
  },
]
