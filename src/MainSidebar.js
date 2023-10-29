import background from './homeScreen.png';

function MainSidebar() {
    return (
        <div style={{'--image-url': `url(${background})`}} className="hidden flex-1 bg-cover bg-bottom justify-center items-center bg-[image:var(--image-url)] md:flex ">
            <div className="p-12 mt-80">
                <p className="slideUp font-bold mb-5 text-5xl text-white">
                    Timeless Taste
                </p>
                <p className="slideUp text-3xl text-white">
                    Get custom-tailored recipes. Enter diet, restrictions, and
                    nutrients to create your perfect recipe for any occasion.
                </p>
            </div>
        </div>
    );
}

export default MainSidebar;