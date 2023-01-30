export default {
  name: 'pocketCoil',
  title: 'Pocket Coil',
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