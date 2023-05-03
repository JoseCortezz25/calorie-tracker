export type Food = {
  id_food?: number;
  id_user?: number;

  name: string;
  caloriesperserving: number;
  totalcarbohydrate: number;
  totalfat: number;

  protein: number;
  saturatedfat: number;
  transfat: number;
  cholesterol: number;

  sodium: number;
  potassium: number;
  diataryfiber: number;
  sugar: number;
  vitamina: number;
  
  vitaminc: number;
  calcium: number;
  iron: number;
};

export type MealtimeFood = {
  id_mealtimefood?: number;
  id_food: number;
  id_mealtime: number;
};

export type Mealtime = {
  id_mealtime?: number;
  id_user: number;
  mealtime: string;
  date: date;
};

export type GeneralResponse = {
  error: boolean,
  body: Food[] | IUser[] | MealtimeFood[] | Mealtime[],
  status: number
}
