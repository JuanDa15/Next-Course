export interface PokeapiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SimplePokemon[];
}

export interface SimplePokemon {
  name: string;
  url?: string;
  id?: string;
}