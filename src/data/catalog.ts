import gold from '../../assets/photography/royal-gold-v1.png';
import butterfly from '../../assets/photography/royal-butterfly-v1.png';
import blue from '../../assets/photography/dominican-blue-v1.png';
import flan from '../../assets/photography/flan-v1.png';
import tresLeches from '../../assets/photography/tres-leches-v1.png';
import chocoflan from '../../assets/photography/chocoflan-heart-v1.png';
import type { ImageMetadata } from 'astro';
export type Locale = 'en' | 'es';
export type Localized = Record<Locale, string>;
export const locales: Locale[] = ['en', 'es'];
export const business = { phone: '18626680038', instagram: 'https://www.instagram.com/cakes_byyas_/' };
export function whatsapp(locale: Locale, product?: string, filling?: string) {
  const message = locale === 'es'
    ? `¡Hola, Yas! Me gustaría consultar ${product ? `sobre ${product}` : 'un pedido'}.\nFecha:\nPersonas:\nMasa y relleno:${filling ? ` ${filling}` : ''}\nIdea de diseño:`
    : `Hi Yas! I'd love to ask about ${product || 'a cake order'}.\nDate:\nGuests:\nCake flavor and filling:${filling ? ` ${filling}` : ''}\nDesign idea:`;
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}
export const creations = [
  { id: 'golden-birthday', image: gold, title: { en: 'A golden birthday', es: 'Un cumpleaños dorado' }, kind: { en: 'Custom birthday cake', es: 'Pastel de cumpleaños personalizado' }, alt: { en: 'Ivory cake with a gold crown, three pink candles and gold decorations', es: 'Pastel marfil con corona dorada, tres velas rosas y decoraciones doradas' } },
  { id: 'butterfly-birthday', image: butterfly, title: { en: 'A little bit of magic', es: 'Un poquito de magia' }, kind: { en: 'Custom birthday cake', es: 'Pastel de cumpleaños personalizado' }, alt: { en: 'Handmade ivory cake with gold butterflies, a crown and pink decorations', es: 'Pastel marfil artesanal con mariposas doradas, corona y decoraciones rosas' } },
  { id: 'blue-birthday', image: blue, title: { en: 'Make a birthday wish', es: 'Pide tu deseo' }, kind: { en: 'Custom birthday cake', es: 'Pastel de cumpleaños personalizado' }, alt: { en: 'White cake with blue piped borders and a geometric Happy Birthday topper', es: 'Pastel blanco con bordes de crema azul y topper geométrico Happy Birthday' } },
  { id: 'flan', image: flan, title: { en: 'House flan', es: 'Flan de la casa' }, kind: { en: 'A celebration classic', es: 'Un clásico para celebrar' }, alt: { en: 'Round caramel flan on a simple white plate', es: 'Flan redondo de caramelo sobre un plato blanco sencillo' } },
  { id: 'tres-leches', image: tresLeches, title: { en: 'Tres leches, dressed up', es: 'Tres leches de fiesta' }, kind: { en: 'Made for your celebration', es: 'Hecho para tu celebración' }, alt: { en: 'Rectangular tres leches cake in its foil tray with three strawberry halves', es: 'Pastel tres leches rectangular en bandeja de aluminio con tres mitades de fresa' } },
];
export type Creation = typeof creations[number];
export const catalogImages: Partial<Record<string, { image: ImageMetadata; alt: Localized }>> = {
  'dominican-cake': { image: blue, alt: creations[2].alt },
  'tres-leches': { image: tresLeches, alt: creations[4].alt },
  flan: { image: flan, alt: creations[3].alt },
  chocoflan: { image: chocoflan, alt: { en: 'Heart-shaped chocoflan with caramel piping and three strawberry halves', es: 'Chocoflan en forma de corazón con borde de caramelo y tres mitades de fresa' } },
};

type MenuItem = { id: string; name: Localized; price?: number; unit?: 'dozen'; sizes?: { name: Localized; servings: string; price: number }[]; filling?: boolean };
export const menu: { id: string; name: Localized; items: MenuItem[] }[] = [
  { id: 'cakes', name: { en: 'Cakes & classics', es: 'Pasteles y clásicos' }, items: [
    { id: 'dominican-cake', name: { en: 'Dominican cake', es: 'Bizcocho dominicano' }, filling: true },
    { id: 'tres-leches', name: { en: 'Traditional tres leches', es: 'Tres leches tradicional' }, price: 45, filling: true },
    { id: 'chocolate-tres-leches', name: { en: 'Chocolate tres leches', es: 'Tres leches de chocolate' }, price: 48, filling: true },
    { id: 'flan', name: { en: 'House flan', es: 'Flan de la casa' }, sizes: [
      { name: { en: 'Small', es: 'Pequeño' }, servings: '4–6', price: 20 },
      { name: { en: 'Medium', es: 'Mediano' }, servings: '8–12', price: 40 },
      { name: { en: 'Large', es: 'Grande' }, servings: '16–20', price: 60 },
    ] },
    { id: 'chocoflan', name: { en: 'Chocoflan / vanilla flan cake', es: 'Chocoflan / vainillaflan' }, sizes: [
      { name: { en: 'Small', es: 'Pequeño' }, servings: '4–6', price: 55 },
      { name: { en: 'Medium', es: 'Mediano' }, servings: '8–12', price: 75 },
    ] },
  ] },
  { id: 'minis', name: { en: 'Mini desserts', es: 'Mini postres' }, items: [
    { id: 'mini-tres-leches', name: { en: 'Mini tres leches', es: 'Mini tres leches' }, price: 35, unit: 'dozen' },
    { id: 'mini-chocoflan', name: { en: 'Mini chocoflan', es: 'Mini chocoflan' }, price: 40, unit: 'dozen' },
    { id: 'mini-jellies', name: { en: 'Mini jellies', es: 'Mini gelatinas' }, price: 50, unit: 'dozen' },
    { id: 'passion-fruit-mousse', name: { en: 'Passion fruit mousse', es: 'Mousse de chinola / parcha' }, price: 20, unit: 'dozen' },
    { id: 'mini-flan', name: { en: 'Mini flan', es: 'Mini flan' }, price: 20, unit: 'dozen' },
  ] },
];
export const fillings: Localized[] = [
  { en: 'Dulce de leche', es: 'Dulce de leche' }, { en: 'Strawberries & cream cheese', es: 'Fresas con cream cheese' },
  { en: 'Oreo', es: 'Oreo' }, { en: 'Pastry cream', es: 'Crema pastelera' },
  { en: 'Nutella', es: 'Nutella' }, { en: 'Pineapple', es: 'Piña' },
];
