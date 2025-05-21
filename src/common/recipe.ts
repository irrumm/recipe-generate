import {Mains, Meats, Type} from "@/common/ingredients.ts";

export class Recipe {
  /** Unique identifier of the recipe */
  public id: number;

  /** Name of the recipe */
  public name: string;

  /** List of main ingredients used in the recipe */
  public ingredients: {
    meats: [typeof Meats];
    mains: [typeof Mains];
    type: [typeof Type];
  };

  /** Approximate time taken to prepare the recipe in minutes */
  public time: number;

  /** Approximate price for the recipe in euros */
  public price: number;

  /** List of URLs for online recipes */
  public links?: string[];

  /** Image for the recipe in base64 */
  public image?: string;
}
