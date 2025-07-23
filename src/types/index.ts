export interface SocialMediaPost {
  platform: 'instagram' | 'facebook' | 'both';
  caption: string;
  hashtags: string[];
  designId?: string;
  imageUrl?: string;
  callToAction?: string;
  postTime?: Date;
}

export interface Campaign {
  id: string;
  name: string;
  description: string;
  businessType: string;
  posts: SocialMediaPost[];
  startDate: Date;
  endDate: Date;
  frequency: 'daily' | 'weekly' | 'bi-weekly' | 'monthly';
}

export interface BusinessInfo {
  name: string;
  type: string;
  description: string;
  location?: string;
  phone?: string;
  email?: string;
  website?: string;
  instagramHandle?: string;
  facebookPage?: string;
}

export interface CanvaDesignRequest {
  templateId?: string;
  title: string;
  width?: number;
  height?: number;
  elements?: CanvaElement[];
}

export interface CanvaElement {
  type: 'text' | 'image';
  content: string;
  position?: {
    x: number;
    y: number;
  };
  style?: {
    fontSize?: number;
    fontFamily?: string;
    color?: string;
  };
}

export interface CanvaAuthConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  accessToken?: string;
}