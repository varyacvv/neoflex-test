export type Lang = "ru" | "en";

export interface TranslationSchema {
  header: {
    favorites: string;
    cart: string;
  };
  home: {
    headphones: string;
    wirelessHeadphones: string;
  };
  product: {
    buy: string;
    details: string;
  };
  cart: {
    title: string;
    empty: string;
    total: string;
    checkout: string;
    remove: string;
    decrease: string;
    increase: string;
  };
  footer: {
    favorites: string;
    cart: string;
    contacts: string;
    terms: string;
  };
  modal: {
    close: string;
    descriptionWired: string;
    descriptionWireless: string;
  };
  lang: {
    ru: string;
    en: string;
  };
}

export const translations: Record<Lang, TranslationSchema> = {
  ru: {
    header: {
      favorites: "Избранное",
      cart: "Корзина",
    },
    home: {
      headphones: "Наушники",
      wirelessHeadphones: "Беспроводные наушники",
    },
    product: {
      buy: "Купить",
      details: "Подробнее о",
    },
    cart: {
      title: "Корзина",
      empty: "В корзине пока нет товаров",
      total: "ИТОГО",
      checkout: "Перейти к оформлению",
      remove: "Удалить товар",
      decrease: "Уменьшить количество",
      increase: "Увеличить количество",
    },
    footer: {
      favorites: "Избранное",
      cart: "Корзина",
      contacts: "Контакты",
      terms: "Условия сервиса",
    },
    modal: {
      close: "Закрыть",
      descriptionWired:
        "Проводные наушники. Отличный выбор для повседневного использования.",
      descriptionWireless:
        "Беспроводные наушники с длительным временем работы.",
    },
    lang: {
      ru: "Рус",
      en: "Eng",
    },
  },
  en: {
    header: {
      favorites: "Favorites",
      cart: "Cart",
    },
    home: {
      headphones: "Headphones",
      wirelessHeadphones: "Wireless headphones",
    },
    product: {
      buy: "Buy",
      details: "Details about",
    },
    cart: {
      title: "Cart",
      empty: "Your cart is empty",
      total: "TOTAL",
      checkout: "Proceed to checkout",
      remove: "Remove item",
      decrease: "Decrease quantity",
      increase: "Increase quantity",
    },
    footer: {
      favorites: "Favorites",
      cart: "Cart",
      contacts: "Contacts",
      terms: "Terms of service",
    },
    modal: {
      close: "Close",
      descriptionWired: "Wired earphones. A great choice for everyday use.",
      descriptionWireless: "Wireless earphones with long battery life.",
    },
    lang: {
      ru: "Рус",
      en: "Eng",
    },
  },
};

// TranslationSchema типизирует все ключи. При опечатке TypeScript сразу покажет ошибку.
