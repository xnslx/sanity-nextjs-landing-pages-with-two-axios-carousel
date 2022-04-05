export default {
    title: 'Video',
    name: 'video',
    type: 'object',
    fields: [
        {
            name: 'id',
            title: 'Background Video',
            type: 'string',
            description:
            'Alternatively, enter a vimeo ID to show a looping video instead'
        },
        {
            title: 'Background Video Title',
            name: 'title',
            type: 'string',
            description: 'Short title/description of the video'
        }],
        preview: {
        select: {
            title: 'title',
        },
            prepare({ title }) {
          return {
            title: title,
          }
        }
      }
}