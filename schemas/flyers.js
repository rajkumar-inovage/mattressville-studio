import { MdCardTravel as icon } from 'react-icons/md';
export default {
  name: 'flyers',
  type: 'document',
  title: 'Flyers',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Flyer Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockContent',
    },
    {
      title: 'Flyer Image',
      name: 'flyerimage',
      type: 'image',
      options: {
        hotspot: true 
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to:[{type:'tags'}]
        }
      ]
    },
  ],
  preview: {
    select: { title: 'title', media: 'flyerimage' },
  },
};
