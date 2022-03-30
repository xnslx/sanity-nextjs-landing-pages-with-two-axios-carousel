export default {
    title: 'Carousel List',
    name: 'carousels',
    type: 'object',
    fields: [
      {
        title : 'Carousels',
        name : 'carousels',
        type: 'array',
        of:[{type: 'carousel'}]
      }
    ],
    preview: {
        select: {
          items: 'carousels'
        },
        prepare({ carousels }) {
          return {
            title: 'Carousel List',
          }
        }
      }
}