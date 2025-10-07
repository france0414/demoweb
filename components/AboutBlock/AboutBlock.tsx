import React from 'react';
import Image from 'next/image';

// 定義 AboutBlock 接收的資料結構
interface AboutData {
  title: string;
  description: string;
  imageUrl: string;
}

// 定義 AboutBlock 的 props
interface AboutBlockProps {
  variant: 'image-left' | 'image-right';
  data: AboutData;
}

const AboutBlock: React.FC<AboutBlockProps> = ({ variant, data }) => {
  const { title, description, imageUrl } = data;

  // 根據 variant 決定 flex 容器的 class
  const containerClasses = `flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-8 md:p-12 rounded-lg bg-white shadow-lg max-w-6xl mx-auto my-12`;
  const imageOrderClass = variant === 'image-left' ? 'md:order-1' : 'md:order-2';
  const textOrderClass = variant === 'image-left' ? 'md:order-2' : 'md:order-1';

  return (
    <section className={containerClasses}>
      {/* 圖片區塊 */}
      <div className={`w-full md:w-1/2 ${imageOrderClass}`}>
        <div className="relative h-80 w-full rounded-md overflow-hidden shadow-2xl">
            <Image 
                src={imageUrl}
                alt={title}
                layout="fill"
                objectFit="cover"
            />
        </div>
      </div>

      {/* 文字內容區塊 */}
      <div className={`w-full md:w-1/2 ${textOrderClass}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default AboutBlock;