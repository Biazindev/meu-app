import React, { useState, useEffect } from 'react'
import github from '../../assets/github.svg'

import { Container, Heading, RepoList, RepoItem, RepoTitle, RepoDescription, RepoLink } from './styles'
import WhatsAppLink from '../Whats';
import Loader from '../Loader';
import { ButtonLink } from '../Button/styles';

const Repositories: React.FC = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            let allRepos: Repo[] = []
            let page = 1
            let hasMore = true

            while (hasMore) {
                try {
                    const response = await fetch(`https://api.github.com/users/Biazindev/repos?per_page=100&page=${page}`)
                    if (!response.ok) {
                        throw new Error('Network response was not ok')
                    }
                    const data: Repo[] = await response.json()

                    if (data.length === 0) {
                        hasMore = false;
                    } else {
                        allRepos = allRepos.concat(data)
                        page++
                    }
                } catch (error) {
                    setError((error as Error).message)
                    hasMore = false
                }
            }

            allRepos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
            
            setRepos(allRepos)
            setLoading(false)
        }

        fetchRepos()
    }, [])

    if (loading) return <p>{<Loader />}</p>
    if (error) return <p>{error}</p>

    if (repos.length === 0) return <p>No repositories found</p>

    const getDescricao = (descricao: string | null) => {
        if (!descricao) {
            return 'No description available' 
        }
        if (descricao.length > 20) {
            return descricao.slice(0, 17) + '...'
        }
        return descricao
    }

    return (
        <Container>
            <div>
                <img src={github} />
                <Heading>Meu repositório</Heading>
            </div>
            <RepoList>
                {repos.map((repo) => (
                    <RepoItem key={repo.id}>
                        <RepoTitle>{getDescricao(repo.name)}</RepoTitle>
                        <RepoDescription>{getDescricao (repo.description) || 'No description available'}</RepoDescription>
                        <p><strong>Language:</strong> {repo.language || 'Not specified'}</p>
                        <p><strong>Size:</strong> {repo.size} KB</p>
                        <p><strong>Stars:</strong> {repo.stargazers_count}</p>
                        <p><strong>Forks:</strong> {repo.forks_count}</p>
                        <p><strong>Watchers:</strong> {repo.watchers_count}</p>
                        <p><strong>Open Issues:</strong> {repo.open_issues_count}</p>
                        <p><strong>Default Branch:</strong> {getDescricao(repo.default_branch)}</p>
                        <ButtonLink to={repo.html_url} target="_blank" rel="noopener noreferrer">
                            Saiba mais
                        </ButtonLink>
                    </RepoItem>
                ))}
            </RepoList>
            <WhatsAppLink />
        </Container>
    )
}

export default Repositories
