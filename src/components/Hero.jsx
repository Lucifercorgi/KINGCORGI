import PetArt from './PetArt.jsx'
import { ArrowRight } from './Icons.jsx'

export default function Hero({ categories, filters, activeFilter, onFilter, onCategoryOpen }) {
  return (
    <section className="hero" id="trang-chu">
      <div className="container">
        <div className="hero-top">
          <div className="hero-heading">
            <p className="overline">Meet your companion</p>
            <h1>
              Những người bạn <em>đáng yêu</em>
            </h1>
          </div>
          <p className="hero-desc">
            Khám phá các bé chó và mèo cảnh. Liên hệ để nhận thông tin về những bé hiện có.
          </p>
        </div>

        <div className="filters" role="group" aria-label="Lọc theo loại thú cưng">
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
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <article className={`category-card tone-${category.tone}`} key={category.id}>
              <span className="card-tag">{category.tag}</span>
              <div className="card-art">
                <PetArt art={category.art} tone={category.tone} className="art" />
              </div>
              <div className="card-body">
                <h3>{category.title}</h3>
                <p className="card-sub">{category.subtitle}</p>
                <button type="button" className="card-action" onClick={() => onCategoryOpen(category.id)}>
                  <span>
                    {category.action} <ArrowRight size={15} />
                  </span>
                  <span className="card-action-dot" aria-hidden="true">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="disclaimer">
          Danh mục trên là nhóm thú cưng tham khảo, không phải xác nhận tình trạng còn hàng. Vui lòng
          liên hệ để kiểm tra bé hiện có.
        </p>
      </div>
    </section>
  )
}
