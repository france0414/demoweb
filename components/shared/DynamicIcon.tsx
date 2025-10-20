import React from 'react';
import Image from 'next/image';
import * as LucideIcons from 'lucide-react'; // 導入所有 Lucide Icons

interface DynamicIconProps {
  iconName?: string; // Lucide Icon 的名稱 (例如: "Home", "Settings")
  imageUrl?: string; // 圖片的 URL
  className?: string; // 額外的 CSS 類別
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName, imageUrl, className }) => {
  const defaultClasses = "w-8 h-8 text-indigo-600";
  const combinedClasses = `${defaultClasses} ${className || ''}`;

  if (imageUrl) {
    return (
      <div className={`relative ${combinedClasses}`}>
        <Image src={imageUrl} alt="icon" layout="fill" objectFit="contain" />
      </div>
    );
  }

  if (iconName) {
    // 動態查找 Lucide Icon 元件
    const LucideIconComponent = LucideIcons[iconName as keyof typeof LucideIcons];

    if (LucideIconComponent) {
      return <LucideIconComponent className={combinedClasses} />;
    } else {
      console.warn(`Lucide Icon "${iconName}" not found.`);
      return null; // 如果 Lucide Icon 不存在，返回 null
    }
  }

  // 如果沒有提供 iconName 也沒有 imageUrl，則返回 null
  return null;
};

export default DynamicIcon;