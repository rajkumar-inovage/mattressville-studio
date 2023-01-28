export default {
  name: 'whyMVseoData',
  title: 'Why MV SEO Data',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'SEO Title',
      type:'string'
    },
    {
      name: 'description',
      title: 'SEO Description',
      type:'blockContent'
    },
    {
      name: 'ogPath',
      title: 'OG Path',
      type:'string'
    }
  ],
  preview: {
    prepare() {
      return {
        title: "SEO Data",
      };
    },
  },
}