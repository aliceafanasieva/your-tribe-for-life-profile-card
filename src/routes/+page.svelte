<script>
    
</script>
  
<main class="profile-main">
    <section class="profile-card">
        <img src={'/images/avatar-browser.png'} alt="Alisa" class="profile-image" />
        <p class="insta">@murkiny.glazki</p>
        <h1 class="name">Alisa Afanasieva</h1>
        <p class="kaomoji">☆⌒&#40;ゝ。∂&#41;</p>
        <p class="description">Visual artist, web designer, frontend development student</p>
    </section>
    <button class="read-more">READ MORE ABOUT ME</button>
    <section class="bio-section">
        <h2>Hi! I'm Alisa</h2>
        <p class="bio">
            I am a web designer and artist. I am currently studying frontend development and design in Amsterdam.
            I love fashion, design, art, nature and electronic music. I enjoy making visual content on Instagram.
        </p>
        <p class="contact">
        GET IN TOUCH: <a href="mailto:alice.afanasieva@gmail.com">alice.afanasieva@gmail.com</a>
        </p>
        <div class="social-icons">
            <a href="#"><i class="github-icon"></i></a>
            <a href="#"><i class="instagram-icon"></i></a>
        </div>
    </section>
    <img src="https://img-fotki.yandex.ru/get/987895/37009792.2ed/0_cf85f_684c93dd_orig" alt="flower gif" class="flower-image"/>
</main>
  
<style>

    :root {
    --white:#e2e2e2;
    --black: #1c1c1c;
    --pink: #ff49d4;
    --transition: 0.5s ease-in-out 0.1s;
}

    .profile-main{
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

/* Profile Card */
    .profile-card {
        overflow: hidden;
        width: 50%;
        position: relative;
        margin-top: 10rem;
        margin-bottom: 8rem;
    }

    .profile-image {
        width: 100%;
        height: auto;
        object-fit: cover;
        filter: grayscale(30%);
    }

    .insta, 
    .name, 
    .kaomoji, 
    .description {
        position: absolute;
        color: white;
        text-shadow: 1px 1px 5px var(--black);
    }

    .insta {
        top: 10px;
        left: 10px;
        font-size: 1em;
    }

    .name {
        font-size: 2.5em;
        bottom: 60px;
        left: 20px;
        font-weight: 100;
        text-transform: uppercase;
        letter-spacing: 3px;
    }

    .kaomoji{
        top: 40px;
        left: 15px;
        font-size: 1.2em;
    }

    .description{
        bottom: 30px;
        left: 20px;
        font-size: 1em;
    }

/* Button */
    .read-more {
        border: none;
        background-color: transparent;
        color: var(--black);
        font-size: 1.1em;
        cursor: pointer;
        margin-bottom: 5em;
    }

    .read-more:hover {
        text-decoration: line-through;
    }

/* About Section */
    .bio-section {
        margin-top: 10rem;
        padding: 2em;
        position: relative;
        width: 50%;
    }

    .bio-section h2 {
        font-family: 'Times New Roman', Times, serif;
        font-style: italic;
        font-size: 3em;
        margin-bottom: 1em;
        font-weight: 100;
    }

    .bio-section::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(255, 98, 197, 0.791), rgba(255, 17, 168, 0) 70%);
    border-radius: 50%;
    z-index: -1; 
    pointer-events: none; 
}

    .bio {
        font-size: 1em;
        margin-bottom: 1em;
        color: #000000;
    }

    .contact {
        font-size: 1em;
        margin-bottom: 1.5em;
    }

    .contact a {
        color: black;
        text-decoration: none;
    }

    /* Social Icons */
    .social-icons {
        display: flex;
        justify-content: center;
        gap: 1em;
    }

    .social-icons a {
        text-decoration: none;
        font-size: 1.5em;
        color: #333;
        transition: color 0.3s ease;
    }

    .social-icons a:hover {
        color:  #ff49d4;
    }


    /* Flower Image */
    .flower-image {
        position: relative;
        right: -300px;
        width: 300px;
        bottom: -10px;
        height: auto;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .profile-card {
            width: 90%;
        }

        .flower-image {
            width: 200px;
            bottom: -30px;
        }

        .insta {
            font-size: 0.8em;
            top: 5px;
            left: 5px;
        }

        .name {
            font-size: 1.8em;
            bottom: 40px;
            left: 10px;
        }

        .kaomoji {
            font-size: 1em;
            top: 20px;
            left: 10px;
        }

        .description {
            font-size: 0.9em;
            bottom: 20px;
            left: 10px;
        }
    }

</style>
  