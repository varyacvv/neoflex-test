export const formatPrice = (n: number): string =>
  n.toLocaleString('ru-RU').replace(/\u00A0/g, ' ') + ' ₽';

// Форматируем: 1000 → "1 000 ₽"