

function loadContent(section) {
  const contentArea = document.getElementById("content-area");
  let content = "";

  switch (section) {
    case "About Me":
      content = ` 
                <style>
                    .about-me {
                        padding: 20px;
                        background-color: #f9f9f9;
                        border: 1px solid #ddd;
                        border-radius: 8px;
                        max-width: 800px;
                        margin: 0 auto;
                    }
                    .about-me h2 {
                        color: #333;
                        text-align: center;
                        font-size: 2em;
                    }
                    .about-me p {
                        line-height: 1.6;
                        color: #555;
                        font-size: 1.1em;
                    }
                        ol{
                        padding:10px;
                        }
                     li{
                        padding:5px;      
                     }   
                </style>
                <div class="about-me">
                    <h2>Hello!</h2>
                    <p>I’m <b>SWAPNIL KAMBLE,</b> a passionate BCA student from Solapur, Maharashtra. I’m currently in my second year, focusing on expanding my knowledge in programming and web development. With a keen interest in learning new skills and tackling new challenges, I’ve been dedicated to creating educational tools that help others understand complex concepts.</p><BR>
                    <H3>Purpose of This Website</h3>
                    <br>
                   <p> This website aims to bridge the gap between theoretical knowledge and practical application in HTML and web development. It provides an interactive and engaging platform for learners to:</p><br>
                    <ol>
                   <li> <b>Understand HTML:</b> Offer clear explanations and examples of HTML tags, attributes, and document structure.</li>
                    <br>
                    <li><b>Practice Skills:</b> Allow users to experiment with HTML code and see real-time results.</li>
                    <br>
                    <li><b>Reinforce Learning:</b> Include quizzes and simulations to test and solidify understanding.</li>
                    <br>
                    <p>By combining practical tools with educational content, this website helps students gain hands-on experience and build essential web development skills.</p>
                    <hr>
                    <br> 
                  <b>  <p>Thank you for visiting my website. I hope you find it helpful and informative!</p></b>
                </div>
                <br>`;
      break;

    case "theory":
      content = `
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                           
                        }
                        h2 {
                            color: #2c3e50;
                            border-bottom: 2px solid #3498db;
                            padding-bottom: 10px;
                            margin-bottom: 20px;
                        }
                        h3 {
                            color: #2980b9;
                            margin-top: 20px;
                            margin-bottom: 10px;
                        }
                        ul.inline-list {
                            padding: 0;
                            margin: 0;
                            list-style-type: none;
                            display: flex;
                            flex-wrap: wrap;
                            gap: 20px;
                        }
                        ul.inline-list li {
                            padding: 10px;
                            background-color: #ecf0f1;
                            border: 1px solid #bdc3c7;
                            border-radius: 4px;
                            max-width: 300px; /* Restrict width for better alignment */
                        }
                        img {
                            max-width: 80%;
                            height: 805;
                            border: 1px solid #bdc3c7;
                            border-radius: 4px;
                            margin-top: 20px;
                        }
                        p {
                            margin-top: 10px;
                            margin-bottom: 20px;
                        }
                    </style>
                    <h2>Theory</h2>
                    <p>HTML (Hypertext Markup Language) is the standard language used to create and design web pages. It serves as the backbone of web development by providing a way to structure and display content on the internet. HTML is essential for defining the layout, formatting, and elements of web pages, making it possible to build everything from simple static sites to complex web applications.</p>
                    
                    <h3>Key Concepts of HTML</h3>
                    <ul class="inline-list">
                        <li><strong>Markup Language:</strong> HTML uses tags to describe the structure and format of content. Tags are enclosed in angle brackets, such as &lt;tag&gt;.</li>
                        <li><strong>Elements and Tags:</strong> HTML documents are made up of elements, each consisting of an opening tag, content, and a closing tag. For example, &lt;p&gt;This is a paragraph.&lt;/p&gt; defines a paragraph element.</li>
                        <li><strong>Attributes:</strong> HTML tags can include attributes that provide additional information about an element. For instance, &lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt; uses the href attribute to define the URL of a hyperlink.</li>
                    </ul>
                    
                    <h3>Document Structure</h3>
                    <ul class="inline-list">
                        <li><strong>&lt;!DOCTYPE html&gt;:</strong> Declares the document type and version of HTML.</li>
                        <li><strong>&lt;html&gt;:</strong> The root element of the document.</li>
                        <li><strong>&lt;head&gt;:</strong> Contains meta-information about the document, such as the title and link to stylesheets.</li>
                        <li><strong>&lt;body&gt;:</strong> Contains the main content of the page, including headings, paragraphs, images, and other elements.</li>
                    </ul>
                    
                    <h3>Example Program</h3>
                    <img src="../images/Snap.png" alt="Example Program" />
                    
                    <h3>Conclusion</h3>
                    <p>HTML is a foundational technology for web development, allowing developers to create structured, accessible, and interactive web pages.</p>
                    <br>
                    <br>
                    <hr>
                    <br>
                `;
      break;

    case "pretest":
      content = `
                        <h2>Pretest</h2>
                        <br>
                        <form id="quiz-form">
                            <div class="quiz-question">
                                <p><strong>1. What does HTML stand for?</strong></p><br>
                                <label><input type="radio" name="q1" value="a">  Hyperlink and Text Markup Language</label><br><br>
                                <label><input type="radio" name="q1" value="b"> Hightext Markup Language</label><br><br>
                                <label><input type="radio" name="q1" value="c"> Hypertext Markup Language</label><br><br>
                                <label><input type="radio" name="q1" value="d"> Hypertext Multi Language</label><br><br>
                            </div>
                            <div class="quiz-question">
                                <p><strong>2. Which HTML tag is used to define an internal style sheet?</strong></p><br>
                                <label><input type="radio" name="q2" value="a"> &lt;style&gt;</label><br><br>
                                <label><input type="radio" name="q2" value="b"> &lt;css &gt;</label><br><br>
                                <label><input type="radio" name="q2" value="c"> &lt;script&gt;</label><br><br>
                                <label><input type="radio" name="q2" value="d"> &lt;head&gt;</label><br><br>
                            </div>
                            <div class="quiz-question">
                                <p><strong>3. What is the correct HTML element for inserting a line break?</strong></p><br>
                                <label><input type="radio" name="q3" value="a"> &lt;break&gt;</label><br><br>
                                <label><input type="radio" name="q3" value="b"> &lt;lb&gt;</label><br><br>
                                <label><input type="radio" name="q3" value="c"> &lt;br&gt;</label><br><br>
                                <label><input type="radio" name="q3" value="d"> &lt;line&gt;</label><br><br>
                            </div>
                            <div class="quiz-question">
                                <p><strong>4. Which attribute is used to specify a unique identifier for an HTML element?</strong></p><br>
                                <label><input type="radio" name="q4" value="a"> class</label><br><br>
                                <label><input type="radio" name="q4" value="b"> id</label><br><br>
                                <label><input type="radio" name="q4" value="c"> style</label><br><br>
                                <label><input type="radio" name="q4" value="d"> key</label><br><br>
                            </div>
                            <div class="quiz-question">
                                <p><strong>5. What does the &lt;a&gt; tag do in HTML?</strong></p><br>
                                <label><input type="radio" name="q5" value="a"> Creates a table</label><br><br>
                                <label><input type="radio" name="q5" value="b"> Creates a paragraph</label><br><br>
                                <label><input type="radio" name="q5" value="c"> Creates an image</label><br><br>
                                <label><input type="radio" name="q5" value="d"> Creates a link to another web page</label><br><br>
                            </div>
                            <input type="button" value="Submit" onclick="submitQuiz()" style="display: block; margin: 20px auto; padding: 15px 30px; font-size: 18px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; transition: background-color 0.3s ease;">
                            <div id="result" style="text-align: center; margin-top: 30px;"></div>
                            <hr>
                            <br>
                        </form>`;
      break;

    case "procedure":
      content = `<div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin: 20px 0; max-width: 800px; width: 90%;">
    <h1 style="color: #333333; font-size: 2rem; margin-bottom: 20px; text-align: center; font-family: Arial, sans-serif;">Procedure Steps for the Simulator</h1>
    
    <div style="display: flex; align-items: center; margin-bottom: 15px; background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #007bff;">
        <div style="background-color: #007bff; color: #ffffff; font-size: 1.2rem; font-weight: bold; padding: 8px 16px; border-radius: 50%; margin-right: 15px;">1</div>
        <div>
            <strong style="color: #333333; font-size: 1.1rem;">Read the Simulator Details:</strong>
            <p style="color: #666666; margin: 5px 0 0; font-size: 0.9rem;">Review the provided information to understand the purpose and functionality of the simulator.</p>
        </div>
    </div>

    <div style="display: flex; align-items: center; margin-bottom: 15px; background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #28a745;">
        <div style="background-color: #28a745; color: #ffffff; font-size: 1.2rem; font-weight: bold; padding: 8px 16px; border-radius: 50%; margin-right: 15px;">2</div>
        <div>
            <strong style="color: #333333; font-size: 1.1rem;">Enter the HTML Tag:</strong>
            <p style="color: #666666; margin: 5px 0 0; font-size: 0.9rem;">Input the HTML tag you wish to explore and operate with in the simulator.</p>
        </div>
    </div>

    <div style="display: flex; align-items: center; margin-bottom: 15px; background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #ffc107;">
        <div style="background-color: #ffc107; color: #ffffff; font-size: 1.2rem; font-weight: bold; padding: 8px 16px; border-radius: 50%; margin-right: 15px;">3</div>
        <div>
            <strong style="color: #333333; font-size: 1.1rem;">Press NEXT to Execute the Code:</strong>
            <p style="color: #666666; margin: 5px 0 0; font-size: 0.9rem;">The relevant line in the code will be highlighted to visually indicate its execution.</p>
        </div>
    </div>
</div>
`;
      break;

    case "simulation":
      content = `
                <h2 style="color: #2c3e50; font-family: Arial, sans-serif;">SIMULATION:</h2>
                <hr style="border: 1px solid #3498db;">
                <br>
                <h4 style="font-family: Arial, sans-serif;">Simulation in web development involves creating interactive models or environments that replicate real-world scenarios for testing, education, or experimentation. Here’s how simulation applies:</h4>
                <br>
                <ol type="1" style="font-family: Arial, sans-serif;">
                    <li><strong>Interactive Learning:</strong></li>
                    <p>Allows users to experiment with different HTML tags and see how they affect the rendering of text in real-time. This hands-on experience helps users understand the impact of various HTML elements without needing to write or edit actual code.</p><br>
                    
                    <li><strong>Visualization of Changes:</strong></li>
                    <p>Simulates the effect of applying different HTML tags to text, demonstrating how the content would appear on a live webpage. This visual feedback helps users grasp the role of each tag in structuring and formatting content.</p><br>
                    
                    <li><strong>Educational Tool:</strong></li>
                    <p>Provides a practical learning experience, allowing users to explore HTML tags and their usage in a controlled setting. This approach enhances understanding by bridging theoretical knowledge with practical application.</p>
                </ol>
                <br>
                <hr style="border: 1px solid #3498db;">
                <!--<h1 style="font-family: Arial, sans-serif; color: #e74c3c;">HTML Tag Converter</h1>--><br>
                 <h3><a href="../demo/home.html" style="text-decoration: none; color: #2980b9; font-family: Arial, sans-serif; font-weight: bold;">Click to View HTML Tag Examples</a></h3>
                `;
      break;

    case "posttest":
      content = `
                        <h2>Posttest</h2>
                        <br>
                        <form id="posttest-form">
                            <div class="quiz-question">
                                <p><strong>1. Which of the following is the correct way to create an HTML comment?</strong></p><br>
                                <label><input type="radio" name="q1" value="a"> &lt;-- This is a comment --&gt;</label><br><br>
                                <label><input type="radio" name="q1" value="b"> &lt;!-- This is a comment --&gt;</label><br><br>
                                <label><input type="radio" name="q1" value="c"> &lt;comment&gt;This is a comment&lt;/comment&gt;</label><br><br>
                                <label><input type="radio" name="q1" value="d"> &lt;// This is a comment --&gt;</label><br><br>
                            </div>
                            <div class="quiz-question">
                                <p><strong>2. What is the purpose of the &lt;meta&gt; tag in HTML?</strong></p><br>
                                <label><input type="radio" name="q2" value="a"> To add metadata about the HTML document</label><br><br>
                                <label><input type="radio" name="q2" value="b"> To link an external stylesheet</label><br><br>
                                <label><input type="radio" name="q2" value="c"> To create a navigation bar</label><br><br>
                                <label><input type="radio" name="q2" value="d"> To display an image</label><br><br>
                            </div>
                            <div class="quiz-question">
                                <p><strong>3. Which of the following is not an HTML tag?</strong></p><br>
                                <label><input type="radio" name="q3" value="a"> &lt;p&gt;</label><br><br>
                                <label><input type="radio" name="q3" value="b"> &lt;div&gt;</label><br><br>
                                <label><input type="radio" name="q3" value="c"> &lt;span&gt;</label><br><br>
                                <label><input type="radio" name="q3" value="d"> &lt;bold&gt;</label><br><br>
                            </div>
                            <div class="quiz-question">
                                <p><strong>4. Which HTML element is used to create an ordered list?</strong></p><br>
                                <label><input type="radio" name="q4" value="a"> &lt;ul&gt;</label><br><br>
                                <label><input type="radio" name="q4" value="b"> &lt;ol&gt;</label><br><br>
                                <label><input type="radio" name="q4" value="c"> &lt;li&gt;</label><br><br>
                                <label><input type="radio" name="q4" value="d"> &lt;dl&gt;</label><br><br>
                            </div>
                            <div class="quiz-question">
                                <p><strong>5. What does the &lt;img&gt; tag do in HTML?</strong></p><br>
                                <label><input type="radio" name="q5" value="a"> Embeds an image in the page</label><br><br>
                                <label><input type="radio" name="q5" value="b"> Embeds a video in the page</label><br><br>
                                <label><input type="radio" name="q5" value="c"> Embeds a link in the page</label><br><br>
                                <label><input type="radio" name="q5" value="d"> Embeds audio in the page</label><br><br>
                            </div>
                            <input type="button" value="Submit" onclick="submitPostTest()" style="display: block; margin: 20px auto; padding: 15px 30px; font-size: 18px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; transition: background-color 0.3s ease;">
                
                            <div id="posttest-result"></div>
                        </form>`;
      break;
    case "references":
      content = `
                <h2>References</h2>
                <br>
              <video width="800" height="360" autoplay muted loop>
              <source src="../images/mozilla.mp4" type="video/mp4">
              </video>
              <H2> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">See more on the Mozilla site. Click here!</A></H2>
            `;
      break;

    case "feedback":
      content = `
                <h2>Feedback</h2>
                <h3>Dear User,</h3><br>
                <p>Thanks for using Virtual Labs. Your opinion is valuable to us. To help us improve, we'd like to ask you a few questions about your experience. It will only take 3 minutes and your answers will help us make Virtual Labs better for you and other users.</p><br><br><hr><br><br>
                <h2><a href="../TAG/feedback.html">SHARE YOUR Feedback HERE</a></h2><br>
                <h4>Thanks for your time !
                The Virtual Labs Team</h4>
                  
            `;
      break;
    default:
      content = `
                <h2>Welcome to HTML Operations Lab</h2>
                <p>Select an option from the sidebar to view the content.</p>
            `;
  }

  contentArea.innerHTML = content;
}

