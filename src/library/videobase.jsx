import { v4 as uuid } from "uuid";

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/videos") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            videos: [
              {
                id: uuid(),
                title: "Introduction to React",
                description:
                  "Learn the basics of React in this introductory tutorial",
                url: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
                thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
                duration: "12:35"
              },
              {
                id: uuid(),
                title: "JavaScript for Beginners",
                description:
                  "Get started with JavaScript with this beginner-friendly tutorial",
                url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
                thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
                duration: "20:17"
              },
              {
                id: uuid(),
                title: "Python Crash Course",
                description:
                  "Learn Python basics in this crash course for beginners",
                url: "https://www.youtube.com/watch?v=Z1Yd7upQsXY",
                thumbnail: "https://i.ytimg.com/vi/Z1Yd7upQsXY/hqdefault.jpg",
                duration: "15:42"
              },
              {
                id: uuid(),
                title: "Dijkstra's Algorithm",
                description: "Single Source Shortest Path Algorithm in Graph",
                url: "https://www.youtube.com/watch?v=V6H1qAeB-l4",
                thumbnail: "https://i.ytimg.com/vi/V6H1qAeB-l4/hqdefault.jpg",
                duration: "22:41"
              }
            ]
          }
        });
      } else {
        reject({
          status: 404,
          message: "Video list not found."
        });
      }
    }, 2000);
  });
};

export const url = "https://example.com/api/videos";
