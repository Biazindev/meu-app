import { useState, useEffect } from 'react'

import { useGetDeploymentsQuery } from '../services/vercelApi'
import Loader from '../Loader'

import { Container, SectionTitle, ProjectCard, ProjectName, ProjectDetail } from './styles'

const Portifolio = () => {
    const { data: vercelProjects, error: vercelError, isLoading } = useGetDeploymentsQuery()
    const [brokenLinks, setBrokenLinks] = useState<{ [key: string]: boolean }>({})
    const [imageSrc, setImageSrc] = useState<{ [key: string]: string }>({})

    useEffect(() => {
        if (vercelProjects) {
            vercelProjects.projects.forEach((project) => {
                project.latestDeployments.forEach((deployment, index) => {
                    const primaryAlias = deployment.alias[2]
                    const secondaryAlias = deployment.alias[1] || deployment.alias[0]
                    if (primaryAlias) {
                        setTimeout(() => {
                            setImageSrc(prev => ({
                                ...prev,
                                [`${project.id}-0`]: `https://api.screenshotmachine.com?key=0b8b62&url=https://${primaryAlias}&dimension=1024x768`
                            }))
                        },)

                        if (secondaryAlias) {
                            setTimeout(() => {
                                setImageSrc(prev => ({
                                    ...prev,
                                    [`${project.id}-1`]: `https://api.screenshotmachine.com?key=0b8b62&url=https://${secondaryAlias}&dimension=1024x768`
                                }))
                            },)
                        }
                    }
                })
            })
        }
    }, [vercelProjects])

    const handleImageError = (projectId: string, aliasIndex: number) => {
        setBrokenLinks(prev => ({ ...prev, [`${projectId}-${aliasIndex}`]: true }))
    }

    if (isLoading) {
        return <div><Loader /></div>
    }

    if (vercelError) {
        return <div>Error loading data</div>
    }

    const sortedProjects = vercelProjects?.projects.slice().sort((a, b) => {
        const aLastDeploymentDate = a.latestDeployments.length > 0 ? a.latestDeployments[0].readyAt : 0
        const bLastDeploymentDate = b.latestDeployments.length > 0 ? b.latestDeployments[0].readyAt : 0
        return bLastDeploymentDate - aLastDeploymentDate
    })

    return (
        <>
        <SectionTitle>Vercel Deployments</SectionTitle>
        <Container>
            {sortedProjects && sortedProjects.length > 0 ? (
                sortedProjects.map((project: VercelProject) => {
                    const latestDeployment = project.latestDeployments[0]

                    if (!latestDeployment) return null

                    const primaryAlias = latestDeployment.alias[2]
                    const secondaryAlias = latestDeployment.alias[1] || latestDeployment.alias[0]

                    return (
                        <ProjectCard key={project.id}>
                            <ProjectName>{project.name}</ProjectName>
                            <ProjectDetail>Framework: {project.framework}</ProjectDetail>
                            <ProjectDetail>Node Version: {project.nodeVersion}</ProjectDetail>
                            <ProjectDetail>Created At: {new Date(project.createdAt).toLocaleDateString()}</ProjectDetail>
                            <ProjectDetail>State: {latestDeployment.readyState}</ProjectDetail>
                            {primaryAlias && (
                                <ProjectDetail>
                                    URL: <a href={`https://${primaryAlias}`} target="_blank" rel="noopener noreferrer">
                                        <img 
                                            src={brokenLinks[`${project.id}-0`] 
                                                ? 'https://via.placeholder.com/250x250' 
                                                : imageSrc[`${project.id}-0`]} 
                                            alt={`Screenshot of ${primaryAlias}`} 
                                            onError={() => handleImageError(project.id, 0)}
                                            style={{ display: 'block' }}
                                        />
                                        {secondaryAlias && brokenLinks[`${project.id}-0`] && (
                                            <img 
                                                src={brokenLinks[`${project.id}-1`] 
                                                    ? 'https://via.placeholder.com/250x250' 
                                                    : imageSrc[`${project.id}-1`]} 
                                                alt={`Screenshot of ${secondaryAlias}`} 
                                                onError={() => handleImageError(project.id, 1)}
                                                style={{ display: 'block' }}
                                            />
                                        )}
                                    </a>
                                </ProjectDetail>
                            )}
                        </ProjectCard>
                    )
                })
            ) : (
                <ProjectDetail>No projects available</ProjectDetail>
            )}
        </Container>
        </> 
    )
}

export default Portifolio
