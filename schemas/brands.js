import { MdBrandingWatermark as icon } from 'react-icons/md';
export default {
  name: 'brand',
  title: 'Home Page Brands',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Brands',
    },
    {
      name: 'poster',
      title: 'Brand Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'url',
      type: 'string',
      title: 'URL',
    },
  ],
  preview: {
    select: { title: 'title', media: 'poster' },
  },
};
