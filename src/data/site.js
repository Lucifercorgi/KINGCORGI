export const brand = {
  name: 'KING CORGI PET',
  tagline: 'PREMIUM PET • LOVE & CARE',
  phone: '0900 123 456',
  phoneHref: 'tel:0900123456',
  zalo: 'https://zalo.me/0900123456',
  email: 'hello@kingcorgipet.vn',
  address: 'Số 18 Nguyễn Văn Hưởng, Thảo Điền, TP. Hồ Chí Minh',
  hours: '08:30 – 20:00, thứ 2 – chủ nhật',
}

export const navLinks = [
  { label: 'Trang chủ', href: '#trang-chu' },
  { label: 'Thú cưng', href: '#thu-cung' },
  { label: 'Về chúng tôi', href: '#ve-chung-toi' },
  { label: 'Cẩm nang', href: '#cam-nang' },
]

export const filters = [
  { id: 'all', label: 'Tất cả' },
  { id: 'dog', label: 'Chó cảnh' },
  { id: 'cat', label: 'Mèo cảnh' },
]

export const categories = [
  {
    id: 'dog',
    tag: 'CHÓ CẢNH',
    title: 'Các bé chó cảnh',
    subtitle: 'Đa dạng giống và tính cách',
    action: 'Xem danh sách bé hiện có',
    art: 'corgi',
    tone: 'sand',
  },
  {
    id: 'cat',
    tag: 'MÈO CẢNH',
    title: 'Các bé mèo cảnh',
    subtitle: 'Nhiều màu lông và cá tính',
    action: 'Xem danh sách bé hiện có',
    art: 'cat',
    tone: 'mist',
  },
  {
    id: 'featured',
    tag: 'ĐƯỢC QUAN TÂM',
    title: 'Corgi & chó nhỏ',
    subtitle: 'Tư vấn theo nhu cầu của bạn',
    action: 'Liên hệ để được tư vấn',
    art: 'crown',
    tone: 'gold',
  },
]

export const pets = [
  {
    id: 'p1',
    name: 'Bắp',
    breed: 'Corgi Pembroke',
    type: 'dog',
    gender: 'Đực',
    age: '3 tháng',
    price: 'Liên hệ',
    traits: ['Lông vàng trắng', 'Tiêm 2 mũi', 'Có giấy tờ'],
    art: 'corgi',
    tone: 'sand',
    featured: true,
  },
  {
    id: 'p2',
    name: 'Mochi',
    breed: 'Poodle Toy',
    type: 'dog',
    gender: 'Cái',
    age: '4 tháng',
    price: 'Liên hệ',
    traits: ['Lông kem', 'Xã hội tốt', 'Huấn luyện cơ bản'],
    art: 'poodle',
    tone: 'cream',
  },
  {
    id: 'p3',
    name: 'Sữa',
    breed: 'Mèo Anh lông ngắn',
    type: 'cat',
    gender: 'Cái',
    age: '5 tháng',
    price: 'Liên hệ',
    traits: ['Mắt xanh', 'Má tròn', 'Ăn hạt tốt'],
    art: 'cat',
    tone: 'mist',
    featured: true,
  },
  {
    id: 'p4',
    name: 'Bơ',
    breed: 'Golden Retriever mini',
    type: 'dog',
    gender: 'Đực',
    age: '2,5 tháng',
    price: 'Liên hệ',
    traits: ['Hiền, quấn người', 'Lông vàng mật', 'Đã tẩy giun'],
    art: 'golden',
    tone: 'gold',
  },
  {
    id: 'p5',
    name: 'Cam',
    breed: 'Mèo Tai Cụp',
    type: 'cat',
    gender: 'Đực',
    age: '3,5 tháng',
    price: 'Liên hệ',
    traits: ['Tai cụp', 'Lông cam', 'Rất tình cảm'],
    art: 'cat2',
    tone: 'peach',
  },
  {
    id: 'p6',
    name: 'Kem',
    breed: 'Shiba Inu',
    type: 'dog',
    gender: 'Cái',
    age: '4 tháng',
    price: 'Liên hệ',
    traits: ['Lông nâu đỏ', 'Độc lập', 'Sức khỏe tốt'],
    art: 'shiba',
    tone: 'sand',
  },
]

export const guides = [
  {
    id: 'g1',
    kicker: 'CHỌN BÉ',
    title: 'Chọn chó cảnh phù hợp với không gian sống',
    excerpt:
      'Căn hộ nhỏ, nhà có trẻ nhỏ hay người lớn tuổi đều có giống phù hợp. Cùng xem cách cân đối diện tích, mức vận động và thời gian chăm sóc.',
    readTime: '6 phút đọc',
    art: 'corgi',
  },
  {
    id: 'g2',
    kicker: 'CHĂM SÓC',
    title: 'Tuần đầu tiên đưa bé về nhà',
    excerpt:
      'Không gian riêng, lịch ăn, nhiệt độ và cách tạo cảm giác an toàn giúp bé làm quen nhanh hơn rất nhiều.',
    readTime: '8 phút đọc',
    art: 'cat',
  },
  {
    id: 'g3',
    kicker: 'SỨC KHỎE',
    title: 'Lịch tiêm phòng cho chó mèo cảnh',
    excerpt:
      'Mốc tiêm, tẩy giun và các dấu hiệu cần đưa bé đi khám sớm, tổng hợp dễ hiểu cho người nuôi lần đầu.',
    readTime: '5 phút đọc',
    art: 'golden',
  },
]

export const values = [
  {
    title: 'Nguồn gốc rõ ràng',
    text: 'Mỗi bé đều có thông tin giống, lịch tiêm và quá trình chăm sóc cụ thể trước khi về nhà mới.',
  },
  {
    title: 'Tư vấn tận tâm',
    text: 'Chúng tôi hỏi về không gian sống, thời gian và kinh nghiệm của bạn trước khi gợi ý một bé.',
  },
  {
    title: 'Đồng hành sau khi về',
    text: 'Hỗ trợ chế độ ăn, lịch tiêm và giải đáp thắc mắc trong suốt tháng đầu tiên.',
  },
]

export const stats = [
  { value: '7+', label: 'Năm chăm sóc thú cưng cảnh' },
  { value: '480+', label: 'Bé đã về nhà mới' },
  { value: '24/7', label: 'Hỗ trợ sau khi nhận bé' },
]
