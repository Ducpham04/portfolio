import type { Localized } from '../i18n/types'

/**
 * Personal info & links. Edit this file to change contact details,
 * social links, the CV path or the contact-form backend.
 */
export const profile = {
  name: { vi: 'Phạm Văn Đức', en: 'Pham Van Duc' } satisfies Localized,
  /** Short name used in the header logo */
  shortName: 'Đức.',
  email: 'pvanduc0403@gmail.com',
  location: { vi: 'TP. Hồ Chí Minh', en: 'Ho Chi Minh City' } satisfies Localized,
  /** File placed in /public — replace public/cv.pdf with your real CV */
  cvUrl: '/cv.pdf',
  /**
   * Formspree form ID (the part after https://formspree.io/f/).
   * Leave empty to fall back to a `mailto:` link.
   * Can also be set via the VITE_FORMSPREE_ID environment variable.
   */
  formspreeId: (import.meta.env.VITE_FORMSPREE_ID as string | undefined) ?? '',
  socials: [
    { label: 'GitHub', href: 'https://github.com/ducpham04', handle: '@ducpham04' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/phamvanduc', handle: 'in/phamvanduc' },
    { label: 'Fiverr', href: 'https://www.fiverr.com/your-username', handle: 'fiverr' },
  ],
  fiverrUrl: 'https://www.fiverr.com/your-username',
} as const

export const about: {
  paragraphs: Localized[]
  timeline: { period: string; title: Localized; place: Localized; detail: Localized }[]
  stats: { value: string; key: 'years' | 'projects' | 'students' }[]
} = {
  paragraphs: [
    {
      vi: 'Tôi là sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học FPT TP.HCM, tập trung vào hệ sinh thái Java/Spring Boot cho backend và React cho frontend. Tôi thích những hệ thống rõ ràng: API thiết kế gọn, dữ liệu nhất quán, giao diện không bắt người dùng phải nghĩ.',
      en: "I'm a final-year Software Engineering student at FPT University HCMC, focused on Java/Spring Boot for the backend and React for the frontend. I like systems that are clear: tidy APIs, consistent data and interfaces that don't make people think.",
    },
    {
      vi: 'Song song với việc học, tôi giảng dạy lập trình tại MindX — nơi tôi học được cách giải thích điều phức tạp bằng ngôn ngữ đơn giản. Kỹ năng đó theo tôi vào từng dự án freelance: hiểu đúng nhu cầu khách hàng, đề xuất giải pháp vừa đủ, và bàn giao sản phẩm mà đội ngũ của họ có thể tự vận hành.',
      en: 'Alongside my studies, I teach programming at MindX — where I learned to explain complex things in simple words. That skill follows me into every freelance project: understanding what clients actually need, proposing just-enough solutions, and handing over products their team can run on their own.',
    },
  ],
  timeline: [
    {
      period: '2022 — 2026',
      title: { vi: 'Kỹ thuật Phần mềm', en: 'B.Sc. Software Engineering' },
      place: { vi: 'Đại học FPT TP.HCM', en: 'FPT University HCMC' },
      detail: { vi: 'Sinh viên năm cuối', en: 'Final year' },
    },
    {
      period: '2024 — now',
      title: { vi: 'Giảng viên lập trình', en: 'Programming Instructor' },
      place: { vi: 'MindX Technology School', en: 'MindX Technology School' },
      detail: {
        vi: 'Dạy Web, JavaScript, React; xây công cụ chấm bài nội bộ',
        en: 'Teaching Web, JavaScript, React; built an internal grading tool',
      },
    },
    {
      period: '2023 — now',
      title: { vi: 'Freelance Developer', en: 'Freelance Developer' },
      place: { vi: 'Khách hàng VN & quốc tế', en: 'Local & international clients' },
      detail: {
        vi: 'Landing page, hệ thống quản lý, backend Spring Boot, Zalo Mini App',
        en: 'Landing pages, management systems, Spring Boot backends, Zalo Mini Apps',
      },
    },
  ],
  stats: [
    { value: '4+', key: 'years' },
    { value: '15+', key: 'projects' },
    { value: '200+', key: 'students' },
  ],
}
