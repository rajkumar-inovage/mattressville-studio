export default {
  name: 'CTA',
  type: 'object',
  title: 'Call to Action',
  fields: [
    {
      name: 'itemlabel1',
      title: 'Item Label 1',
      type:'string'
    },
    {
      name: 'itemlabel2',
      title: 'Item Label 2',
      type:'string'
    },
    {
      name: 'itemlink',
      title: 'Item Link',
      type:'string'
    },
    {
      name: 'itemimage',
      title: 'Item Image',
      type: 'image',
      options: {
        hotspot: true 
      }
    }
  ]
};
