import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value) 
  } 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let type = "post", searchValue = ""

    const userInput = search.split(":")
    if (userInput.length > 1) {
      type = getSearchType(userInput[0])
      searchValue = userInput.slice(1).join(":").trim()
    } else {
      searchValue = userInput[0].trim()
    }

    navigate(`/search/${type}/${searchValue}`)
    setSearch("")
  }

  return (
    <form onSubmit = {handleSubmit} className="flex gap-2 items-center">
      <input
        className="w-[30rem] py-2 px-4 outline-none border-2 border-gray-200 rounded-lg text-gray-600 "
        placeholder="Type eg, post: golang, user: test"
        value = {search}
        onChange = {handleOnChange}
        required
      />
    </form>
  );
};

export default SearchBar;

function getSearchType(input: string) {
  let type = "post" 
  switch (input) {
    case "user":
      type = "user" 
      break;
    default:
      break;
  }
  return type
}
