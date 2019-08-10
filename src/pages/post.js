import React from 'react'
// import styled from 'styled-components'
// import arrowLeft from '../icons/arrow-left.svg'

import Layout from '../components/layout';
import SEO from '../components/seo';

// const Title = styled.h3`
//     font-size: 32px;
//     font-weight: 600;
//     margin: 20px 0px;
// `

// const Text = styled.p`
//     font-size: 14px;
//     line-spacing: 25;
// `

// const Container = styled.div`
//     margin: auto;
//     margin-top: 150px;
//     max-width: 450px;
// `

const Post = () => (
    <Layout>
        <SEO title="Post" />
        {/* <Container>
         <img src={arrowLeft}/>
            <Title>Blog Post</Title>
            <Text>
                Some text
            </Text>
        </Container> */}
    </Layout>
)

export default Post;