export const menuData = [
  // SPECIALTY COFFEE
  {
    id: "c1",
    category: "coffee",
    price: 6.50,
    badge: "bestseller",
    image: "/assets/coffee.jpg",
    translations: {
      en: {
        name: "Artisan Flat White",
        desc: "Double ristretto of Ethiopian micro-lot beans with micro-foamed silky whole milk.",
        tags: ["Specialty Roast", "Smooth", "Latte Art"]
      },
      az: {
        name: "Artisan Flat White",
        desc: "Efiopiya mikro-lot dənələrindən ikiqat ristretto və xüsusi ipək kimi süd köpüyü.",
        tags: ["Xüsusi Qovrulma", "Yumşaq Dad", "Latte Art"]
      },
      ru: {
        name: "Авторский Флэт Уайт",
        desc: "Двойной ристретто из микро-лота Эфиопии и бархатистая шелковая молочная пенка.",
        tags: ["Спешелти", "Мягкий Вкус", "Латте-арт"]
      }
    }
  },
  {
    id: "c2",
    category: "coffee",
    price: 8.00,
    badge: "signature",
    image: "/assets/coffee.jpg",
    translations: {
      en: {
        name: "V60 Hand Pour-Over",
        desc: "Precision manual filter brew. Choose between floral Ethiopian Yirgacheffe or berry-noted Colombian Pink Bourbon.",
        tags: ["Single Origin", "Filter Brew", "Clean Body"]
      },
      az: {
        name: "V60 Dəmləmə Kofe",
        desc: "Dəqiq filtr dəmləmə. Çiçək ətirli Efiopiya Yirgacheffe və ya giləmeyvə notlu Kolumbiya Pink Bourbon seçimi ilə.",
        tags: ["Tək Mənşəli", "Filtr Dəmləmə", "Təmiz Dad"]
      },
      ru: {
        name: "Фильтр V60 Пуровер",
        desc: "Ручной метод заваривания спешелти кофе. На выбор: цветочная Эфиопия Иргачефф или ягодная Колумбия Пинк Бурбон.",
        tags: ["Синг-ориджин", "Ручной Завар", "Чистый Профиль"]
      }
    }
  },
  {
    id: "c3",
    category: "coffee",
    price: 7.50,
    badge: "bestseller",
    image: "/assets/coffee.jpg",
    translations: {
      en: {
        name: "Spanish Iced Latte",
        desc: "Rich espresso layers over condensed milk and chilled milk, served over crystal ice rocks.",
        tags: ["Sweet", "Cold", "Cafe Classic"]
      },
      az: {
        name: "İspan Soyuq Lattesi",
        desc: "Qatılaşdırılmış süd, buz və təzə çəkilmiş zəngin espresso layları ilə sərinləşdirici kofe.",
        tags: ["Şirin", "Soyuq", "Klassik"]
      },
      ru: {
        name: "Испанский Айс Латте",
        desc: "Слои плотного эспрессо, сгущенного молока и охлажденного молока с кристальным льдом.",
        tags: ["Сладкий", "Освежающий", "Хит"]
      }
    }
  },
  {
    id: "c4",
    category: "coffee",
    price: 7.50,
    badge: "catFavorite",
    image: "/assets/coffee.jpg",
    translations: {
      en: {
        name: "Vanilla Lavender Raf",
        desc: "Velvety steamed cream blended with espresso, natural Madagascar vanilla, and French lavender blossoms.",
        tags: ["Creamy", "Aromatic", "Baku Favorite"]
      },
      az: {
        name: "Vanilli Lavanda Raf",
        desc: "Təbii Madaqaskar vanili, fransız lavandası və espresso ilə köpürdülmüş zərif qaymaqlı kofe.",
        tags: ["Qaymaqlı", "Ətirli", "Sevimli"]
      },
      ru: {
        name: "Ванильно-Лавандовый Раф",
        desc: "Нежнейшие взбитые сливки с эспрессо, натуральной мадагаскарской ванилью и цветками лаванды.",
        tags: ["Сливочный", "Ароматный", "Любимый"]
      }
    }
  },
  {
    id: "c5",
    category: "coffee",
    price: 8.00,
    badge: "signature",
    image: "/assets/coffee.jpg",
    translations: {
      en: {
        name: "Autumn Pumpkin Spiced Latte",
        desc: "House-made roasted pumpkin purée, warm autumn spices, specialty double espresso, and cinnamon dusting.",
        tags: ["Seasonal", "Spiced", "Comforting"]
      },
      az: {
        name: "Balqabaqlı Ədviyyatlı Latte",
        desc: "Kafemizdə bişirilmiş təbii balqabaq püresi, darçın, muskat qozu və ikili espresso ilə mövsümün ləzzəti.",
        tags: ["Mövsümi", "Ədviyyatlı", "İsti"]
      },
      ru: {
        name: "Пряный Тыквенный Латте",
        desc: "Домашнее пюре запеченной тыквы, согревающие осенние пряности, двойной эспрессо и корица.",
        tags: ["Сезонный", "Согревающий", "Уютный"]
      }
    }
  },
  {
    id: "c6",
    category: "coffee",
    price: 7.50,
    badge: "vegan",
    image: "/assets/coffee.jpg",
    translations: {
      en: {
        name: "Ceremonial Uji Matcha Latte",
        desc: "Grade-A ceremonial Japanese matcha from Kyoto, whisked with oat milk and a hint of wildflower honey.",
        tags: ["Kyoto Matcha", "Antioxidant", "Oat Milk"]
      },
      az: {
        name: "Seremonial Uji Matça Latte",
        desc: "Kyoto şəhərindən 1-ci dərəcəli seremonial yaşıl çay tozu, yulaf südü və təbii çöl balı ilə.",
        tags: ["Kyoto Matça", "Antioksidant", "Yulaf Südü"]
      },
      ru: {
        name: "Церемониальный Матча Латте",
        desc: "Премиальный японский чай матча высшего грейда из Киото со взбитым овсяным молоком и каплей меда.",
        tags: ["Матча из Киото", "Антиоксиданты", "Овсяное молоко"]
      }
    }
  },

  // ALL-DAY BREAKFAST
  {
    id: "b1",
    category: "breakfast",
    price: 10.50,
    badge: "signature",
    image: "/assets/breakfast.jpg",
    translations: {
      en: {
        name: "House Syrniki with Wild Berry Coulis",
        desc: "Tender, golden pan-seared cottage cheese pancakes, dusted with confectioner's sugar, organic sour cream & raspberry coulis.",
        tags: ["House Special", "Warm", "All-Day Favorite"]
      },
      az: {
        name: "Xüsusi Sırniklər Giləmeyvə Sousu ilə",
        desc: "Qızılı qızardılmış təbii kəsmikli sırniklər, təzə xama, moruq sousu və meşə giləmeyvələri ilə.",
        tags: ["Kafenin İmzası", "İsti", "Bütün Gün"]
      },
      ru: {
        name: "Фирменные Сырники с Ягодным Кули",
        desc: "Нежнейшие золотистые творожные сырники с домашней сметаной, соусом из спелой малины и свежими ягодами.",
        tags: ["Главный Хит", "Теплые", "Завтрак Весь День"]
      }
    }
  },
  {
    id: "b2",
    category: "breakfast",
    price: 12.00,
    badge: "bestseller",
    image: "/assets/breakfast.jpg",
    translations: {
      en: {
        name: "Cast Iron Shakshuka",
        desc: "Two organic eggs simmered in slow-cooked spiced tomato, sweet red pepper, garlic, feta cheese, with toasted sourdough.",
        tags: ["Hearty", "Savory", "Sourdough Bread"]
      },
      az: {
        name: "Çuqun Tavada Şakşuka",
        desc: "Kənd yumurtaları, ətirli pomidor sousu, şirin qırmızı bibər, ağ pendir və xırçıltılı təzə çörək ilə.",
        tags: ["Doyumlu", "İsti", "Təzə Çörək"]
      },
      ru: {
        name: "Шакшука в Чугунной Сковороде",
        desc: "Два фермерских яйца в пряном соусе из спелых томатов, сладкого перца, сыра фета и свежей зелени с хрустящим тартин-хлебом.",
        tags: ["Сытная", "Пряная", "Горячий Хлеб"]
      }
    }
  },
  {
    id: "b3",
    category: "breakfast",
    price: 13.50,
    badge: "bestseller",
    image: "/assets/breakfast.jpg",
    translations: {
      en: {
        name: "Truffle Avocado Brioche",
        desc: "Toasted artisan brioche, crushed Hass avocado, soft poached egg, Danish feta, microgreens and subtle white truffle oil.",
        tags: ["Poached Egg", "Truffle Aroma", "Healthy"]
      },
      az: {
        name: "Trüfelli Avokado Brioş",
        desc: "Xırçıltılı fransız brioş çörəyi, əzilmiş Hass avokadosu, poşe yumurta, danimarka fetası və trüfel yağı.",
        tags: ["Poşe Yumurta", "Trüfel Ətri", "Faydalı"]
      },
      ru: {
        name: "Трюфельный Авокадо-Бриошь",
        desc: "Поджаренный бриошь, спелый авокадо Хасс, яйцо пашот с жидким желтком, сыр фета, микрозелень и капли белого трюфельного масла.",
        tags: ["Пашот", "Трюфель", "Свежий"]
      }
    }
  },
  {
    id: "b4",
    category: "breakfast",
    price: 14.50,
    badge: "signature",
    image: "/assets/breakfast.jpg",
    translations: {
      en: {
        name: "Traditional Baku Morning Board",
        desc: "Local village white cheese, Motil cheese, natural mountain honey with butter, black olives, village eggs, and hot tandoor bread.",
        tags: ["Traditional", "Local Heritage", "Generous"]
      },
      az: {
        name: "Ənənəvi Bakı Səhər Süfrəsi",
        desc: "Kənd ağ pendiri, motal pendiri, dağ balı, kərə yağı, zeytun, qayğanaq və isti təndir çörəyi.",
        tags: ["Milli Təam", "Təbii Məhsullar", "Zəngin"]
      },
      ru: {
        name: "Бакинский Традиционный Завтрак",
        desc: "Деревенский белый сыр, мотал, горный мед со сливочным маслом, оливки, яичница и горячий тандырный хлеб.",
        tags: ["Традиции", "Фермерское", "Щедрая Порция"]
      }
    }
  },

  // BAKERY & DESSERTS
  {
    id: "d1",
    category: "desserts",
    price: 8.50,
    badge: "bestseller",
    image: "/assets/hero.jpg",
    translations: {
      en: {
        name: "San Sebastián Burnt Cheesecake",
        desc: "Authentic Basque-style baked cheesecake with deep caramelized surface and gooey cream-cheese center.",
        tags: ["House Baked", "Creamy", "Gluten-Free Option"]
      },
      az: {
        name: "San Sebastian Çiskeyk",
        desc: "Əsl Bask reseptli, üstü qızarmış karamel qabığı və içi axıcı qaymaqlı pendir kremi ilə.",
        tags: ["Öz İstehsalımız", "Zərif", "Qlütensiz Seçim"]
      },
      ru: {
        name: "Сан-Себастьян Чизкейк",
        desc: "Баскский обожженный чизкейк с карамельной корочкой и нежнейшим тающим сливочным центром.",
        tags: ["Свежая Выпечка", "Тает во Рту", "Хит"]
      }
    }
  },
  {
    id: "d2",
    category: "desserts",
    price: 9.00,
    badge: "signature",
    image: "/assets/hero.jpg",
    translations: {
      en: {
        name: "Pistachio Tiramisu Cup",
        desc: "Italian ladyfingers soaked in our single-origin espresso, layered with mascarpone cream and roasted Bronte pistachios.",
        tags: ["Specialty Espresso", "Italian Recipe", "Nutty"]
      },
      az: {
        name: "Püstəli Tiramisu",
        desc: "Özəl espressoya batırılmış italyan savoyardi peçenyesi, maskarpone kremi və qovrulmuş püstə qırıntıları ilə.",
        tags: ["Espresso ilə", "İtalyan Resepti", "Püstəli"]
      },
      ru: {
        name: "Фисташковый Тирамису",
        desc: "Печенье савоярди, пропитанное спешелти эспрессо, крем из маскарпоне и отборная дробленая фисташка.",
        tags: ["На Эспрессо", "Итальянский Рецепт", "Фисташка"]
      }
    }
  },
  {
    id: "d3",
    category: "desserts",
    price: 5.50,
    badge: "bestseller",
    image: "/assets/hero.jpg",
    translations: {
      en: {
        name: "French Almond Croissant",
        desc: "Twice-baked buttery puff croissant filled with sweet almond frangipane cream and topped with toasted almond flakes.",
        tags: ["Flaky Pastry", "Pure Butter", "Almond"]
      },
      az: {
        name: "Badamlı Fransız Kruasanı",
        desc: "Təbii kərə yağlı xırçıltılı kruasan, içərisində badam kremi və üzərində qızardılmış badam ləçəkləri.",
        tags: ["Kərə Yağlı", "Xırçıltılı", "Badamlı"]
      },
      ru: {
        name: "Французский Миндальный Круассан",
        desc: "Дважды запеченный круассан на сливочном масле с миндальным франжипаном и лепестками миндаля.",
        tags: ["Хрустящий", "Сливочное Масло", "Франция"]
      }
    }
  },

  // TEAS & REFRESHERS
  {
    id: "t1",
    category: "tea_drinks",
    price: 7.00,
    badge: "bestseller",
    image: "/assets/coffee.jpg",
    translations: {
      en: {
        name: "Cold Brew Citrus Tonic",
        desc: "16-hour slow steeped Ethiopian cold brew poured over Mediterranean sparkling tonic, fresh grapefruit & rosemary.",
        tags: ["Refreshing", "Zero Sugar", "Sparkling"]
      },
      az: {
        name: "Cold Brew Sitrus Tonik",
        desc: "16 saat soyuq dəmlənmiş Efiopiya kofesi, qazlı tonik, təzə qreypfrut və rozmarin budağı ilə.",
        tags: ["Sərin", "Şəkərsiz", "Qazlı"]
      },
      ru: {
        name: "Колд Брю Цитрус-Тоник",
        desc: "Холодное настаивание кофе 16 часов, средиземноморский тоник, долька сочного грейпфрута и свежий розмарин.",
        tags: ["Освежающий", "Без Сахара", "Игристый"]
      }
    }
  },
  {
    id: "t2",
    category: "tea_drinks",
    price: 6.00,
    badge: "catFavorite",
    image: "/assets/coffee.jpg",
    translations: {
      en: {
        name: "Wild Berry Hibiscus Cooler",
        desc: "Infusion of Egyptian karkadeh flowers, crushed blackberries, mint leaves, and a splash of lime juice.",
        tags: ["Caffeine Free", "Fruity", "Iced"]
      },
      az: {
        name: "Giləmeyvəli Karkade Limonadı",
        desc: "Təbii karkade çiçəkləri, meşə böyürtkəni, təzə nanə və laym şirəsi ilə buzlu içki.",
        tags: ["Kofeinsiz", "Meyvəli", "Buzlu"]
      },
      ru: {
        name: "Лесной Ягодный Каркаде",
        desc: "Настой суданской розы, спелая ежевика, свежая мята и капля сока лайма со льдом.",
        tags: ["Без Кофеина", "Ягодный", "Лед"]
      }
    }
  }
];
