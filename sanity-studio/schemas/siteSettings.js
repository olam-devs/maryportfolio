const pageSection = (name, title) => ({
  name,
  title,
  type: 'object',
  fields: [
    {name: 'eyebrow', title: 'Eyebrow', type: 'string'},
    {name: 'headline', title: 'Headline', type: 'string'},
    {name: 'subheadline', title: 'Subheadline', type: 'text', rows: 3},
    {name: 'body', title: 'Body', type: 'text', rows: 6},
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    },
  ],
})

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
      initialValue: 'Hey Mary',
    },
    {
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()},
            {
              name: 'path',
              title: 'Path',
              type: 'string',
              description: 'Example: /about or /portfolio',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },

    pageSection('home', 'Home Page'),
    pageSection('about', 'About Page'),
    pageSection('travel', 'Travel Page'),
    pageSection('blog', 'Blog Page (placeholder)'),
    pageSection('portfolio', 'Portfolio Page'),
    pageSection('contact', 'Contact Page'),

    {
      name: 'brands',
      title: 'Brands (logos)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
            {name: 'logo', title: 'Logo', type: 'image', options: {hotspot: false}},
          ],
          preview: {
            select: {title: 'name', media: 'logo'},
          },
        },
      ],
    },
    {
      name: 'services',
      title: 'How We Can Work Together (services)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()},
            {name: 'description', title: 'Description', type: 'text', rows: 3},
          ],
        },
      ],
    },
    {
      name: 'mediaKit',
      title: 'Media Kit PDF',
      type: 'file',
      options: {accept: 'application/pdf'},
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (Rule) => Rule.required()},
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'company', title: 'Company', type: 'string'},
          ],
        },
      ],
    },
    {
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        {name: 'instagram', title: 'Instagram URL', type: 'url'},
        {name: 'tiktok', title: 'TikTok URL', type: 'url'},
        {name: 'youtube', title: 'YouTube URL', type: 'url'},
        {name: 'email', title: 'Public Email', type: 'string'},
      ],
    },
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
}

