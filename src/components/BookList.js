import React from "react";
// import Book from "./Book";
const books = [
    {
        author: "Lucie Hemmen.",
        img: "https://m.media-amazon.com/images/I/81ztZ7gW2ML._AC_UL320_.jpg",
        title: "The Teen Girl's Anxiety Survival Guide.",
    },
    {
        author: "Colleen Hoover.",
        img: "https://m.media-amazon.com/images/I/81s0B6NYXML._AC_UL320_.jpg",
        title: "It ends with us.",
    },
    {
        author: "Max Lucado.",
        img: "https://m.media-amazon.com/images/I/4148hBPzTyL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        title: "God Will Use This for Good: Surviving the Mess of Life",
    },
];

const BookList = () => {
    return (
        <div className="booklist">
            {books.map((book) => {
                return <Book {...book} />;
            })}
        </div>
    );
};

const Book = ({author, img, title}) => {
    // const { img, title, author } = props.book;
    return (
        <div className="book">
            <img style={{ height: "70%" }} src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </div>
    );
};
export default BookList;
