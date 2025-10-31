import React from 'react';
import { clsx } from 'clsx';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

interface VideoEmbedData {
  platform: 'youtube' | 'wistia' | 'vimeo' | 'dailymotion' | 'native' | null;
  videoId: string | null;
}

const getVideoEmbedData = (url: string | undefined): VideoEmbedData => {
  if (!url) {
    return { platform: null, videoId: null };
  }

  // YouTube
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  let match = url.match(youtubeRegex);
  if (match) {
    return { platform: 'youtube', videoId: match[1] };
  }

  // Wistia
  const wistiaRegex = /(?:wistia\.net\/embed\/iframe\/)([a-zA-Z0-9]+)/;
  match = url.match(wistiaRegex);
  if (match) {
    return { platform: 'wistia', videoId: match[1] };
  }

  // Vimeo
  const vimeoRegex = /(?:vimeo\.com\/(?:video\/)?)([0-9]+)/;
  match = url.match(vimeoRegex);
  if (match) {
    return { platform: 'vimeo', videoId: match[1] };
  }

  // Dailymotion
  const dailymotionRegex = /(?:dailymotion\.com\/(?:video\/|embed\/video\/))([a-zA-Z0-9]+)/;
  match = url.match(dailymotionRegex);
  if (match) {
    return { platform: 'dailymotion', videoId: match[1] };
  }

  return { platform: 'native', videoId: null };
};

export interface HeroSectionProps {
  layout?: 'overlay-center' | 'split-left-text' | 'video-overlay-bottom';
  variant?: 'centered' | 'video' | 'split' | 'default';
  title: string;
  description: string;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'; // Added headingLevel
  children?: React.ReactNode;
  imageUrl?: string;
  className?: string;
  imageDisplayMode?: 'cover' | 'contain' | 'inline';
  desktopImageUrl?: string;
  mobileImageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  textLayout?: 'overlay' | 'separate';
  textHorizontalAlign?: 'left' | 'center' | 'right';
  textVerticalAlign?: 'top' | 'center' | 'bottom';
  buttons?: Array<{
    text: string;
    link: string;
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    align?: 'left' | 'center' | 'right';
  }>;
  enableContentArea?: boolean;
  contentAreaSpacing?: string;
  contentAreaBackgroundColor?: string;
  contentAreaContent?: Array<{ type: 'markdown', text: string }>;
}

