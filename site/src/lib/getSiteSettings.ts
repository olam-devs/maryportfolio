import {sanity} from './sanity'

export async function getSiteSettings() {
  return sanity.fetch(`*[_type=="siteSettings"][0]{
    siteTitle,
    tagline,
    logoText,
    navigation,
    home,
    about,
    travel,
    blog,
    portfolio,
    contact,
    brands[]{name,url,logo},
    services[]{title,description},
    mediaKit{asset->{url}},
    testimonials[]{quote,name,company},
    social
  }`)
}

