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
    id: 'backend',
    title: { vi: 'Backend', en: 'Backend' },
    blurb: {
      vi: 'REST API, bảo mật, thiết kế CSDL và kiến trúc phân lớp rõ ràng.',
      en: 'REST APIs, security, database design and clean layered architecture.',
    },
    items: ['Java', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'MySQL', 'Node.js', 'Express'],
  },
  {
    id: 'frontend',
    title: { vi: 'Frontend', en: 'Frontend' },
    blurb: {
      vi: 'Giao diện nhanh, responsive, chú trọng chi tiết và hiệu năng.',
      en: 'Fast, responsive interfaces with attention to detail and performance.',
    },
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'HTML / CSS'],
  },
  {
    id: 'mobile',
    title: { vi: 'Mobile', en: 'Mobile' },
    blurb: {
      vi: 'Ứng dụng đa nền tảng và native, từ ý tưởng tới store.',
      en: 'Cross-platform and native apps, from idea to the store.',
    },
    items: ['React Native', 'Android (Java/Kotlin)', 'Flutter', 'Zalo Mini App'],
  },
  {
    id: 'tools',
    title: { vi: 'Công cụ', en: 'Tools' },
    blurb: {
      vi: 'Quy trình làm việc chuyên nghiệp, triển khai tự động.',
      en: 'Professional workflow and automated deployment.',
    },
    items: ['Git & GitHub', 'Docker', 'Postman', 'IntelliJ IDEA', 'VS Code', 'Figma', 'Vercel / Render', 'Linux'],
  },
]