function submitQuiz() {
  let score = 0;
  const quizForm = document.getElementById("quiz-form");
  const formData = new FormData(quizForm);

  const answers = {
    q1: "c",
    q2: "a",
    q3: "c",
    q4: "b",
    q5: "d",
  };

  for (const [question, answer] of Object.entries(answers)) {
    if (formData.get(question) === answer) {
      score++;
    }
  }

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `<h3>Your Score: ${score}/5</h3>`;

  if (score === 5) {
    resultElement.innerHTML += `<p>Excellent! You have a strong understanding of HTML basics.</p>`;
  } else if (score >= 3) {
    resultElement.innerHTML += `<p>Good job! You have a good understanding, but there's room for improvement.</p>`;
  } else {
    resultElement.innerHTML += `<p>Keep practicing! Review the material and try the quiz again.</p>`;
  }
  if (score === 5) {
    resultElement.innerHTML += `<p style="font-size: 18px; font-weight: bold; color: #4CAF50;">Excellent! You have mastered the HTML basics.</p>`;
  } else if (score >= 3) {
    resultElement.innerHTML += `<p style="font-size: 18px; font-weight: bold; color: #FF9800;">Good job! You've got a solid understanding, but keep refining your skills.</p>`;
  } else {
    resultElement.innerHTML += `<p style="font-size: 18px; font-weight: bold; color: #F44336;">Keep practicing! Review the concepts and try the quiz again.</p>`;
  }

  resultElement.style.padding = "20px";
  resultElement.style.borderRadius = "8px";
  resultElement.style.border = "2px solid #ddd";
  resultElement.style.backgroundColor = "#f4f4f4";
  resultElement.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
  resultElement.style.marginTop = "20px";
  resultElement.style.textAlign = "center";
  resultElement.style.fontFamily = "'Arial', sans-serif";
}

