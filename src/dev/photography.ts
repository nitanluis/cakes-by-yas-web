import heart from '../../assets/source-historical/chocoflan-heart.jpeg';
import heartEdit from '../../assets/photography/chocoflan-heart-v1.png';
import crown from '../../assets/source-instagram/DaA0XJTRK7q.jpg';
import butterfly from '../../assets/source-instagram/DVY7b_UkX74.jpg';
import blue from '../../assets/source-instagram/DeFQcVLFJ9w.jpg';
import flan from '../../assets/source-instagram/DcG_qlWojg-.jpg';
import tresLeches from '../../assets/source-instagram/DcG9fgEogo7.jpg';
import trolls from '../../assets/source-instagram/DOt3Pg5ktHf.jpg';
import trollsEdit from '../../assets/photography/trolls-belen-v1.png';
import { creations } from '../data/catalog';
export const photoReviews = [
  { name: 'Cumpleaños dorado', original: crown, candidate: creations[0].image, status: 'Fondo aceptado · producto por revisar', note: 'Conserva corona y tres velas. Revisar tono de crema y dorados, contorno de corona y adornos.' },
  { name: 'Corona y mariposas', original: butterfly, candidate: creations[1].image, status: 'Candidata', note: 'Comparar espátula y brillo de decoraciones, sin perder textura artesanal.' },
  { name: 'Bizcocho con borde azul', original: blue, candidate: creations[2].image, status: 'Revisar color y proporción', note: 'El azul se ve más saturado y el topper cambia ligeramente de proporción. Debe representar el pastel real.' },
  { name: 'Flan de la casa', original: flan, candidate: creations[3].image, status: 'Candidata', note: 'Se retiró la caja exterior. Revisar calidez de color, brillo y proporción del flan.' },
  { name: 'Tres leches', original: tresLeches, candidate: creations[4].image, status: 'Candidata', note: 'Mantener bandeja de aluminio, tres mitades de fresa, texto y crema. Comparar espaciado de adornos.' },
  { name: 'Chocoflan de corazón', original: heart, candidate: heartEdit, status: 'Fuente histórica · candidata', note: 'Fuente del repositorio anterior, no un nuevo original de cámara. Revisar forma de corazón, capas, fresas y bordes; edición sin topper.' },
  { name: 'Dos pisos · Belén', original: trolls, candidate: trollsEdit, status: 'En reserva', note: 'La edición exagera la textura de crema del original. No está seleccionada para la web.' },
];
