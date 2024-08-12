

export const getVideos = () => {
  return fetch("http://localhost:8080/videoList")
    .then((res) => res.json())
    .catch((error) => {
      console.error('error getting video list,', error)
      
    })


}