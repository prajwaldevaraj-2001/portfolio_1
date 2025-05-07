/* Global Styles */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f7fc;
    color: #333;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: #2e3a59;
    color: white;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

header a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
    font-weight: 500;
}

header a:hover {
    text-decoration: underline;
}

/* Hero Section */
.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 50px 50px;
    height: 100vh;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('your-image-path.jpg') no-repeat center center/cover;
    text-align: center;
    color: white;
}

.hero-left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-left img {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.hero-right {
    flex: 2;
    padding-left: 50px;
}

.hero-right h1 {
    font-size: 3rem;
    font-family: 'Playfair Display', serif;
    margin-bottom: 20px;
    font-weight: 600;
}

.hero-right p {
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
}

/* Quote Carousel */
.quotes {
    margin-top: 30px;
    font-size: 1.5rem;
    font-style: italic;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    transition: opacity 1s ease;
}

.quote-slide {
    display: none;
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    margin: 10px;
    max-width: 600px;
}

/* Smooth Transitions and Animations */
.hero-left img {
    transition: transform 1s ease-in-out;
}

.hero-left img:hover {
    transform: scale(1.1);
}

.quotes {
    transition: opacity 2s ease;
}

.hero-right p {
    font-size: 1.2rem;
    font-weight: 300;
}

header a {
    font-size: 16px;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .hero {
        flex-direction: column;
        text-align: center;
    }

    .hero-left {
        margin-bottom: 30px;
    }

    .hero-right h1 {
        font-size: 2rem;
    }
}
