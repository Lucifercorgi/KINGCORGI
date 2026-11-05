import PetArt from './PetArt.jsx'
import { guides } from '../data/site.js'
import { ArrowRight } from './Icons.jsx'

export default function Guides() {
  return (
    <section className="section guides-section" id="cam-nang">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="overline">Cẩm nang nuôi bé</p>
            <h2>
              Kiến thức cho <em>những ngày đầu</em>
            </h2>
          </div>
          <p className="section-desc">
            Những ghi chú ngắn, dễ áp dụng, được tổng hợp từ kinh nghiệm chăm sóc chó mèo cảnh hằng
            ngày tại trại.
          </p>
        </div>

        <div className="guide-grid">
          {guides.map((guide) => (
            <article className="guide-card" key={guide.id}>
              <div className="guide-media">
                <PetArt art={guide.art} tone={guide.art === 'cat' ? 'mist' : 'sand'} className="guide-art" />
              </div>
              <div className="guide-body">
                <p className="guide-kicker">{guide.kicker}</p>
                <h3>{guide.title}</h3>
                <p>{guide.excerpt}</p>
                <div className="guide-foot">
                  <span>{guide.readTime}</span>
                  <a href="#lien-he" aria-label={`Đọc tiếp: ${guide.title}`}>
                    Đọc tiếp <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
