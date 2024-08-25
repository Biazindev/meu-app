import React, { useState } from 'react'

import github from '../../assets/github.svg'
import { useGetReposQuery } from '../services/api'
import WhatsAppLink from '../Whats'
import Loader from '../Loader'

import { Container, Heading, RepoList, RepoItem, RepoTitle, RepoDescription } from './styles'
import { ButtonLink } from '../Button/styles'

const Repositories: React.FC = () => {
    const [page] = useState(1)
    const { data: repos = [], error, isLoading, isFetching } = useGetReposQuery(page)

    const getDescricao = (descricao: string | null) => {
        if (!descricao) {
            return 'No description available'
        }
        if (descricao.length > 20) {
            return descricao.slice(0, 17) + '...'
        }
        return descricao
    }

    if (isLoading || isFetching) return <p><Loader /></p>
    if (error) return <p>{(error as any).message}</p>
    if (repos.length === 0) return <p>No repositories found</p>

    return (
        <Container>
            <div>
                <img src={github} alt="GitHub" />
                <Heading>Meu repositório</Heading>
            </div>
            <RepoList>
                {repos.map((repo) => (
                    <RepoItem key={repo.id}>
                        <RepoTitle>{getDescricao(repo.name)}</RepoTitle>
                        <RepoDescription>{getDescricao(repo.description) || 'No description available'}</RepoDescription>
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