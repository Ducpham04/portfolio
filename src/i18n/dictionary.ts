/**
 * UI strings (navigation, headings, labels).
 * Content such as projects and skills lives in src/data/*.
 * Add a key to `vi` first — TypeScript then requires the same key in `en`.
 */
const vi = {
  meta: {
    title: 'Phạm Văn Đức — Web Developer · React & Spring Boot',
    description:
      'Phạm Văn Đức — Web Developer (React, Spring Boot) tại TP.HCM. Sinh viên năm cuối Kỹ thuật Phần mềm ĐH FPT, giảng viên lập trình MindX. Dự án: Viway, Nghĩa Hành Số, Landing Templates.',
  },
  a11y: {
    skip: 'Bỏ qua tới nội dung chính',
    toggleTheme: 'Chuyển chế độ sáng/tối',
    toggleLang: 'Switch to English',
    openMenu: 'Mở menu',
    closeMenu: 'Đóng menu',
    newTab: '(mở tab mới)',
    primaryNav: 'Điều hướng chính',
  },
  nav: {
    about: 'Giới thiệu',
    skills: 'Kỹ năng',
    projects: 'Dự án',
    contact: 'Liên hệ',
  },
  hero: {
    role: 'Web Developer · React · Spring Boot',
    based: 'TP. Hồ Chí Minh',
    taking: 'Đang tìm',
    takingList: 'Web Developer · Fresher',
    contactLabel: 'LH',
    intro:
      'Sinh viên năm cuối Kỹ thuật Phần mềm (ĐH FPT), giảng viên lập trình tại MindX. Tôi làm website và web app responsive bằng React và Spring Boot, tự kết nối API và tự triển khai lên môi trường thật.',
    ctaPrimary: 'Liên hệ',
    ctaCv: 'Tải CV',
    available: 'Sẵn sàng',
    availableWhat: 'Việc làm full-time',
    localTime: 'Giờ Sài Gòn',
  },
  about: {
    heading: 'Lập trình viên web. Người dạy code.',
    timeline: 'Hành trình',
  },
  skills: {
    heading: 'Chuyên',
    sub: 'Chọn công nghệ theo bài toán, không theo trào lưu.',
  },
  projects: {
    heading: 'Dự án',
    sub: 'Một web app đang chạy thật, một đồ án triển khai cho xã, và các dự án cá nhân về frontend.',
    demo: 'Xem demo',
    code: 'Mã nguồn',
    private: 'Mã nguồn riêng tư',
    role: 'Vai trò',
    stack: 'Công nghệ sử dụng',
    illustration: 'Ảnh minh hoạ',
  },
  contact: {
    heading: 'Liên hệ',
    sub: 'Có cơ hội việc làm hoặc muốn trao đổi thêm? Gửi tin nhắn, tôi thường phản hồi trong 24 giờ.',
    formTitle: 'Gửi tin nhắn',
    name: 'Tên của bạn',
    email: 'Email',
    message: 'Nội dung',
    messagePlaceholder: 'Nội dung bạn muốn trao đổi…',
    send: 'Gửi tin nhắn',
    sending: 'Đang gửi…',
    success: 'Đã gửi! Tôi sẽ phản hồi sớm nhất có thể.',
    error: 'Gửi không thành công. Vui lòng thử lại hoặc email trực tiếp cho tôi.',
    mailtoNote: 'Nút gửi sẽ mở ứng dụng email của bạn với nội dung đã điền sẵn.',
    or: 'Hoặc tìm tôi tại',
    copy: 'Sao chép email',
    copied: 'Đã sao chép!',
  },
  footer: {
    built: 'Thiết kế & phát triển bởi Phạm Văn Đức.',
    top: 'Lên đầu trang',
  },
}

export type Dictionary = typeof vi

const en: Dictionary = {
  meta: {
    title: 'Pham Van Duc — Web Developer · React & Spring Boot',
    description:
      'Pham Van Duc — Web Developer (React, Spring Boot) in Ho Chi Minh City. Final-year Software Engineering student at FPT University and programming instructor at MindX. Projects: Viway, Nghia Hanh So, Landing Templates.',
  },
  a11y: {
    skip: 'Skip to main content',
    toggleTheme: 'Toggle light/dark mode',
    toggleLang: 'Chuyển sang tiếng Việt',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    newTab: '(opens in a new tab)',
    primaryNav: 'Primary navigation',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Work',
    contact: 'Contact',
  },
  hero: {
    role: 'Web Developer · React · Spring Boot',
    based: 'Ho Chi Minh City',
    taking: 'Looking for',
    takingList: 'Web Developer · Fresher',
    contactLabel: 'Contact',
    intro:
      'Final-year Software Engineering student (FPT University) and programming instructor at MindX. I build responsive websites and web apps with React and Spring Boot, wire up the APIs and deploy them myself.',
    ctaPrimary: 'Contact me',
    ctaCv: 'Download CV',
    available: 'Available for',
    availableWhat: 'Full-time roles',
    localTime: 'Saigon time',
  },
  about: {
    heading: 'Web developer. Coding teacher.',
    timeline: 'Path so far',
  },
  skills: {
    heading: 'Specialties',
    sub: 'I pick technology for the problem, not for the hype.',
  },
  projects: {
    heading: 'Selected work',
    sub: 'A web app running in production, a capstone being deployed for a commune, and personal frontend projects.',
    demo: 'Live demo',
    code: 'Source',
    private: 'Private source',
    role: 'Role',
    stack: 'Tech stack',
    illustration: 'Illustration',
  },
  contact: {
    heading: 'Get in touch',
    sub: 'Have a role in mind or want to talk? Send a message; I usually reply within 24 hours.',
    formTitle: 'Send a message',
    name: 'Your name',
    email: 'Email',
    message: 'Message',
    messagePlaceholder: 'What would you like to talk about…',
    send: 'Send message',
    sending: 'Sending…',
    success: "Sent! I'll get back to you as soon as I can.",
    error: 'Something went wrong. Please try again or email me directly.',
    mailtoNote: 'The send button opens your email app with the message filled in.',
    or: 'Or find me on',
    copy: 'Copy email',
    copied: 'Copied!',
  },
  footer: {
    built: 'Designed & built by Pham Van Duc.',
    top: 'Back to top',
  },
}

export const dictionary = { vi, en } as const
