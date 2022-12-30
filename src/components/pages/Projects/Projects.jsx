import React from "react";
import Blog1 from "../../../img/blog/tech1.jpg";

const Blogs = () => {
    return (
        <div>
            <h2>Lorem Ipsum</h2>
            <h5>30.02.2025</h5>
            <img src={Blog1} alt="Laptop" />
            <p>
                Integer id libero dapibus, vestibulum purus id, condimentum
                erat. Sed auctor diam ut elit interdum euismod. Proin arcu diam,
                interdum a venenatis in, pulvinar vel justo. Integer viverra
                risus vel faucibus semper. Donec congue eleifend enim vitae
                dapibus. Aliquam erat volutpat. Donec eget leo justo. Proin
                lacus dolor, tempus a mi a, sagittis vulputate nulla. Fusce
                convallis nisi eget ex dignissim laoreet. Donec cursus, ligula
                id elementum dictum, arcu ante blandit nibh, in vehicula nisi
                libero et metus. Nam bibendum, tortor non porttitor viverra,
                augue lorem mollis ante, sed aliquet arcu nibh ut tortor. In
                rhoncus, tortor ut vehicula finibus, tortor justo elementum
                magna, id molestie tellus mi ut turpis.
            </p>
        </div>
    );
};

export default Blogs;
