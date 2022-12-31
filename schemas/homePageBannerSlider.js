import { MdSlideshow as icon } from 'react-icons/md';

export default {
  name: 'homePageBannerSlider',
  type: 'document',
  title: 'Home Page Banner Slider',
  icon,
  fields: [
    {
      name: 'slidertitle',
      type: 'string',
      title: 'Slider Title',
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
    },
    {
      name: 'bannerLink',
      type: 'string',
      title: 'Banner Link',
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: { title: 'slidertitle', media: 'poster' },
  },
};
