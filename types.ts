import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: 'Design' | 'Modeling' | 'Coordination' | 'BIM Management';
  description: string;
  longDescription?: string;
  imageUrl: string;
  tags: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  icon?: React.ReactNode;
}