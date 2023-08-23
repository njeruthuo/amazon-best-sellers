import React from "react";
import { books } from "../books";
import { Book } from "../Book";

const BookList = () => {
    const getBook = (id) => {
        const book = books.find((book) => book.id === id);
        alert(`${book.title} clicked!`);
    };
    return (
        <div className="booklist">
            {/* <EventExamples /> */}
            {books.map((book, index) => {
                return <Book {...book} key={book.id} getbook={getBook} number={index} />;
            })}
        </div>
    );
};

const EventExamples = () => {
    const handleFormInput = () => {
        alert("Form edited..");
    };
    const handleButtonClick = () => {
        alert("Button clicked...");
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("form submitted");
    };
    return (
        <section>
            <h2>Typical form</h2>
            <form onSubmit={handleFormSubmit} action="">
                <input
                    type="text"
                    onChange={handleFormInput}
                    name=""
                    id=""
                    style={{ margin: "1rem 0" }}
                />
                <button type="submit" onClick={handleButtonClick}>
                    click me
                </button>
            </form>
        </section>
    );
};

export default BookList;
