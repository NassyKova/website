import './App.css';

function App() {
  return (
    <>
        {/* <!-- font --> */}
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Smooch&family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>

    <p>Well</p>
        <header>
            {/* <!-- social links --> */}
    <div class="nav-social">
        <a href="https://github.com/purplebus">
            <img src="img/logos/GitHub-Mark-64px.png" alt="GitHub"/>
        </a>
        <a href="https://www.linkedin.com/in/nassykova/">
            <img src="./img/logos/linkedin-64.png" alt="LinkedIn"/>
        </a>
    </div>
        <h1 class="heading">Nassy Kova</h1>

    {/* <!-- navigation --> */}
    <nav class="menu">
        {/* <!-- HERE!!! --> */}
        <label input type="checkbox" id ="checkbox-toggle"></label>
        <label for="checkbox-toggle">&#9781;</label>
        
        <div class="menu-items">
        <ul>
            <li class="current-link">About Me</li>
            <li><a href="./blog.html">Blog</a></li>
            <li><a href="./cv.html">CV</a></li>
            <li><a href="./contact.html">Contact</a></li>
        </ul>
    </div>
    </nav>

    </header>
    {/* // <!-- page content --> */}
<section class="about-box">
    <section>
        <img class="head-image" src="./img/main_photo.JPG" alt=""/>
    </section>

    {/* <p>
        I am (almost) a Full Stuck Developer based in Melbourne. 
        <br>Before coding, I worked in animation industry as a 2D Rigger on different <a id="link" href="https://www.imdb.com/name/nm9663771/">animation series</a>.</br>
        <br>I like art, innovation, development, logic and sence.</br>
    </p> */}
</section>
{/* <!-- copyright --> */}
    <footer>
        <p>&copy; Anastasia Dyakova</p>
    </footer>
</>
  );
}

export default App;
