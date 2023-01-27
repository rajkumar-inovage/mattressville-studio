import { MdPages as icon } from 'react-icons/md';
export default {
  name: 'page',
  type: 'document',
  title: 'Page',
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
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        { type: 'hero' },
        { type: 'textWithIllustration' },
        { type: 'callToAction' },
        {
          type:'whyMVseoData'
        },
        {
          type:'whyMVmainData'
        }
      ],
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
