export default {
    title: 'Carousel',
    name: 'carousel',
    type: 'object',
    fields: [
        {
            name: 'menu',
            title: 'Menu',
            type: 'string',
        },
        {
            title: 'Carousels',
            name: 'carousels',
            type: 'array',
            of: [{ type: 'image' }, {type: 'video'}]
        }],
        preview: {
        select: {
          menu: 'menu'
        },
        prepare({ menu }) {
          return {
            title: menu,
          }
        }
      }
}