import type { Meta, StoryObj } from '@storybook/react';
import Hero from '../components/sections/Hero/Hero'; // Adjust path as needed

const meta = {
  title: 'Sections/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen', // Hero components usually take full width
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['overlay-center', 'split-left-text', 'video-overlay-bottom'],
    },
    variant: {
      control: 'select',
      options: ['centered', 'video', 'split', 'default'],
    },
    headingLevel: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'],
    },
    imageDisplayMode: {
      control: 'select',
      options: ['cover', 'contain', 'inline'],
    },
    textLayout: {
      control: 'select',
      options: ['overlay', 'separate'],
    },
    textHorizontalAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    textVerticalAlign: {
      control: 'select',
      options: ['top', 'center', 'bottom'],
    },
  },
  args: {
    title: 'Hero Title',
    description: 'This is a description for the Hero component.',
    desktopImageUrl: 'https://via.placeholder.com/1920x1080',
    mobileImageUrl: 'https://via.placeholder.com/768x1024',
    imageWidth: 1920,
    imageHeight: 1080,
    buttons: [
      { text: 'Learn More', link: '#', variant: 'default' },
      { text: 'Contact Us', link: '#', variant: 'outline' },
    ],
    enableContentArea: false,
    contentAreaContent: [],
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OverlayCenter: Story = {
  args: {
    layout: 'overlay-center',
  },
};

export const SplitLeftText: Story = {
  args: {
    layout: 'split-left-text',
  },
};

export const VideoOverlayBottom: Story = {
  args: {
    layout: 'video-overlay-bottom',
    desktopImageUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Example YouTube URL
  },
};

export const OverrideLayout: Story = {
  args: {
    layout: 'overlay-center',
    textHorizontalAlign: 'left',
  },
};