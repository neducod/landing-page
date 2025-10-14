import { useState } from "react"
import React from "react";
import "../styles/design.css";


interface PhilosophyCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    colorClass: string;
    className?: string;
  }
  
  export const PhilosophyCard = ({ 
    title, 
    description, 
    icon, 
    colorClass,
    className = "" 
  }: PhilosophyCardProps) => {
    return (
      <div 
        className={`${colorClass} ${className} rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
      >
        <h3 className="text-xl font-semibold mb-3 text-foreground">
          {title}
        </h3>
        <p className="text-foreground/80 leading-relaxed mb-6">
          {description}
        </p>
        <div className="flex items-center justify-center w-16 h-16 bg-white/50 rounded-2xl backdrop-blur-sm">
          {icon}
        </div>
      </div>
    );
  };