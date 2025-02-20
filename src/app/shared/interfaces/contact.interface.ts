export interface ContactRequest {
  email: string;
  requestDate: Date;
  status: 'pending' | 'contacted' | 'completed';
  source: 'homepage';
}
