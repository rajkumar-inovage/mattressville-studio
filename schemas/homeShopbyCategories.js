import { MdViewModule as icon } from 'react-icons/md';

export default {
  name: 'homeShopbyCategories',
  title: 'Home Page Shop By Categories',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'poster',
      title: 'Feature Image',
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
