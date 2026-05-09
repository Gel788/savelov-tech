// ── Все товары с полными характеристиками ───────────────────
export const products = [

  // ═══════════════ СМАРТФОНЫ ═══════════════

  {
    id: 1, cat: 'phones',
    name: 'iPhone 17 Pro Max', brand: 'Apple', slug: 'apple',
    tagline: 'Флагман нового поколения — A19 Pro, камера 48 МП',
    badge: 'Хит',
    img: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',       v: '6.9" Super Retina XDR' },
        { k: 'Разрешение',      v: '2868 × 1320 пикс, 460 PPI' },
        { k: 'Технология',      v: 'OLED ProMotion 1–120 Гц' },
        { k: 'Яркость',         v: 'до 2000 нит (HDR), 1000 нит (SDR)' },
        { k: 'Защита',          v: 'Ceramic Shield, олеофобное покрытие' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',             v: 'Apple A19 Pro (3 нм, TSMC)' },
        { k: 'CPU',             v: '6-core (2 Performance + 4 Efficiency)' },
        { k: 'GPU',             v: '6-core, Apple Metal 4' },
        { k: 'Neural Engine',   v: '18-core, 38 TOPS' },
        { k: 'ОЗУ',             v: '12 GB LPDDR5X' },
        { k: 'Накопитель',      v: '256 GB / 512 GB / 1 TB NVMe' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',        v: '48 МП, f/1.78, OIS, 4K@120fps' },
        { k: 'Ультраширокая',   v: '12 МП, f/2.2, 120°, макро 2 мм' },
        { k: 'Телефото',        v: '12 МП, f/2.8, 5× оптический зум' },
        { k: 'Фронтальная',     v: '24 МП, f/1.9, TrueDepth, 4K' },
        { k: 'Видео',           v: 'ProRes 4K@120fps, Log видео, HDR' },
      ]},
      { group: 'Аккумулятор и зарядка', items: [
        { k: 'Ёмкость',         v: '4685 мАч' },
        { k: 'Проводная',       v: 'до 30 Вт (USB-C MagSafe)' },
        { k: 'Беспроводная',    v: 'MagSafe 25 Вт, Qi2 15 Вт' },
        { k: 'Время работы',    v: 'до 33 часов видео' },
      ]},
      { group: 'Связь и интерфейсы', items: [
        { k: 'Сотовая связь',   v: '5G (mmWave + Sub-6), 4G LTE' },
        { k: 'Wi-Fi',           v: 'Wi-Fi 7 (802.11be), 2.4/5/6 ГГц' },
        { k: 'Bluetooth',       v: 'BT 5.4, LE Audio' },
        { k: 'NFC',             v: 'Apple Pay, CarKey, транспорт' },
        { k: 'Разъём',          v: 'USB-C 3.2 Gen 2 (10 Гбит/с)' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',        v: 'Титан класса 5, текстурированное матовое стекло' },
        { k: 'Защита',          v: 'IP68 (погружение до 10 м, 30 мин)' },
        { k: 'Цвета',           v: 'Чёрный Титан, Белый Титан, Пустынный Титан, Натуральный Титан' },
        { k: 'Размеры',         v: '163 × 77.6 × 8.25 мм, 227 г' },
        { k: 'SIM',             v: 'Dual eSIM, nano-SIM' },
      ]},
    ],
  },

  {
    id: 2, cat: 'phones',
    name: 'Samsung Galaxy S26 Ultra', brand: 'Samsung', slug: 'samsung',
    tagline: 'Ультимативный флагман с S Pen и камерой 200 МП',
    badge: 'Новинка',
    img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',       v: '6.9" Dynamic AMOLED 2X' },
        { k: 'Разрешение',      v: '3088 × 1440, 501 PPI' },
        { k: 'Частота',         v: 'адаптивная 1–120 Гц' },
        { k: 'Яркость',         v: 'до 2600 нит пиковая' },
        { k: 'Защита',          v: 'Corning Gorilla Glass Armor 2' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',             v: 'Snapdragon 8 Elite 2 (3 нм)' },
        { k: 'ОЗУ',             v: '12 GB / 16 GB LPDDR5X' },
        { k: 'Накопитель',      v: '256 GB / 512 GB / 1 TB UFS 4.1' },
        { k: 'ИИ',              v: 'Galaxy AI 3.0, локальные модели' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',        v: '200 МП, f/1.7, OIS, 8K@30fps' },
        { k: 'Ультраширокая',   v: '50 МП, f/1.9, 120°' },
        { k: 'Телефото 3×',     v: '10 МП, f/2.4, 3× оптический' },
        { k: 'Телефото 5×',     v: '50 МП, f/3.4, 5× оптический' },
        { k: 'Фронтальная',     v: '12 МП, f/2.2' },
        { k: 'Зум',             v: '100× Space Zoom (ИИ)' },
      ]},
      { group: 'S Pen', items: [
        { k: 'Встроен',         v: 'Да, встроен в корпус' },
        { k: 'Задержка',        v: '2.8 мс' },
        { k: 'Air Actions',     v: 'Управление жестами в воздухе' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',         v: '5100 мАч' },
        { k: 'Зарядка',         v: '65 Вт проводная, 25 Вт беспроводная' },
        { k: 'Обратная',        v: '4.5 Вт Wireless PowerShare' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',        v: 'Armor Aluminum 2, матовое стекло' },
        { k: 'Защита',          v: 'IP68' },
        { k: 'Цвета',           v: 'Titanium Shadowblue, Titanium Whitesilver, Titanium Black, Titanium Jade' },
        { k: 'Размеры',         v: '162.3 × 79.0 × 8.9 мм, 233 г' },
      ]},
    ],
  },

  {
    id: 3, cat: 'phones',
    name: 'Xiaomi 15 Ultra', brand: 'Xiaomi', slug: 'xiaomi',
    tagline: 'Камера Leica, зарядка 90 Вт, безупречный дисплей',
    badge: 'Топ цена',
    img: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',       v: '6.73" LTPO AMOLED' },
        { k: 'Разрешение',      v: '3200 × 1440, 522 PPI' },
        { k: 'Частота',         v: '1–120 Гц адаптивная' },
        { k: 'Яркость',         v: '3000 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',             v: 'Snapdragon 8 Elite (3 нм)' },
        { k: 'ОЗУ',             v: '12 GB / 16 GB LPDDR5X' },
        { k: 'Накопитель',      v: '256 GB / 512 GB UFS 4.0' },
      ]},
      { group: 'Камера Leica', items: [
        { k: 'Основная',        v: '50 МП Leica Summilux, f/1.63, HyperOIS' },
        { k: 'Ультраширокая',   v: '50 МП Leica Ultraprime, f/1.8' },
        { k: 'Телефото',        v: '200 МП Leica APO-Summicron, f/2.6, 4.3×' },
        { k: 'Стили',           v: 'Leica Authentic Look, Leica Vibrant Look' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',         v: '5410 мАч' },
        { k: 'Проводная',       v: '90 Вт (заряд 0→100% за 30 мин)' },
        { k: 'Беспроводная',    v: '80 Вт Wireless' },
        { k: 'Обратная',        v: '10 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',          v: 'IP68' },
        { k: 'Материал',        v: 'Нано-керамическое стекло + алюминий' },
        { k: 'Цвета',           v: 'Midnight Black, Alpine White' },
        { k: 'Размеры',         v: '161.3 × 75.3 × 9.5 мм, 227 г' },
      ]},
    ],
  },

  {
    id: 4, cat: 'phones',
    name: 'iPhone 17', brand: 'Apple', slug: 'apple',
    tagline: 'Новый дизайн, A19, 48 МП — лучший из доступных',
    badge: null,
    img: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',       v: '6.1" Super Retina XDR' },
        { k: 'Разрешение',      v: '2532 × 1170, 460 PPI' },
        { k: 'Технология',      v: 'OLED 60 Гц' },
        { k: 'Яркость',         v: 'до 1200 нит (HDR)' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',             v: 'Apple A19 (3 нм)' },
        { k: 'ОЗУ',             v: '8 GB' },
        { k: 'Накопитель',      v: '128 GB / 256 GB / 512 GB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',        v: '48 МП, f/1.78, OIS' },
        { k: 'Ультраширокая',   v: '12 МП, f/2.2' },
        { k: 'Фронтальная',     v: '12 МП, f/1.9, TrueDepth' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',         v: '3900 мАч' },
        { k: 'Зарядка',         v: '25 Вт проводная, MagSafe 25 Вт' },
        { k: 'Время работы',    v: 'до 26 часов видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',        v: 'Алюминий, Ceramic Shield' },
        { k: 'Защита',          v: 'IP68' },
        { k: 'Цвета',           v: 'Midnight, Starlight, Blue, Pink, Teal' },
        { k: 'Размеры',         v: '147.6 × 71.5 × 7.8 мм, 170 г' },
      ]},
    ],
  },

  // ═══════════════ ПЛАНШЕТЫ ═══════════════

  {
    id: 5, cat: 'tablets',
    name: 'iPad Pro 13" M4', brand: 'Apple', slug: 'apple',
    tagline: 'Тончайший Apple продукт, Ultra Retina XDR, M4',
    badge: 'Хит',
    img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',       v: '13" Ultra Retina XDR (tandem OLED)' },
        { k: 'Разрешение',      v: '2752 × 2064, 264 PPI' },
        { k: 'Яркость',         v: '1600 нит HDR, 1000 нит SDR' },
        { k: 'Частота',         v: 'ProMotion 10–120 Гц' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',             v: 'Apple M4 (3 нм)' },
        { k: 'CPU',             v: '10-core (4P + 6E)' },
        { k: 'GPU',             v: '10-core' },
        { k: 'ОЗУ',             v: '8 GB / 16 GB' },
        { k: 'Накопитель',      v: '256 GB / 512 GB / 1 TB / 2 TB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',        v: '12 МП, f/1.8, 4K' },
        { k: 'Ультраширокая',   v: '12 МП, f/2.4, Center Stage' },
        { k: 'Face ID',         v: 'TrueDepth с Lidar, горизонтальная' },
      ]},
      { group: 'Аксессуары', items: [
        { k: 'Стилус',          v: 'Apple Pencil Pro (haptics, Find My)' },
        { k: 'Клавиатура',      v: 'Magic Keyboard 13" (стекло, тачпад)' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',        v: 'Алюминий сплав, 5.1 мм тонкий' },
        { k: 'Вес',             v: '579 г (Wi-Fi), 600 г (Cellular)' },
        { k: 'Защита',          v: 'IPX4 (брызги)' },
        { k: 'Цвета',           v: 'Space Black, Silver' },
      ]},
    ],
  },

  {
    id: 6, cat: 'tablets',
    name: 'Samsung Tab S10 Ultra', brand: 'Samsung', slug: 'samsung',
    tagline: '14.6" Dynamic AMOLED, S Pen, DeX режим',
    badge: 'Новинка',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',       v: '14.6" Dynamic AMOLED 2X' },
        { k: 'Разрешение',      v: '2960 × 1848, 240 PPI' },
        { k: 'Частота',         v: '120 Гц (адаптивная)' },
        { k: 'Яркость',         v: '930 нит (пиковая)' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',             v: 'Snapdragon 8 Gen 3 (4 нм)' },
        { k: 'ОЗУ',             v: '12 GB / 16 GB' },
        { k: 'Накопитель',      v: '256 GB / 512 GB UFS 4.0' },
        { k: 'Galaxy AI',       v: 'Circle to Search, Note Assist, PDF Overlay' },
      ]},
      { group: 'S Pen', items: [
        { k: 'В комплекте',     v: 'Да, в комплекте' },
        { k: 'Задержка',        v: '2.8 мс' },
        { k: 'Bluetooth',       v: 'Air Actions (удалённое управление)' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',         v: '11200 мАч' },
        { k: 'Зарядка',         v: '45 Вт проводная' },
        { k: 'Беспроводная',    v: '15 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',        v: 'Armor Aluminum, матовое стекло' },
        { k: 'Толщина',         v: '5.4 мм' },
        { k: 'Вес',             v: '718 г' },
        { k: 'Цвет',            v: 'Moonstone Gray, Titanium Silver' },
      ]},
    ],
  },

  // ═══════════════ НОУТБУКИ ═══════════════

  {
    id: 7, cat: 'laptops',
    name: 'MacBook Pro 16" M4 Max', brand: 'Apple', slug: 'apple',
    tagline: '40-core GPU, 22 часа автономности, нейронный движок',
    badge: 'Хит',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',       v: '16.2" Liquid Retina XDR' },
        { k: 'Разрешение',      v: '3456 × 2234, 254 PPI' },
        { k: 'Яркость',         v: '1600 нит (HDR), 1000 нит (SDR)' },
        { k: 'Частота',         v: 'ProMotion 10–120 Гц' },
        { k: 'True Tone',       v: 'Да, P3 широкий цветовой охват' },
      ]},
      { group: 'Процессор Apple M4 Max', items: [
        { k: 'CPU',             v: '14-core (10P + 4E)' },
        { k: 'GPU',             v: '40-core Metal GPU' },
        { k: 'Neural Engine',   v: '16-core, 38 TOPS' },
        { k: 'Unified Memory',  v: '36 GB / 48 GB / 64 GB / 128 GB' },
        { k: 'Пропускная спос.', v: '546 ГБ/с' },
      ]},
      { group: 'Хранение и память', items: [
        { k: 'SSD',             v: '512 GB / 1 TB / 2 TB / 4 TB / 8 TB' },
        { k: 'Скорость чтения', v: 'до 7400 МБ/с' },
      ]},
      { group: 'Порты и интерфейсы', items: [
        { k: 'Thunderbolt 5',   v: '3× USB-C (до 120 Гбит/с)' },
        { k: 'HDMI',            v: 'HDMI 2.1 (до 8K@60fps)' },
        { k: 'SD-карта',        v: 'SD 4.0 Express (до 985 МБ/с)' },
        { k: 'MagSafe',         v: 'MagSafe 3 (140 Вт)' },
        { k: 'Аудио',           v: '3.5 мм, 24-bit / 96 КГц' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',         v: '100 Вт·ч' },
        { k: 'Автономность',    v: 'до 22 часов видео' },
        { k: 'Зарядка',         v: '140 Вт MagSafe 3' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',        v: '100% переработанный алюминий' },
        { k: 'Размеры',         v: '355.7 × 248.1 × 16.8 мм' },
        { k: 'Вес',             v: '2.14 кг' },
        { k: 'Цвета',           v: 'Space Black, Silver' },
      ]},
    ],
  },

  {
    id: 8, cat: 'laptops',
    name: 'ASUS ROG Zephyrus G16 2025', brand: 'ASUS', slug: 'asus',
    tagline: 'RTX 4080, 240 Гц OLED, Ryzen AI 9 — игровой максимум',
    badge: 'Игровой',
    img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',       v: '16" QHD+ OLED' },
        { k: 'Разрешение',      v: '2560 × 1600' },
        { k: 'Частота',         v: '240 Гц' },
        { k: 'Время отклика',   v: '0.2 мс' },
        { k: 'Яркость',         v: '600 нит, DCI-P3 100%' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Процессор',       v: 'AMD Ryzen AI 9 HX 370 (4 нм Zen 5)' },
        { k: 'Ядра',            v: '12 ядер / 24 потока, до 5.1 ГГц' },
        { k: 'Видеокарта',      v: 'NVIDIA GeForce RTX 4080 16 GB GDDR6' },
        { k: 'TGP',             v: 'до 150 Вт с MUX Switch + Boost' },
        { k: 'ОЗУ',             v: '32 GB DDR5-5600 (2×16 GB)' },
        { k: 'SSD',             v: '1 TB PCIe 4.0 NVMe' },
        { k: 'Слоты M.2',       v: '2 слота M.2 2280' },
      ]},
      { group: 'Охлаждение', items: [
        { k: 'Технология',      v: 'ROG Tri-Fan, жидкометаллический термоинтерфейс' },
        { k: 'Вентиляторы',     v: '2× ARC Flow (94 лопасти)' },
      ]},
      { group: 'Порты', items: [
        { k: 'USB-C',           v: '2× Thunderbolt 4, 1× USB 3.2 Gen2' },
        { k: 'USB-A',           v: '2× USB 3.2 Gen1' },
        { k: 'HDMI',            v: 'HDMI 2.1 FRL (до 4K@240fps)' },
        { k: 'Питание',         v: 'DC + USB-C 100 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',        v: 'Magnesium-aluminum alloy AniMe Matrix' },
        { k: 'Размеры',         v: '354 × 252 × 18.5 мм' },
        { k: 'Вес',             v: '1.85 кг (без блока питания)' },
        { k: 'Подсветка',       v: 'Per-key RGB + AniMe Matrix lid' },
      ]},
    ],
  },

  {
    id: 9, cat: 'laptops',
    name: 'MacBook Air 15" M4', brand: 'Apple', slug: 'apple',
    tagline: 'Самый популярный ноутбук — теперь с M4',
    badge: null,
    img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',       v: '15.3" Liquid Retina' },
        { k: 'Разрешение',      v: '2880 × 1864, 224 PPI' },
        { k: 'Яркость',         v: '500 нит' },
        { k: 'True Tone',       v: 'Да, P3, 60 Гц' },
      ]},
      { group: 'Процессор Apple M4', items: [
        { k: 'CPU',             v: '10-core (4P + 6E)' },
        { k: 'GPU',             v: '10-core' },
        { k: 'Unified Memory',  v: '16 GB / 24 GB / 32 GB' },
        { k: 'SSD',             v: '256 GB / 512 GB / 1 TB / 2 TB' },
      ]},
      { group: 'Порты', items: [
        { k: 'Thunderbolt 4',   v: '2× USB-C' },
        { k: 'MagSafe 3',       v: 'Да (67 Вт)' },
        { k: 'AUX',             v: '3.5 мм' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',         v: '66.5 Вт·ч' },
        { k: 'Автономность',    v: 'до 18 часов видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Вес',             v: '1.51 кг' },
        { k: 'Толщина',         v: '11.5 мм' },
        { k: 'Цвета',           v: 'Midnight, Starlight, Sky Blue, Purple' },
      ]},
    ],
  },

  // ═══════════════ НАУШНИКИ ═══════════════

  {
    id: 10, cat: 'headphones',
    name: 'Sony WH-1000XM6', brand: 'Sony', slug: 'sony',
    tagline: 'Лучшее шумоподавление в мире — по версии 2025',
    badge: 'Хит',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=90&fit=crop',
    specs: [
      { group: 'Звук', items: [
        { k: 'Драйверы',        v: '40 мм, углеродное волокно' },
        { k: 'Кодеки',          v: 'LDAC, aptX HD, AAC, SBC' },
        { k: 'Частотный диап.', v: '4 Гц — 40 000 Гц (LDAC)' },
        { k: '360 Reality',     v: 'Да, Head Tracking' },
        { k: 'DSEE Extreme',    v: 'ИИ-апскейлинг до Hi-Res Audio' },
      ]},
      { group: 'Шумоподавление', items: [
        { k: 'Тип',             v: 'Адаптивный ANC 2.0 (8 микрофонов)' },
        { k: 'Процессор',       v: 'HD Noise Cancelling Processor QN3' },
        { k: 'Speak-to-Chat',   v: 'Автопауза при разговоре' },
        { k: 'Ambient Mode',    v: 'Режим прозрачности' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Время работы',    v: '40 часов (ANC вкл.), 50 часов (выкл.)' },
        { k: 'Быстрая зарядка', v: '10 мин = 5 часов' },
        { k: 'Разъём',          v: 'USB-C' },
      ]},
      { group: 'Подключение', items: [
        { k: 'Bluetooth',       v: '5.3' },
        { k: 'Multipoint',      v: '2 устройства одновременно' },
        { k: 'NFC',             v: 'Да, NFC-пейринг' },
        { k: 'Кабель',          v: 'Jack 3.5 мм (пассивный режим)' },
      ]},
      { group: 'Конструкция', items: [
        { k: 'Тип',             v: 'Накладные, закрытые' },
        { k: 'Вес',             v: '250 г' },
        { k: 'Складные',        v: 'Да, в комплекте чехол' },
        { k: 'Цвета',           v: 'Black, Platinum Silver, Midnight Blue' },
      ]},
    ],
  },

  {
    id: 11, cat: 'headphones',
    name: 'AirPods Pro 3', brand: 'Apple', slug: 'apple',
    tagline: 'H3 чип, ANC нового уровня, до 36 часов в кейсе',
    badge: 'Топ',
    img: 'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=800&q=90&fit=crop',
    specs: [
      { group: 'Звук', items: [
        { k: 'Чип',             v: 'Apple H3 (2 нм)' },
        { k: 'Динамик',         v: 'Пользовательский высокоэффективный' },
        { k: 'Персонализация',  v: 'Adaptive Audio Pro, Personalized Spatial' },
        { k: 'Lossless Audio',  v: 'Да, через Lightning/Lightning 2' },
      ]},
      { group: 'Шумоподавление', items: [
        { k: 'ANC',             v: 'Adaptive ANC 2 — вдвое эффективнее AirPods Pro 2' },
        { k: 'Conversation',    v: 'Conversation Awareness 2.0' },
        { k: 'Transparency',    v: 'Adaptive Transparency' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'AirPods',         v: '6 часов (ANC) / 7 часов (без ANC)' },
        { k: 'С кейсом',        v: 'до 36 часов' },
        { k: 'Зарядка',         v: 'MagSafe, Qi2, Lightning' },
        { k: 'Быстрая',         v: '5 мин = 1 час прослушивания' },
      ]},
      { group: 'Прочее', items: [
        { k: 'Защита',          v: 'IP54 (AirPods), IP54 (кейс)' },
        { k: 'Управление',      v: 'Force Sensor, Swipe Volume, Touch' },
        { k: 'Find My',         v: 'Да, Precision Finding' },
        { k: 'Цвет',            v: 'White' },
      ]},
    ],
  },

  {
    id: 12, cat: 'headphones',
    name: 'Samsung Galaxy Buds3 Pro', brand: 'Samsung', slug: 'samsung',
    tagline: 'Blade design, HiFi 24bit, IPX7',
    badge: 'Скидка',
    img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=90&fit=crop',
    specs: [
      { group: 'Звук', items: [
        { k: 'Динамики',        v: 'Коаксиальные 2-way (10.5 мм + 6.1 мм)' },
        { k: 'Кодеки',          v: 'SSC HiFi (24bit), AAC, SBC' },
        { k: '360 Audio',       v: 'Да, Head Tracking' },
      ]},
      { group: 'Шумоподавление', items: [
        { k: 'ANC',             v: 'Intelligent ANC 2.0' },
        { k: 'Микрофоны',       v: '3 микрофона + Voice Pickup Unit' },
        { k: 'Ambient Sound',   v: 'Режим прозрачности' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Наушники',        v: '6 часов (ANC) / 7 часов' },
        { k: 'С кейсом',        v: 'до 30 часов' },
        { k: 'Зарядка',         v: 'USB-C, беспроводная Qi' },
        { k: 'Быстрая',         v: '5 мин = 1 час' },
      ]},
      { group: 'Прочее', items: [
        { k: 'Защита',          v: 'IPX7 (наушники), IPX2 (кейс)' },
        { k: 'Bluetooth',       v: '5.4, Multipoint 2 устройства' },
        { k: 'Galaxy AI',       v: 'Interpreter, Live Translate, Note Assist' },
        { k: 'Цвет',            v: 'Onyx, White, Silver Shadow' },
      ]},
    ],
  },
]

export const categories = [
  { id:'phones',     label:'Смартфоны',  count:'150+ моделей', img:'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=700&q=85&fit=crop', color:'#7B61FF' },
  { id:'laptops',    label:'Ноутбуки',   count:'80+ моделей',  img:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700&q=85&fit=crop', color:'#00D2FF' },
  { id:'tablets',    label:'Планшеты',   count:'60+ моделей',  img:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=700&q=85&fit=crop', color:'#34D399' },
  { id:'headphones', label:'Наушники',   count:'120+ моделей', img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=85&fit=crop', color:'#F472B6' },
]
