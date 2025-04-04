import { ReactNode } from 'react';

export interface PhaseCardProps {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    toptext?: string;
    image?: string;
    icon?: ReactNode;
    color: string;
    height?: string;
    link: string;
    hoveredCard: number | null;
    setHoveredCard: (id: number | null) => void;
    compact?: boolean; // New prop for compact mode

}