import { useState, useEffect } from "react";
import Book from "../components/Book";
import AddForm from "../components/AddForm";
import UpdateForm from "../components/UpdateForm";
import axios from "axios";


const Home = () => {
    const [books, setBooks] = useState([]);

    const handleForm_1Toggle = () => {
        const form_1 = document.getElementById("form-1");
        form_1.classList.toggle("active");
    }

   

    useEffect(() => {
        const fetchBooks = async () => {
            const result = await axios.get("/book");
            console.log(result.data);
            setBooks(result.data);
        };
        fetchBooks();
    }, []);

    return (
        <>
            <AddForm />
            <UpdateForm />
            <div className="container" >
                <div className="row" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                    <div className="col-6 text-center" >
                        <h2>Book Management System</h2>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={handleForm_1Toggle} > Add Book </button>
                        {/* <button className="btn btn-primary" onClick={handleForm_2Toggle} > Update Book </button> */}
                    </div>
                </div>
                <div className="row">
                    {books.map((b) =>
                    (<Book key={b._id} book={b} />
                    ))}

                </div>
            </div>
        </>
    );
}

export default Home;
