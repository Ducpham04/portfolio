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
  /** File placed in /public — replace public/cv.pdf when the CV changes */
  cvUrl: '/cv.pdf',
  /**
   * Formspree form ID (the part after https://formspree.io/f/).
   * Leave empty to fall back to a `mailto:` link.
   * Can also be set via the VITE_FORMSPREE_ID environment variable.
   */
  formspreeId: (import.meta.env.VITE_FORMSPREE_ID as string | undefined) ?? '',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Ducpham04', handle: '@Ducpham04' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/v%C4%83n-%C4%91%E1%BB%A9c-ph%E1%BA%A1m-500554265/',
      handle: 'LinkedIn',
    },
  ],
} as const

export const about: {
  paragraphs: Localized[]
  timeline: { period: Localized; title: Localized; place: Localized; detail: Localized }[]
} = {
  paragraphs: [
    {
      vi: 'Tôi là sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học FPT TP.HCM. Tôi làm website và web app bằng React ở frontend, Java/Spring Boot ở backend, và thích những hệ thống rõ ràng: API gọn, dữ liệu nhất quán, giao diện không bắt người dùng phải nghĩ.',
      en: "I'm a final-year Software Engineering student at FPT University HCMC. I build websites and web apps with React on the frontend and Java/Spring Boot on the backend, and I like systems that are clear: tidy APIs, consistent data and interfaces that don't make people think.",
    },
    {
      vi: 'Song song với việc học, tôi dạy lập trình tại MindX từ năm 2023, nơi tôi học cách giải thích điều phức tạp bằng ngôn ngữ đơn giản. Hiện tôi làm trưởng nhóm kỹ thuật cho đồ án tốt nghiệp Nghĩa Hành Số, một hệ thống phản ánh hiện trường được triển khai thật cho một xã.',
      en: "Alongside my studies, I have taught programming at MindX since 2023, where I learned to explain complex things in simple words. I'm now the technical lead of Nghia Hanh So, my graduation project: a citizen feedback system being deployed for a commune.",
    },
  ],
  timeline: [
    {
      period: { vi: '2022–2026', en: '2022–2026' },
      title: { vi: 'Kỹ thuật Phần mềm', en: 'B.Sc. Software Engineering' },
      place: { vi: 'Đại học FPT TP.HCM', en: 'FPT University HCMC' },
      detail: { vi: 'Sinh viên năm cuối', en: 'Final year' },
    },
    {
      period: { vi: '2023–nay', en: '2023–now' },
      title: { vi: 'Giảng viên lập trình', en: 'Programming Instructor' },
      place: { vi: 'MindX Technology School', en: 'MindX Technology School' },
      detail: {
        vi: 'Dạy Python và lập trình web cơ bản; viết công cụ hỗ trợ chấm bài',
        en: 'Teaching Python and basic web programming; built a grading helper tool',
      },
    },
    {
      period: { vi: '09/2026–nay', en: 'Sep 2026–now' },
      title: { vi: 'Trưởng nhóm kỹ thuật', en: 'Technical Lead' },
      place: { vi: 'Nghĩa Hành Số', en: 'Nghia Hanh So' },
      detail: {
        vi: 'Đồ án tốt nghiệp triển khai cho xã · nhóm 4 người · Jira Scrum',
        en: 'Capstone deployed for a commune · team of 4 · Jira Scrum',
      },
    },
  ],
}
