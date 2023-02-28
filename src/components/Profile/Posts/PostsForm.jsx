import posts from './Posts.module.css'
import {Field, Form, Formik} from "formik";
import {addPostAC} from "../../../redux/reducerProfile";


const PostsForm = (props) => {

    let currentTextPost = {
        text: '',
    }

    let addPost = (currentTextPost) => {
        props.addPostAC(currentTextPost.text)
    }

    return (
        <div>
            <Formik
                initialValues={currentTextPost}
                onSubmit={addPost}>
                <Form>
                    <div className={posts.formWrapper}>
                        <div className={posts.inputBlock}>
                            <label htmlFor="textInput"></label>
                            <Field id="textInput"
                                   name="text"
                                   placeholder="Enter you post"
                                   className={posts.input} />
                        </div>
                        <div className={posts.buttonBlock}>
                            <button type="submit" className={posts.button}>Send</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default PostsForm;
