import "./carrosel.css"
export const Carrosel = () => {

    
    return (
        <section className="carousel">
            <ul className="slider">
                <li>
                    <input type="checkbox" name="" id="Slide1" defaultChecked/>
                    <label htmlFor="Slide1"></label>
                    <img src="src/assets/gato-img01.jpg" alt="" id="img1"/>
                </li>
                <li>
                    <input type="checkbox" name="" id="Slide2" />
                    <label htmlFor="Slide2"></label>
                    <img src="src/assets/gato-img02.jpg" alt="" id="img2"/>
                </li>
                <li>
                    <input type="checkbox" name="" id="Slide3" />
                    <label htmlFor="Slide3"></label>
                    <img src="src/assets/gato-img03.jpg" alt="" id="img3"/>
                </li>
            </ul>
        </section>
    )
};  