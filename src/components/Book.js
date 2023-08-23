export const Book = ({ author, img, title, getbook, id }) => {
    // const getSingleBook = () => {
    //     getbook(id);
    // };
    return (
        <div className="book">
            <img style={{ height: "70%" }} src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            {/* <button onClick={getSingleBook}>click me</button> */}
            {/* <button onClick={() => getbook(id)}>click me</button> */}
        </div>
    );
};

