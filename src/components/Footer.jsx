import { brand, navLinks } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a className="brand brand-light" href="#trang-chu">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 64 64" width="38" height="38">
                <rect width="64" height="64" rx="14" fill="#f3e5cf" />
                <path d="M20 18 L26 26 H38 L44 18 L46 34 C46 44 38 50 32 50 C26 50 18 44 18 34 Z" fill="#16233c" />
                <path d="M20 18 L26 26 L18 34 Z" fill="#b9854a" />
                <path d="M44 18 L38 26 L46 34 Z" fill="#b9854a" />
                <circle cx="26" cy="35" r="2.6" fill="#f3e5cf" />
                <circle cx="38" cy="35" r="2.6" fill="#f3e5cf" />
                <path d="M32 40 l-3.5 2.5 h7 Z" fill="#f3e5cf" />
              </svg>
            </span>
            <span className="brand-text">
              <span className="brand-name">{brand.name}</span>
              <span className="brand-tagline">{brand.tagline}</span>
            </span>
          </a>
          <p>
            Nơi kết nối những người nuôi tận tâm với chó mèo cảnh khỏe mạnh, rõ nguồn gốc.
          </p>
        </div>

        <div className="footer-col">
          <h4>Khám phá</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Liên hệ</h4>
          <ul>
            <li>
              <a href={brand.phoneHref}>{brand.phone}</a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </li>
            <li>{brand.address}</li>
            <li>{brand.hours}</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {brand.name}. Bảo lưu mọi quyền.</p>
        <p className="footer-note">
          Hình ảnh minh họa. Thông tin từng bé được xác nhận qua tư vấn trực tiếp.
        </p>
      </div>
    </footer>
  )
}
