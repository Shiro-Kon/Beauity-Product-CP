type Blog = {
  id: number;
  title: string;
  time: string;
  image: string;
  author: string;
};
const BlogArr: Blog[] = [
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
  {
    id: 5,
    title: "Nisi semper phasellus",
    time: " on  November 3, 2022",
    image: "/images/NisiSemperPhasellus.webp",
    author: "Muffin Group",
  },
  {
    id: 6,
    title: "Faucibus hac tempus etiam",
    time: " on  November 3, 2022",
    image: "/images/FaucibusHacTempusEtiam.webp",
    author: "Muffin Group",
  },
  {
    id: 7,
    title: "Dolor ridiculus placerat",
    time: " on  November 3, 2022",
    image: "/images/DolorRidiculusPlacerat.webp",
    author: "Muffin Group",
  },
  {
    id: 8,
    title: "Sagit condim dictum",
    time: " on  November 3, 2022",
    image: "/images/SagitCondimDictum.webp",
    author: "Muffin Group",
  },
  {
    id: 9,
    title: "Egestas dictum feugiat",
    time: " on  November 3, 2022",
    image: "/images/EgestasDictumFeugiat.webp",
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

export default BlogArr;
