import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export interface ContactFormState {
  name: string;
  phone: string;
  details: string;
}