export default {
  name: 'innerspring',
  title: 'Inner Spring',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type:'string'
    },
    {
      name: 'desc',
      title: 'Description',
      type:'blockContent'
    },
    {
      name: 'pros',
      title: 'Pros',
      type:'pros'
    },
    {
      name: 'cons',
      title: 'Cons',
      type:'cons'
    }
  ]
}