import React from "react";
import Title from "./Title";
import Author from "./Author";
import Image from "./Image";


const Book = () => {
    return (
        <div className="book">
            <Image />
            <Title />
            <Author />
        </div>
    );
};

export default Book;
