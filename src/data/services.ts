import type { Localized } from '../i18n/types'
import { profile } from './profile'

export interface Service {
  id: string
  title: Localized
  description: Localized
  features: Localized[]
  /** Starting price shown on the card (free text, e.g. "$150") */
  price: string
  /** Link to the Fiverr gig — replace the placeholder URLs */
  fiverrUrl: string
}

export const services: Service[] = [
  {
    id: 'landing',
    title: { vi: 'Landing page cao cấp', en: 'Premium landing pages' },
    description: {
      vi: 'Trang đích được thiết kế riêng, tải nhanh, chuẩn SEO, tối ưu chuyển đổi. Phù hợp BĐS, nội thất, dịch vụ.',
      en: 'Custom-designed, fast, SEO-ready landing pages built to convert. Great for real estate, interiors and services.',
    },
    features: [
      { vi: 'Thiết kế độc bản, không dùng template', en: 'Bespoke design, no templates' },
      { vi: 'Lighthouse 90+ & responsive', en: 'Lighthouse 90+ & responsive' },
      { vi: 'Form thu lead + tracking', en: 'Lead forms + analytics' },
    ],
    price: '$150',
    fiverrUrl: `${profile.fiverrUrl}/landing-page`,
  },
  {
    id: 'sme',
    title: { vi: 'Hệ thống quản lý cho SME', en: 'Management systems for SMEs' },
    description: {
      vi: 'Phần mềm quản lý bán hàng, kho, nhân sự, khách hàng, đo ni đóng giày theo quy trình của doanh nghiệp bạn.',
      en: 'Sales, inventory, HR and CRM software, tailored to the way your business actually works.',
    },
    features: [
      { vi: 'Dashboard & báo cáo', en: 'Dashboards & reports' },
      { vi: 'Phân quyền người dùng', en: 'Role-based access' },
      { vi: 'Hỗ trợ sau bàn giao', en: 'Post-launch support' },
    ],
    price: '$500',
    fiverrUrl: `${profile.fiverrUrl}/management-system`,
  },
  {
    id: 'backend',
    title: { vi: 'Spring Boot backend', en: 'Spring Boot backends' },
    description: {
      vi: 'REST API bảo mật, có tài liệu, có test, sẵn sàng cho web, mobile và tích hợp bên thứ ba.',
      en: 'Secure, documented, tested REST APIs, ready for web, mobile and third-party integrations.',
    },
    features: [
      { vi: 'JWT / OAuth2, Spring Security', en: 'JWT / OAuth2, Spring Security' },
      { vi: 'MySQL/PostgreSQL, Docker', en: 'MySQL/PostgreSQL, Docker' },
      { vi: 'Swagger docs & unit test', en: 'Swagger docs & unit tests' },
    ],
    price: '$300',
    fiverrUrl: `${profile.fiverrUrl}/spring-boot-api`,
  },
]
