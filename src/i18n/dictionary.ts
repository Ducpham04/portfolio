/**
 * UI strings (navigation, headings, labels).
 * Content such as projects, skills and services lives in src/data/*.
 * Add a key to `vi` first — TypeScript then requires the same key in `en`.
 */
const vi = {
  meta: {
    title: 'Phạm Văn Đức — Software Engineer · Java/Spring Boot & React',
    description:
      'Phạm Văn Đức — Software Engineer (Java/Spring Boot, React) & freelance developer tại TP.HCM. Xây backend vững chắc, landing page cao cấp và hệ thống quản lý cho doanh nghiệp.',
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
    services: 'Dịch vụ',
    contact: 'Liên hệ',
  },
  hero: {
    available: 'Đang nhận dự án freelance',
    greeting: 'Xin chào, tôi là',
    title: 'Software Engineer',
    titleSub: 'Java / Spring Boot · React',
    intro:
      'Tôi xây backend vững như bê tông và giao diện mượt như lụa — giúp sản phẩm của bạn chạy nhanh, bền và đẹp ngay từ ngày đầu.',
    ctaPrimary: 'Liên hệ ngay',
    ctaCv: 'Tải CV',
    scroll: 'Cuộn xuống',
    based: 'TP. Hồ Chí Minh, Việt Nam',
  },
  about: {
    eyebrow: '01 — Giới thiệu',
    heading: 'Kỹ sư phần mềm, người dạy code, và freelancer.',
    stats: {
      years: 'năm viết code',
      projects: 'dự án đã giao',
      students: 'học viên đã dạy',
    },
  },
  skills: {
    eyebrow: '02 — Kỹ năng',
    heading: 'Bộ công cụ tôi dùng mỗi ngày.',
    sub: 'Chọn công nghệ theo bài toán, không theo trào lưu.',
  },
  projects: {
    eyebrow: '03 — Dự án',
    heading: 'Một vài thứ tôi đã xây.',
    sub: 'Từ ứng dụng di động, nền tảng chính quyền số đến landing page chuyển đổi cao.',
    demo: 'Xem demo',
    code: 'Mã nguồn',
    private: 'Mã nguồn riêng tư',
    role: 'Vai trò',
    stack: 'Công nghệ sử dụng',
  },
  services: {
    eyebrow: '04 — Dịch vụ',
    heading: 'Bạn cần gì, tôi làm được.',
    sub: 'Làm việc trực tiếp hoặc qua Fiverr — báo giá rõ ràng, tiến độ minh bạch.',
    cta: 'Đặt trên Fiverr',
    from: 'Từ',
  },
  contact: {
    eyebrow: '05 — Liên hệ',
    heading: 'Cùng làm điều gì đó tốt nhé.',
    sub: 'Có dự án, cơ hội việc làm hay chỉ muốn chào hỏi? Hộp thư của tôi luôn mở — thường phản hồi trong 24 giờ.',
    name: 'Tên của bạn',
    email: 'Email',
    message: 'Nội dung',
    messagePlaceholder: 'Kể tôi nghe về dự án của bạn…',
    send: 'Gửi tin nhắn',
    sending: 'Đang gửi…',
    success: 'Đã gửi! Tôi sẽ phản hồi sớm nhất có thể.',
    error: 'Gửi không thành công. Vui lòng thử lại hoặc email trực tiếp cho tôi.',
    mailtoNote: 'Biểu mẫu sẽ mở ứng dụng email của bạn.',
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
      'Pham Van Duc — Software Engineer (Java/Spring Boot, React) & freelance developer based in Ho Chi Minh City. Solid backends, premium landing pages and management systems for businesses.',
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
    services: 'Services',
    contact: 'Contact',
  },
  hero: {
    available: 'Available for freelance',
    greeting: "Hi, I'm",
    title: 'Software Engineer',
    titleSub: 'Java / Spring Boot · React',
    intro:
      'I build backends as solid as concrete and interfaces as smooth as silk — so your product is fast, reliable and beautiful from day one.',
    ctaPrimary: 'Hire me',
    ctaCv: 'Download CV',
    scroll: 'Scroll down',
    based: 'Ho Chi Minh City, Vietnam',
  },
  about: {
    eyebrow: '01 — About',
    heading: 'Software engineer, coding teacher, and freelancer.',
    stats: {
      years: 'years of coding',
      projects: 'projects shipped',
      students: 'students taught',
    },
  },
  skills: {
    eyebrow: '02 — Skills',
    heading: 'The toolkit I reach for daily.',
    sub: 'I pick technology for the problem, not for the hype.',
  },
  projects: {
    eyebrow: '03 — Work',
    heading: 'A few things I have built.',
    sub: 'From mobile apps and digital-government platforms to high-converting landing pages.',
    demo: 'Live demo',
    code: 'Source',
    private: 'Private source',
    role: 'Role',
    stack: 'Tech stack',
  },
  services: {
    eyebrow: '04 — Services',
    heading: 'What I can build for you.',
    sub: 'Work with me directly or through Fiverr — clear quotes, transparent progress.',
    cta: 'Order on Fiverr',
    from: 'From',
  },
  contact: {
    eyebrow: '05 — Contact',
    heading: "Let's build something good.",
    sub: 'Have a project, a role, or just want to say hi? My inbox is always open — I usually reply within 24 hours.',
    name: 'Your name',
    email: 'Email',
    message: 'Message',
    messagePlaceholder: 'Tell me about your project…',
    send: 'Send message',
    sending: 'Sending…',
    success: "Sent! I'll get back to you as soon as I can.",
    error: 'Something went wrong. Please try again or email me directly.',
    mailtoNote: 'The form will open your email app.',
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
