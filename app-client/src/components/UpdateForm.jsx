import "./Component.css";
import { useRef } from "react";
import axios from "axios";
const UpdateForm = () => {
      const title = useRef();
      const author = useRef();
      const year = useRef();
      const bookid = useRef();
    const handleUpdate = async (e) =>
    {
       e.preventDefault();
       const newData = {
          title : title.current.value ,
          author : author.current.value,
          year : year.current.value
       }
       console.log(bookid.current.value);
       await axios.put(`/book/${bookid.current.value}`,newData);
            window.location.reload();
    }
    
    return (
        <>
            <div className='wrapper-form d-flex align-items-center justify-content-center  w-25' id="form-2" style={{ backgroundColor: "#0096FF", height: "100vh" }}>
                <form className='d-flex flex-column justify-content-between h-50 w-75 rounded bg-light' id="updateform" action="" style={{ padding: '10px' }} onSubmit={handleUpdate} >
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" ref={title}/>
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" ref={author}  />
                    <label htmlFor="year">Year</label>
                    <input type='text' name='year' ref={year} />
                    <input style={{display:"none"}} type="text" name="bookid"  ref={bookid}/>
                    <button type="submit" className='btn btn-primary'>Update</button>
                </form>
            </div>
        </>
    );
}

export default UpdateForm;
