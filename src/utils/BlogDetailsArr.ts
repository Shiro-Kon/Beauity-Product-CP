type Blog = {
  id: number;
  title: string;
  time: string;
  image: string;
  author: string;
};
const BlogDetalsArr: Blog[] = [
  {
    id: 1,
    title: "Nam ullamcorper cras",
    time: " on  November 3, 2022",
    image: "/images/NamUllamcorper.webp",
    author: "Muffin Group",
  },
  {
    id: 2,
    title: "Nec nostra tempor",
    time: " on  November 3, 2022",
    image: "/images/NecNostra.webp",
    author: "Muffin Group",
  },
  {
    id: 4,
    title: "Lectus taciti in donec",
    time: " on  November 3, 2022",
    image: "/images/LectusTacitiInDonec.webp",
    author: "Muffin Group",
  },
];
export const getBlogsObject = (array: Blog[]) =>
  array.reduce(
    (object, Blog) => ({
      ...object,
      [Blog.id]: Blog,
    }),
    {}
  );

export default BlogDetalsArr;
