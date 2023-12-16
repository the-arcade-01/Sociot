import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { getSearch } from "../../services/api/search"
import { Post } from "../../utils/types"
import { PostBanner } from "../Posts/PostBanner"
import { IoIosArrowBack } from "react-icons/io";

export const SearchDetails = () => {
  const [message, setMessage] = useState("")
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const search = useParams().search
  const type = useParams().type

  const fetchSearchResults = async () => {
    const response = await getSearch(search || "", type || "")
    setMessage(response.meta.message)
    setPosts(response.data.Posts || [])
    setUsers(response.data.Users || [])
    console.log(response)
  }

  useEffect(() => {
    fetchSearchResults() 
  }, [search, type])

  return (
    <div className="my-6 mx-4 px-8 flex flex-col justify-between border border-gray-200 rounded-lg ">
      <div className="w-full px-8 py-4 flex gap-10">
        <Link to="/" className="flex gap-2 items-center text-gray-600">
          <IoIosArrowBack />
          Back
        </Link>
        <h2 className="font-semimedium text-lg">{message}</h2>
      </div>
      { posts.length > 0 &&
        <div className="px-10 py-4 flex flex-col gap-4">
          {posts.map((post: Post) => (
            <PostBanner
              key={post.postId}
              userId={post.userId}
              username={post.username}
              postId={post.postId}
              title={post.title}
              content={post.content}
              views={post.views}
              createdAt={post.createdAt}
              updatedAt={post.updatedAt}
            />
          ))}
        </div>
      }
      { users.length > 0 && 
          <div/>
      }
    </div>
  )
}
