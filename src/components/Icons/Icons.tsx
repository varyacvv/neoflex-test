import type { ImgHTMLAttributes } from 'react';

interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
    size?: number;
}

const Icon = ({ src, alt, size = 22, ...rest }: IconProps & { src: string }) => (
    <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        draggable={false}
        {...rest}
    />
);

export const HeartIcon = (p: IconProps) => <Icon src="/icons/heart.svg" alt="Избранное"  {...p} />;
export const CartIcon = (p: IconProps) => <Icon src="/icons/cart.svg" alt="Корзина" size={24} {...p} />;
export const StarIcon = (p: IconProps) => <Icon src="/icons/star.svg" alt="Рейтинг" size={20} {...p} />;
export const TrashIcon = (p: IconProps) => <Icon src="/icons/trash.svg" alt="Удалить" size={20} {...p} />;
export const GlobeIcon = (p: IconProps) => <Icon src="/icons/globe.svg" alt="Язык" size={18} {...p} />;
export const MinusIcon = (p: IconProps) => <Icon src="/icons/minus.svg" alt="Уменьшить" size={14} {...p} />;
export const PlusIcon = (p: IconProps) => <Icon src="/icons/plus.svg" alt="Увеличить" size={14} {...p} />;
export const VkIcon = (p: IconProps) => <Icon src="/icons/vk.svg" alt="ВКонтакте" size={22} {...p} />;
export const TelegramIcon = (p: IconProps) => <Icon src="/icons/telegram.svg" alt="Telegram" size={22} {...p} />;
export const WhatsappIcon = (p: IconProps) => <Icon src="/icons/whatsapp.svg" alt="WhatsApp" size={22} {...p} />;