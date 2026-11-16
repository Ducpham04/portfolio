import type { Localized } from '../i18n/types'

export interface SkillGroup {
  id: string
  title: Localized
  blurb: Localized
  items: string[]
}

/** Skill groups shown in the Skills section. Order = display order. */
export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: { vi: 'Frontend', en: 'Frontend' },
    blurb: {
      vi: 'Giao diện responsive, tải nhanh, dễ dùng trên điện thoại.',
      en: 'Responsive, fast-loading interfaces that work well on phones.',
    },
    items: ['HTML / CSS', 'JavaScript', 'TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'backend',
    title: { vi: 'Backend', en: 'Backend' },
    blurb: {
      vi: 'REST API, xác thực, phân quyền và thiết kế cơ sở dữ liệu.',
      en: 'REST APIs, authentication, authorization and database design.',
    },
    items: ['Java', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'JWT', 'FastAPI'],
  },
  {
    id: 'data-ai',
    title: { vi: 'Dữ liệu & AI', en: 'Data & AI' },
    blurb: {
      vi: 'Lưu trữ dữ liệu có migration rõ ràng, tích hợp mô hình ngôn ngữ vào sản phẩm.',
      en: 'Versioned database schemas and language models built into products.',
    },
    items: ['PostgreSQL', 'MySQL', 'Flyway', 'OpenAI API', 'Groq'],
  },
  {
    id: 'cloud',
    title: { vi: 'Cloud', en: 'Cloud' },
    blurb: {
      vi: 'Triển khai, giám sát, sao lưu và tối ưu chi phí hạ tầng trên AWS; Azure ở mức cơ bản.',
      en: 'Deploying, monitoring, backing up and cost-optimizing infrastructure on AWS; Azure at a basic level.',
    },
    items: ['AWS EC2', 'ECS Fargate', 'RDS', 'S3', 'IAM', 'CloudWatch', 'AWS Budgets', 'Azure', 'Viettel IDC', 'Linux'],
  },
  {
    id: 'tools',
    title: { vi: 'Công cụ', en: 'Tools' },
    blurb: {
      vi: 'Quản lý mã nguồn, đóng gói và triển khai tự động.',
      en: 'Version control, containers and automated deployment.',
    },
    items: ['Git & GitHub', 'GitHub Actions', 'Docker', 'Vercel', 'Postman', 'Jira'],
  },
]
