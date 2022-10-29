export type SidebarItemType = {
  icon: React.ReactNode;
  title: string;
};

export enum Categories {
  FoodNDining = "FoodNDining",
  Utility = "Utility",
  Shopping = "Shopping",
  Travel = "Travel",
  Education = "Education",
  PersonalCare = "Personal Care",
}

export type Bill = {
  id: number;
  category: Categories | "All Categories";
  description: string;
  amount: number;
  date: number;
};
