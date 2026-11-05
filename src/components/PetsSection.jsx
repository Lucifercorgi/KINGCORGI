import PetArt from './PetArt.jsx'
import { ArrowRight, Check } from './Icons.jsx'

export default function PetsSection({ pets, filters, activeFilter, onFilter }) {
  const visible = activeFilter === 'all' ? pets : pets.filter((pet) => pet.type === activeFilter)

  return (
    <section className="section pets-section" id="thu-cung">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="overline">Danh sách bé hiện có</p>
            <h2>
              Những bé đang chờ <em>một mái nhà</em>
            </h2>
          </div>
          <p className="section-desc">
            Tình trạng có thể thay đổi mỗi ngày. Giá và lịch tiêm của từng bé được cập nhật khi bạn liên
            hệ trực tiếp.
          </p>
        </div>

        <div className="filters filters-inline" role="group" aria-label="Lọc danh sách thú cưng">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`chip${activeFilter === filter.id ? ' is-active' : ''}`}
              aria-pressed={activeFilter === filter.id}
              onClick={() => onFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
          <span className="result-count" aria-live="polite">
            {visible.length} bé
          </span>
        </div>

        <div className="pet-grid" id="danh-sach-be">
          {visible.map((pet) => (
            <article className="pet-card" key={pet.id}>
              <div className="pet-media">
                <span className="pet-type">{pet.type === 'dog' ? 'Chó cảnh' : 'Mèo cảnh'}</span>
                {pet.featured && <span className="pet-flag">Nổi bật</span>}
                <PetArt art={pet.art} tone={pet.tone} className="pet-art" />
              </div>
              <div className="pet-body">
                <div className="pet-title-row">
                  <h3>{pet.name}</h3>
                  <span className="pet-price">{pet.price}</span>
                </div>
                <p className="pet-breed">{pet.breed}</p>
                <ul className="pet-meta">
                  <li>
                    {pet.gender} · {pet.age}
                  </li>
                </ul>
                <ul className="pet-traits">
                  {pet.traits.map((trait) => (
                    <li key={trait}>
                      <Check size={14} /> {trait}
                    </li>
                  ))}
                </ul>
                <a className="pet-link" href="#lien-he">
                  Hỏi về bé này <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="empty-note">Hiện chưa có bé nào trong nhóm này. Vui lòng liên hệ để được tư vấn.</p>
        )}
      </div>
    </section>
  )
}
