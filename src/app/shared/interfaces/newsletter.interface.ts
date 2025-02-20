export interface NewsletterSubscription {
  email: string;
  subscriptionDate: Date;
  status: 'active' | 'inactive';
}
