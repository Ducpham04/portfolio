/**
 * UI strings (navigation, headings, labels).
 * Content such as projects, skills and services lives in src/data/*.
 * Add a key to `vi` first — TypeScript then requires the same key in `en`.
 */
const vi = {
  meta: {
    title: 'Phạm Văn Đức — Software Engineer · Java/Spring Boot & React',
    description:
      'Phạm Văn Đức — Software Engineer (Java/Spring Boot, React) & freelance developer tại TP.HCM. Nhận làm landing page, hệ thống quản lý cho doanh nghiệp và backend Spring Boot.',
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
    services: 'Bảng giá',
    contact: 'Liên hệ',
  },
  hero: {
    role: 'Software Engineer · Java / Spring Boot · React',
    based: 'TP. Hồ Chí Minh',
    taking: 'Nhận làm',
    takingList: 'Web · App · Backend Spring Boot',
    contactLabel: 'LH',
    intro:
      'Sinh viên năm cuối Kỹ thuật Phần mềm (ĐH FPT), giảng viên lập trình tại MindX. Tôi xây backend chắc chắn, giao diện gọn gàng, và giải thích rõ ràng từng bước để bạn luôn biết dự án đang đi tới đâu.',
    ctaPrimary: 'Liên hệ ngay',
    ctaCv: 'Tải CV',
    available: 'Đang nhận',
    availableWhat: 'Freelance & việc làm',
    localTime: 'Giờ Sài Gòn',
  },
  about: {
    heading: 'Kỹ sư phần mềm. Người dạy code. Freelancer.',
    timeline: 'Hành trình',
  },
  skills: {
    heading: 'Chuyên',
    sub: 'Chọn công nghệ theo bài toán, không theo trào lưu.',
  },
  projects: {
    heading: 'Dự án đã giao',
    sub: 'Từ ứng dụng di động, nền tảng chính quyền số đến landing page cho doanh nghiệp.',
    demo: 'Xem demo',
    code: 'Mã nguồn',
    private: 'Mã nguồn riêng tư',
    role: 'Vai trò',
    stack: 'Công nghệ sử dụng',
    illustration: 'Ảnh minh hoạ',
  },
  services: {
    heading: 'Bảng giá',
    sub: 'Làm việc trực tiếp hoặc qua Fiverr. Báo giá rõ ràng, tiến độ minh bạch.',
    cta: 'Đặt trên Fiverr',
    from: 'Từ',
  },
  contact: {
    heading: 'Liên hệ',
    sub: 'Có dự án, cơ hội việc làm hay chỉ muốn chào hỏi? Gửi tin nhắn, tôi thường phản hồi trong 24 giờ.',
    formTitle: 'Gửi tin nhắn',
    name: 'Tên của bạn',
    email: 'Email',
    message: 'Nội dung',
    messagePlaceholder: 'Kể tôi nghe về dự án của bạn…',
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
    title: 'Pham Van Duc — Software Engineer · Java/Spring Boot & React',
    description:
      'Pham Van Duc — Software Engineer (Java/Spring Boot, React) & freelance developer in Ho Chi Minh City. Landing pages, management systems for businesses and Spring Boot backends.',
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
    services: 'Prices',
    contact: 'Contact',
  },
  hero: {
    role: 'Software Engineer · Java / Spring Boot · React',
    based: 'Ho Chi Minh City',
    taking: 'Now taking',
    takingList: 'Web · Apps · Spring Boot backends',
    contactLabel: 'Contact',
    intro:
      'Final-year Software Engineering student (FPT University) and programming instructor at MindX. I build solid backends and clean interfaces, and explain every step clearly, so you always know where your project stands.',
    ctaPrimary: 'Hire me',
    ctaCv: 'Download CV',
    available: 'Available for',
    availableWhat: 'Freelance & jobs',
    localTime: 'Saigon time',
  },
  about: {
    heading: 'Software engineer. Coding teacher. Freelancer.',
    timeline: 'Path so far',
  },
  skills: {
    heading: 'Specialties',
    sub: 'I pick technology for the problem, not for the hype.',
  },
  projects: {
    heading: 'Shipped work',
    sub: 'From mobile apps and digital-government platforms to landing pages for businesses.',
    demo: 'Live demo',
    code: 'Source',
    private: 'Private source',
    role: 'Role',
    stack: 'Tech stack',
    illustration: 'Illustration',
  },
  services: {
    heading: 'Price board',
    sub: 'Work with me directly or through Fiverr. Clear quotes, transparent progress.',
    cta: 'Order on Fiverr',
    from: 'From',
  },
  contact: {
    heading: 'Get in touch',
    sub: 'Have a project, a role, or just want to say hi? Send a message; I usually reply within 24 hours.',
    formTitle: 'Send a message',
    name: 'Your name',
    email: 'Email',
    message: 'Message',
    messagePlaceholder: 'Tell me about your project…',
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
