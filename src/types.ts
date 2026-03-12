export interface Pet {
  id: string;
  name: string;
  species: 'dog' | 'cat' | 'bird' | 'other';
  breed: string;
  age: number;
  weight: number;
  image?: string;
}

export interface Consultation {
  id: string;
  petId: string;
  date: string;
  vetName: string;
  notes: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface SymptomCheckResult {
  severity: 'low' | 'medium' | 'high' | 'emergency';
  advice: string;
  possibleCauses: string[];
  recommendedActions: string[];
}
