import { PageProps, graphql, useStaticQuery } from "gatsby"
import * as React from "react"

const Profile = () => {
    const data = useStaticQuery(
        graphql`
            query {
                contentfulMyInfo {
                    id
                    fullName
                    profilePicture {
                        url
                    }
                    shortName
                    title
                    selfDescription {
                        selfDescription
                    }
                }
                allContentfulSocialMedia {
                    edges {
                        node {
                            id
                            socialMediaUrl
                            socialMediaName
                            socialMediaIcon {
                                url
                            }
                        }
                    }
                }
            }
        `
      );
    return(
        <div className={'hero-container'}>
            <div className={'hero-content'}>
                <h1 className={'hero-name'}>{data.contentfulMyInfo.shortName || data.contentfulMyInfo.fullName}</h1>
                <h2 className={'hero-title'}>{data.contentfulMyInfo.title}</h2>
                <p className={'hero-description'}>{data.contentfulMyInfo.selfDescription.selfDescription}</p>
                <div className={'social-media-container'}>
                    {data.allContentfulSocialMedia.edges.map((value: any) => (
                        <a key={value.node.id} href={value.node.socialMediaUrl} className={'social-media-link'} target="_blank">
                            <img src={value.node.socialMediaIcon.url} className={'social-media-icon'} alt={value.node.socialMediaName}/>
                            <span>{value.node.socialMediaName}</span>
                        </a>
                    ))}
                </div>
            </div>
            <div className={'hero-image'}>
                <img className={'profile-picture'} src={data.contentfulMyInfo.profilePicture.url} alt="Profile Picture" />
            </div>
        </div>
    )
}

export default Profile