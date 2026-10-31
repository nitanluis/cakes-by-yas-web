import type { ImageMetadata } from 'astro';
import { creations, menu, catalogImages, type Localized } from './catalog';

export type ProductDetail = {
  id: string; name: Localized; kind: Localized; image?: ImageMetadata; alt?: Localized;
  filling: boolean; price?: number; unit?: 'dozen';
  sizes?: { name: Localized; servings: string; price: number }[];
};
export const productDetails: ProductDetail[] = [
  ...creations.map(cake => {
    const item = menu.flatMap(group => group.items).find(item => item.id === cake.id);
    return { id: `creation-${cake.id}`, name: cake.title, kind: cake.kind, image: cake.image, alt: cake.alt,
      filling: cake.id !== 'flan', price: item?.price, sizes: item?.sizes };
  }),
  ...menu.flatMap(group => group.items.map(item => ({
    id: `menu-${item.id}`, name: item.name, kind: group.name, image: catalogImages[item.id]?.image,
    alt: catalogImages[item.id]?.alt, filling: !!item.filling, price: item.price, unit: item.unit, sizes: item.sizes,
  }))),
];
