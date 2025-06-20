export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  base_experience: string
  sprites: { [key: string]: string | undefined };
}
