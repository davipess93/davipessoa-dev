import axios from 'axios'

const githubApi = axios.create({
  baseURL: process.env.GITHUB_API,
  headers: {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    Authorization: `Bearer ${process.env.GITHUB_PERSONAL_KEY}`,
  },
})

const websiteApi = axios.create({
  baseURL: process.env.WEBSITE_API,
})

export { githubApi, websiteApi }
