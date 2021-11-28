import Intro from '../components/Intro/Intro'
import Metadata from '../components/Metadata/Metadata'
import SocialIcons, { socials } from '../components/Social/Social'
import RecentWorks, { recentWorks } from '../components/Recent/Recent'

const HomePage = () => (
  <div className="py-5 sm:py-10">
    <Metadata title="About" />
    <p className="text-lg font-medium mb-14 text-center">Hi, I'm Tomas!</p>
    <Intro />
    <div className="text-sm space-y-1 text-center mb-10 sm:mb-20">
      <p className="font-medium pb-2">Recent work</p>
      <RecentWorks works={recentWorks} />
    </div>
    <div className="flex justify-center items-center text-xs space-x-5 text-center">
      <SocialIcons socials={socials} />
    </div>
  </div>
)

export default HomePage
