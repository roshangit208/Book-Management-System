import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const Book = ({book}) => {
  const handleForm_2Toggle = () => {
    const updateform  = document.getElementById("updateform");
    updateform.title.value = book.title;
    updateform.author.value = book.author;
   updateform.year.value = book.year;
   updateform.bookid.value = book._id;
    const form_2 = document.getElementById("form-2");
    form_2.classList.toggle("active"); 
  
}

const handleDelete =  async () => {
    await axios.delete(`/book/${book._id}`);
    window.location.reload();
}
    return (
        <>
        <div className="col-lg-3 col-5 mb-4">
          <div className="wrapper d-flex flex-column align-items-center justify-content-evenly shadow-lg rounded p-6" style={{height : "200px", width : "200px"}}>
            <div className="w-75 d-flex justify-content-end">
            <div className="d-flex justify-content-between w-25" >
              <FiEdit htmlFor="book" onClick={handleForm_2Toggle}/>
            <MdDelete  onClick={handleDelete} /></div>
            </div>  
             <span>{book.title}</span>
             <span>By</span>
             <span>{book.author}</span>
             <span style={{fontSize:"12px"}}>{book.year}</span>
          </div>
        </div>   
        </>
    );
}

export default Book;
