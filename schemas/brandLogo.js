export default {
  name: 'brandLogo',
  type: 'object',
  title: 'Brands',
  fields: [
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
    select: {
      media: 'poster',
    },
    prepare(selection) {
      return {
        media: selection.media,
      };
    },
  },
};
