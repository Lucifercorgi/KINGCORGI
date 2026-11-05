import PetArt from './PetArt.jsx'
import { stats, values } from '../data/site.js'

export default function Welcome({ brand }) {
  return (
    <section className="welcome" id="ve-chung-toi">
      <div className="container welcome-inner">
        <div className="welcome-art">
          <div className="frame">
            <PetArt art="crown" tone="gold" className="portrait" />
          </div>
          <div className="art-caption">
            <span className="dot" aria-hidden="true" />
            Mỗi bé đều có hồ sơ chăm sóc riêng
          </div>
        </div>

        <div className="welcome-copy">
          <p className="overline">Welcome to {brand.name}</p>
          <h2>
            Không chỉ là thú cưng.
            <em>Là thành viên của gia đình.</em>
          </h2>
          <p>
            Chúng tôi bắt đầu từ một niềm yêu thích rất nhỏ với những chú corgi và dần trở thành nơi
            kết nối những người nuôi tận tâm với những bé chó mèo cảnh khỏe mạnh. Mỗi bé trước khi về
            nhà mới đều được kiểm tra sức khỏe, tiêm phòng theo lịch và làm quen với môi trường sống
            thường ngày.
          </p>

          <ul className="value-list">
            {values.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>

          <div className="stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
