declare interface Repo {
    id: number
    name: string
    description: string | null
    html_url: string
    created_at: string
    updated_at: string
    pushed_at: string
    language: string | null
    size: number
    stargazers_count: number
    forks_count: number
    watchers_count: number
    default_branch: string
    open_issues_count: number
    fork: boolean
    owner: {
        login: string
        id: number
        avatar_url: string
        url: string
    }
}

