import React from 'react'
import SEO from '../components/seo'

const HomePage = () => (
  <>
    <SEO
      title="About"
      keywords={['Tomas Eglinskas', 'Software Engineer', 'Lithuania', 'Blog']}
    />
    <div>
      <div className="py-5 sm:py-10">
        <p className="text-lg font-medium mb-14 text-center">Hi, I'm Tomas!</p>
        <div className="text-sm space-y-1 mb-8">
          <p>
            I'm currently working at{' '}
            <a href="https://www.wix.com" target="_blank" className="underline">
              Wix
            </a>{' '}
            and will join{' '}
            <a href="https://www.uber.com" target="_blank" className="underline">
              Uber
            </a>{' '}
            shortly.
          </p>
        </div>
        <div className="text-sm space-y-1 mb-5">
          <p>
            I'm a software engineer that has worked on service and user facing
            microservices, client directed applications and storage
            infrastructure. In my professional career I am always leaning
            towards complex problems and big scalability requirements.
          </p>
        </div>
        <div className="text-sm space-y-1 mb-10 sm:mb-20">
          <p>
            During my personal journeys I enjoy pursuing projects of interest
            and volunteering for the{' '}
            <a href="https://www.weforum.org/" target="_blank" className="underline">
              World Economic Forum
            </a>
            .
          </p>
        </div>
        <div className="text-sm space-y-1 text-center mb-10 sm:mb-20">
          <p className="font-medium pb-2">Recent work</p>
          <p>
            <span className="font-medium">@Uber</span>,{' '}
            <span className="text-xs italic">2021</span>
          </p>
          <p>
            <span className="font-medium">@Wix</span>,{' '}
            <span className="text-xs italic">2019-2021</span>
          </p>
        </div>

        <div className="flex justify-center items-center text-xs space-x-5 text-center">
          <a
            href="mailto:tomas.eglinskas@gmail.com"
            className="hover:underline"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/tomas-eglinskas"
            className="hover:underline"
          >
            Linkedin
          </a>
          <a href="https://github.com/adtm" className="hover:underline">
            Github
          </a>
          <a
            href="https://twitter.com/tomas_eglinskas"
            className="hover:underline"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  </>
)

export default HomePage