const Hero: React.FC<HeroSectionProps> = (props) => {
  const {
    layout,
    title,
    description,
    headingLevel,
    className,
    desktopImageUrl,
    mobileImageUrl,
    imageWidth,
    imageHeight,
    buttons,
    enableContentArea,
    contentAreaSpacing,
    contentAreaBackgroundColor,
    contentAreaContent,
  } = props;

  const layoutPresets = {
    'overlay-center': {
      variant: 'default',
      textLayout: 'overlay',
      textHorizontalAlign: 'center',
      textVerticalAlign: 'center',
      imageDisplayMode: 'cover',
    },
    'split-left-text': {
      variant: 'split',
      textLayout: 'separate',
      textHorizontalAlign: 'left',
      textVerticalAlign: 'center',
      imageDisplayMode: 'inline',
    },
    'video-overlay-bottom': {
      variant: 'video',
      textLayout: 'overlay',
      textHorizontalAlign: 'center',
      textVerticalAlign: 'bottom',
      imageDisplayMode: 'cover',
    },
  };

  const layoutConfig = layout ? layoutPresets[layout] || {} : {};

  const variant = props.variant ?? layoutConfig.variant ?? 'default';
  const textLayout = props.textLayout ?? layoutConfig.textLayout ?? 'overlay';
  const textHorizontalAlign = props.textHorizontalAlign ?? layoutConfig.textHorizontalAlign ?? 'center';
  const textVerticalAlign = props.textVerticalAlign ?? layoutConfig.textVerticalAlign ?? 'center';
  const imageDisplayMode = props.imageDisplayMode ?? layoutConfig.imageDisplayMode ?? 'cover';
  const horizontalAlignClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-left',
  };

  const verticalAlignClasses = {
    top: 'justify-start',
    center: 'justify-center',
    bottom: 'justify-end',
  };

  const bannerClasses = clsx(
    'w-full flex flex-col p-5 md:p-10 lg:p-16',
    {
        'min-h-[60vh]': imageDisplayMode !== 'contain',
    },
    verticalAlignClasses[textVerticalAlign],
    horizontalAlignClasses[textHorizontalAlign],
  );

  const textContainerClasses = clsx(
    'relative z-10 p-8 md:p-12 lg:p-16 max-w-3xl',
    {
      'bg-black/50 rounded-lg': textLayout === 'overlay',
    }
  );

  const renderImage = () => {
    if (!desktopImageUrl) return null;

    const isVideo = variant === 'video';

    const imageClasses = clsx({
      'absolute inset-0 w-full h-full -z-10 object-cover': imageDisplayMode === 'cover',
      'w-full h-full object-contain': imageDisplayMode === 'contain',
      'w-full h-auto rounded-lg shadow-lg': imageDisplayMode === 'inline',
    });

    if (isVideo) {
      const videoData = getVideoEmbedData(desktopImageUrl);

      switch (videoData.platform) {
        case 'youtube':
          return (
            <iframe
              className={imageClasses}
              src={`https://www.youtube.com/embed/${videoData.videoId}?autoplay=1&mute=1&loop=1&playlist=${videoData.videoId}&controls=0&showinfo=0&autohide=1&modestbranding=1&iv_load_policy=3`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            ></iframe>
          );
        case 'wistia':
          return (
            <iframe
              className={imageClasses}
              src={`https://fast.wistia.net/embed/iframe/${videoData.videoId}?autoPlay=true&muted=true&controlsVisible=false&endVideoBehavior=loop`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Wistia video player"
            ></iframe>
          );
        case 'vimeo':
          return (
            <iframe
              className={imageClasses}
              src={`https://player.vimeo.com/video/${videoData.videoId}?autoplay=1&muted=1&loop=1&background=1`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vimeo video player"
            ></iframe>
          );
        case 'dailymotion':
          return (
            <iframe
              className={imageClasses}
              src={`https://www.dailymotion.com/embed/video/${videoData.videoId}?autoplay=1&mute=1&loop=1&controls=0&ui-logo=false`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Dailymotion video player"
            ></iframe>
          );
        case 'native':
        default:
          return (
            <video
              className={imageClasses}
              src={desktopImageUrl}
              autoPlay
              loop
              muted
            />
          );
      }
    }

    if (imageWidth && imageHeight) {
      if (imageDisplayMode === 'cover') {
        return (
          <Image
            src={desktopImageUrl}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            className="absolute inset-0 w-full h-full -z-10"
            priority={headingLevel === 'h1'}
          />
        );
      }

      return (
        <Image
          src={desktopImageUrl}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className={imageClasses}
          priority={headingLevel === 'h1'}
        />
      );
    }

    return (
      <picture>
        {mobileImageUrl && <source media="(max-width: 768px)" srcSet={mobileImageUrl} />}
        <source media="(min-width: 769px)" srcSet={desktopImageUrl} />
        <img
          src={desktopImageUrl}
          alt={title}
          className={imageClasses}
        />
      </picture>
    );
  };

  const renderTextContent = () => {
    const HeadingTag = headingLevel || 'h1'; // Use headingLevel or default to h1
    return (
      <div className={textContainerClasses}>
        <HeadingTag className={clsx( // Changed h1 to HeadingTag
          'text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl',
          {
              'text-white': textLayout === 'overlay',
              'text-gray-900 dark:text-white': textLayout !== 'overlay',
          }
        )}>
          {title}
        </HeadingTag>
        <p className={clsx(
          'mt-6 text-lg leading-8 md:text-xl',
          {
              'text-gray-200': textLayout === 'overlay',
              'text-gray-600 dark:text-gray-300': textLayout !== 'overlay',
          }
        )}>
          {description}
        </p>
        {buttons && (() => {
              const buttonGroups = {
                left: buttons.filter(b => b.align === 'left'),
                center: buttons.filter(b => !b.align || b.align === 'center'),
                right: buttons.filter(b => b.align === 'right'),
              };

              if (buttonGroups.left.length === 0 && buttonGroups.right.length === 0) {
                return (
                  <div className="mt-10 flex flex-wrap gap-4 justify-center">
                    {buttonGroups.center.map((button, index) => (
                      <Button key={index} asChild variant={button.variant}>
                        <Link href={button.link}>{button.text}</Link>
                      </Button>
                    ))}
                  </div>
                );
              }

              return (
                <div className="mt-10 flex w-full flex-wrap items-start justify-between gap-y-4">
                  <div className="flex flex-wrap gap-4 justify-start">
                    {buttonGroups.left.map((button, index) => (
                      <Button key={`left-${index}`} asChild variant={button.variant}>
                        <Link href={button.link}>{button.text}</Link>
                      </Button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {buttonGroups.center.map((button, index) => (
                      <Button key={`center-${index}`} asChild variant={button.variant}>
                        <Link href={button.link}>{button.text}</Link>
                      </Button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 justify-end">
                    {buttonGroups.right.map((button, index) => (
                      <Button key={`right-${index}`} asChild variant={button.variant}>
                        <Link href={button.link}>{button.text}</Link>
                      </Button>
                    ))}
                  </div>
                </div>
              );
            })()}
      </div>
    );
  };
  const renderContentArea = () => {
    if (!enableContentArea || !contentAreaContent) return null;

    return (
      <div className={clsx('relative z-10 p-8 md:p-12 lg:p-16 max-w-3xl', contentAreaBackgroundColor, contentAreaSpacing)}>
          {contentAreaContent.map((content, index) => {
            if (content.type === 'markdown') {
              return <div key={index} className="prose dark:prose-invert max-w-none"><ReactMarkdown>{content.text}</ReactMarkdown></div>;
            }
            return null;
          })}
      </div>
    );
  };

  if (variant === 'split') {
    return (
        <section className={clsx('flex flex-col md:flex-row items-center gap-12', className)}>
            <div className="md:w-1/2">
                {renderTextContent()}
            </div>
            <div className="md:w-1/2">
                {renderImage()}
            </div>
        </section>
    )
  }

  if (imageDisplayMode === 'contain') {
    return (
        <section className={clsx('relative', className)}>
            {renderImage()}
            <div className={clsx(bannerClasses, 'absolute inset-0')}>
              {renderTextContent()}
              {renderContentArea()}
            </div>
        </section>
    )
  }



  return (
    <section className={clsx('relative', className , 'h-full')}>
      {imageDisplayMode !== 'inline' && renderImage()}
      <div className={bannerClasses}>
        {renderTextContent()}
        {renderContentArea()}
      </div>
    </section>
  );
};

export default Hero;
