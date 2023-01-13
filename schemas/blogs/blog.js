import { MdChromeReaderMode as icon } from 'react-icons/md';
export default {
  name: 'blog',
  type: 'document',
  title: 'Blogs',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Blog Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      name: 'metatitle',
      title: 'Meta Title',
      type: 'string',
    },
    {
      title: 'Meta Description', 
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      title: 'Published At',
      name: 'publishat',
      type: 'datetime'
    },
    {
      title: 'featured Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    },

  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title,
      };
    },
  },
};
