import { MdPages as icon } from 'react-icons/md';

export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime',
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'banners',
      title: 'Hero',
      type: 'array',
      of: [{ type: 'hero' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      media: 'poster',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0];
      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        media: selection.media,
      };
    },
  },
};
