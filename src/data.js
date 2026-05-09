// ── Все товары с полными характеристиками ───────────────────
export const products = [

  // ══════════════════════════════════════════
  //  APPLE iPhone
  // ══════════════════════════════════════════

  {
    id: 1, cat: 'phones', name: 'iPhone 17 Pro Max', brand: 'Apple', slug: 'apple',
    tagline: 'Флагман нового поколения — A19 Pro, камера 48 МП',
    badge: 'Хит',
    img: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.9" Super Retina XDR' },
        { k: 'Разрешение',    v: '2868 × 1320, 460 PPI' },
        { k: 'Технология',    v: 'OLED ProMotion 1–120 Гц' },
        { k: 'Яркость',       v: 'до 2000 нит HDR' },
        { k: 'Защита',        v: 'Ceramic Shield' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple A19 Pro (3 нм)' },
        { k: 'ОЗУ',           v: '12 GB LPDDR5X' },
        { k: 'Накопитель',    v: '256 / 512 GB / 1 TB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '48 МП f/1.78, OIS, 4K@120fps' },
        { k: 'Ультраширокая', v: '12 МП f/2.2, 120°' },
        { k: 'Телефото',      v: '12 МП f/2.8, 5× оптический' },
        { k: 'Фронтальная',   v: '24 МП f/1.9, TrueDepth' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '4685 мАч' },
        { k: 'Проводная',     v: '30 Вт USB-C' },
        { k: 'Беспроводная',  v: 'MagSafe 25 Вт, Qi2 15 Вт' },
        { k: 'Автономность',  v: 'до 33 ч видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Титан класса 5 + матовое стекло' },
        { k: 'Защита',        v: 'IP68 (до 10 м, 30 мин)' },
        { k: 'Размеры',       v: '163 × 77.6 × 8.25 мм, 227 г' },
        { k: 'Цвета',         v: 'Чёрный / Белый / Пустынный / Натуральный Титан' },
        { k: 'Wi-Fi / BT',    v: 'Wi-Fi 7 / BT 5.4' },
      ]},
    ],
  },

  {
    id: 2, cat: 'phones', name: 'iPhone 17 Pro', brand: 'Apple', slug: 'apple',
    tagline: 'Компактный Pro — A19 Pro, новый модуль камеры',
    badge: 'Новинка',
    img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.3" Super Retina XDR' },
        { k: 'Разрешение',    v: '2622 × 1206, 460 PPI' },
        { k: 'Технология',    v: 'OLED ProMotion 1–120 Гц' },
        { k: 'Яркость',       v: 'до 2000 нит HDR' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple A19 Pro (3 нм)' },
        { k: 'ОЗУ',           v: '12 GB LPDDR5X' },
        { k: 'Накопитель',    v: '128 / 256 / 512 GB / 1 TB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '48 МП f/1.78, OIS, 4K@120fps' },
        { k: 'Ультраширокая', v: '12 МП f/2.2, 120°' },
        { k: 'Телефото',      v: '12 МП f/2.8, 5× оптический' },
        { k: 'Фронтальная',   v: '24 МП f/1.9, TrueDepth' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '4200 мАч' },
        { k: 'Зарядка',       v: '30 Вт USB-C, MagSafe 25 Вт' },
        { k: 'Автономность',  v: 'до 27 ч видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Титан класса 5 + матовое стекло' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '149.6 × 71.5 × 8.25 мм, 199 г' },
        { k: 'Цвета',         v: 'Чёрный / Белый / Пустынный / Натуральный Титан' },
      ]},
    ],
  },

  {
    id: 3, cat: 'phones', name: 'iPhone 17 Plus', brand: 'Apple', slug: 'apple',
    tagline: 'Большой экран, долгая автономность, A19',
    badge: null,
    img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.7" Super Retina XDR' },
        { k: 'Разрешение',    v: '2778 × 1284, 460 PPI' },
        { k: 'Технология',    v: 'OLED 60 Гц' },
        { k: 'Яркость',       v: 'до 1200 нит HDR' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple A19 (3 нм)' },
        { k: 'ОЗУ',           v: '8 GB' },
        { k: 'Накопитель',    v: '128 / 256 / 512 GB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '48 МП f/1.78, OIS' },
        { k: 'Ультраширокая', v: '12 МП f/2.2' },
        { k: 'Фронтальная',   v: '12 МП f/1.9, TrueDepth' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '4700 мАч' },
        { k: 'Зарядка',       v: '25 Вт USB-C, MagSafe 25 Вт' },
        { k: 'Автономность',  v: 'до 30 ч видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Алюминий, Ceramic Shield' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '160.9 × 77.8 × 7.8 мм, 203 г' },
        { k: 'Цвета',         v: 'Midnight, Starlight, Blue, Pink, Teal' },
      ]},
    ],
  },

  {
    id: 4, cat: 'phones', name: 'iPhone 17', brand: 'Apple', slug: 'apple',
    tagline: 'Новый дизайн, A19, 48 МП — лучший из доступных',
    badge: null,
    img: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.1" Super Retina XDR' },
        { k: 'Разрешение',    v: '2532 × 1170, 460 PPI' },
        { k: 'Технология',    v: 'OLED 60 Гц' },
        { k: 'Яркость',       v: 'до 1200 нит HDR' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple A19 (3 нм)' },
        { k: 'ОЗУ',           v: '8 GB' },
        { k: 'Накопитель',    v: '128 / 256 / 512 GB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '48 МП f/1.78, OIS' },
        { k: 'Ультраширокая', v: '12 МП f/2.2' },
        { k: 'Фронтальная',   v: '12 МП f/1.9, TrueDepth' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '3900 мАч' },
        { k: 'Зарядка',       v: '25 Вт USB-C, MagSafe 25 Вт' },
        { k: 'Автономность',  v: 'до 26 ч видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Алюминий, Ceramic Shield' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '147.6 × 71.5 × 7.8 мм, 170 г' },
        { k: 'Цвета',         v: 'Midnight, Starlight, Blue, Pink, Teal' },
      ]},
    ],
  },

  {
    id: 5, cat: 'phones', name: 'iPhone 16 Pro Max', brand: 'Apple', slug: 'apple',
    tagline: 'A18 Pro, Camera Control, экран 6.9"',
    badge: null,
    img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.9" Super Retina XDR' },
        { k: 'Разрешение',    v: '2868 × 1320, 460 PPI' },
        { k: 'Технология',    v: 'OLED ProMotion 1–120 Гц' },
        { k: 'Яркость',       v: 'до 2000 нит HDR' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple A18 Pro (3 нм)' },
        { k: 'ОЗУ',           v: '8 GB LPDDR5X' },
        { k: 'Накопитель',    v: '256 / 512 GB / 1 TB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '48 МП f/1.78, OIS, 4K@120fps' },
        { k: 'Ультраширокая', v: '48 МП f/2.2' },
        { k: 'Телефото',      v: '12 МП f/2.8, 5×' },
        { k: 'Camera Control', v: 'Аппаратная кнопка управления' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '4685 мАч' },
        { k: 'Зарядка',       v: '27 Вт USB-C, MagSafe 25 Вт' },
        { k: 'Автономность',  v: 'до 33 ч видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Титан, матовое стекло' },
        { k: 'Защита',        v: 'IP68 (до 10 м)' },
        { k: 'Размеры',       v: '163 × 77.6 × 8.25 мм, 227 г' },
        { k: 'Цвета',         v: 'Чёрный / Белый / Пустынный / Натуральный Титан' },
      ]},
    ],
  },

  {
    id: 6, cat: 'phones', name: 'iPhone 16 Pro', brand: 'Apple', slug: 'apple',
    tagline: 'A18 Pro, Camera Control, новый дизайн',
    badge: null,
    img: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.3" Super Retina XDR' },
        { k: 'Разрешение',    v: '2622 × 1206, 460 PPI' },
        { k: 'Технология',    v: 'OLED ProMotion 1–120 Гц' },
        { k: 'Яркость',       v: 'до 2000 нит HDR' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple A18 Pro (3 нм)' },
        { k: 'ОЗУ',           v: '8 GB LPDDR5X' },
        { k: 'Накопитель',    v: '128 / 256 / 512 GB / 1 TB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '48 МП f/1.78, OIS, 4K@120fps' },
        { k: 'Ультраширокая', v: '48 МП f/2.2' },
        { k: 'Телефото',      v: '12 МП f/2.8, 5×' },
        { k: 'Camera Control', v: 'Аппаратная кнопка управления' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '3582 мАч' },
        { k: 'Зарядка',       v: '27 Вт USB-C, MagSafe 25 Вт' },
        { k: 'Автономность',  v: 'до 27 ч видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Титан, матовое стекло' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '149.6 × 71.5 × 8.25 мм, 199 г' },
        { k: 'Цвета',         v: 'Чёрный / Белый / Пустынный / Натуральный Титан' },
      ]},
    ],
  },

  {
    id: 7, cat: 'phones', name: 'iPhone 16', brand: 'Apple', slug: 'apple',
    tagline: 'A18, Apple Intelligence, Camera Control',
    badge: null,
    img: 'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.1" Super Retina XDR' },
        { k: 'Разрешение',    v: '2556 × 1179, 460 PPI' },
        { k: 'Технология',    v: 'OLED 60 Гц' },
        { k: 'Яркость',       v: 'до 1000 нит SDR' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple A18 (3 нм)' },
        { k: 'ОЗУ',           v: '8 GB' },
        { k: 'Накопитель',    v: '128 / 256 / 512 GB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '48 МП f/1.6, OIS' },
        { k: 'Ультраширокая', v: '12 МП f/2.2, макро' },
        { k: 'Фронтальная',   v: '12 МП f/1.9, TrueDepth' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '3561 мАч' },
        { k: 'Зарядка',       v: '25 Вт USB-C, MagSafe 25 Вт' },
        { k: 'Автономность',  v: 'до 22 ч видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Алюминий, Ceramic Shield' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '147.6 × 71.6 × 7.8 мм, 170 г' },
        { k: 'Цвета',         v: 'Ультрамарин, Бирюзовый, Розовый, Белый, Чёрный' },
      ]},
    ],
  },

  {
    id: 8, cat: 'phones', name: 'iPhone SE 4', brand: 'Apple', slug: 'apple',
    tagline: 'Компактный, A18, USB-C — самый доступный iPhone',
    badge: 'Топ цена',
    img: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.1" Super Retina XDR' },
        { k: 'Разрешение',    v: '2532 × 1170, 460 PPI' },
        { k: 'Технология',    v: 'OLED 60 Гц' },
        { k: 'Яркость',       v: 'до 800 нит SDR' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple A18 (3 нм)' },
        { k: 'ОЗУ',           v: '8 GB' },
        { k: 'Накопитель',    v: '128 / 256 / 512 GB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '48 МП f/1.6, OIS' },
        { k: 'Фронтальная',   v: '12 МП f/1.9, Face ID' },
        { k: 'Видео',         v: '4K@60fps, Dolby Vision' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '3279 мАч' },
        { k: 'Зарядка',       v: '20 Вт USB-C, MagSafe 15 Вт' },
        { k: 'Автономность',  v: 'до 26 ч видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Алюминий, Ceramic Shield' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '138.7 × 67.3 × 7.7 мм, 167 г' },
        { k: 'Цвета',         v: 'Чёрный, Белый, Алюминий' },
      ]},
    ],
  },

  // ══════════════════════════════════════════
  //  SAMSUNG Galaxy
  // ══════════════════════════════════════════

  {
    id: 9, cat: 'phones', name: 'Samsung Galaxy S26 Ultra', brand: 'Samsung', slug: 'samsung',
    tagline: 'Ультимативный флагман с S Pen и камерой 200 МП',
    badge: 'Хит',
    img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.9" Dynamic AMOLED 2X' },
        { k: 'Разрешение',    v: '3088 × 1440, 501 PPI' },
        { k: 'Частота',       v: 'адаптивная 1–120 Гц' },
        { k: 'Яркость',       v: 'до 2600 нит пиковая' },
        { k: 'Защита',        v: 'Gorilla Glass Armor 2' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Elite 2 (3 нм)' },
        { k: 'ОЗУ',           v: '12 / 16 GB LPDDR5X' },
        { k: 'Накопитель',    v: '256 / 512 GB / 1 TB UFS 4.1' },
        { k: 'Galaxy AI',     v: '3.0 — локальные ИИ-модели' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '200 МП f/1.7, OIS, 8K@30fps' },
        { k: 'Ультраширокая', v: '50 МП f/1.9, 120°' },
        { k: 'Телефото 3×',   v: '10 МП f/2.4, 3× оптический' },
        { k: 'Телефото 5×',   v: '50 МП f/3.4, 5× оптический' },
        { k: 'Зум',           v: '100× Space Zoom (ИИ)' },
        { k: 'Фронтальная',   v: '12 МП f/2.2' },
      ]},
      { group: 'S Pen', items: [
        { k: 'Встроен',       v: 'Да, в корпусе' },
        { k: 'Задержка',      v: '2.8 мс' },
        { k: 'Air Actions',   v: 'Управление жестами' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5100 мАч' },
        { k: 'Зарядка',       v: '65 Вт проводная, 25 Вт беспроводная' },
        { k: 'Обратная',      v: '4.5 Вт Wireless PowerShare' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Armor Aluminum 2 + матовое стекло' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '162.3 × 79.0 × 8.9 мм, 233 г' },
        { k: 'Цвета',         v: 'Titanium Shadowblue / Whitesilver / Black / Jade' },
      ]},
    ],
  },

  {
    id: 10, cat: 'phones', name: 'Samsung Galaxy S26+', brand: 'Samsung', slug: 'samsung',
    tagline: '6.7" Dynamic AMOLED, Snapdragon 8 Elite 2, тройная камера',
    badge: 'Новинка',
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.7" Dynamic AMOLED 2X' },
        { k: 'Разрешение',    v: '3088 × 1440, 505 PPI' },
        { k: 'Частота',       v: '1–120 Гц адаптивная' },
        { k: 'Яркость',       v: 'до 2600 нит' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Elite 2 (3 нм)' },
        { k: 'ОЗУ',           v: '12 GB LPDDR5X' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 4.1' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП f/1.8, OIS' },
        { k: 'Ультраширокая', v: '12 МП f/2.2' },
        { k: 'Телефото',      v: '10 МП f/2.4, 3×' },
        { k: 'Фронтальная',   v: '12 МП f/2.2' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '4900 мАч' },
        { k: 'Зарядка',       v: '45 Вт проводная, 15 Вт беспроводная' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Armor Aluminum 2 + Gorilla Glass Armor' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '158.5 × 75.8 × 7.3 мм, 190 г' },
        { k: 'Цвета',         v: 'Titanium Black / Iceblue / Platinum Silver' },
      ]},
    ],
  },

  {
    id: 11, cat: 'phones', name: 'Samsung Galaxy S26', brand: 'Samsung', slug: 'samsung',
    tagline: '6.2" флагман, Snapdragon 8 Elite 2, Galaxy AI',
    badge: null,
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.2" Dynamic AMOLED 2X' },
        { k: 'Разрешение',    v: '2340 × 1080, 416 PPI' },
        { k: 'Частота',       v: '1–120 Гц адаптивная' },
        { k: 'Яркость',       v: 'до 2600 нит' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Elite 2 (3 нм)' },
        { k: 'ОЗУ',           v: '12 GB LPDDR5X' },
        { k: 'Накопитель',    v: '128 / 256 GB UFS 4.1' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП f/1.8, OIS' },
        { k: 'Ультраширокая', v: '12 МП f/2.2' },
        { k: 'Телефото',      v: '10 МП f/2.4, 3×' },
        { k: 'Фронтальная',   v: '12 МП f/2.2' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '4000 мАч' },
        { k: 'Зарядка',       v: '25 Вт проводная, 15 Вт беспроводная' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Armor Aluminum 2 + Gorilla Glass Armor' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '147.1 × 70.5 × 7.2 мм, 162 г' },
        { k: 'Цвета',         v: 'Titanium Black / Iceblue / Platinum Silver' },
      ]},
    ],
  },

  {
    id: 12, cat: 'phones', name: 'Samsung Galaxy S25 Ultra', brand: 'Samsung', slug: 'samsung',
    tagline: 'S Pen, 200 МП, Snapdragon 8 Elite — прошлогодний флагман',
    badge: null,
    img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.9" Dynamic AMOLED 2X' },
        { k: 'Разрешение',    v: '3088 × 1440, 501 PPI' },
        { k: 'Частота',       v: '1–120 Гц' },
        { k: 'Яркость',       v: 'до 2600 нит' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Elite (3 нм)' },
        { k: 'ОЗУ',           v: '12 GB LPDDR5X' },
        { k: 'Накопитель',    v: '256 / 512 GB / 1 TB UFS 4.0' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '200 МП f/1.7, OIS, 8K' },
        { k: 'Ультраширокая', v: '50 МП f/1.9' },
        { k: 'Телефото 5×',   v: '50 МП f/3.4, 5×' },
        { k: 'Зум',           v: '100× Space Zoom' },
      ]},
      { group: 'S Pen', items: [
        { k: 'Встроен',       v: 'Да' },
        { k: 'Задержка',      v: '2.8 мс' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5000 мАч' },
        { k: 'Зарядка',       v: '45 Вт, 15 Вт беспроводная' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Titanium Frame + Gorilla Glass Armor' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '162.8 × 77.6 × 8.2 мм, 218 г' },
        { k: 'Цвета',         v: 'Titanium Black / Silverblue / Whitesilver / Jade' },
      ]},
    ],
  },

  {
    id: 13, cat: 'phones', name: 'Samsung Galaxy Z Fold 7', brand: 'Samsung', slug: 'samsung',
    tagline: 'Раскладной флагман — планшет и смартфон в одном',
    badge: 'Флагман',
    img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Внутренний',    v: '7.6" Dynamic AMOLED 2X, 120 Гц' },
        { k: 'Внешний',       v: '6.5" Dynamic AMOLED 2X, 120 Гц' },
        { k: 'Разрешение',    v: '2176 × 1812 (внутр.)' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Elite 2 (3 нм)' },
        { k: 'ОЗУ',           v: '12 GB LPDDR5X' },
        { k: 'Накопитель',    v: '256 / 512 GB / 1 TB UFS 4.1' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП f/1.8, OIS' },
        { k: 'Ультраширокая', v: '12 МП f/2.2' },
        { k: 'Телефото',      v: '10 МП f/2.4, 3×' },
        { k: 'Внешняя фронт.', v: '10 МП f/2.2' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '4400 мАч' },
        { k: 'Зарядка',       v: '25 Вт, 15 Вт беспроводная' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Петля',         v: 'Flex Hinge 2 — складной шарнир' },
        { k: 'Защита',        v: 'IPX8 (без пыли)' },
        { k: 'Толщина',       v: '13.4 мм (сложен), 6.1 мм (открыт)' },
        { k: 'Цвета',         v: 'Shadow / Ice / Silver Shadow' },
      ]},
    ],
  },

  {
    id: 14, cat: 'phones', name: 'Samsung Galaxy Z Flip 7', brand: 'Samsung', slug: 'samsung',
    tagline: 'Стильная раскладушка — FlexWindow 4.1", Galaxy AI',
    badge: null,
    img: 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Внутренний',    v: '6.7" Dynamic AMOLED 2X, 120 Гц' },
        { k: 'Внешний',       v: '4.1" Super AMOLED, 60 Гц' },
        { k: 'Яркость',       v: 'до 2600 нит (внутренний)' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Elite 2 (3 нм)' },
        { k: 'ОЗУ',           v: '12 GB' },
        { k: 'Накопитель',    v: '256 / 512 GB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП f/1.8, OIS' },
        { k: 'Ультраширокая', v: '12 МП f/2.2' },
        { k: 'Фронтальная',   v: '10 МП f/2.2' },
        { k: 'FlexCam',       v: 'Съёмка в полу-раскрытом режиме' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '4000 мАч' },
        { k: 'Зарядка',       v: '25 Вт, 15 Вт беспроводная' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IPX8' },
        { k: 'Цвета',         v: 'Mint / Shadow / Yellow / Blue' },
      ]},
    ],
  },

  {
    id: 15, cat: 'phones', name: 'Samsung Galaxy A56', brand: 'Samsung', slug: 'samsung',
    tagline: '6.7" AMOLED, 50 МП, Galaxy AI — лучшая цена',
    badge: 'Топ цена',
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.7" Super AMOLED FHD+' },
        { k: 'Разрешение',    v: '2340 × 1080' },
        { k: 'Частота',       v: '120 Гц' },
        { k: 'Яркость',       v: 'до 1900 нит' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Exynos 1580 (4 нм)' },
        { k: 'ОЗУ',           v: '8 / 12 GB' },
        { k: 'Накопитель',    v: '128 / 256 GB + microSD' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП f/1.8, OIS' },
        { k: 'Ультраширокая', v: '12 МП f/2.2' },
        { k: 'Макро',         v: '5 МП f/2.4' },
        { k: 'Фронтальная',   v: '12 МП f/2.2' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5000 мАч' },
        { k: 'Зарядка',       v: '45 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP67' },
        { k: 'Размеры',       v: '162 × 77.4 × 7.4 мм, 188 г' },
        { k: 'Цвета',         v: 'Awesome Black / Iceblue / Navy / White' },
      ]},
    ],
  },

  // ══════════════════════════════════════════
  //  XIAOMI
  // ══════════════════════════════════════════

  {
    id: 16, cat: 'phones', name: 'Xiaomi 15 Ultra', brand: 'Xiaomi', slug: 'xiaomi',
    tagline: 'Камера Leica, 90 Вт, безупречный дисплей',
    badge: 'Хит',
    img: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.73" LTPO AMOLED' },
        { k: 'Разрешение',    v: '3200 × 1440, 522 PPI' },
        { k: 'Частота',       v: '1–120 Гц адаптивная' },
        { k: 'Яркость',       v: '3000 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Elite (3 нм)' },
        { k: 'ОЗУ',           v: '12 / 16 GB LPDDR5X' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 4.0' },
      ]},
      { group: 'Камера Leica', items: [
        { k: 'Основная',      v: '50 МП Leica Summilux, f/1.63, HyperOIS' },
        { k: 'Ультраширокая', v: '50 МП Leica Ultraprime, f/1.8' },
        { k: 'Телефото',      v: '200 МП Leica APO-Summicron, f/2.6, 4.3×' },
        { k: 'Стили',         v: 'Leica Authentic / Leica Vibrant' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5410 мАч' },
        { k: 'Проводная',     v: '90 Вт (0→100% за 30 мин)' },
        { k: 'Беспроводная',  v: '80 Вт' },
        { k: 'Обратная',      v: '10 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP68' },
        { k: 'Материал',      v: 'Нанокерамическое стекло + алюминий' },
        { k: 'Размеры',       v: '161.3 × 75.3 × 9.5 мм, 227 г' },
        { k: 'Цвета',         v: 'Midnight Black / Alpine White' },
      ]},
    ],
  },

  {
    id: 17, cat: 'phones', name: 'Xiaomi 15 Pro', brand: 'Xiaomi', slug: 'xiaomi',
    tagline: 'Snapdragon 8 Elite, Leica камера, 90 Вт зарядка',
    badge: 'Новинка',
    img: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.73" LTPO AMOLED' },
        { k: 'Разрешение',    v: '3200 × 1440, 522 PPI' },
        { k: 'Частота',       v: '1–120 Гц' },
        { k: 'Яркость',       v: '3200 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Elite (3 нм)' },
        { k: 'ОЗУ',           v: '12 / 16 GB LPDDR5X' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 4.0' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП Leica Summilux, f/1.6, OIS' },
        { k: 'Ультраширокая', v: '50 МП Leica, f/2.2' },
        { k: 'Телефото',      v: '50 МП, f/2.0, 2.5×' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5300 мАч' },
        { k: 'Проводная',     v: '90 Вт' },
        { k: 'Беспроводная',  v: '50 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '160.5 × 75.3 × 8.2 мм, 219 г' },
        { k: 'Цвета',         v: 'Black / White / Green' },
      ]},
    ],
  },

  {
    id: 18, cat: 'phones', name: 'Xiaomi 15', brand: 'Xiaomi', slug: 'xiaomi',
    tagline: 'Компактный флагман с Leica и Snapdragon 8 Elite',
    badge: null,
    img: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.36" AMOLED' },
        { k: 'Разрешение',    v: '2670 × 1200, 460 PPI' },
        { k: 'Частота',       v: '120 Гц' },
        { k: 'Яркость',       v: '3200 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Elite (3 нм)' },
        { k: 'ОЗУ',           v: '12 / 16 GB' },
        { k: 'Накопитель',    v: '256 / 512 GB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП Leica, f/1.62, OIS' },
        { k: 'Ультраширокая', v: '50 МП Leica, f/2.2' },
        { k: 'Телефото',      v: '50 МП, f/2.0, 2.6×' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5240 мАч' },
        { k: 'Проводная',     v: '90 Вт' },
        { k: 'Беспроводная',  v: '50 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '152.3 × 71.5 × 8.08 мм, 191 г' },
        { k: 'Цвета',         v: 'Black / White / Blue' },
      ]},
    ],
  },

  {
    id: 19, cat: 'phones', name: 'Xiaomi 14T Pro', brand: 'Xiaomi', slug: 'xiaomi',
    tagline: 'Leica Summilux, 144 Гц AMOLED, 144 Вт зарядка',
    badge: 'Топ цена',
    img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&q=90&fit=crop&crop=left',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.67" AMOLED' },
        { k: 'Разрешение',    v: '2712 × 1220, 446 PPI' },
        { k: 'Частота',       v: '144 Гц' },
        { k: 'Яркость',       v: '4000 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'MediaTek Dimensity 9300+ (4 нм)' },
        { k: 'ОЗУ',           v: '12 / 16 GB LPDDR5T' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 4.0' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП Leica Summilux, f/1.63, OIS' },
        { k: 'Ультраширокая', v: '12 МП Leica, f/2.2' },
        { k: 'Телефото',      v: '50 МП Leica, f/1.98, 2.6×' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5000 мАч' },
        { k: 'Проводная',     v: '144 Вт HyperCharge' },
        { k: 'Беспроводная',  v: '50 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '160.4 × 75.1 × 8.4 мм, 209 г' },
        { k: 'Цвета',         v: 'Black / Titan Black / Desert Titanium' },
      ]},
    ],
  },

  {
    id: 20, cat: 'phones', name: 'Redmi Note 14 Pro+', brand: 'Xiaomi', slug: 'xiaomi',
    tagline: '200 МП, 90 Вт, IP68 — за разумные деньги',
    badge: 'Хит',
    img: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.67" AMOLED' },
        { k: 'Разрешение',    v: '2712 × 1220, 446 PPI' },
        { k: 'Частота',       v: '120 Гц' },
        { k: 'Яркость',       v: '3000 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 7s Gen 3 (4 нм)' },
        { k: 'ОЗУ',           v: '8 / 12 GB LPDDR4X' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 2.2' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '200 МП f/1.65, OIS' },
        { k: 'Ультраширокая', v: '8 МП f/2.2' },
        { k: 'Макро',         v: '2 МП f/2.4' },
        { k: 'Фронтальная',   v: '20 МП f/2.2' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5110 мАч' },
        { k: 'Проводная',     v: '90 Вт' },
        { k: 'Беспроводная',  v: '30 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP68' },
        { k: 'Материал',      v: 'Матовое стекло + пластик' },
        { k: 'Цвета',         v: 'Midnight Black / Frost Blue / Phantom Purple' },
      ]},
    ],
  },

  {
    id: 21, cat: 'phones', name: 'POCO X7 Pro', brand: 'Xiaomi', slug: 'xiaomi',
    tagline: 'Dimensity 9300+, 120 Вт, 6.67" AMOLED, 50 МП OIS',
    badge: 'Топ цена',
    img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.67" AMOLED Curved' },
        { k: 'Разрешение',    v: '2712 × 1220, 446 PPI' },
        { k: 'Частота',       v: '120 Гц' },
        { k: 'Яркость',       v: '3200 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'MediaTek Dimensity 9300+ (4 нм)' },
        { k: 'ОЗУ',           v: '8 / 12 GB LPDDR5T' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 4.0' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП f/1.59, OIS' },
        { k: 'Ультраширокая', v: '8 МП f/2.2' },
        { k: 'Фронтальная',   v: '20 МП f/2.2' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '6550 мАч' },
        { k: 'Проводная',     v: '120 Вт Turbo Charge' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP64' },
        { k: 'Размеры',       v: '163.7 × 76.3 × 8.3 мм, 217 г' },
        { k: 'Цвета',         v: 'Black / Yellow' },
      ]},
    ],
  },

  // ══════════════════════════════════════════
  //  OPPO
  // ══════════════════════════════════════════

  {
    id: 22, cat: 'phones', name: 'OPPO Find X8 Pro', brand: 'OPPO', slug: 'oppo',
    tagline: 'Hasselblad камера, Dimensity 9400, 100 Вт зарядка',
    badge: 'Флагман',
    img: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.78" AMOLED 2K+' },
        { k: 'Разрешение',    v: '2780 × 1264, 450 PPI' },
        { k: 'Частота',       v: '1–120 Гц LTPO' },
        { k: 'Яркость',       v: '4500 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'MediaTek Dimensity 9400 (3 нм)' },
        { k: 'ОЗУ',           v: '16 GB LPDDR5T' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 4.0' },
      ]},
      { group: 'Камера Hasselblad', items: [
        { k: 'Основная',      v: '50 МП Hasselblad, f/1.6, OIS' },
        { k: 'Ультраширокая', v: '50 МП, f/2.0, 120°' },
        { k: 'Телефото 3×',   v: '50 МП, f/2.6, 3× OIS' },
        { k: 'Телефото 6×',   v: '50 МП, f/4.3, 6× OIS' },
        { k: 'Зум',           v: '120× цифровой' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5910 мАч' },
        { k: 'Проводная',     v: '100 Вт SUPERVOOC' },
        { k: 'Беспроводная',  v: '50 Вт AirVOOC' },
        { k: 'Обратная',      v: '10 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP69' },
        { k: 'Материал',      v: 'Флотированное стекло + алюминий' },
        { k: 'Размеры',       v: '164.3 × 75.8 × 8.2 мм, 215 г' },
        { k: 'Цвета',         v: 'Space Black / Pearl White / Blue' },
      ]},
    ],
  },

  {
    id: 23, cat: 'phones', name: 'OPPO Find X8', brand: 'OPPO', slug: 'oppo',
    tagline: 'Dimensity 9400, Hasselblad, компактный флагман',
    badge: null,
    img: 'https://images.unsplash.com/photo-1569144157591-c60f3f82f137?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.59" AMOLED 2K+' },
        { k: 'Разрешение',    v: '2760 × 1256, 460 PPI' },
        { k: 'Частота',       v: '1–120 Гц LTPO' },
        { k: 'Яркость',       v: '4500 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'MediaTek Dimensity 9400 (3 нм)' },
        { k: 'ОЗУ',           v: '12 / 16 GB LPDDR5T' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 4.0' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП Hasselblad, f/1.7, OIS' },
        { k: 'Ультраширокая', v: '50 МП, f/2.0' },
        { k: 'Телефото',      v: '50 МП, f/2.6, 3×' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5630 мАч' },
        { k: 'Проводная',     v: '80 Вт SUPERVOOC' },
        { k: 'Беспроводная',  v: '50 Вт AirVOOC' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP69' },
        { k: 'Размеры',       v: '161.1 × 74.9 × 7.9 мм, 193 г' },
        { k: 'Цвета',         v: 'Black / White' },
      ]},
    ],
  },

  {
    id: 24, cat: 'phones', name: 'OPPO Reno 13 Pro', brand: 'OPPO', slug: 'oppo',
    tagline: '50 МП двойной телефото, 80 Вт, AI Portrait',
    badge: null,
    img: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.83" AMOLED FHD+' },
        { k: 'Разрешение',    v: '2400 × 1080, 387 PPI' },
        { k: 'Частота',       v: '120 Гц' },
        { k: 'Яркость',       v: '1200 нит' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'MediaTek Dimensity 8350 (4 нм)' },
        { k: 'ОЗУ',           v: '12 / 16 GB' },
        { k: 'Накопитель',    v: '256 / 512 GB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП f/1.8, OIS' },
        { k: 'Телефото',      v: '50 МП f/2.0, 2×' },
        { k: 'Ультраширокая', v: '8 МП f/2.2' },
        { k: 'Фронтальная',   v: '50 МП f/2.4' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5800 мАч' },
        { k: 'Проводная',     v: '80 Вт SUPERVOOC' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP65' },
        { k: 'Размеры',       v: '163.6 × 75.2 × 6.8 мм, 185 г' },
        { k: 'Цвета',         v: 'Graphite Grey / Mist Lavender / Haze Blue' },
      ]},
    ],
  },

  // ══════════════════════════════════════════
  //  Другие бренды
  // ══════════════════════════════════════════

  {
    id: 25, cat: 'phones', name: 'Google Pixel 9 Pro XL', brand: 'Google', slug: 'google',
    tagline: 'Tensor G4, чистый Android 15, лучшие AI-функции',
    badge: 'Android AI',
    img: 'https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.8" LTPO OLED' },
        { k: 'Разрешение',    v: '2992 × 1344, 486 PPI' },
        { k: 'Частота',       v: '1–120 Гц LTPO' },
        { k: 'Яркость',       v: '3000 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Google Tensor G4 (4 нм)' },
        { k: 'ОЗУ',           v: '16 GB LPDDR5' },
        { k: 'Накопитель',    v: '128 / 256 / 512 GB / 1 TB' },
        { k: 'Gemini',        v: 'Gemini Ultra, AI Summary, Circle to Search' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП f/1.68, OIS, Octalin' },
        { k: 'Ультраширокая', v: '48 МП f/1.7' },
        { k: 'Телефото',      v: '48 МП f/2.8, 5× оптический' },
        { k: 'Фронтальная',   v: '10.5 МП f/2.2' },
        { k: 'Особенности',   v: 'Magic Eraser, Best Take, Photo Unblur' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5060 мАч' },
        { k: 'Зарядка',       v: '37 Вт проводная, 23 Вт беспроводная' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP68' },
        { k: 'Материал',      v: 'Матированное стекло + алюминий' },
        { k: 'Размеры',       v: '162.8 × 76.6 × 8.5 мм, 221 г' },
        { k: 'Цвета',         v: 'Obsidian / Porcelain / Hazel / Rose Quartz' },
      ]},
    ],
  },

  {
    id: 26, cat: 'phones', name: 'OnePlus 13', brand: 'OnePlus', slug: 'oneplus',
    tagline: 'Hasselblad, 100 Вт зарядка, Snapdragon 8 Elite',
    badge: null,
    img: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.82" LTPO AMOLED' },
        { k: 'Разрешение',    v: '3168 × 1440, 510 PPI' },
        { k: 'Частота',       v: '1–120 Гц LTPO4' },
        { k: 'Яркость',       v: '4500 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Elite (3 нм)' },
        { k: 'ОЗУ',           v: '12 / 16 / 24 GB LPDDR5X' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 4.0' },
      ]},
      { group: 'Камера Hasselblad', items: [
        { k: 'Основная',      v: '50 МП Hasselblad, f/1.6, OIS' },
        { k: 'Ультраширокая', v: '50 МП, f/2.0' },
        { k: 'Телефото',      v: '50 МП, f/2.6, 3× OIS' },
        { k: 'Стили',         v: 'Hasselblad Natural Colour Solution' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '6000 мАч' },
        { k: 'Проводная',     v: '100 Вт SUPERVOOC' },
        { k: 'Беспроводная',  v: '50 Вт AirVOOC' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP65' },
        { k: 'Материал',      v: 'Матовое стекло / Alcantara' },
        { k: 'Размеры',       v: '162.9 × 76.1 × 8.9 мм, 210 г' },
        { k: 'Цвета',         v: 'Midnight Ocean / Arctic Dawn / Black Velvet' },
      ]},
    ],
  },

  {
    id: 27, cat: 'phones', name: 'Honor Magic 7 Pro', brand: 'Honor', slug: 'honor',
    tagline: 'Snapdragon 8 Elite, 50× зум, 100 Вт зарядка',
    badge: null,
    img: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.8" LTPO OLED' },
        { k: 'Разрешение',    v: '2800 × 1280, 452 PPI' },
        { k: 'Частота',       v: '1–120 Гц LTPO' },
        { k: 'Яркость',       v: '5000 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Elite (3 нм)' },
        { k: 'ОЗУ',           v: '12 / 16 GB LPDDR5X' },
        { k: 'Накопитель',    v: '256 / 512 GB / 1 TB UFS 4.0' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП VD f/1.4–2.0 переменная, OIS' },
        { k: 'Ультраширокая', v: '50 МП f/1.9, 122°' },
        { k: 'Телефото',      v: '200 МП f/3.0, 2.5× / 5×' },
        { k: 'Зум',           v: '50× Space Zoom AI' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5270 мАч SiC' },
        { k: 'Проводная',     v: '100 Вт Honor SuperCharge' },
        { k: 'Беспроводная',  v: '80 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP68 + IP69' },
        { k: 'Размеры',       v: '163.1 × 76.7 × 8.1 мм, 225 г' },
        { k: 'Цвета',         v: 'Black / White / Green' },
      ]},
    ],
  },

  {
    id: 28, cat: 'phones', name: 'Nothing Phone 3', brand: 'Nothing', slug: 'nothing',
    tagline: 'Glyph Interface 3.0, Snapdragon 8s Gen 4, прозрачный дизайн',
    badge: 'Стиль',
    img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.7" LTPO OLED' },
        { k: 'Разрешение',    v: '2412 × 1080, 394 PPI' },
        { k: 'Частота',       v: '1–120 Гц LTPO' },
        { k: 'Яркость',       v: '4500 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8s Gen 4 (4 нм)' },
        { k: 'ОЗУ',           v: '12 / 16 GB LPDDR5X' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 4.0' },
        { k: 'Nothing OS',    v: '4.0 на Android 15' },
      ]},
      { group: 'Glyph Interface', items: [
        { k: 'Паттернов',     v: '33 LED сегмента' },
        { k: 'Уведомления',   v: 'Визуальные алерты, Now Playing' },
        { k: 'Таймер',        v: 'Glyph Timer' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП f/1.88, OIS' },
        { k: 'Ультраширокая', v: '50 МП f/2.2' },
        { k: 'Телефото',      v: '50 МП f/2.0, 2×' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5150 мАч' },
        { k: 'Проводная',     v: '65 Вт' },
        { k: 'Беспроводная',  v: '15 Вт Qi' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP65' },
        { k: 'Дизайн',        v: 'Прозрачная задняя панель' },
        { k: 'Цвет',          v: 'Black / White' },
      ]},
    ],
  },

  {
    id: 29, cat: 'phones', name: 'Vivo X200 Pro', brand: 'Vivo', slug: 'vivo',
    tagline: 'Zeiss камера 200 МП, 90 Вт зарядка, Dimensity 9400',
    badge: null,
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.78" LTPO AMOLED' },
        { k: 'Разрешение',    v: '2800 × 1260, 452 PPI' },
        { k: 'Частота',       v: '1–120 Гц LTPO' },
        { k: 'Яркость',       v: '4500 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'MediaTek Dimensity 9400 (3 нм)' },
        { k: 'ОЗУ',           v: '16 GB LPDDR5T' },
        { k: 'Накопитель',    v: '256 / 512 GB / 1 TB UFS 4.0' },
      ]},
      { group: 'Камера Zeiss', items: [
        { k: 'Основная',      v: '50 МП Zeiss, f/1.57, OIS' },
        { k: 'Ультраширокая', v: '50 МП Zeiss, f/2.0' },
        { k: 'Телефото',      v: '200 МП Zeiss, f/2.67, 3.7×' },
        { k: 'Оптика',        v: 'Zeiss T* Anti-Reflection' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '6000 мАч' },
        { k: 'Проводная',     v: '90 Вт FlashCharge' },
        { k: 'Беспроводная',  v: '30 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP69' },
        { k: 'Материал',      v: 'Кожа / стекло + алюминий' },
        { k: 'Размеры',       v: '164.4 × 76.2 × 8.5 мм, 229 г' },
        { k: 'Цвета',         v: 'Titanium Black / White / Natural Green' },
      ]},
    ],
  },

  // ── Apple iPhone 15 серия ──────────────────

  {
    id: 38, cat: 'phones', name: 'iPhone 15 Pro Max', brand: 'Apple', slug: 'apple',
    tagline: 'Титановый корпус, A17 Pro, телефото 5×',
    badge: null,
    img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.7" Super Retina XDR' },
        { k: 'Разрешение',    v: '2796 × 1290, 460 PPI' },
        { k: 'Технология',    v: 'OLED ProMotion 1–120 Гц' },
        { k: 'Яркость',       v: 'до 2000 нит HDR' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple A17 Pro (3 нм)' },
        { k: 'ОЗУ',           v: '8 GB LPDDR5' },
        { k: 'Накопитель',    v: '256 / 512 GB / 1 TB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '48 МП f/1.78, OIS, 4K@120fps' },
        { k: 'Ультраширокая', v: '12 МП f/2.2' },
        { k: 'Телефото',      v: '12 МП f/2.8, 5× оптический' },
        { k: 'Фронтальная',   v: '12 МП f/1.9, TrueDepth' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '4422 мАч' },
        { k: 'Зарядка',       v: '27 Вт USB-C, MagSafe 15 Вт' },
        { k: 'Автономность',  v: 'до 29 ч видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Титан Grade 5 + матовое стекло' },
        { k: 'Защита',        v: 'IP68 (до 6 м, 30 мин)' },
        { k: 'Размеры',       v: '159.9 × 76.7 × 8.25 мм, 221 г' },
        { k: 'Цвета',         v: 'Чёрный / Белый / Синий / Натуральный Титан' },
      ]},
    ],
  },

  {
    id: 39, cat: 'phones', name: 'iPhone 15 Pro', brand: 'Apple', slug: 'apple',
    tagline: 'A17 Pro, Action Button, USB-C 3.2',
    badge: null,
    img: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.1" Super Retina XDR' },
        { k: 'Разрешение',    v: '2556 × 1179, 460 PPI' },
        { k: 'Технология',    v: 'OLED ProMotion 1–120 Гц' },
        { k: 'Яркость',       v: 'до 2000 нит HDR' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple A17 Pro (3 нм)' },
        { k: 'ОЗУ',           v: '8 GB LPDDR5' },
        { k: 'Накопитель',    v: '128 / 256 / 512 GB / 1 TB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '48 МП f/1.78, OIS' },
        { k: 'Ультраширокая', v: '12 МП f/2.2, макро' },
        { k: 'Телефото',      v: '12 МП f/2.8, 3× оптический' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '3274 мАч' },
        { k: 'Зарядка',       v: '27 Вт USB-C 3.2, MagSafe 15 Вт' },
        { k: 'Автономность',  v: 'до 23 ч видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Титан Grade 5' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '146.6 × 70.6 × 8.25 мм, 187 г' },
        { k: 'Цвета',         v: 'Чёрный / Белый / Синий / Натуральный Титан' },
      ]},
    ],
  },

  {
    id: 40, cat: 'phones', name: 'iPhone 15 Plus', brand: 'Apple', slug: 'apple',
    tagline: 'Большой экран, A16, до 26 ч видео',
    badge: null,
    img: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?w=800&q=90&fit=crop&crop=left',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.7" Super Retina XDR' },
        { k: 'Разрешение',    v: '2778 × 1284, 460 PPI' },
        { k: 'Технология',    v: 'OLED 60 Гц' },
        { k: 'Яркость',       v: 'до 1000 нит SDR' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple A16 Bionic (4 нм)' },
        { k: 'ОЗУ',           v: '6 GB' },
        { k: 'Накопитель',    v: '128 / 256 / 512 GB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '48 МП f/1.6, OIS' },
        { k: 'Ультраширокая', v: '12 МП f/2.4' },
        { k: 'Фронтальная',   v: '12 МП f/1.9, TrueDepth' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '4383 мАч' },
        { k: 'Зарядка',       v: '20 Вт USB-C, MagSafe 15 Вт' },
        { k: 'Автономность',  v: 'до 26 ч видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Алюминий, Ceramic Shield' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Цвета',         v: 'Чёрный / Розовый / Жёлтый / Зелёный / Голубой' },
      ]},
    ],
  },

  {
    id: 41, cat: 'phones', name: 'iPhone 15', brand: 'Apple', slug: 'apple',
    tagline: 'Dynamic Island, 48 МП, USB-C — массовый хит',
    badge: null,
    img: 'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.1" Super Retina XDR' },
        { k: 'Разрешение',    v: '2556 × 1179, 460 PPI' },
        { k: 'Технология',    v: 'OLED 60 Гц' },
        { k: 'Яркость',       v: 'до 1000 нит SDR' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple A16 Bionic (4 нм)' },
        { k: 'ОЗУ',           v: '6 GB' },
        { k: 'Накопитель',    v: '128 / 256 / 512 GB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '48 МП f/1.6, OIS' },
        { k: 'Ультраширокая', v: '12 МП f/2.4' },
        { k: 'Фронтальная',   v: '12 МП f/1.9, TrueDepth' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '3349 мАч' },
        { k: 'Зарядка',       v: '20 Вт USB-C, MagSafe 15 Вт' },
        { k: 'Автономность',  v: 'до 20 ч видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Алюминий, Ceramic Shield' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '147.6 × 71.6 × 7.8 мм, 171 г' },
        { k: 'Цвета',         v: 'Чёрный / Розовый / Жёлтый / Зелёный / Голубой' },
      ]},
    ],
  },

  // ── Apple iPhone 14 серия ──────────────────

  {
    id: 42, cat: 'phones', name: 'iPhone 14 Pro Max', brand: 'Apple', slug: 'apple',
    tagline: 'Dynamic Island, A16 Pro, Always-On Display',
    badge: null,
    img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.7" Super Retina XDR' },
        { k: 'Разрешение',    v: '2796 × 1290, 460 PPI' },
        { k: 'Технология',    v: 'OLED ProMotion 1–120 Гц, Always-On' },
        { k: 'Яркость',       v: 'до 2000 нит HDR' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple A16 Bionic (4 нм)' },
        { k: 'ОЗУ',           v: '6 GB' },
        { k: 'Накопитель',    v: '128 / 256 / 512 GB / 1 TB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '48 МП f/1.78, OIS, 4K@30fps Prores' },
        { k: 'Ультраширокая', v: '12 МП f/2.2, макро' },
        { k: 'Телефото',      v: '12 МП f/2.8, 3× оптический' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '4323 мАч' },
        { k: 'Зарядка',       v: '27 Вт Lightning, MagSafe 15 Вт' },
        { k: 'Автономность',  v: 'до 29 ч видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Нерж. сталь + матовое стекло' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Цвета',         v: 'Deep Purple / Gold / Silver / Space Black' },
      ]},
    ],
  },

  {
    id: 43, cat: 'phones', name: 'iPhone 14 Pro', brand: 'Apple', slug: 'apple',
    tagline: 'Dynamic Island, 48 МП, Always-On Display',
    badge: null,
    img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.1" Super Retina XDR' },
        { k: 'Разрешение',    v: '2556 × 1179, 460 PPI' },
        { k: 'Технология',    v: 'OLED ProMotion 1–120 Гц, Always-On' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple A16 Bionic (4 нм)' },
        { k: 'ОЗУ',           v: '6 GB' },
        { k: 'Накопитель',    v: '128 / 256 / 512 GB / 1 TB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '48 МП f/1.78, OIS' },
        { k: 'Ультраширокая', v: '12 МП f/2.2, макро' },
        { k: 'Телефото',      v: '12 МП f/2.8, 3×' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '3200 мАч' },
        { k: 'Зарядка',       v: '27 Вт, MagSafe 15 Вт' },
        { k: 'Автономность',  v: 'до 23 ч видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Нерж. сталь + матовое стекло' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Цвета',         v: 'Deep Purple / Gold / Silver / Space Black' },
      ]},
    ],
  },

  {
    id: 44, cat: 'phones', name: 'iPhone 14', brand: 'Apple', slug: 'apple',
    tagline: 'A15 Bionic, 12 МП двойная камера, Crash Detection',
    badge: null,
    img: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.1" Super Retina XDR' },
        { k: 'Разрешение',    v: '2532 × 1170, 460 PPI' },
        { k: 'Технология',    v: 'OLED 60 Гц' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple A15 Bionic (5 нм)' },
        { k: 'ОЗУ',           v: '6 GB' },
        { k: 'Накопитель',    v: '128 / 256 / 512 GB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '12 МП f/1.5, OIS (Sensor-shift)' },
        { k: 'Ультраширокая', v: '12 МП f/2.4' },
        { k: 'Фронтальная',   v: '12 МП f/1.9, TrueDepth, автофокус' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '3279 мАч' },
        { k: 'Зарядка',       v: '20 Вт Lightning, MagSafe 15 Вт' },
        { k: 'Автономность',  v: 'до 20 ч видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Алюминий, Ceramic Shield' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Цвета',         v: 'Midnight / Starlight / Blue / Purple / Red' },
      ]},
    ],
  },

  {
    id: 45, cat: 'phones', name: 'iPhone 13', brand: 'Apple', slug: 'apple',
    tagline: 'A15 Bionic, Cinematic Mode, улучшенная батарея',
    badge: 'Топ цена',
    img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=90&fit=crop&crop=left',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.1" Super Retina XDR' },
        { k: 'Разрешение',    v: '2532 × 1170, 460 PPI' },
        { k: 'Технология',    v: 'OLED 60 Гц' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple A15 Bionic (5 нм)' },
        { k: 'ОЗУ',           v: '4 GB' },
        { k: 'Накопитель',    v: '128 / 256 / 512 GB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '12 МП f/1.6, OIS' },
        { k: 'Ультраширокая', v: '12 МП f/2.4' },
        { k: 'Фронтальная',   v: '12 МП f/2.2, TrueDepth' },
        { k: 'Cinematic Mode', v: 'Режим кино — боке в видео' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '3227 мАч' },
        { k: 'Зарядка',       v: '20 Вт Lightning, MagSafe 15 Вт' },
        { k: 'Автономность',  v: 'до 19 ч видео' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Алюминий, Ceramic Shield' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Цвета',         v: 'Midnight / Starlight / Blue / Pink / Green / Red' },
      ]},
    ],
  },

  // ── Samsung Galaxy S25 серия ───────────────

  {
    id: 46, cat: 'phones', name: 'Samsung Galaxy S25+', brand: 'Samsung', slug: 'samsung',
    tagline: '6.7" Dynamic AMOLED, Snapdragon 8 Elite, Galaxy AI',
    badge: null,
    img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&q=90&fit=crop&crop=left',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.7" Dynamic AMOLED 2X' },
        { k: 'Разрешение',    v: '3088 × 1440, 505 PPI' },
        { k: 'Частота',       v: '1–120 Гц адаптивная' },
        { k: 'Яркость',       v: 'до 2600 нит' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Elite (3 нм)' },
        { k: 'ОЗУ',           v: '12 GB LPDDR5X' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 4.0' },
        { k: 'Galaxy AI',     v: 'Circle to Search, Live Translate, Note Assist' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП f/1.8, OIS' },
        { k: 'Ультраширокая', v: '12 МП f/2.2' },
        { k: 'Телефото',      v: '10 МП f/2.4, 3×' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '4900 мАч' },
        { k: 'Зарядка',       v: '45 Вт, 15 Вт беспроводная' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '158.5 × 75.8 × 7.3 мм, 190 г' },
        { k: 'Цвета',         v: 'Iceblue / Navy / Silver Shadow / Mint' },
      ]},
    ],
  },

  {
    id: 47, cat: 'phones', name: 'Samsung Galaxy S25', brand: 'Samsung', slug: 'samsung',
    tagline: 'Compact флагман — 6.2", Snapdragon 8 Elite, Galaxy AI',
    badge: null,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=800&q=90&fit=crop&crop=left',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.2" Dynamic AMOLED 2X' },
        { k: 'Разрешение',    v: '2340 × 1080, 416 PPI' },
        { k: 'Частота',       v: '1–120 Гц адаптивная' },
        { k: 'Яркость',       v: 'до 2600 нит' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Elite (3 нм)' },
        { k: 'ОЗУ',           v: '12 GB LPDDR5X' },
        { k: 'Накопитель',    v: '128 / 256 GB UFS 4.0' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП f/1.8, OIS' },
        { k: 'Ультраширокая', v: '12 МП f/2.2' },
        { k: 'Телефото',      v: '10 МП f/2.4, 3×' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '4000 мАч' },
        { k: 'Зарядка',       v: '25 Вт, 15 Вт беспроводная' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '147.1 × 70.5 × 7.2 мм, 162 г' },
        { k: 'Цвета',         v: 'Iceblue / Navy / Silver Shadow / Mint' },
      ]},
    ],
  },

  {
    id: 48, cat: 'phones', name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', slug: 'samsung',
    tagline: 'S Pen, 200 МП, Snapdragon 8 Gen 3 — прошлогодний флагман',
    badge: 'Топ цена',
    img: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.8" Dynamic AMOLED 2X' },
        { k: 'Разрешение',    v: '3088 × 1440, 505 PPI' },
        { k: 'Частота',       v: '1–120 Гц адаптивная' },
        { k: 'Яркость',       v: 'до 2600 нит' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Gen 3 (4 нм)' },
        { k: 'ОЗУ',           v: '12 GB LPDDR5X' },
        { k: 'Накопитель',    v: '256 / 512 GB / 1 TB UFS 4.0' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '200 МП f/1.7, OIS, 8K' },
        { k: 'Ультраширокая', v: '12 МП f/2.2' },
        { k: 'Телефото 5×',   v: '50 МП f/3.4, 5×' },
        { k: 'Зум',           v: '100× Space Zoom' },
      ]},
      { group: 'S Pen', items: [
        { k: 'Встроен',       v: 'Да' },
        { k: 'Задержка',      v: '2.8 мс' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5000 мАч' },
        { k: 'Зарядка',       v: '45 Вт, 15 Вт беспроводная' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Titanium + Gorilla Glass Armor' },
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '162.3 × 79.0 × 8.6 мм, 232 г' },
        { k: 'Цвета',         v: 'Titanium Black / Gray / Violet / Yellow' },
      ]},
    ],
  },

  {
    id: 49, cat: 'phones', name: 'Samsung Galaxy A36', brand: 'Samsung', slug: 'samsung',
    tagline: '6.7" AMOLED, 50 МП, Galaxy AI, IP67',
    badge: null,
    img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.7" Super AMOLED FHD+' },
        { k: 'Разрешение',    v: '2340 × 1080' },
        { k: 'Частота',       v: '120 Гц' },
        { k: 'Яркость',       v: 'до 1900 нит' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 6 Gen 3 (4 нм)' },
        { k: 'ОЗУ',           v: '8 / 12 GB' },
        { k: 'Накопитель',    v: '128 / 256 GB + microSD' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП f/1.8, OIS' },
        { k: 'Ультраширокая', v: '12 МП f/2.2' },
        { k: 'Макро',         v: '5 МП f/2.4' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5000 мАч' },
        { k: 'Зарядка',       v: '45 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP67' },
        { k: 'Цвета',         v: 'Awesome Black / White / Navy / Lavender' },
      ]},
    ],
  },

  {
    id: 50, cat: 'phones', name: 'Samsung Galaxy A16', brand: 'Samsung', slug: 'samsung',
    tagline: 'Бюджетный хит — 6.7" AMOLED, 50 МП, 5000 мАч',
    badge: 'Топ цена',
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=90&fit=crop&crop=left',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.7" Super AMOLED FHD+' },
        { k: 'Разрешение',    v: '2340 × 1080' },
        { k: 'Частота',       v: '90 Гц' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'MediaTek Helio G99 (6 нм)' },
        { k: 'ОЗУ',           v: '4 / 8 GB' },
        { k: 'Накопитель',    v: '128 / 256 GB + microSD' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП f/1.8' },
        { k: 'Ультраширокая', v: '5 МП f/2.2' },
        { k: 'Макро',         v: '2 МП f/2.4' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5000 мАч' },
        { k: 'Зарядка',       v: '25 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP54' },
        { k: 'Цвета',         v: 'Black / Light Green / Light Blue / Gold' },
      ]},
    ],
  },

  // ── Xiaomi / Redmi / POCO доп. серия ────────

  {
    id: 51, cat: 'phones', name: 'Xiaomi 14 Ultra', brand: 'Xiaomi', slug: 'xiaomi',
    tagline: 'Leica Summilux 1", Snapdragon 8 Gen 3, 90 Вт',
    badge: null,
    img: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?w=800&q=90&fit=crop&crop=left',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.73" LTPO AMOLED' },
        { k: 'Разрешение',    v: '3200 × 1440, 522 PPI' },
        { k: 'Частота',       v: '1–120 Гц' },
        { k: 'Яркость',       v: '3000 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Gen 3 (4 нм)' },
        { k: 'ОЗУ',           v: '12 / 16 GB LPDDR5X' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 4.0' },
      ]},
      { group: 'Камера Leica', items: [
        { k: 'Основная',      v: '50 МП Leica 1" Summilux, f/1.63' },
        { k: 'Ультраширокая', v: '50 МП Leica, f/1.8' },
        { k: 'Телефото',      v: '50 МП Leica APO, f/2.5, 3.2× / 5×' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5000 мАч' },
        { k: 'Проводная',     v: '90 Вт HyperCharge' },
        { k: 'Беспроводная',  v: '80 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP68' },
        { k: 'Размеры',       v: '161.4 × 75.3 × 9.2 мм, 219 г' },
        { k: 'Цвета',         v: 'Black / White / Special Edition' },
      ]},
    ],
  },

  {
    id: 52, cat: 'phones', name: 'Xiaomi 13T', brand: 'Xiaomi', slug: 'xiaomi',
    tagline: 'Leica камера, 144 Гц, 67 Вт — за доступные деньги',
    badge: 'Топ цена',
    img: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.67" AMOLED' },
        { k: 'Разрешение',    v: '2712 × 1220, 446 PPI' },
        { k: 'Частота',       v: '144 Гц' },
        { k: 'Яркость',       v: '2600 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'MediaTek Dimensity 8200-Ultra (4 нм)' },
        { k: 'ОЗУ',           v: '8 / 12 GB LPDDR5' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 3.1' },
      ]},
      { group: 'Камера Leica', items: [
        { k: 'Основная',      v: '50 МП Leica Summicron, f/1.88, OIS' },
        { k: 'Ультраширокая', v: '12 МП Leica, f/2.2' },
        { k: 'Телефото',      v: '50 МП Leica, f/1.9, 2.4×' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5000 мАч' },
        { k: 'Проводная',     v: '67 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP68' },
        { k: 'Цвета',         v: 'Alpine Blue / Meadow Green / Black' },
      ]},
    ],
  },

  {
    id: 53, cat: 'phones', name: 'Redmi Note 14 Pro', brand: 'Xiaomi', slug: 'xiaomi',
    tagline: '50 МП OIS, 45 Вт, 6.67" AMOLED — хит среднего класса',
    badge: null,
    img: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.67" AMOLED FHD+' },
        { k: 'Разрешение',    v: '2400 × 1080' },
        { k: 'Частота',       v: '120 Гц' },
        { k: 'Яркость',       v: '2100 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 7s Gen 3 (4 нм)' },
        { k: 'ОЗУ',           v: '8 / 12 GB' },
        { k: 'Накопитель',    v: '128 / 256 GB' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП f/1.5, OIS' },
        { k: 'Ультраширокая', v: '8 МП f/2.2' },
        { k: 'Макро',         v: '2 МП f/2.4' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5500 мАч' },
        { k: 'Проводная',     v: '45 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP68' },
        { k: 'Цвета',         v: 'Midnight Black / Ocean Teal / Lavender Purple' },
      ]},
    ],
  },

  {
    id: 54, cat: 'phones', name: 'Redmi Note 13 Pro+', brand: 'Xiaomi', slug: 'xiaomi',
    tagline: '200 МП, 120 Вт, IP68 — лучшее за свои деньги',
    badge: 'Хит',
    img: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=800&q=90&fit=crop&crop=left',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.67" AMOLED CurvedEdge' },
        { k: 'Разрешение',    v: '2712 × 1220, 446 PPI' },
        { k: 'Частота',       v: '120 Гц' },
        { k: 'Яркость',       v: '1800 нит' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'MediaTek Dimensity 7200-Ultra (4 нм)' },
        { k: 'ОЗУ',           v: '8 / 12 / 16 GB LPDDR5' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 3.1' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '200 МП f/1.65, OIS' },
        { k: 'Ультраширокая', v: '8 МП f/2.2' },
        { k: 'Макро',         v: '2 МП f/2.4' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5000 мАч' },
        { k: 'Проводная',     v: '120 Вт HyperCharge' },
        { k: 'Беспроводная',  v: '5 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP68' },
        { k: 'Цвета',         v: 'Aurora Purple / Fusion Black / Iceberg Blue' },
      ]},
    ],
  },

  {
    id: 55, cat: 'phones', name: 'POCO F7 Pro', brand: 'Xiaomi', slug: 'xiaomi',
    tagline: 'Snapdragon 8 Gen 3, 120 Вт, 6.67" AMOLED — скоростной флагман',
    badge: null,
    img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&q=90&fit=crop&crop=left',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.67" AMOLED' },
        { k: 'Разрешение',    v: '2712 × 1220, 446 PPI' },
        { k: 'Частота',       v: '120 Гц' },
        { k: 'Яркость',       v: '4000 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Gen 3 (4 нм)' },
        { k: 'ОЗУ',           v: '12 / 16 GB LPDDR5T' },
        { k: 'Накопитель',    v: '256 / 512 GB / 1 TB UFS 4.0' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП f/1.6, OIS' },
        { k: 'Ультраширокая', v: '8 МП f/2.2' },
        { k: 'Фронтальная',   v: '20 МП f/2.2' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5110 мАч' },
        { k: 'Проводная',     v: '120 Вт Turbo Charge' },
        { k: 'Беспроводная',  v: '50 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP68' },
        { k: 'Цвета',         v: 'Black / White / Green' },
      ]},
    ],
  },

  {
    id: 56, cat: 'phones', name: 'POCO M6 Pro', brand: 'Xiaomi', slug: 'xiaomi',
    tagline: '6.67" AMOLED, 67 Вт, 64 МП — самый доступный',
    badge: 'Топ цена',
    img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.67" AMOLED FHD+' },
        { k: 'Разрешение',    v: '2400 × 1080' },
        { k: 'Частота',       v: '120 Гц' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'MediaTek Helio G99-Ultra (6 нм)' },
        { k: 'ОЗУ',           v: '8 / 12 GB' },
        { k: 'Накопитель',    v: '256 GB + microSD' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '64 МП f/1.79' },
        { k: 'Ультраширокая', v: '8 МП f/2.2' },
        { k: 'Макро',         v: '2 МП' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5000 мАч' },
        { k: 'Проводная',     v: '67 Вт Turbo Charge' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Цвета',         v: 'Black / Blue / Purple' },
      ]},
    ],
  },

  // ── OnePlus доп. серия ─────────────────────

  {
    id: 57, cat: 'phones', name: 'OnePlus 12R', brand: 'OnePlus', slug: 'oneplus',
    tagline: 'Snapdragon 8 Gen 2, 100 Вт, 6.78" AMOLED — хит',
    badge: null,
    img: 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.78" LTPO AMOLED' },
        { k: 'Разрешение',    v: '2780 × 1264, 450 PPI' },
        { k: 'Частота',       v: '1–120 Гц LTPO4' },
        { k: 'Яркость',       v: '4500 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Gen 2 (4 нм)' },
        { k: 'ОЗУ',           v: '8 / 16 GB LPDDR5X' },
        { k: 'Накопитель',    v: '128 / 256 GB UFS 3.1' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП Sony IMX890, f/1.8, OIS' },
        { k: 'Ультраширокая', v: '8 МП f/2.2' },
        { k: 'Макро',         v: '2 МП f/2.4' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '5500 мАч' },
        { k: 'Проводная',     v: '100 Вт SUPERVOOC' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP65' },
        { k: 'Цвета',         v: 'Cool Blue / Iron Gray / Lava Red' },
      ]},
    ],
  },

  // ── Realme ────────────────────────────────

  {
    id: 58, cat: 'phones', name: 'Realme GT 7 Pro', brand: 'Realme', slug: 'realme',
    tagline: 'Snapdragon 8 Elite, 120 Вт, IP69 — мощный и живучий',
    badge: null,
    img: 'https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '6.78" LTPO AMOLED' },
        { k: 'Разрешение',    v: '2780 × 1264, 450 PPI' },
        { k: 'Частота',       v: '1–120 Гц' },
        { k: 'Яркость',       v: '4500 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Elite (3 нм)' },
        { k: 'ОЗУ',           v: '12 / 16 GB LPDDR5T' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 4.0' },
      ]},
      { group: 'Камера', items: [
        { k: 'Основная',      v: '50 МП Sony LYT-808, f/1.8, OIS' },
        { k: 'Ультраширокая', v: '50 МП f/2.2' },
        { k: 'Телефото',      v: '50 МП f/2.6, 3×' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '6500 мАч' },
        { k: 'Проводная',     v: '120 Вт SUPERVOOC' },
        { k: 'Беспроводная',  v: '50 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Защита',        v: 'IP69' },
        { k: 'Цвета',         v: 'Black / Blue / Special' },
      ]},
    ],
  },

  // ══════════════════════════════════════════
  //  ПЛАНШЕТЫ
  // ══════════════════════════════════════════

  {
    id: 59, cat: 'tablets', name: 'iPad Air 13" M2', brand: 'Apple', slug: 'apple',
    tagline: 'M2, 13" Liquid Retina, Apple Pencil Pro',
    badge: null,
    img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=90&fit=crop&crop=left',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '13" Liquid Retina' },
        { k: 'Разрешение',    v: '2732 × 2048, 264 PPI' },
        { k: 'Яркость',       v: '600 нит' },
        { k: 'True Tone',     v: 'Да, P3 широкий охват' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple M2 (5 нм)' },
        { k: 'CPU',           v: '8-core' },
        { k: 'GPU',           v: '10-core' },
        { k: 'ОЗУ',           v: '8 GB' },
        { k: 'Накопитель',    v: '128 / 256 / 512 GB / 1 TB' },
      ]},
      { group: 'Аксессуары', items: [
        { k: 'Стилус',        v: 'Apple Pencil Pro / Pencil 2' },
        { k: 'Клавиатура',    v: 'Magic Keyboard 13"' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Вес',           v: '617 г' },
        { k: 'Толщина',       v: '6.1 мм' },
        { k: 'Цвета',         v: 'Blue / Purple / Starlight / Space Gray' },
      ]},
    ],
  },

  {
    id: 60, cat: 'tablets', name: 'iPad mini 7', brand: 'Apple', slug: 'apple',
    tagline: 'Компактный планшет 8.3", A17 Pro, Apple Intelligence',
    badge: 'Новинка',
    img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '8.3" Liquid Retina' },
        { k: 'Разрешение',    v: '2266 × 1488, 326 PPI' },
        { k: 'Яркость',       v: '600 нит, True Tone' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple A17 Pro (3 нм)' },
        { k: 'ОЗУ',           v: '8 GB' },
        { k: 'Накопитель',    v: '128 / 256 / 512 GB' },
        { k: 'Apple Intelligence', v: 'Да — ИИ-функции' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Вес',           v: '293 г' },
        { k: 'Толщина',       v: '6.3 мм' },
        { k: 'Защита',        v: 'IPX4' },
        { k: 'Цвета',         v: 'Blue / Purple / Starlight / Space Gray' },
      ]},
    ],
  },

  {
    id: 61, cat: 'tablets', name: 'Samsung Galaxy Tab S10+', brand: 'Samsung', slug: 'samsung',
    tagline: '12.4" Dynamic AMOLED, S Pen, DeX, Snapdragon 8 Gen 3',
    badge: null,
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=90&fit=crop&crop=left',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '12.4" Dynamic AMOLED 2X' },
        { k: 'Разрешение',    v: '2800 × 1752, 266 PPI' },
        { k: 'Частота',       v: '120 Гц' },
        { k: 'Яркость',       v: '930 нит' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Gen 3 (4 нм)' },
        { k: 'ОЗУ',           v: '12 GB' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 4.0 + microSD' },
      ]},
      { group: 'S Pen', items: [
        { k: 'В комплекте',   v: 'Да' },
        { k: 'Задержка',      v: '2.8 мс' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '10090 мАч' },
        { k: 'Зарядка',       v: '45 Вт, 15 Вт беспроводная' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Толщина',       v: '5.6 мм, 571 г' },
        { k: 'Цвет',          v: 'Moonstone Gray / Platinum Silver' },
      ]},
    ],
  },

  {
    id: 62, cat: 'tablets', name: 'Samsung Galaxy Tab A9+', brand: 'Samsung', slug: 'samsung',
    tagline: '11" IPS LCD, Snapdragon 695, DeX — доступный выбор',
    badge: 'Топ цена',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '11" IPS LCD' },
        { k: 'Разрешение',    v: '1920 × 1200, 206 PPI' },
        { k: 'Яркость',       v: '400 нит' },
        { k: 'Частота',       v: '90 Гц' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 695 5G (6 нм)' },
        { k: 'ОЗУ',           v: '4 / 8 GB' },
        { k: 'Накопитель',    v: '64 / 128 GB + microSD' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '7040 мАч' },
        { k: 'Зарядка',       v: '15 Вт' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Вес',           v: '480 г' },
        { k: 'Цвет',          v: 'Graphite / Silver / Navy' },
      ]},
    ],
  },

  {
    id: 63, cat: 'tablets', name: 'Xiaomi Pad 7 Pro', brand: 'Xiaomi', slug: 'xiaomi',
    tagline: '12.1" LCD 144 Гц, Snapdragon 8s Gen 3, стилус Xiaomi Focus',
    badge: null,
    img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '12.1" LCD 3K' },
        { k: 'Разрешение',    v: '3048 × 1912, 296 PPI' },
        { k: 'Частота',       v: '144 Гц' },
        { k: 'Яркость',       v: '900 нит' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8s Gen 3 (4 нм)' },
        { k: 'ОЗУ',           v: '8 / 12 GB LPDDR5X' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 4.0' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '10000 мАч' },
        { k: 'Зарядка',       v: '45 Вт HyperCharge' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Вес',           v: '571 г' },
        { k: 'Толщина',       v: '5.9 мм' },
        { k: 'Цвета',         v: 'Graphite Gray / Moonlight Silver' },
      ]},
    ],
  },

  {
    id: 30, cat: 'tablets', name: 'iPad Pro 13" M4', brand: 'Apple', slug: 'apple',
    tagline: 'Тончайший Apple продукт, Ultra Retina XDR, M4',
    badge: 'Хит',
    img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '13" Ultra Retina XDR (tandem OLED)' },
        { k: 'Разрешение',    v: '2752 × 2064, 264 PPI' },
        { k: 'Яркость',       v: '1600 нит HDR, 1000 нит SDR' },
        { k: 'Частота',       v: 'ProMotion 10–120 Гц' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Apple M4 (3 нм)' },
        { k: 'CPU',           v: '10-core (4P + 6E)' },
        { k: 'GPU',           v: '10-core' },
        { k: 'ОЗУ',           v: '8 / 16 GB' },
        { k: 'Накопитель',    v: '256 GB / 512 GB / 1 TB / 2 TB' },
      ]},
      { group: 'Аксессуары', items: [
        { k: 'Стилус',        v: 'Apple Pencil Pro (haptics, Find My)' },
        { k: 'Клавиатура',    v: 'Magic Keyboard 13" (стекло, тачпад)' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Алюминий, 5.1 мм тонкий' },
        { k: 'Вес',           v: '579 г (Wi-Fi), 600 г (Cellular)' },
        { k: 'Защита',        v: 'IPX4' },
        { k: 'Цвета',         v: 'Space Black / Silver' },
      ]},
    ],
  },

  {
    id: 31, cat: 'tablets', name: 'Samsung Tab S10 Ultra', brand: 'Samsung', slug: 'samsung',
    tagline: '14.6" Dynamic AMOLED, S Pen, DeX режим',
    badge: 'Новинка',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '14.6" Dynamic AMOLED 2X' },
        { k: 'Разрешение',    v: '2960 × 1848, 240 PPI' },
        { k: 'Частота',       v: '120 Гц адаптивная' },
        { k: 'Яркость',       v: '930 нит пиковая' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Чип',           v: 'Snapdragon 8 Gen 3 (4 нм)' },
        { k: 'ОЗУ',           v: '12 / 16 GB' },
        { k: 'Накопитель',    v: '256 / 512 GB UFS 4.0' },
      ]},
      { group: 'S Pen', items: [
        { k: 'В комплекте',   v: 'Да' },
        { k: 'Задержка',      v: '2.8 мс' },
        { k: 'Air Actions',   v: 'Удалённое управление BT' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '11200 мАч' },
        { k: 'Зарядка',       v: '45 Вт, 15 Вт беспроводная' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Материал',      v: 'Armor Aluminum, матовое стекло' },
        { k: 'Толщина',       v: '5.4 мм' },
        { k: 'Вес',           v: '718 г' },
        { k: 'Цвет',          v: 'Moonstone Gray / Titanium Silver' },
      ]},
    ],
  },

  // ══════════════════════════════════════════
  //  НОУТБУКИ
  // ══════════════════════════════════════════

  {
    id: 64, cat: 'laptops', name: 'MacBook Air 13" M4', brand: 'Apple', slug: 'apple',
    tagline: 'Самый тонкий Air — M4, 18 ч автономности',
    badge: 'Хит',
    img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '13.6" Liquid Retina' },
        { k: 'Разрешение',    v: '2560 × 1664, 224 PPI' },
        { k: 'Яркость',       v: '500 нит, True Tone, P3' },
      ]},
      { group: 'Apple M4', items: [
        { k: 'CPU',           v: '10-core (4P + 6E)' },
        { k: 'GPU',           v: '10-core' },
        { k: 'Unified Memory', v: '16 / 24 / 32 GB' },
        { k: 'SSD',           v: '256 GB / 512 GB / 1 TB / 2 TB' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Вес',           v: '1.24 кг' },
        { k: 'Толщина',       v: '11.3 мм' },
        { k: 'Автономность',  v: 'до 18 часов' },
        { k: 'Цвета',         v: 'Midnight / Starlight / Sky Blue / Purple' },
      ]},
    ],
  },

  {
    id: 65, cat: 'laptops', name: 'MacBook Pro 14" M4 Pro', brand: 'Apple', slug: 'apple',
    tagline: 'M4 Pro, Thunderbolt 5, ProMotion 120 Гц — компактный зверь',
    badge: null,
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '14.2" Liquid Retina XDR' },
        { k: 'Разрешение',    v: '3024 × 1964, 254 PPI' },
        { k: 'Яркость',       v: '1600 нит HDR, 1000 нит SDR' },
        { k: 'Частота',       v: 'ProMotion 10–120 Гц' },
      ]},
      { group: 'Apple M4 Pro', items: [
        { k: 'CPU',           v: '12-core (8P + 4E)' },
        { k: 'GPU',           v: '20-core Metal GPU' },
        { k: 'Unified Memory', v: '24 / 48 GB' },
        { k: 'SSD',           v: '512 GB / 1 TB / 2 TB' },
      ]},
      { group: 'Порты', items: [
        { k: 'Thunderbolt 5', v: '3× USB-C' },
        { k: 'HDMI',          v: 'HDMI 2.1' },
        { k: 'MagSafe',       v: 'MagSafe 3 (100 Вт)' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Вес',           v: '1.61 кг' },
        { k: 'Автономность',  v: 'до 17 ч видео' },
        { k: 'Цвета',         v: 'Space Black / Silver' },
      ]},
    ],
  },

  {
    id: 66, cat: 'laptops', name: 'Lenovo ThinkPad X1 Carbon Gen 13', brand: 'Lenovo', slug: 'lenovo',
    tagline: 'Бизнес-флагман — Intel Ultra 7, 1 кг, 15 ч работы',
    badge: null,
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '14" IPS / OLED' },
        { k: 'Разрешение',    v: '2880 × 1800 OLED или 1920 × 1200 IPS' },
        { k: 'Яркость',       v: '400 нит (IPS), 600 нит (OLED)' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Процессор',     v: 'Intel Core Ultra 7 165H / 255H (Intel 4)' },
        { k: 'ОЗУ',           v: '16 / 32 / 64 GB LPDDR5X' },
        { k: 'SSD',           v: '512 GB / 1 TB / 2 TB PCIe 4.0' },
      ]},
      { group: 'Порты', items: [
        { k: 'Thunderbolt 4', v: '2× USB-C' },
        { k: 'USB-A',         v: '2× USB-A 3.2' },
        { k: 'HDMI',          v: 'HDMI 2.1' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Вес',           v: 'от 1.03 кг' },
        { k: 'Материал',      v: 'Углепластик (Carbon Fiber)' },
        { k: 'Автономность',  v: 'до 15 ч' },
        { k: 'Цвет',          v: 'Deep Black' },
      ]},
    ],
  },

  {
    id: 67, cat: 'laptops', name: 'Dell XPS 15 9530', brand: 'Dell', slug: 'dell',
    tagline: 'OLED 3.5K, RTX 4060, Intel Core i9 — контент-мастер',
    badge: null,
    img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '15.6" OLED 3.5K' },
        { k: 'Разрешение',    v: '3456 × 2160, 265 PPI' },
        { k: 'Яркость',       v: '400 нит, DCI-P3 100%' },
        { k: 'Частота',       v: '60 Гц (OLED)' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Процессор',     v: 'Intel Core i7-13700H / i9-13900H' },
        { k: 'Видеокарта',    v: 'NVIDIA RTX 4060 8 GB' },
        { k: 'ОЗУ',           v: '16 / 32 / 64 GB DDR5' },
        { k: 'SSD',           v: '512 GB / 1 TB / 2 TB PCIe 4.0' },
      ]},
      { group: 'Порты', items: [
        { k: 'Thunderbolt 4', v: '2× USB-C' },
        { k: 'USB-A',         v: '1× USB-A 3.2' },
        { k: 'SD-карта',      v: 'SD UHS-III' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Вес',           v: '1.86 кг' },
        { k: 'Материал',      v: 'Алюминий + карбон' },
        { k: 'Цвет',          v: 'Platinum Silver / Graphite' },
      ]},
    ],
  },

  {
    id: 68, cat: 'laptops', name: 'ASUS VivoBook 16 2025', brand: 'ASUS', slug: 'asus',
    tagline: 'AMD Ryzen 7, OLED 3.2K, лёгкий и доступный',
    badge: 'Топ цена',
    img: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '16" OLED 3.2K' },
        { k: 'Разрешение',    v: '3200 × 2000, 235 PPI' },
        { k: 'Частота',       v: '120 Гц' },
        { k: 'Яркость',       v: '600 нит, DCI-P3 100%' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Процессор',     v: 'AMD Ryzen 7 8845H / Ryzen 9 9955HX' },
        { k: 'ОЗУ',           v: '16 / 32 GB LPDDR5X' },
        { k: 'SSD',           v: '512 GB / 1 TB PCIe 4.0' },
        { k: 'Видеокарта',    v: 'AMD Radeon 780M (интегр.) / RTX 4050' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Вес',           v: '1.88 кг' },
        { k: 'Автономность',  v: 'до 10 ч' },
        { k: 'Цвета',         v: 'Cool Silver / Indie Black / Quiet Blue' },
      ]},
    ],
  },

  {
    id: 69, cat: 'laptops', name: 'Samsung Galaxy Book5 Pro 360', brand: 'Samsung', slug: 'samsung',
    tagline: '2-в-1 AMOLED, Intel Core Ultra 7, S Pen в комплекте',
    badge: null,
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=90&fit=crop&crop=right',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '16" Dynamic AMOLED 2X' },
        { k: 'Разрешение',    v: '2880 × 1800, 204 PPI' },
        { k: 'Яркость',       v: '500 нит, 120 Гц' },
        { k: 'Формат',        v: '2-в-1, сенсорный, 360°' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Процессор',     v: 'Intel Core Ultra 7 258V / Ultra 9 288V' },
        { k: 'ОЗУ',           v: '16 / 32 GB LPDDR5X' },
        { k: 'SSD',           v: '512 GB / 1 TB PCIe 4.0' },
      ]},
      { group: 'Особенности', items: [
        { k: 'S Pen',         v: 'В комплекте, 4096 уровней давления' },
        { k: 'Galaxy AI',     v: 'Note Assist, Transcript Assist, Live Translate' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Вес',           v: '1.70 кг' },
        { k: 'Автономность',  v: 'до 17 ч' },
        { k: 'Цвет',          v: 'Moonstone Gray' },
      ]},
    ],
  },

  {
    id: 32, cat: 'laptops', name: 'MacBook Pro 16" M4 Max', brand: 'Apple', slug: 'apple',
    tagline: '40-core GPU, 22 часа автономности, нейронный движок',
    badge: 'Хит',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '16.2" Liquid Retina XDR' },
        { k: 'Разрешение',    v: '3456 × 2234, 254 PPI' },
        { k: 'Яркость',       v: '1600 нит HDR, 1000 нит SDR' },
        { k: 'Частота',       v: 'ProMotion 10–120 Гц' },
      ]},
      { group: 'Apple M4 Max', items: [
        { k: 'CPU',           v: '14-core (10P + 4E)' },
        { k: 'GPU',           v: '40-core Metal GPU' },
        { k: 'Unified Memory', v: '36 / 48 / 64 / 128 GB' },
        { k: 'SSD',           v: '512 GB / 1 TB / 2 TB / 4 TB / 8 TB' },
      ]},
      { group: 'Порты', items: [
        { k: 'Thunderbolt 5', v: '3× USB-C (до 120 Гбит/с)' },
        { k: 'HDMI',          v: 'HDMI 2.1 (до 8K@60fps)' },
        { k: 'MagSafe',       v: 'MagSafe 3 (140 Вт)' },
        { k: 'SD-карта',      v: 'SD 4.0 Express (985 МБ/с)' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Ёмкость',       v: '100 Вт·ч' },
        { k: 'Автономность',  v: 'до 22 часов' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Размеры',       v: '355.7 × 248.1 × 16.8 мм, 2.14 кг' },
        { k: 'Цвета',         v: 'Space Black / Silver' },
      ]},
    ],
  },

  {
    id: 33, cat: 'laptops', name: 'ASUS ROG Zephyrus G16 2025', brand: 'ASUS', slug: 'asus',
    tagline: 'RTX 4080, 240 Гц OLED, Ryzen AI 9 — игровой максимум',
    badge: 'Игровой',
    img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '16" QHD+ OLED' },
        { k: 'Разрешение',    v: '2560 × 1600' },
        { k: 'Частота',       v: '240 Гц' },
        { k: 'Яркость',       v: '600 нит, DCI-P3 100%' },
      ]},
      { group: 'Производительность', items: [
        { k: 'Процессор',     v: 'AMD Ryzen AI 9 HX 370 (4 нм Zen 5)' },
        { k: 'Ядра',          v: '12 ядер / 24 потока, до 5.1 ГГц' },
        { k: 'Видеокарта',    v: 'NVIDIA GeForce RTX 4080 16 GB GDDR6' },
        { k: 'ОЗУ',           v: '32 GB DDR5-5600' },
        { k: 'SSD',           v: '1 TB PCIe 4.0 NVMe' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Размеры',       v: '354 × 252 × 18.5 мм, 1.85 кг' },
        { k: 'Подсветка',     v: 'Per-key RGB + AniMe Matrix lid' },
      ]},
    ],
  },

  {
    id: 34, cat: 'laptops', name: 'MacBook Air 15" M4', brand: 'Apple', slug: 'apple',
    tagline: 'Самый популярный ноутбук — теперь с M4',
    badge: null,
    img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=90&fit=crop',
    specs: [
      { group: 'Дисплей', items: [
        { k: 'Диагональ',     v: '15.3" Liquid Retina' },
        { k: 'Разрешение',    v: '2880 × 1864, 224 PPI' },
        { k: 'Яркость',       v: '500 нит, True Tone, P3' },
        { k: 'Частота',       v: '60 Гц' },
      ]},
      { group: 'Apple M4', items: [
        { k: 'CPU',           v: '10-core (4P + 6E)' },
        { k: 'GPU',           v: '10-core' },
        { k: 'Unified Memory', v: '16 / 24 / 32 GB' },
        { k: 'SSD',           v: '256 GB / 512 GB / 1 TB / 2 TB' },
      ]},
      { group: 'Корпус', items: [
        { k: 'Вес',           v: '1.51 кг' },
        { k: 'Толщина',       v: '11.5 мм' },
        { k: 'Цвета',         v: 'Midnight / Starlight / Sky Blue / Purple' },
      ]},
    ],
  },

  // ══════════════════════════════════════════
  //  НАУШНИКИ
  // ══════════════════════════════════════════

  {
    id: 35, cat: 'headphones', name: 'Sony WH-1000XM6', brand: 'Sony', slug: 'sony',
    tagline: 'Лучшее шумоподавление в мире — 2025',
    badge: 'Хит',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=90&fit=crop',
    specs: [
      { group: 'Звук', items: [
        { k: 'Драйверы',      v: '40 мм, углеродное волокно' },
        { k: 'Кодеки',        v: 'LDAC, aptX HD, AAC, SBC' },
        { k: 'Частотный диап.', v: '4 Гц — 40 000 Гц (LDAC)' },
        { k: '360 Reality',   v: 'Да, Head Tracking' },
      ]},
      { group: 'Шумоподавление', items: [
        { k: 'Тип',           v: 'Адаптивный ANC 2.0 (8 микрофонов)' },
        { k: 'Процессор',     v: 'HD Noise Cancelling Processor QN3' },
        { k: 'Speak-to-Chat', v: 'Автопауза при разговоре' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Время работы',  v: '40 ч (ANC) / 50 ч (без ANC)' },
        { k: 'Быстрая зарядка', v: '10 мин = 5 часов' },
        { k: 'Разъём',        v: 'USB-C' },
      ]},
      { group: 'Прочее', items: [
        { k: 'Bluetooth',     v: '5.3, Multipoint 2 уст.' },
        { k: 'NFC',           v: 'Да' },
        { k: 'Цвета',         v: 'Black / Platinum Silver / Midnight Blue' },
      ]},
    ],
  },

  {
    id: 36, cat: 'headphones', name: 'AirPods Pro 3', brand: 'Apple', slug: 'apple',
    tagline: 'H3 чип, ANC нового уровня, до 36 часов в кейсе',
    badge: 'Топ',
    img: 'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=800&q=90&fit=crop',
    specs: [
      { group: 'Звук', items: [
        { k: 'Чип',           v: 'Apple H3 (2 нм)' },
        { k: 'Персонализация', v: 'Adaptive Audio Pro, Personalized Spatial' },
        { k: 'Lossless',      v: 'Да, через Apple Lossless 2.0' },
      ]},
      { group: 'Шумоподавление', items: [
        { k: 'ANC',           v: 'Adaptive ANC 2 — вдвое сильнее AirPods Pro 2' },
        { k: 'Transparency',  v: 'Adaptive Transparency' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'AirPods',       v: '6 ч (ANC) / 7 ч (без ANC)' },
        { k: 'С кейсом',      v: 'до 36 часов' },
        { k: 'Зарядка',       v: 'MagSafe, Qi2, Lightning' },
      ]},
      { group: 'Прочее', items: [
        { k: 'Защита',        v: 'IP54 (AirPods + кейс)' },
        { k: 'Find My',       v: 'Да, Precision Finding' },
        { k: 'Цвет',          v: 'White' },
      ]},
    ],
  },

  {
    id: 37, cat: 'headphones', name: 'Samsung Galaxy Buds3 Pro', brand: 'Samsung', slug: 'samsung',
    tagline: 'Blade design, HiFi 24bit, IPX7',
    badge: null,
    img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=90&fit=crop',
    specs: [
      { group: 'Звук', items: [
        { k: 'Динамики',      v: 'Коаксиальные 2-way (10.5 мм + 6.1 мм)' },
        { k: 'Кодеки',        v: 'SSC HiFi (24bit), AAC, SBC' },
        { k: '360 Audio',     v: 'Да, Head Tracking' },
      ]},
      { group: 'Шумоподавление', items: [
        { k: 'ANC',           v: 'Intelligent ANC 2.0' },
        { k: 'Микрофоны',     v: '3 микрофона + Voice Pickup Unit' },
      ]},
      { group: 'Аккумулятор', items: [
        { k: 'Наушники',      v: '6 ч (ANC) / 7 ч (без)' },
        { k: 'С кейсом',      v: 'до 30 часов' },
        { k: 'Зарядка',       v: 'USB-C + беспроводная Qi' },
      ]},
      { group: 'Прочее', items: [
        { k: 'Защита',        v: 'IPX7 (наушники), IPX2 (кейс)' },
        { k: 'Bluetooth',     v: '5.4, Multipoint 2 уст.' },
        { k: 'Цвет',          v: 'Onyx / White / Silver Shadow' },
      ]},
    ],
  },
]

export const categories = [
  { id: 'phones',     label: 'Смартфоны',  count: '58 моделей',  img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=700&q=85&fit=crop', color: '#7B61FF' },
  { id: 'laptops',    label: 'Ноутбуки',   count: '9 моделей',   img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700&q=85&fit=crop', color: '#00D2FF' },
  { id: 'tablets',    label: 'Планшеты',   count: '7 моделей',   img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=700&q=85&fit=crop', color: '#34D399' },
  { id: 'headphones', label: 'Наушники',   count: '3 модели',    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=85&fit=crop', color: '#F472B6' },
]