function submitPostTest() {
  let postScore = 0;
  const postTestForm = document.getElementById("posttest-form");
  const postFormData = new FormData(postTestForm);

  const postAnswers = {
    q1: "b",
    q2: "a",
    q3: "d",
    q4: "b",
    q5: "a",
  };

  for (const [question, answer] of Object.entries(postAnswers)) {
    if (postFormData.get(question) === answer) {
      postScore++;
    }
  }

  const postResultElement = document.getElementById("posttest-result");
  postResultElement.innerHTML = `<h3>Your Score: ${postScore}/5</h3>`;

  if (postScore === 5) {
    postResultElement.innerHTML += `<p style="font-size: 18px; font-weight: bold; color: #4CAF50;">Excellent! You have mastered the HTML Advance.</p>`;
  } else if (postScore >= 3) {
    postResultElement.innerHTML += `<p style="font-size: 18px; font-weight: bold; color: #FF9800;">Good job! You've got a solid understanding, but keep refining your skills.</p>`;
  } else {
    postResultElement.innerHTML += `<p style="font-size: 18px; font-weight: bold; color: #F44336;">Keep practicing! Review the concepts and try the quiz again.</p>`;
  }

  postResultElement.style.padding = "20px";
  postResultElement.style.borderRadius = "8px";
  postResultElement.style.border = "2px solid #ddd";
  postResultElement.style.backgroundColor = "#f4f4f4";
  postResultElement.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
  postResultElement.style.marginTop = "20px";
  postResultElement.style.textAlign = "center";
  postResultElement.style.fontFamily = "'Arial', sans-serif";
}
