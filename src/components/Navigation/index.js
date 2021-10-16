import React, {useEffect} from 'react';
import "./style.css";

function Navigation(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

return (
    <header className="flex-row px-1">
        <h2>
                <a href="/">Bri Cassellius</a>
        </h2>
        <nav>
            <ul className="flex-row">
            {categories.map((category) => (
                <li
                className={`mx-1 ${
                  currentCategory.name === category.name? 'navActive':'hoverable'
                  }`}
                key={category.name}
                >
                    <span
                        onClick={() => {
                            setCurrentCategory(category);
                        }}
                    >
                        {category.name}
                    </span>
                </li>
            ))}
            </ul>
        </nav>
    </header>
  );
}

export default Navigation;


// Title
// About Me - picture and bio (default)
// Portfolio - 6 images with links
// Contact - form for contacting (name, email, message)
// Resume - list and downloadable


// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted

// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted

// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default

// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository

// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message

// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies