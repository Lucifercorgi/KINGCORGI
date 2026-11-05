import { useState } from 'react'
import { brand } from '../data/site.js'
import { ArrowRight, Clock, Phone, Pin } from './Icons.jsx'

const initialForm = { name: '', phone: '', petType: 'dog', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
    setError('')
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const name = form.name.trim()
    const phone = form.phone.trim()
    const digits = phone.replace(/[^\d+]/g, '')

    if (name.length < 2) {
      setError('Vui lòng nhập tên của bạn (ít nhất 2 ký tự).')
      return
    }
    if (digits.replace(/\D/g, '').length < 8) {
      setError('Số điện thoại chưa hợp lệ, vui lòng kiểm tra lại.')
      return
    }

    const summary = [
      `Xin chào ${brand.name},`,
      `Tôi là ${name}.`,
      `Quan tâm: ${form.petType === 'dog' ? 'chó cảnh' : form.petType === 'cat' ? 'mèo cảnh' : 'cả chó và mèo cảnh'}.`,
      form.message.trim() ? `Nội dung: ${form.message.trim()}` : '',
      `Số điện thoại liên hệ: ${phone}.`,
    ]
      .filter(Boolean)
      .join(' ')

    window.open(`https://zalo.me/s/${encodeURIComponent(brand.phone)}?text=${encodeURIComponent(summary)}`, '_blank', 'noopener')
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section className="contact-section" id="lien-he">
      <div className="container contact-inner">
        <div className="contact-copy">
          <p className="overline">Liên hệ tư vấn</p>
          <h2>
            Bạn đang tìm <em>một người bạn nhỏ?</em>
          </h2>
          <p className="contact-lead">
            Hãy để lại thông tin, chúng tôi sẽ gọi lại để hỏi về không gian sống và gợi ý những bé phù
            hợp. Không cần quyết định ngay trong lần đầu.
          </p>

          <ul className="contact-info">
            <li>
              <span className="info-icon">
                <Phone size={17} />
              </span>
              <span>
                <em>Hotline / Zalo</em>
                <a href={brand.phoneHref}>{brand.phone}</a>
              </span>
            </li>
            <li>
              <span className="info-icon">
                <Pin size={17} />
              </span>
              <span>
                <em>Địa chỉ</em>
                {brand.address}
              </span>
            </li>
            <li>
              <span className="info-icon">
                <Clock size={17} />
              </span>
              <span>
                <em>Giờ mở cửa</em>
                {brand.hours}
              </span>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="cf-name">Tên của bạn</label>
            <input
              id="cf-name"
              name="name"
              type="text"
              placeholder="Ví dụ: Nguyễn Minh Anh"
              value={form.name}
              onChange={update('name')}
              autoComplete="name"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="cf-phone">Số điện thoại</label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              placeholder="09xx xxx xxx"
              value={form.phone}
              onChange={update('phone')}
              autoComplete="tel"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="cf-type">Bạn quan tâm</label>
            <select id="cf-type" name="petType" value={form.petType} onChange={update('petType')}>
              <option value="dog">Chó cảnh</option>
              <option value="cat">Mèo cảnh</option>
              <option value="both">Cả chó và mèo cảnh</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="cf-message">Ghi chú (không bắt buộc)</label>
            <textarea
              id="cf-message"
              name="message"
              rows="3"
              placeholder="Bạn muốn tìm bé thế nào? Có trẻ nhỏ trong nhà không?"
              value={form.message}
              onChange={update('message')}
            />
          </div>

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          {submitted && !error && (
            <p className="form-success" role="status">
              Đã mở cửa sổ Zalo soạn sẵn tin nhắn. Nếu cửa sổ không hiện, bạn có thể gọi{' '}
              <a href={brand.phoneHref}>{brand.phone}</a>.
            </p>
          )}

          <button type="submit" className="btn btn-gold form-submit">
            Gửi yêu cầu tư vấn <ArrowRight size={16} />
          </button>
          <p className="form-note">Thông tin của bạn chỉ được dùng để liên hệ về nội dung tư vấn.</p>
        </form>
      </div>
    </section>
  )
}
