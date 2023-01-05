export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Social Icons',
      name: 'socialapp',
      type: 'array',
      validation: Rule => Rule.required().max(3).error('You can add maximum 3 social media'),
      of: [
        { type: 'socialicons' }
      ]
    },
    {
      name: 'contactnumber',
      title: 'Contact Number',
      type: 'string',
    },
    {
      name: 'phoneicon',
      title: 'Phone Icone Code',
      type: 'string',
    },
    {
      name: 'contacttitle',
      title: 'Contact Us Title',
      type: 'string',
    },
    {
      name: 'contactlink',
      title: 'Contact Us URL',
      type: 'string',
    },
    {
      name: 'freeshipping',
      title: 'Free Shipping Over',
      type: 'string',
    },
    {
      title: 'Main Menu',
      name: 'mainMenu',
      type: 'array',
      of: [
        { type: 'mainmenu' }
      ]
    },
    {
      title: 'Footer',
      name: 'footer',
      type: 'topFooter',
    },
    {
      title: 'Bottom Footer',
      name: 'bottomFooter',
      type: 'bottomFooter',
    }
  ],
};
