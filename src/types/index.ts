export interface NavItem {
  label: string;
  href: string;
}

export interface Partner {
  name: string;
  src: string;
  height: number;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description?: string;
}

export interface KitItem {
  category: string;
  name: string;
  number: string;
}

export interface ReelItem {
  number: string;
  category: string;
  aspectRatio?: string;
}
