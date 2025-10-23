import { BannerSettings } from '@/app/types/settings';

interface PageHeaderBlockProps {
  title: string;
  settings?: BannerSettings;
}

export function PageHeaderBlock({ title, settings }: PageHeaderBlockProps) {
  if (!settings || !settings.showBackground) {
    return <h1 className="text-3xl font-bold my-6 text-center">{title}</h1>;
  }

  const backgroundStyle = settings.backgroundImage
    ? { backgroundImage: `url('${settings.backgroundImage}')` }
    : {};
  
  const backgroundClass = !settings.backgroundImage ? 'bg-gray-100' : 'bg-cover bg-center';

  return (
    <header 
      className={`py-12 px-4 text-center ${backgroundClass}`} 
      style={backgroundStyle}
    >
      <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-md">
        {title}
      </h1>
    </header>
  );
}
