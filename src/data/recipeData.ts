import type { Recipe } from '@/common/recipe.ts'
import { Mains, Meats, Type } from '@/common/ingredients.ts'

export const recipes = [
  {
    id: 1,
    name: { en: 'Lavash rolls', et: 'Lavaširullid' },
    ingredients: {
      meats: [Meats.HAM, Meats.SEAFOOD],
      mains: [Mains.BREAD],
      type: [Type.SNACK],
    },
    time: 10,
    price: 7,
    image: 'lavash_rolls.jpg',
  },
  {
    id: 2,
    name: { en: 'Ham rolls', et: 'singirullid' },
    ingredients: {
      meats: [Meats.HAM],
      mains: [Mains.OTHER],
      type: [Type.SNACK],
    },
    time: 10,
    price: 5,
    image: 'ham_rolls.jpg',
  },
  {
    id: 3,
    name: { en: 'Mojo verde & bread', et: 'Roheline mojo saiaga' },
    ingredients: {
      meats: [Meats.NO_MEAT],
      mains: [Mains.BREAD],
      type: [Type.SNACK],
    },
    time: 15,
    price: 8,
    image: 'mojo_bread.png',
  },
  {
    id: 4,
    name: { en: 'Grilled padron peppers', et: 'Grillitud padrone piprad' },
    ingredients: {
      meats: [Meats.NO_MEAT],
      mains: [Mains.VEGETABLES],
      type: [Type.SNACK],
    },
    time: 5,
    price: 3,
    image: 'padron_peppers.jpg',
  },
  {
    id: 5,
    name: { en: 'Stuffed zucchini boats', et: 'Suvikõrvitsa laevukesed' },
    ingredients: {
      meats: [Meats.MINCED_MEAT],
      mains: [Mains.VEGETABLES],
      type: [Type.SNACK, Type.OTHER],
    },
    time: 45,
    price: 15,
    image: 'zucchini_boats.jpg',
  },
  {
    id: 6,
    name: { en: 'Pasta Bolognese', et: 'Pasta Bolognese' },
    ingredients: {
      meats: [Meats.MINCED_MEAT],
      mains: [Mains.PASTA],
      type: [Type.OTHER],
    },
    time: 60,
    price: 15,
    image: 'bolognese.jpg',
  },
  {
    id: 7,
    name: { en: 'Pasta Carbonara', et: 'Pasta Carbonara' },
    ingredients: {
      meats: [Meats.BACON],
      mains: [Mains.PASTA],
      type: [Type.OTHER],
    },
    time: 45,
    price: 15,
    image: 'carbonara.jpg',
  },
] as Recipe[]
