export default {
  name: 'ctaSection',
  title: 'Call To Action',
  type: 'document',
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: 'cta',
      title: 'CTA Content',
    type: 'array',
    validation: Rule => Rule.required().max(2).error('You can add maximum 2 items'),
      of: [
        {type:'CTA'}
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: "CTA Content",
      };
    },
  },
}