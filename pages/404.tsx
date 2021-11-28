import Link from 'next/link'
import Metadata from '../components/Metadata/Metadata'

const NotFoundPage = () => (
  <div className="text-center">
    <Metadata title="404" />
    <h1 className="mb-2">Oops!</h1>
    <p className="text-sm mb-2">This page doesn&#39;t exist</p>
    <Link href="/">
      <button className="text-white text-sm bg-black py-2 px-5 rounded-md m-3">
        Go home
      </button>
    </Link>
  </div>
)

export default NotFoundPage
